import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Download, 
  Calendar,
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import Sidebar from '../Sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000, previousYear: 32000, mrr: 42000, churn: 2100 },
  { month: 'Feb', revenue: 52000, previousYear: 34000, mrr: 45000, churn: 1800 },
  { month: 'Mar', revenue: 49000, previousYear: 36000, mrr: 47000, churn: 2300 },
  { month: 'Apr', revenue: 58000, previousYear: 38000, mrr: 51000, churn: 1500 },
  { month: 'May', revenue: 63000, previousYear: 42000, mrr: 54000, churn: 1900 },
  { month: 'Jun', revenue: 71000, previousYear: 45000, mrr: 58000, churn: 2200 },
  { month: 'Jul', revenue: 75000, previousYear: 48000, mrr: 62000, churn: 2000 },
  { month: 'Aug', revenue: 82000, previousYear: 52000, mrr: 65000, churn: 2400 },
  { month: 'Sep', revenue: 87000, previousYear: 55000, mrr: 69000, churn: 2100 },
  { month: 'Oct', revenue: 92000, previousYear: 58000, mrr: 73000, churn: 2300 },
  { month: 'Nov', revenue: 98000, previousYear: 62000, mrr: 76000, churn: 2500 },
  { month: 'Dec', revenue: 105000, previousYear: 65000, mrr: 80000, churn: 2200 }
];

const RevenueReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState('12m');

  const calculateGrowth = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const currentMRR = revenueData[revenueData.length - 1].mrr;
  const previousMRR = revenueData[revenueData.length - 2].mrr;
  const mrrGrowth = calculateGrowth(currentMRR, previousMRR);

  const currentRevenue = revenueData[revenueData.length - 1].revenue;
  const previousRevenue = revenueData[revenueData.length - 2].revenue;
  const revenueGrowth = calculateGrowth(currentRevenue, previousRevenue);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? 'visible' : 'invisible'}`}>
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${sidebarOpen ? 'opacity-100 ease-out duration-300' : 'opacity-0 ease-in duration-200'}`} onClick={() => setSidebarOpen(false)}></div>
        <Sidebar mobile={true} setSidebarOpen={setSidebarOpen} />
        <div className="flex-shrink-0 w-14"></div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <Sidebar mobile={false} />
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Revenue Report</h1>
              <p className="mt-1 text-sm text-gray-500">
                Detailed analysis of your revenue metrics and growth
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Filters */}
              <div className="mt-4 flex justify-between items-center">
                <div className="relative inline-block text-left">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  >
                    <option value="3m">Last 3 months</option>
                    <option value="6m">Last 6 months</option>
                    <option value="12m">Last 12 months</option>
                    <option value="ytd">Year to date</option>
                  </select>
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Filter className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                    Filter
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Download className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                    Export
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <RefreshCw className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                    Refresh
                  </button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Monthly Recurring Revenue</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">${currentMRR.toLocaleString()}</div>
                            <div className="flex items-center text-sm">
                              {Number(mrrGrowth) > 0 ? (
                                <ArrowUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowDown className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(mrrGrowth) > 0 ? 'text-green-500' : 'text-red-500'}>
                                {mrrGrowth}% from last month
                              </span>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">${currentRevenue.toLocaleString()}</div>
                            <div className="flex items-center text-sm">
                              {Number(revenueGrowth) > 0 ? (
                                <ArrowUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowDown className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(revenueGrowth) > 0 ? 'text-green-500' : 'text-red-500'}>
                                {revenueGrowth}% from last month
                              </span>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Calendar className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Annual Run Rate</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              ${(currentMRR * 12).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-500">Based on current MRR</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Charts */}
              <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Revenue Growth</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#4F46E5" 
                            name="Current Year"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="previousYear" 
                            stroke="#9CA3AF" 
                            name="Previous Year"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">MRR & Churn</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Area 
                            type="monotone" 
                            dataKey="mrr" 
                            stackId="1" 
                            stroke="#4F46E5" 
                            fill="#818CF8" 
                            name="MRR"
                          />
                          <Area 
                            type="monotone" 
                            dataKey="churn" 
                            stackId="2" 
                            stroke="#EF4444" 
                            fill="#FCA5A5" 
                            name="Churn"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RevenueReport;