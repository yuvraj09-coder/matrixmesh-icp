import React, { useState } from 'react';
import { Menu, X, Puzzle, Plus, Trash2, Edit, Settings as SettingsIcon, ExternalLink,
     Check, ChevronDown, ChevronUp, RefreshCw, AlertCircle, Lock, Zap, Database, CreditCard, Mail, 
     MessageSquare, GitBranch, Calendar, BarChart2, Trello, Slack, Github, Twitter, Linkedin, Facebook,
      Grip as Stripe, Disc as Discord, Search } from 'lucide-react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

// Sample integrations data
const integrationsData = [
  {
    id: 1,
    name: 'Stripe',
    description: 'Payment processing integration',
    status: 'connected',
    lastSync: '10 minutes ago',
    icon: Stripe,
    category: 'payment',
    connectedSince: '2025-01-15T10:00:00',
    apiKey: '••••••••••••sk_test_123',
    webhookUrl: 'https://api.allinfo.com/webhooks/stripe/12345'
  },
  {
    id: 2,
    name: 'GitHub',
    description: 'Repository and issue tracking',
    status: 'connected',
    lastSync: '1 hour ago',
    icon: Github,
    category: 'development',
    connectedSince: '2025-02-20T14:30:00',
    apiKey: null,
    webhookUrl: 'https://api.allinfo.com/webhooks/github/67890'
  },
  {
    id: 3,
    name: 'Slack',
    description: 'Team communication platform',
    status: 'disconnected',
    lastSync: '3 days ago',
    icon: Slack,
    category: 'communication',
    connectedSince: null,
    apiKey: null,
    webhookUrl: null
  },
  {
    id: 4,
    name: 'Trello',
    description: 'Project management tool',
    status: 'connected',
    lastSync: '30 minutes ago',
    icon: Trello,
    category: 'productivity',
    connectedSince: '2025-03-05T09:15:00',
    apiKey: '••••••••••••trello_key_456',
    webhookUrl: 'https://api.allinfo.com/webhooks/trello/24680'
  },
  {
    id: 5,
    name: 'Twitter',
    description: 'Social media platform',
    status: 'pending',
    lastSync: 'Never',
    icon: Twitter,
    category: 'social',
    connectedSince: null,
    apiKey: null,
    webhookUrl: null
  },
  {
    id: 6,
    name: 'LinkedIn',
    description: 'Professional networking',
    status: 'disconnected',
    lastSync: 'Never',
    icon: Linkedin,
    category: 'social',
    connectedSince: null,
    apiKey: null,
    webhookUrl: null
  },
  {
    id: 7,
    name: 'Facebook',
    description: 'Social media platform',
    status: 'disconnected',
    lastSync: 'Never',
    icon: Facebook,
    category: 'social',
    connectedSince: null,
    apiKey: null,
    webhookUrl: null
  }
];

// Available integrations to add
const availableIntegrations = [
  {
    id: 101,
    name: 'Mailchimp',
    description: 'Email marketing platform',
    category: 'marketing',
    icon: Mail,
    popular: true
  },
  {
    id: 102,
    name: 'Intercom',
    description: 'Customer messaging platform',
    category: 'communication',
    icon: MessageSquare,
    popular: true
  },
  {
    id: 103,
    name: 'MongoDB',
    description: 'NoSQL database',
    category: 'development',
    icon: Database,
    popular: false
  },
  {
    id: 104,
    name: 'Google Calendar',
    description: 'Calendar and scheduling',
    category: 'productivity',
    icon: Calendar,
    popular: true
  },
  {
    id: 105,
    name: 'Google Analytics',
    description: 'Web analytics service',
    category: 'analytics',
    icon: BarChart2,
    popular: true
  }
];

// Filter options
const filterOptions = {
  categories: ['All Categories', 'Payment', 'Development', 'Communication', 'Productivity', 'Social', 'Marketing', 'Analytics'],
  status: ['All Status', 'Connected', 'Disconnected', 'Pending']
};

const Integrations = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(filterOptions.categories[0]);
  const [selectedStatus, setSelectedStatus] = useState(filterOptions.status[0]);
  const [expandedIntegration, setExpandedIntegration] = useState<number | null>(null);
  const [showAddIntegration, setShowAddIntegration] = useState(false);
  const [activeTab, setActiveTab] = useState('current'); // 'current' or 'available'

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const toggleIntegrationExpand = (integrationId: number) => {
    if (expandedIntegration === integrationId) {
      setExpandedIntegration(null);
    } else {
      setExpandedIntegration(integrationId);
    }
  };

  // Filter integrations based on search and filters
  const filteredIntegrations = integrationsData.filter(integration => {
    // Search filter
    if (searchQuery && !integration.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !integration.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'All Categories' && integration.category !== selectedCategory.toLowerCase()) {
      return false;
    }
    
    // Status filter
    if (selectedStatus !== 'All Status' && integration.status !== selectedStatus.toLowerCase()) {
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
              <h1 className="text-2xl font-semibold text-gray-900">Integrations</h1>
              <p className="mt-1 text-sm text-gray-500">
                Connect your SaaS tools and services to enhance your Discord notifications.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('current')}
                    className={`${
                      activeTab === 'current'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Current Integrations
                  </button>
                  <button
                    onClick={() => setActiveTab('available')}
                    className={`${
                      activeTab === 'available'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Available Integrations
                  </button>
                </nav>
              </div>

              {/* Current Integrations Tab Content */}
              {activeTab === 'current' && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-gray-900">Your Integrations</h2>
                    <button
                      type="button"
                      onClick={() => setActiveTab('available')}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Plus className="-ml-1 mr-2 h-5 w-5" />
                      Add Integration
                    </button>
                  </div>

                  {/* Search and Filters */}
                  <div className="bg-white shadow rounded-lg mb-6">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Search */}
                        <div className="col-span-1 md:col-span-1">
                          <label htmlFor="search" className="sr-only">Search integrations</label>
                          <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="search"
                              id="search"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                              placeholder="Search integrations"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Category Filter */}
                        <div>
                          <label htmlFor="category" className="sr-only">Category</label>
                          <select
                            id="category"
                            name="category"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                          >
                            {filterOptions.categories.map((category) => (
                              <option key={category} value={category}>{category}</option>
                            ))}
                          </select>
                        </div>

                        {/* Status Filter */}
                        <div>
                          <label htmlFor="status" className="sr-only">Status</label>
                          <select
                            id="status"
                            name="status"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                          >
                            {filterOptions.status.map((status) => (
                              <option key={status} value={status}>{status}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Integrations List */}
                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                      {filteredIntegrations.length > 0 ? (
                        filteredIntegrations.map((integration) => (
                          <li key={integration.id}>
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0">
                                    <div className={`h-10 w-10 rounded-full ${
                                      integration.status === 'connected' ? 'bg-green-100' : 
                                      integration.status === 'pending' ? 'bg-yellow-100' : 'bg-gray-100'
                                    } flex items-center justify-center`}>
                                      <integration.icon className={`h-6 w-6 ${
                                        integration.status === 'connected' ? 'text-green-600' : 
                                        integration.status === 'pending' ? 'text-yellow-600' : 'text-gray-400'
                                      }`} />
                                    </div>
                                  </div>
                                  <div className="ml-4">
                                    <div className="flex items-center">
                                      <h3 className="text-sm font-medium text-indigo-600">{integration.name}</h3>
                                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        integration.status === 'connected' ? 'bg-green-100 text-green-800' : 
                                        integration.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                                      }`}>
                                        {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
                                      </span>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {integration.description}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <span className="text-sm text-gray-500 mr-4">
                                    Last sync: {integration.lastSync}
                                  </span>
                                  <button
                                    onClick={() => toggleIntegrationExpand(integration.id)}
                                    className="text-gray-400 hover:text-gray-500"
                                  >
                                    {expandedIntegration === integration.id ? (
                                      <ChevronUp className="h-5 w-5" />
                                    ) : (
                                      <ChevronDown className="h-5 w-5" />
                                    )}
                                  </button>
                                </div>
                              </div>

                              {/* Expanded content */}
                              {expandedIntegration === integration.id && (
                                <div className="mt-4 border-t border-gray-200 pt-4">
                                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                      <h4 className="text-sm font-medium text-gray-500">Integration Details</h4>
                                      <div className="mt-2 text-sm text-gray-900">
                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="text-gray-500">Category:</div>
                                          <div>{integration.category.charAt(0).toUpperCase() + integration.category.slice(1)}</div>
                                          
                                          <div className="text-gray-500">Connected Since:</div>
                                          <div>{formatDate(integration.connectedSince)}</div>
                                          
                                          {integration.apiKey && (
                                            <>
                                              <div className="text-gray-500">API Key:</div>
                                              <div className="flex items-center">
                                                <span>{integration.apiKey}</span>
                                                <button className="ml-2 text-indigo-600 hover:text-indigo-900">
                                                  <Edit className="h-4 w-4" />
                                                </button>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-gray-500">Webhook URL</h4>
                                      {integration.webhookUrl ? (
                                        <div className="mt-1 flex items-center">
                                          <input
                                            type="text"
                                            readOnly
                                            value={integration.webhookUrl}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50"
                                          />
                                          <button
                                            type="button"
                                            className="ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                          >
                                            <Edit className="h-4 w-4" />
                                          </button>
                                        </div>
                                      ) : (
                                        <div className="mt-1 text-sm text-gray-500">
                                          No webhook URL configured
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="mt-4 flex justify-end space-x-3">
                                    {integration.status === 'connected' && (
                                      <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        <RefreshCw className="-ml-0.5 mr-2 h-4 w-4" />
                                        Sync Now
                                      </button>
                                    )}
                                    <button
                                      type="button"
                                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                      <SettingsIcon className="-ml-0.5 mr-2 h-4 w-4" />
                                      Configure
                                    </button>
                                    {integration.status === 'disconnected' ? (
                                      <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        <Plus className="-ml-0.5 mr-2 h-4 w-4" />
                                        Connect
                                      </button>
                                    ) : (
                                      <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                      >
                                        <Trash2 className="-ml-0.5 mr-2 h-4 w-4" />
                                        Disconnect
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-6 sm:px-6 text-center">
                          <Puzzle className="h-12 w-12 text-gray-400 mx-auto" />
                          <h3 className="mt-2 text-sm font-medium text-gray-900">No integrations found</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Try adjusting your search or filter criteria to find what you're looking for.
                          </p>
                          <div className="mt-6">
                            <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory(filterOptions.categories[0]);
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
                  </div>
                </div>
              )}

              {/* Available Integrations Tab Content */}
              {activeTab === 'available' && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-gray-900">Available Integrations</h2>
                    <button
                      type="button"
                      onClick={() => setActiveTab('current')}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Back to Current Integrations
                    </button>
                  </div>

                  {/* Search */}
                  <div className="bg-white shadow rounded-lg mb-6">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="max-w-lg w-full">
                        <label htmlFor="search-available" className="sr-only">Search available integrations</label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="search-available"
                            id="search-available"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Search available integrations"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Popular Integrations */}
                  <div className="bg-white shadow overflow-hidden sm:rounded-md mb-6">
                    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Popular Integrations
                      </h3>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      {availableIntegrations.filter(i => i.popular).map((integration) => (
                        <li key={integration.id}>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <integration.icon className="h-6 w-6 text-indigo-600" />
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-indigo-600">{integration.name}</div>
                                  <div className="text-sm text-gray-500">
                                    {integration.description}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <Plus className="-ml-0.5 mr-2 h-4 w-4" />
                                  Connect
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* All Available Integrations */}
                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        All Available Integrations
                      </h3>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      {availableIntegrations.map((integration) => (
                        <li key={integration.id}>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <integration.icon className="h-6 w-6 text-indigo-600" />
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-indigo-600">{integration.name}</div>
                                  <div className="text-sm text-gray-500">
                                    {integration.description}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <Plus className="-ml-0.5 mr-2 h-4 w-4" />
                                  Connect
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Request Integration */}
                  <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Don't see what you need?</h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>Request a new integration and we'll consider adding it to our platform.</p>
                      </div>
                      <div className="mt-5">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        >
                          Request Integration
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Integration Stats */}
              {activeTab === 'current' && (
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                          <Check className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">Connected Integrations</dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">
                                {integrationsData.filter(i => i.status === 'connected').length}
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
                          <AlertCircle className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">Pending Integrations</dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">
                                {integrationsData.filter(i => i.status === 'pending').length}
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
                        <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                          <Puzzle className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">Available Integrations</dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">
                                {availableIntegrations.length}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Integrations;