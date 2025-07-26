import React, { useState } from 'react';
import { 
  Star, 
  TrendingUp,
  Download, 
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';
import Sidebar from '../Sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const npsData = [
  { month: 'Jan', score: 45, promoters: 55, passives: 35, detractors: 10 },
  { month: 'Feb', score: 48, promoters: 58, passives: 32, detractors: 10 },
  { month: 'Mar', score: 50, promoters: 60, passives: 30, detractors: 10 },
  { month: 'Apr', score: 52, promoters: 62, passives: 28, detractors: 10 },
  { month: 'May', score: 55, promoters: 65, passives: 25, detractors: 10 },
  { month: 'Jun', score: 58, promoters: 68, passives: 22, detractors: 10 },
  { month: 'Jul', score: 60, promoters: 70, passives: 20, detractors: 10 },
  { month: 'Aug', score: 62, promoters: 72, passives: 18, detractors: 10 },
  { month: 'Sep', score: 65, promoters: 75, passives: 15, detractors: 10 },
  { month: 'Oct', score: 68, promoters: 78, passives: 12, detractors: 10 },
  { month: 'Nov', score: 70, promoters: 80, passives: 10, detractors: 10 },
  { month: 'Dec', score: 72, promoters: 82, passives: 8, detractors: 10 }
];

const satisfactionData = [
  { name: 'Promoters', value: 82 },
  { name: 'Passives', value: 8 },
  { name: 'Detractors', value: 10 }
];

const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

const NpsReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState('12m');

  const calculateChange = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const currentNps = npsData[npsData.length - 1].score;
  const previousNps = npsData[npsData.length - 2].score;
  const npsChange = calculateChange(currentNps, previousNps);

  const currentPromoters = npsData[npsData.length - 1].promoters;
  const previousPromoters = npsData[npsData.length - 2].promoters;
  const promotersChange = calculateChange(currentPromoters, previousPromoters);

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
              <h1 className="text-2xl font-semibold text-gray-900">NPS Report</h1>
              <p className="mt-1 text-sm text-gray-500">
                Net Promoter Score and customer satisfaction metrics
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
                        <Star className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Net Promoter Score</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">{currentNps}</div>
                            <div className="flex items-center text-sm">
                              {Number(npsChange) > 0 ? (
                                <ArrowUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowDown className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(npsChange) > 0 ? 'text-green-500' : 'text-red-500'}>
                                {npsChange}% from last month
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
                        <ThumbsUp className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Promoters</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">{currentPromoters}%</div>
                            <div className="flex items-center text-sm">
                              {Number(promotersChange) > 0 ? (
                                <ArrowUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowDown className="h-4 w-4 text-red-500" />
                              )}
                              <span className={Number(promotersChange) > 0 ? 'text-green-500' : 'text-red-500'}>
                                {promotersChange}% from last month
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
                        <MessageSquare className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Response Rate</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">35%</div>
                            <div className="text-sm text-gray-500">Of customers surveyed</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NPS Charts */}
              <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">NPS Trend</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={npsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="score" 
                            stroke="#4F46E5" 
                            name="NPS Score"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Customer Satisfaction Distribution</h3>
                    <div className="mt-2 h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={satisfactionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {satisfactionData.map((entry, index) => (
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

export default NpsReport;