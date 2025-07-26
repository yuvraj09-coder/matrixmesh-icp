import React, { useState } from 'react';
import { 
  UserMinus, 
  DollarSign,
  Download, 
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  AlertTriangle,
  Activity
} from 'lucide-react';
import Sidebar from '../Sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const churnData = [
  { month: 'Jan', churnRate: 2.1, churnedCustomers: 30, churnedRevenue: 2900 },
  { month: 'Feb', churnRate: 2.3, churnedCustomers: 40, churnedRevenue: 3900 },
  { month: 'Mar', churnRate: 2.0, churnedCustomers: 50, churnedRevenue: 4900 },
  { month: 'Apr', churnRate: 1.8, churnedCustomers: 60, churnedRevenue: 5900 },
  { month: 'May', churnRate: 2.2, churnedCustomers: 70, churnedRevenue: 6900 },
  { month: 'Jun', churnRate: 2.4, churnedCustomers: 80, churnedRevenue: 7900 },
  { month: 'Jul', churnRate: 2.1, churnedCustomers: 90, churnedRevenue: 8900 },
  { month: 'Aug', churnRate: 1.9, churnedCustomers: 100, churnedRevenue: 9900 },
  { month: 'Sep', churnRate: 2.0, churnedCustomers: 110, churnedRevenue: 10900 },
  { month: 'Oct', churnRate: 2.2, churnedCustomers: 120, churnedRevenue: 11900 },
  { month: 'Nov', churnRate: 2.3, churnedCustomers: 130, churnedRevenue: 12900 },
  { month: 'Dec', churnRate: 2.1, churnedCustomers: 140, churnedRevenue: 13900 }
];

const ChurnReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState('12m');

  const calculateChange = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const currentChurnRate = churnData[churnData.length - 1].churnRate;
  const previousChurnRate = churnData[churnData.length - 2].churnRate;
  const churnRateChange = calculateChange(currentChurnRate, previousChurnRate);

  const currentChurnedRevenue = churnData[churnData.length - 1].churnedRevenue;
  const previousChurnedRevenue = churnData[churnData.length - 2].churnedRevenue;
  const churnedRevenueChange = calculateChange(currentChurnedRevenue, previousChurnedRevenue);

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
              <h1 className="text-2xl font-semibold text-gray-900">Churn Report</h1>
              <p className="mt-1 text-sm text-gray-500">
                Analysis of customer churn and retention metrics
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
                        <UserMinus className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Churn Rate</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">{currentChurnRate}%</div>
                            <div className="flex items-center text-sm">
                              {Number(churnRateChange) < 0 ? (
                                <ArrowDown className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowUp className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(churnRateChange) < 0 ? 'text-green-500' : 'text-red-500'}>
                                {Math.abs(Number(churnRateChange))}% from last month
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
                        <DollarSign className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Churned Revenue</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">${currentChurnedRevenue.toLocaleString()}</div>
                            <div className="flex items-center text-sm">
                              {Number(churnedRevenueChange) < 0 ? (
                                <ArrowDown className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowUp className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(churnedRevenueChange) < 0 ? 'text-green-500' : 'text-red-500'}>
                                {Math.abs(Number(churnedRevenueChange))}% from last month
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
                        <Activity className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Retention Rate</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {(100 - currentChurnRate).toFixed(1)}%
                            </div>
                            <div className="text-sm text-gray-500">Monthly retention</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Churn Charts */}
              <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Churn Rate Trend</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={churnData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="churnRate" 
                            stroke="#EF4444" 
                            name="Churn Rate (%)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Churned Customers & Revenue</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={churnData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Bar 
                            yAxisId="left"
                            dataKey="churnedCustomers" 
                            fill="#EF4444" 
                            name="Churned Customers"
                          />
                          <Bar 
                            yAxisId="right"
                            dataKey="churnedRevenue" 
                            fill="#F87171" 
                            name="Churned Revenue ($)"
                          />
                        </BarChart>
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

export default ChurnReport;