import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Bell, 
  Filter,
  RefreshCw,
  Search,
  ChevronDown,
  DollarSign,
  UserPlus,
  AlertCircle,
  TrendingUp,
  Calendar,
  CheckCircle,
  XCircle
} from 'lucide-react';
import Sidebar from './Sidebar';

// Sample notifications data
const notificationsData = [
  {
    id: 1,
    type: 'sale',
    message: 'New sale: $99 - Professional Plan purchased by john@example.com',
    status: 'delivered',
    channel: 'sales-notifications',
    timestamp: '2025-04-15T10:23:45',
    icon: DollarSign
  },
  {
    id: 2,
    type: 'user',
    message: 'New user signed up: sarah@example.com',
    status: 'delivered',
    channel: 'user-activity',
    timestamp: '2025-04-15T09:45:12',
    icon: UserPlus
  },
  {
    id: 3,
    type: 'alert',
    message: 'Monthly revenue target reached: $10,000',
    status: 'delivered',
    channel: 'financial-updates',
    timestamp: '2025-04-14T18:30:00',
    icon: TrendingUp
  },
  {
    id: 4,
    type: 'sale',
    message: 'New sale: $199 - Enterprise Plan purchased by company@example.com',
    status: 'delivered',
    channel: 'sales-notifications',
    timestamp: '2025-04-14T15:12:33',
    icon: DollarSign
  },
  {
    id: 5,
    type: 'alert',
    message: 'Server load high: 85% CPU usage',
    status: 'failed',
    channel: 'system-alerts',
    timestamp: '2025-04-14T12:05:22',
    icon: AlertCircle
  },
  {
    id: 6,
    type: 'user',
    message: 'User milestone: 1000th user registered',
    status: 'delivered',
    channel: 'user-activity',
    timestamp: '2025-04-13T22:45:10',
    icon: UserPlus
  },
  {
    id: 7,
    type: 'alert',
    message: 'Weekly report generated: 25% growth in signups',
    status: 'pending',
    channel: 'financial-updates',
    timestamp: '2025-04-13T08:00:00',
    icon: Calendar
  },
  {
    id: 8,
    type: 'sale',
    message: 'Subscription renewed: $99 - Professional Plan by existing@example.com',
    status: 'delivered',
    channel: 'sales-notifications',
    timestamp: '2025-04-12T14:22:45',
    icon: DollarSign
  }
];

// Filter options
const filterOptions = {
  types: ['All Types', 'Sale', 'User', 'Alert'],
  channels: ['All Channels', 'sales-notifications', 'user-activity', 'system-alerts', 'financial-updates'],
  status: ['All Status', 'Delivered', 'Failed', 'Pending']
};

const Notifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState(filterOptions.types[0]);
  const [selectedChannel, setSelectedChannel] = useState(filterOptions.channels[0]);
  const [selectedStatus, setSelectedStatus] = useState(filterOptions.status[0]);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isChannelDropdownOpen, setIsChannelDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  // Format date for display
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Filter notifications based on search and filters
  const filteredNotifications = notificationsData.filter(notification => {
    // Search filter
    if (searchQuery && !notification.message.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Type filter
    if (selectedType !== 'All Types' && notification.type !== selectedType.toLowerCase()) {
      return false;
    }
    
    // Channel filter
    if (selectedChannel !== 'All Channels' && notification.channel !== selectedChannel) {
      return false;
    }
    
    // Status filter
    if (selectedStatus !== 'All Status' && notification.status !== selectedStatus.toLowerCase()) {
      return false;
    }
    
    return true;
  });

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
              <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
              <p className="mt-1 text-sm text-gray-500">
                View and manage all notifications sent to your Discord channels.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              {/* Search and Filters */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {/* Search */}
                    <div className="col-span-1 md:col-span-2">
                      <label htmlFor="search" className="sr-only">Search notifications</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="search"
                          id="search"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Search notifications"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Type Filter */}
                    <div className="relative">
                      <button
                        type="button"
                        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                      >
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">{selectedType}</span>
                        </span>
                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        </span>
                      </button>

                      {isTypeDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {filterOptions.types.map((type) => (
                            <div
                              key={type}
                              className={`${
                                selectedType === type ? 'text-white bg-indigo-600' : 'text-gray-900'
                              } cursor-default select-none relative py-2 pl-3 pr-9`}
                              onClick={() => {
                                setSelectedType(type);
                                setIsTypeDropdownOpen(false);
                              }}
                            >
                              <span className={`${selectedType === type ? 'font-semibold' : 'font-normal'} block truncate`}>
                                {type}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Channel Filter */}
                    <div className="relative">
                      <button
                        type="button"
                        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onClick={() => setIsChannelDropdownOpen(!isChannelDropdownOpen)}
                      >
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">{selectedChannel}</span>
                        </span>
                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        </span>
                      </button>

                      {isChannelDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {filterOptions.channels.map((channel) => (
                            <div
                              key={channel}
                              className={`${
                                selectedChannel === channel ? 'text-white bg-indigo-600' : 'text-gray-900'
                              } cursor-default select-none relative py-2 pl-3 pr-9`}
                              onClick={() => {
                                setSelectedChannel(channel);
                                setIsChannelDropdownOpen(false);
                              }}
                            >
                              <span className={`${selectedChannel === channel ? 'font-semibold' : 'font-normal'} block truncate`}>
                                {channel}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="relative">
                      <button
                        type="button"
                        className="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                      >
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">{selectedStatus}</span>
                        </span>
                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        </span>
                      </button>

                      {isStatusDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {filterOptions.status.map((status) => (
                            <div
                              key={status}
                              className={`${
                                selectedStatus === status ? 'text-white bg-indigo-600' : 'text-gray-900'
                              } cursor-default select-none relative py-2 pl-3 pr-9`}
                              onClick={() => {
                                setSelectedStatus(status);
                                setIsStatusDropdownOpen(false);
                              }}
                            >
                              <span className={`${selectedStatus === status ? 'font-semibold' : 'font-normal'} block truncate`}>
                                {status}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedType(filterOptions.types[0]);
                          setSelectedChannel(filterOptions.channels[0]);
                          setSelectedStatus(filterOptions.status[0]);
                        }}
                      >
                        <Filter className="-ml-0.5 mr-2 h-4 w-4" />
                        Clear Filters
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
              </div>

              {/* Notifications List */}
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification) => (
                      <li key={notification.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                  <notification.icon className="h-6 w-6 text-indigo-600" />
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-indigo-600">
                                  {notification.message}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Sent to: <span className="font-medium">#{notification.channel}</span> • {formatDate(notification.timestamp)}
                                </div>
                              </div>
                            </div>
                            <div className="ml-2 flex-shrink-0 flex">
                              {notification.status === 'delivered' && (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  <CheckCircle className="h-4 w-4 mr-1" /> Delivered
                                </span>
                              )}
                              {notification.status === 'failed' && (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  <XCircle className="h-4 w-4 mr-1" /> Failed
                                </span>
                              )}
                              {notification.status === 'pending' && (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  <RefreshCw className="h-4 w-4 mr-1" /> Pending
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-6 sm:px-6 text-center">
                      <Bell className="h-12 w-12 text-gray-400 mx-auto" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications found</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Try adjusting your search or filter criteria to find what you're looking for.
                      </p>
                      <div className="mt-6">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedType(filterOptions.types[0]);
                            setSelectedChannel(filterOptions.channels[0]);
                            setSelectedStatus(filterOptions.status[0]);
                          }}
                        >
                          <RefreshCw className="-ml-1 mr-2 h-5 w-5" />
                          Reset Filters
                        </button>
                      </div>
                    </li>
                  )}
                </ul>
                {filteredNotifications.length > 0 && (
                  <div className="bg-gray-50 px-4 py-3 flex items-center justify-between sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Next
                      </a>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredNotifications.length}</span> of{' '}
                          <span className="font-medium">{filteredNotifications.length}</span> results
                        </p>
                      </div>
                      <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                          <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Previous</span>
                            <ChevronDown className="h-5 w-5 transform rotate-90" />
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            1
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronDown className="h-5 w-5 transform -rotate-90" />
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Notification Stats */}
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Delivered Notifications</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {notificationsData.filter(n => n.status === 'delivered').length}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                        <XCircle className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Failed Notifications</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {notificationsData.filter(n => n.status === 'failed').length}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                        <RefreshCw className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Pending Notifications</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {notificationsData.filter(n => n.status === 'pending').length}
                            </div>
                          </dd>
                        </dl>
                      </div>
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

export default Notifications;
