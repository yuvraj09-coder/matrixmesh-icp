import React from 'react';
import { Sliders, Palette, Layout, Bell, MessageSquare, Code } from 'lucide-react';

const Customization = () => {
  return (
    <div id="customization" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Customization</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Make AllInfo your own
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Tailor AllInfo to match your brand and workflow with our extensive customization options.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Personalize your notifications
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Create notification templates that match your brand identity and provide exactly the information your team needs.
              </p>

              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Palette className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Brand colors</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Apply your brand colors to notification embeds and dashboard elements.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Layout className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Custom layouts</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Design notification layouts that highlight the most important information for your team.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Sliders className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Notification settings</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Control which events trigger notifications and who receives them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-4 bg-gray-800 flex items-center">
                  <Bell className="h-5 w-5 text-indigo-400 mr-2" />
                  <span className="text-white font-medium">Notification Preview</span>
                </div>
                <div className="p-6">
                  <div className="bg-white rounded-lg border-l-4 border-indigo-500 shadow-md p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">New Customer Signup</h4>
                        <p className="text-sm text-gray-600 mt-1">John Smith (john@example.com) just signed up for the Pro plan!</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">New</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
                      <span>2 minutes ago</span>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800">View Details</button>
                        <button className="text-gray-500 hover:text-gray-700">Dismiss</button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border-l-4 border-green-500 shadow-md p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">Payment Received</h4>
                        <p className="text-sm text-gray-600 mt-1">$99.00 payment received from TechCorp Inc.</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Payment</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
                      <span>15 minutes ago</span>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800">View Invoice</button>
                        <button className="text-gray-500 hover:text-gray-700">Dismiss</button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border-l-4 border-yellow-500 shadow-md p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">Subscription Renewal</h4>
                        <p className="text-sm text-gray-600 mt-1">DevTeam Plus subscription will renew in 3 days.</p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Reminder</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
                      <span>1 hour ago</span>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800">Manage Subscription</button>
                        <button className="text-gray-500 hover:text-gray-700">Dismiss</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-extrabold text-center text-gray-900 tracking-tight sm:text-3xl mb-8">
            Advanced customization options
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600 mr-3" />
                <h4 className="text-lg font-medium text-gray-900">Custom Message Templates</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Create reusable message templates with dynamic variables that automatically populate with relevant data.
              </p>
              <pre className="bg-white p-3 rounded text-sm text-gray-800 overflow-x-auto">
                {`await fetch("https://all-info-by-ujjwalsinha.vercel.app/api/v1/events", {
    method: "POST",
    body: JSON.stringify({
      category: "sale",
      fields: {
        plan: "PRO",
        email: "ujjwalsinha418@email.com",
        amount: 49.00
      }
    }),
    headers: {
      Authorization: "Bearer <YOUR_API_KEY>"
    }
  })`}
              </pre>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-indigo-600 mr-3" />
                <h4 className="text-lg font-medium text-gray-900">Webhook Customization</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Configure custom webhooks to send data from your application to AllInfo with complete control over the payload structure.
              </p>
              <pre className="bg-white p-3 rounded text-sm text-gray-800 overflow-x-auto">
                {`await fetch('https://all-info-by-ujjwalsinha.vercel.app//api/events', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    category: 'sales',
    fields: {
      field1: 'value1', // for example: user id
      field2: 'value2' // for example: user email
    }
  })
})`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;