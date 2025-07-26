import React from 'react';
import { LineChart, BarChart, PieChart, Activity, Users, DollarSign, TrendingUp } from 'lucide-react';

const Demo = () => {
  return (
    <div id="dashboard" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Dashboard</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Powerful analytics at your fingertips
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Beyond Discord notifications, AllInfo provides a comprehensive dashboard to visualize your SaaS metrics.
          </p>
        </div>

        <div className="relative">
          {/* Dashboard Preview */}
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm">AllInfo Dashboard</div>
              <div></div>
            </div>
            
            <div className="p-6">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-white">SaaS Analytics Overview</h3>
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">Last 30 days</div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">New Users</p>
                      <p className="text-2xl font-bold text-white">1,482</p>
                    </div>
                    <Users className="h-10 w-10 text-indigo-400" />
                  </div>
                  <div className="mt-2 flex items-center text-green-400 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+12.5% from last month</span>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Revenue</p>
                      <p className="text-2xl font-bold text-white">$24,835</p>
                    </div>
                    <DollarSign className="h-10 w-10 text-indigo-400" />
                  </div>
                  <div className="mt-2 flex items-center text-green-400 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+18.2% from last month</span>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Users</p>
                      <p className="text-2xl font-bold text-white">8,294</p>
                    </div>
                    <Activity className="h-10 w-10 text-indigo-400" />
                  </div>
                  <div className="mt-2 flex items-center text-green-400 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+5.3% from last month</span>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Conversion Rate</p>
                      <p className="text-2xl font-bold text-white">3.6%</p>
                    </div>
                    <PieChart className="h-10 w-10 text-indigo-400" />
                  </div>
                  <div className="mt-2 flex items-center text-green-400 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+0.8% from last month</span>
                  </div>
                </div>
              </div>
              
              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white font-medium">Revenue Trend</h4>
                    <LineChart className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="h-48 flex items-end space-x-2">
                    {[35, 45, 30, 65, 40, 80, 60, 75, 65, 85, 90, 75].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-indigo-500 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white font-medium">User Acquisition</h4>
                    <BarChart className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="h-48 flex items-end space-x-2">
                    {[65, 40, 70, 30, 60, 50, 90, 75, 45, 55, 70, 85].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-green-500 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Features */}
          <div className="absolute -top-6 -right-6 bg-indigo-600 text-white p-4 rounded-lg shadow-lg transform rotate-3 z-10">
            <p className="text-sm font-bold">Real-time updates</p>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-lg shadow-lg transform -rotate-3 z-10">
            <p className="text-sm font-bold">Customizable views</p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Data Visualization</h3>
            <p className="text-gray-600">
              Transform your raw data into beautiful, interactive charts and graphs that make it easy to spot trends and patterns.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Reports</h3>
            <p className="text-gray-600">
              Create and schedule custom reports to be delivered to your inbox or Discord channels on a daily, weekly, or monthly basis.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Goal Tracking</h3>
            <p className="text-gray-600">
              Set targets for key metrics and track your progress over time. Get notified when you're approaching or have reached your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;