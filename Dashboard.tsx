import React, { useState } from 'react';
import { 
  Bell, 
  BarChart2, 
  Users, 
  CreditCard, 
  Home, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  MessageSquare,
  TrendingUp,
  DollarSign,
  UserPlus,
  AlertCircle,
  Calendar,
  Clock,
  ArrowUp,
  ArrowDown,
  Filter,
  Download,
  RefreshCw,
  PieChart,
  Activity,
  Key,
  Globe,
  Target,
  Zap,
  ShoppingCart,
  Heart,
  Star,
  Flag,
  Repeat,
  UserMinus,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

// Sample data remains unchanged
const salesData = [
  { name: 'Jan', value: 4000, previousYear: 3500 },
  { name: 'Feb', value: 3000, previousYear: 2800 },
  { name: 'Mar', value: 5000, previousYear: 4200 },
  { name: 'Apr', value: 2780, previousYear: 2400 },
  { name: 'May', value: 1890, previousYear: 2000 },
  { name: 'Jun', value: 2390, previousYear: 2100 },
  { name: 'Jul', value: 3490, previousYear: 3000 },
];

const usersData = [
  { name: 'Jan', value: 100, churn: 5 },
  { name: 'Feb', value: 200, churn: 8 },
  { name: 'Mar', value: 300, churn: 12 },
  { name: 'Apr', value: 450, churn: 15 },
  { name: 'May', value: 500, churn: 20 },
  { name: 'Jun', value: 550, churn: 18 },
  { name: 'Jul', value: 700, churn: 25 },
];

const revenueByPlanData = [
  { name: 'Starter', value: 15000 },
  { name: 'Professional', value: 45000 },
  { name: 'Enterprise', value: 30000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const conversionRateData = [
  { name: 'Jan', rate: 12, visits: 1000 },
  { name: 'Feb', rate: 15, visits: 1200 },
  { name: 'Mar', rate: 18, visits: 1500 },
  { name: 'Apr', rate: 22, visits: 1800 },
  { name: 'May', rate: 24, visits: 2000 },
  { name: 'Jun', rate: 25, visits: 2200 },
  { name: 'Jul', rate: 28, visits: 2500 },
];

const geographicData = [
  { name: 'North America', value: 45 },
  { name: 'Europe', value: 30 },
  { name: 'Asia', value: 15 },
  { name: 'Others', value: 10 },
];

const customerSatisfactionData = [
  { name: 'Very Satisfied', value: 45 },
  { name: 'Satisfied', value: 35 },
  { name: 'Neutral', value: 15 },
  { name: 'Dissatisfied', value: 5 },
];

const notifications = [
  { 
    id: 1, 
    type: 'sale', 
    message: 'New sale: $99 - Professional Plan', 
    time: '2 minutes ago',
    icon: DollarSign,
    priority: 'high'
  },
  { 
    id: 2, 
    type: 'user', 
    message: 'New user signed up: john@example.com', 
    time: '15 minutes ago',
    icon: UserPlus,
    priority: 'medium'
  },
  { 
    id: 3, 
    type: 'alert', 
    message: 'Monthly revenue target reached: $10,000', 
    time: '1 hour ago',
    icon: TrendingUp,
    priority: 'high'
  },
  { 
    id: 4, 
    type: 'sale', 
    message: 'New sale: $199 - Enterprise Plan', 
    time: '3 hours ago',
    icon: DollarSign,
    priority: 'high'
  },
  { 
    id: 5, 
    type: 'alert', 
    message: 'Server load high: 85% CPU usage', 
    time: '5 hours ago',
    icon: AlertCircle,
    priority: 'critical'
  },
];

const recentSales = [
  {
    id: 1,
    customer: 'John Smith',
    email: 'john@example.com',
    amount: 99,
    plan: 'Professional',
    date: '2025-04-15T10:23:45',
    status: 'completed',
    location: 'United States'
  },
  {
    id: 2,
    customer: 'Sarah Johnson',
    email: 'sarah@example.com',
    amount: 49,
    plan: 'Starter',
    date: '2025-04-14T15:12:33',
    status: 'completed',
    location: 'Canada'
  },
  {
    id: 3,
    customer: 'Tech Solutions Inc.',
    email: 'billing@techsolutions.com',
    amount: 199,
    plan: 'Enterprise',
    date: '2025-04-13T09:45:12',
    status: 'completed',
    location: 'United Kingdom'
  },
  {
    id: 4,
    customer: 'Michael Brown',
    email: 'michael@example.com',
    amount: 99,
    plan: 'Professional',
    date: '2025-04-12T14:22:45',
    status: 'completed',
    location: 'Australia'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Monthly Financial Report',
    date: '2025-04-30T09:00:00',
    type: 'report',
    description: 'Review and analyze monthly financial performance'
  },
  {
    id: 2,
    title: 'Subscription Renewal - Enterprise Plan',
    date: '2025-05-05T00:00:00',
    type: 'renewal',
    description: 'Major client subscription renewal due'
  },
  {
    id: 3,
    title: 'Product Update Release',
    date: '2025-04-25T12:00:00',
    type: 'update',
    description: 'Launch of new features and improvements'
  }
];

const kpiData = {
  monthlyRecurringRevenue: {
    value: 25000,
    change: 12.5,
    trend: 'up'
  },
  customerLifetimeValue: {
    value: 1200,
    change: 8.3,
    trend: 'up'
  },
  churnRate: {
    value: 2.5,
    change: -0.5,
    trend: 'down'
  },
  netPromoterScore: {
    value: 65,
    change: 5,
    trend: 'up'
  }
};

const systemHealth = {
  uptime: '99.99%',
  responseTime: '250ms',
  errorRate: '0.01%',
  activeUsers: 1250
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState('7d');
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getDaysUntil = (dateString: string | number | Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const eventDate = new Date(dateString);
    eventDate.setHours(0, 0, 0, 0);
    
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  const calculateTotalRevenue = () => {
    return recentSales.reduce((total, sale) => total + sale.amount, 0);
  };

  const calculateAverageOrderValue = () => {
    return calculateTotalRevenue() / recentSales.length;
  };

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
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Welcome back! Here's an overview of your SaaS metrics and performance.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative inline-block text-left">
                    <select
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                    >
                      <option value="7d">Last 7 days</option>
                      <option value="30d">Last 30 days</option>
                      <option value="90d">Last 90 days</option>
                      <option value="12m">Last 12 months</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Download className="-ml-0.5 mr-2 h-4 w-4" />
                    Export
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <RefreshCw className="-ml-0.5 mr-2 h-4 w-4" />
                    Refresh
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* KPI Cards */}
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                            <div className="text-lg font-medium text-gray-900">${kpiData.monthlyRecurringRevenue.value.toLocaleString()}</div>
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUp className="h-4 w-4 mr-1" />
                              <span>{kpiData.monthlyRecurringRevenue.change}% from last month</span>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <Link to="/reports/revenue" className="font-medium text-indigo-600 hover:text-indigo-500">View details</Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Users className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Customer Lifetime Value</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">${kpiData.customerLifetimeValue.value}</div>
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUp className="h-4 w-4 mr-1" />
                              <span>{kpiData.customerLifetimeValue.change}% increase</span>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <Link to="/reports/customers" className="font-medium text-indigo-600 hover:text-indigo-500">View details</Link>
                    </div>
                  </div>
                </div>

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
                            <div className="text-lg font-medium text-gray-900">{kpiData.churnRate.value}%</div>
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowDown className="h-4 w-4 mr-1" />
                              <span>{Math.abs(kpiData.churnRate.change)}% decrease</span>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <Link to="/reports/churn" className="font-medium text-indigo-600 hover:text-indigo-500">View details</Link>
                    </div>
                  </div>
                </div>

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
                            <div className="text-lg font-medium text-gray-900">{kpiData.netPromoterScore.value}</div>
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUp className="h-4 w-4 mr-1" />
                              <span>{kpiData.netPromoterScore.change} points increase</span>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <Link to="/reports/nps" className="font-medium text-indigo-600 hover:text-indigo-500">View details</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Health Metrics */}
              <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">System Health</h3>
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                    <div className="bg-gray-50 overflow-hidden rounded-lg px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">System Uptime</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{systemHealth.uptime}</dd>
                    </div>
                    <div className="bg-gray-50 overflow-hidden rounded-lg px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">Response Time</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{systemHealth.responseTime}</dd>
                    </div>
                    <div className="bg-gray-50 overflow-hidden rounded-lg px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">Error Rate</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{systemHealth.errorRate}</dd>
                    </div>
                    <div className="bg-gray-50 overflow-hidden rounded-lg px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">Active Users</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">{systemHealth.activeUsers}</dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Revenue Trend</h3>
                    <div className="mt-2 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={salesData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#8884d8" 
                            activeDot={{ r: 8 }} 
                            name="Current Year"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="previousYear" 
                            stroke="#82ca9d" 
                            name="Previous Year"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">User Growth & Churn</h3>
                    <div className="mt-2 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={usersData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="value" fill="#82ca9d" name="New Users" />
                          <Bar dataKey="churn" fill="#ff7675" name="Churned Users" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Geographic Distribution</h3>
                    <div className="mt-2 h-64 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={geographicData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
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
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Customer Satisfaction</h3>
                    <div className="mt-2 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={customerSatisfactionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {customerSatisfactionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Sales */}
              <div className="mt-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Sales</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Latest transactions across all plans
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">
                          Total Revenue: ${calculateTotalRevenue()}
                        </span>
                        <span className="text-sm text-gray-500">
                          Avg. Order: ${calculateAverageOrderValue().toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {recentSales.map((sale) => (
                      <li key={sale.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                  <DollarSign className="h-6 w-6 text-indigo-600" />
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-indigo-600">
                                  {sale.customer}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {sale.email}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="text-sm text-gray-900 mr-4">
                                <span className="font-medium">${sale.amount}</span> - {sale.plan} Plan
                              </div>
                              <div className="text-sm text-gray-500 mr-4">
                                {formatDate(sale.date)}
                              </div>
                              <div className="text-sm text-gray-500">
                                {sale.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Showing {recentSales.length} of {recentSales.length} sales
                      </div>
                      <div>
                        <Link
                          to="/sales"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          View all sales
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications and Events */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Recent Discord Notifications
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Latest notifications sent to your Discord channels
                    </p>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {notifications.slice(0, showAllNotifications ? notifications.length : 3).map((notification) => (
                      <li key={notification.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className={`h-10 w-10 rounded-full ${
                                notification.priority === 'critical' ? 'bg-red-100' :
                                notification.priority === 'high' ? 'bg-yellow-100' :
                                'bg-indigo-100'
                              } flex items-center justify-center`}>
                                <notification.icon className={`h-6 w-6 ${
                                  notification.priority === 'critical' ? 'text-red-600' :
                                  notification.priority === 'high' ? 'text-yellow-600' :
                                  'text-indigo-600'
                                }`} />
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-indigo-600">
                                {notification.message}
                              </div>
                              <div className="text-sm text-gray-500">
                                {notification.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Showing {showAllNotifications ? notifications.length : 3} of {notifications.length} notifications
                      </div>
                      <div>
                        <button 
                          onClick={() => setShowAllNotifications(!showAllNotifications)}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          {showAllNotifications ? 'Show less' : 'View all'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Upcoming Events
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Important dates and events coming up
                    </p>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {upcomingEvents.map((event) => (
                      <li key={event.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                  {event.type === 'report' && <BarChart2 className="h-6 w-6 text-indigo-600" />}
                                  {event.type === 'renewal' && <CreditCard className="h-6 w-6 text-indigo-600" />}
                                  {event.type === 'update' && <RefreshCw className="h-6 w-6 text-indigo-600" />}
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-indigo-600">
                                  {event.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {event.description}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {formatDate(event.date)}
                                </div>
                              </div>
                            </div>
                            <div className="ml-2 flex-shrink-0 flex">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                <Clock className="h-4 w-4 mr-1" /> {getDaysUntil(event.date)} days
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Showing {upcomingEvents.length} upcoming events
                      </div>
                      <div>
                        <Link to="/calendar" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <Calendar className="-ml-1 mr-2 h-5 w-5" />
                          View calendar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 mb-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Quick Actions
                    </h3>
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      <Link to="/discord-channels" className="bg-indigo-50 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <MessageSquare className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-900">Add Discord Channel</dt>
                                <dd className="text-sm text-gray-500">Connect a new Discord channel for notifications</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <Link to="/notifications" className="bg-indigo-50 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Bell className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-900">Manage Notifications</dt>
                                <dd className="text-sm text-gray-500">Configure notification settings and templates</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <Link to="/settings" className="bg-indigo-50 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Settings className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-900">Account Settings</dt>
                                <dd className="text-sm text-gray-500">Update your profile and preferences</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <Link to="/settings/api" className="bg-indigo-50 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Key className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-900">API Keys</dt>
                                <dd className="text-sm text-gray-500">Manage your API keys and integrations</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </Link>
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

export default Dashboard;