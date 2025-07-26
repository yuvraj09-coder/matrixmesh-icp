import React, { useState } from 'react';
import { 
  DollarSign, 
  Download, 
  Filter, 
  Search, 
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  CreditCard,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import Sidebar from './Sidebar';

// Sample detailed sales data
const salesData = [
  {
    id: 1,
    customer: 'John Smith',
    email: 'john@example.com',
    amount: 99,
    plan: 'Professional',
    date: '2025-04-15T10:23:45',
    status: 'completed',
    location: 'United States',
    paymentMethod: 'Visa ending in 4242',
    transactionId: 'txn_1234567890',
    recurringBilling: true,
    nextBillingDate: '2025-05-15T10:23:45'
  },
  {
    id: 2,
    customer: 'Sarah Johnson',
    email: 'sarah@example.com',
    amount: 49,
    plan: 'Starter',
    date: '2025-04-14T15:12:33',
    status: 'completed',
    location: 'Canada',
    paymentMethod: 'Mastercard ending in 8888',
    transactionId: 'txn_0987654321',
    recurringBilling: true,
    nextBillingDate: '2025-05-14T15:12:33'
  },
  {
    id: 3,
    customer: 'Tech Solutions Inc.',
    email: 'billing@techsolutions.com',
    amount: 199,
    plan: 'Enterprise',
    date: '2025-04-13T09:45:12',
    status: 'completed',
    location: 'United Kingdom',
    paymentMethod: 'American Express ending in 1111',
    transactionId: 'txn_5432167890',
    recurringBilling: true,
    nextBillingDate: '2025-05-13T09:45:12'
  },
  {
    id: 4,
    customer: 'Michael Brown',
    email: 'michael@example.com',
    amount: 99,
    plan: 'Professional',
    date: '2025-04-12T14:22:45',
    status: 'completed',
    location: 'Australia',
    paymentMethod: 'PayPal',
    transactionId: 'txn_6789054321',
    recurringBilling: true,
    nextBillingDate: '2025-05-12T14:22:45'
  }
];

const SalesDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPlan, setSelectedPlan] = useState('All');

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(dateString));
  };

  const calculateTotalRevenue = () => {
    return salesData.reduce((total, sale) => total + sale.amount, 0);
  };

  const calculateAverageOrderValue = () => {
    return calculateTotalRevenue() / salesData.length;
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
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Sales Details</h1>
              <p className="mt-1 text-sm text-gray-500">
                Detailed view of all sales transactions
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Stats */}
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                          <dd className="text-lg font-medium text-gray-900">${calculateTotalRevenue()}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <CreditCard className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Average Order Value</dt>
                          <dd className="text-lg font-medium text-gray-900">${calculateAverageOrderValue().toFixed(2)}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Clock className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Transactions</dt>
                          <dd className="text-lg font-medium text-gray-900">{salesData.length}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="mt-8 bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label htmlFor="search" className="sr-only">Search sales</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="search"
                          id="search"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Search by customer or email"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <select
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                      >
                        <option>All Status</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Failed</option>
                      </select>
                    </div>

                    <div>
                      <select
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                      >
                        <option>All Plans</option>
                        <option>Starter</option>
                        <option>Professional</option>
                        <option>Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Download className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                      Export
                    </button>
                  </div>
                </div>
              </div>

              {/* Sales Table */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {salesData.map((sale) => (
                      <tr key={sale.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{sale.customer}</div>
                              <div className="text-sm text-gray-500">{sale.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">${sale.amount}</div>
                          <div className="text-sm text-gray-500">{sale.paymentMethod}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{sale.plan}</div>
                          <div className="text-sm text-gray-500">
                            {sale.recurringBilling ? 'Recurring' : 'One-time'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(sale.date)}</div>
                          <div className="text-sm text-gray-500">
                            Next billing: {formatDate(sale.nextBillingDate)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            <CheckCircle className="h-4 w-4 mr-1" /> {sale.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                            {sale.location}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesDetails;