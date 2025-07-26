import React from 'react';
import { BarChart2, TrendingUp, PieChart, AlertTriangle, Clock, Filter } from 'lucide-react';

const analyticsFeatures = [
  {
    name: 'Advanced Metrics',
    description: 'Track user engagement, revenue, churn rate, and other critical SaaS metrics in one place.',
    icon: BarChart2,
  },
  {
    name: 'Trend Analysis',
    description: 'Identify patterns and trends in your data to make informed business decisions.',
    icon: TrendingUp,
  },
  {
    name: 'Segmentation',
    description: 'Segment your data by user type, plan, geography, or any custom attribute.',
    icon: PieChart,
  },
  {
    name: 'Anomaly Detection',
    description: 'Get alerted when metrics deviate significantly from normal patterns.',
    icon: AlertTriangle,
  },
  {
    name: 'Historical Data',
    description: 'Access and analyze historical data to understand your business growth over time.',
    icon: Clock,
  },
  {
    name: 'Custom Filters',
    description: 'Create custom filters and views to focus on the data that matters most to you.',
    icon: Filter,
  },
];

const Analytics = () => {
  return (
    <div id="analytics" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Analytics</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Make data-driven decisions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AllInfo provides powerful analytics tools to help you understand your SaaS metrics and make informed decisions.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {analyticsFeatures.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 bg-gradient-to-r from-indigo-600 to-purple-600">
            <h3 className="text-2xl font-bold text-white">Analytics in action</h3>
            <p className="mt-2 text-indigo-100">
              See how AllInfo's analytics can transform your understanding of your SaaS business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h4 className="text-lg font-medium text-gray-900">Before AllInfo</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Scattered data across multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Delayed awareness of critical events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Manual data collection and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited visibility into user behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Reactive approach to business issues</span>
                </li>
              </ul>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium text-gray-900">With AllInfo</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Centralized dashboard for all metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time notifications for important events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automated data collection and visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Deep insights into user engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Proactive identification of opportunities</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50">
              <h4 className="text-lg font-medium text-gray-900">The Results</h4>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-2xl font-bold text-indigo-600">32%</p>
                  <p className="text-sm text-gray-500">Increase in customer retention</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-600">45%</p>
                  <p className="text-sm text-gray-500">Faster response to critical events</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-600">28%</p>
                  <p className="text-sm text-gray-500">Growth in monthly recurring revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;