import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
import Result "mo:base/Result";
import Error "mo:base/Error";
import Option "mo:base/Option";
import Time "mo:base/Time";
import Nat16 "mo:base/Nat16";

actor BusinessMetrics {
  // Define metric types
  type MetricType = { #Sales; #Users; #Funding };

  // Define a metric
  type Metric = {
    metricType : MetricType;
    value : Nat;
    timestamp : Nat;
  };

  // Define a business
  type Business = {
    id : Text;
    name : Text;
    metrics : [Metric];
  };

  // Store businesses in TrieMap
  let businesses = TrieMap.TrieMap<Text, Business>(Text.equal, Text.hash);

  // Add a new business
  public func addBusiness(id : Text, name : Text) : async Result.Result<(), Text> {
    if (businesses.get(id) != null) {
      return #err("Business ID already exists");
    };
    let business : Business = { id = id; name = name; metrics = [] };
    businesses.put(id, business);
    Debug.print("Business added: " # name);
    return #ok(());
  };

  // Add a metric to a business
  public func addMetric(businessId : Text, metricType : MetricType, value : Nat, timestamp : Nat) : async Result.Result<(), Text> {
    switch (businesses.get(businessId)) {
      case (?business) {
        // Validate timestamp (ensure it's not in the future)
        let currentTime = Time.now() / 1_000_000_000; // Convert nanoseconds to seconds
        if (timestamp > currentTime) {
          return #err("Invalid timestamp: timestamp cannot be in the future");
        };

        // Validate value (ensure it's non-negative)
        if (value < 0) {
          return #err("Invalid value: value must be non-negative");
        };

        let newMetric : Metric = { metricType = metricType; value = value; timestamp = timestamp };
        let updatedMetrics = Array.append(business.metrics, [newMetric]);
        let updatedBusiness : Business = { id = business.id; name = business.name; metrics = updatedMetrics };
        businesses.put(businessId, updatedBusiness);
        Debug.print("Metric added to business: " # business.name);
        return #ok(());
      };
      case null {
        return #err("Business not found");
      };
    };
  };

  // Get all metrics for a business (with pagination)
  public query func getMetrics(businessId : Text, start : Nat, limit : Nat) : async [Metric] {
    switch (businesses.get(businessId)) {
      case (?business) {
        let metricsSize = business.metrics.size();
        if (start >= metricsSize) {
          return []; // Return empty array if start is out of bounds
        };

        // Calculate the end index (ensure it doesn't exceed the array size)
        let end = Nat.min(start + limit, metricsSize);

        // Create a new array for the slice
        Array.tabulate<Metric>(end - start, func(i) {
          business.metrics[start + i];
        });
      };
      case null { [] };
    };
  };

  // Get all businesses
  public query func getBusinesses() : async [Business] {
    Iter.toArray(businesses.vals());
  };

  // Delete a business
  public func deleteBusiness(businessId : Text) : async Result.Result<(), Text> {
    if (businesses.remove(businessId) == null) {
      return #err("Business not found");
    };
    Debug.print("Business deleted: " # businessId);
    return #ok(());
  };

  // Update a business name
  public func updateBusiness(businessId : Text, newName : Text) : async Result.Result<(), Text> {
    switch (businesses.get(businessId)) {
      case (?business) {
        let updatedBusiness : Business = { id = business.id; name = newName; metrics = business.metrics };
        businesses.put(businessId, updatedBusiness);
        Debug.print("Business updated: " # newName);
        return #ok(());
      };
      case null {
        return #err("Business not found");
      };
    };
  };

  // Filter metrics by type
  public query func getMetricsByType(businessId : Text, metricType : MetricType) : async [Metric] {
    switch (businesses.get(businessId)) {
      case (?business) {
        Array.filter(business.metrics, func(metric : Metric) : Bool { metric.metricType == metricType });
      };
      case null { [] };
    };
  };

  // Bulk add metrics
  public func addMetrics(businessId : Text, newMetrics : [Metric]) : async Result.Result<(), Text> {
    switch (businesses.get(businessId)) {
      case (?business) {
        let updatedMetrics = Array.append(business.metrics, newMetrics);
        let updatedBusiness : Business = { id = business.id; name = business.name; metrics = updatedMetrics };
        businesses.put(businessId, updatedBusiness);
        Debug.print("Metrics added to business: " # business.name);
        return #ok(());
      };
      case null {
        return #err("Business not found");
      };
    };
  };

  // Convert Metric to JSON
  func metricToJson(metric : Metric) : Text {
    let metricTypeStr = switch (metric.metricType) {
      case (#Sales) { "Sales" };
      case (#Users) { "Users" };
      case (#Funding) { "Funding" };
    };
    "{ \"metricType\": \"" # metricTypeStr # "\", \"value\": " # Nat.toText(metric.value) # ", \"timestamp\": " # Nat.toText(metric.timestamp) # " }"
  };

  // Convert an array of metrics to a JSON array string
  func metricsToJson(metrics : [Metric]) : Text {
    if (metrics.size() == 0) {
      return "[]"; // Return empty array if no metrics
    };

    // Use Array.foldLeft to build the JSON string
    let jsonMetrics = Array.foldLeft<Metric, Text>(
      metrics,
      "",
      func(acc : Text, metric : Metric) : Text {
        let metricJson = metricToJson(metric);
        if (acc == "") {
          metricJson; // First metric, no comma needed
        } else {
          acc # ", " # metricJson; // Append comma and metric JSON
        };
      }
    );

    // Wrap the metrics in square brackets
    "[" # jsonMetrics # "]";
  };

  // Convert Business to JSON
  func businessToJson(business : Business) : Text {
    let metricsJson = metricsToJson(business.metrics);
    "{ \"businessId\": \"" # business.id # "\", \"name\": \"" # business.name # "\", \"metrics\": " # metricsJson # " }"
  };

  // Define HTTP request & response types
  type HttpRequest = {
    url : Text;
    method : Text;
    headers : [(Text, Text)];
    body : Blob;
  };

  type HttpResponse = {
    status_code : Nat16;
    headers : [(Text, Text)];
    body : Blob;
  };

  // Management Canister for HTTP requests
  let ic : actor {
    http_request : HttpRequest -> async HttpResponse;
  } = actor ("aaaaa-aa");

  // Send data to an external platform
  public func sendDataToPlatform(url : Text, data : Text) : async Result.Result<Text, Text> {
    let request : HttpRequest = {
      method = "POST";
      url = url;
      headers = [("Content-Type", "application/json")];
      body = Text.encodeUtf8(data);
    };

    try {
      let response : HttpResponse = await ic.http_request(request);

      // Check for HTTP errors
      if (response.status_code >= 400) {
        return #err("HTTP Error: " # Nat16.toText(response.status_code));
      };

      let responseBody = switch (Text.decodeUtf8(response.body)) {
        case (null) { "Non-UTF-8 response" };
        case (?text) { text };
      };
      return #ok(responseBody);
    } catch (e) {
      return #err("Error: " # Error.message(e));
    };
  };

  // Trigger a webhook
  public func triggerWebhook(businessId : Text, webhookUrl : Text) : async Result.Result<Text, Text> {
    switch (businesses.get(businessId)) {
      case (?business) {
        let businessJson = businessToJson(business);
        return await sendDataToPlatform(webhookUrl, businessJson);
      };
      case null {
        return #err("Business not found");
      };
    };
  };

  // Check external platform connectivity
  public func getIntegrationStatus(platformUrl : Text) : async Result.Result<Text, Text> {
    let request : HttpRequest = {
      method = "GET";
      url = platformUrl;
      headers = [];
      body = Text.encodeUtf8("");
    };

    try {
      let response : HttpResponse = await ic.http_request(request);
      let responseBody = switch (Text.decodeUtf8(response.body)) {
        case (null) { "Non-UTF-8 response" };
        case (?text) { text };
      };
      return #ok("Connected successfully: " # responseBody);
    } catch (e) {
      return #err("Integration failed: " # Error.message(e));
    };
  };

  // Send business metrics to external integration
  public func sendMetricsToIntegration(businessId : Text, integrationUrl : Text) : async Result.Result<Text, Text> {
    return await triggerWebhook(businessId, integrationUrl);
  };
};