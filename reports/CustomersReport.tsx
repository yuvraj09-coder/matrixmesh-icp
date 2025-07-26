import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  UserMinus,
  Download, 
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Globe,
  Activity
} from 'lucide-react';
import Sidebar from '../Sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const customerData = [
  { month: 'Jan', totalCustomers: 1200, newCustomers: 150, churnedCustomers: 30 },
  { month: 'Feb', totalCustomers: 1320, newCustomers: 160, churnedCustomers: 40 },
  { month: 'Mar', totalCustomers: 1440, newCustomers: 170, churnedCustomers: 50 },
  { month: 'Apr', totalCustomers: 1560, newCustomers: 180, churnedCustomers: 60 },
  { month: 'May', totalCustomers: 1680, newCustomers: 190, churnedCustomers: 70 },
  { month: 'Jun', totalCustomers: 1800, newCustomers: 200, churnedCustomers: 80 },
  { month: 'Jul', totalCustomers: 1920, newCustomers: 210, churnedCustomers: 90 },
  { month: 'Aug', totalCustomers: 2040, newCustomers: 220, churnedCustomers: 100 },
  { month: 'Sep', totalCustomers: 2160, newCustomers: 230, churnedCustomers: 110 },
  { month: 'Oct', totalCustomers: 2280, newCustomers: 240, churnedCustomers: 120 },
  { month: 'Nov', totalCustomers: 2400, newCustomers: 250, churnedCustomers: 130 },
  { month: 'Dec', totalCustomers: 2520, newCustomers: 260, churnedCustomers: 140 }
];

const geographicData = [
  { name: 'North America', value: 45 },
  { name: 'Europe', value: 30 },
  { name: 'Asia', value: 15 },
  { name: 'Others', value: 10 }
];

const COLORS = ['#4F46E5', '#818CF8', '#C7D2FE', '#E0E7FF'];

const CustomersReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState('12m');

  const calculateGrowth = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const currentCustomers = customerData[customerData.length - 1].totalCustomers;
  const previousCustomers = customerData[customerData.length - 2].totalCustomers;
  const customerGrowth = calculateGrowth(currentCustomers, previousCustomers);

  const currentNewCustomers = customerData[customerData.length - 1].newCustomers;
  const previousNewCustomers = customerData[customerData.length - 2].newCustomers;
  const newCustomerGrowth = calculateGrowth(currentNewCustomers, previousNewCustomers);

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
              <h1 className="text-2xl font-semibold text-gray-900">Customer Report</h1>
              <p className="mt-1 text-sm text-gray-500">
                Detailed analysis of your customer base and growth metrics
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
                        <Users className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Customers</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">{currentCustomers.toLocaleString()}</div>
                            <div className="flex items-center text-sm">
                              {Number(customerGrowth) > 0 ? (
                                <ArrowUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowDown className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(customerGrowth) > 0 ? 'text-green-500' : 'text-red-500'}>
                                {customerGrowth}% from last month
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
                        <UserPlus className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">New Customers</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">{currentNewCustomers.toLocaleString()}</div>
                            <div className="flex items-center text-sm">
                              {Number(newCustomerGrowth) > 0 ? (
                                <ArrowUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowDown className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(newCustomerGrowth) > 0 ? 'text-green-500' : 'text-red-500'}>
                                {newCustomerGrowth}% from last month
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
                          <dt className="text-sm font-medium text-gray-500 truncate">Customer Growth Rate</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {((currentNewCustomers - customerData[customerData.length - 1].churnedCustomers) / currentCustomers * 100).toFixed(1)}%
                            </div>
                            <div className="text-sm text-gray-500">Net growth this month</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Charts */}
              <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Customer Growth</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={customerData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="totalCustomers" 
                            stroke="#4F46E5" 
                            name="Total Customers"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="newCustomers" 
                            stroke="#10B981" 
                            name="New Customers"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="churnedCustomers" 
                            stroke="#EF4444" 
                            name="Churned Customers"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Geographic Distribution</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={geographicData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {geographicData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
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

export default CustomersReport;