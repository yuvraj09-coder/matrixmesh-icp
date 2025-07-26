import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Edit, 
  Bell, 
  Settings as SettingsIcon,
  AlertTriangle,
  DollarSign,
  UserPlus,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Sidebar from './Sidebar';

// Sample Discord channels data
const discordChannels = [
  {
    id: 1,
    name: 'sales-notifications',
    description: 'All sales and subscription notifications',
    webhookUrl: 'https://discord.com/api/webhooks/123456789/abcdefg',
    notificationTypes: ['sales', 'subscriptions', 'refunds'],
    isActive: true,
    lastNotification: '2 minutes ago',
    notificationCount: 156
  },
  {
    id: 2,
    name: 'user-activity',
    description: 'New user registrations and important user events',
    webhookUrl: 'https://discord.com/api/webhooks/987654321/hijklmn',
    notificationTypes: ['new-users', 'user-activity'],
    isActive: true,
    lastNotification: '15 minutes ago',
    notificationCount: 89
  },
  {
    id: 3,
    name: 'system-alerts',
    description: 'Critical system alerts and warnings',
    webhookUrl: 'https://discord.com/api/webhooks/456789123/opqrstu',
    notificationTypes: ['errors', 'warnings', 'system-events'],
    isActive: true,
    lastNotification: '1 hour ago',
    notificationCount: 42
  },
  {
    id: 4,
    name: 'financial-updates',
    description: 'Revenue reports and financial metrics',
    webhookUrl: 'https://discord.com/api/webhooks/789123456/vwxyzab',
    notificationTypes: ['revenue', 'expenses', 'projections'],
    isActive: false,
    lastNotification: '2 days ago',
    notificationCount: 18
  }
];

// Sample notification templates
const notificationTemplates = [
  {
    id: 1,
    type: 'sales',
    name: 'New Sale',
    template: '🎉 **New Sale!** {{amount}} - {{plan}} plan purchased by {{customer}}',
    icon: DollarSign
  },
  {
    id: 2,
    type: 'new-users',
    name: 'New User Registration',
    template: '👋 **New User!** {{email}} just signed up for your service!',
    icon: UserPlus
  },
  {
    id: 3,
    type: 'errors',
    name: 'System Error',
    template: '⚠️ **System Alert!** {{error_message}} - Occurred at {{timestamp}}',
    icon: AlertTriangle
  }
];

const DiscordChannels = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('channels'); // 'channels' or 'templates'
  const [expandedChannel, setExpandedChannel] = useState<number | null>(null);

  const toggleChannelExpand = (channelId: number) => {
    if (expandedChannel === channelId) {
      setExpandedChannel(null);
    } else {
      setExpandedChannel(channelId);
    }
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
              <h1 className="text-2xl font-semibold text-gray-900">Discord Channels</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your Discord channel integrations and notification templates.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('channels')}
                    className={`${
                      activeTab === 'channels'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Discord Channels
                  </button>
                  <button
                    onClick={() => setActiveTab('templates')}
                    className={`${
                      activeTab === 'templates'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Notification Templates
                  </button>
                </nav>
              </div>

              {/* Channels Tab Content */}
              {activeTab === 'channels' && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-gray-900">Your Discord Channels</h2>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Plus className="-ml-1 mr-2 h-5 w-5" />
                      Add Channel
                    </button>
                  </div>

                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                      {discordChannels.map((channel) => (
                        <li key={channel.id}>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className={`h-10 w-10 rounded-full ${channel.isActive ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                                    <MessageSquare className={`h-6 w-6 ${channel.isActive ? 'text-green-600' : 'text-gray-400'}`} />
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <div className="flex items-center">
                                    <h3 className="text-sm font-medium text-indigo-600">#{channel.name}</h3>
                                    <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${channel.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                      {channel.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {channel.description}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-4">
                                  Last notification: {channel.lastNotification}
                                </span>
                                <button
                                  onClick={() => toggleChannelExpand(channel.id)}
                                  className="text-gray-400 hover:text-gray-500"
                                >
                                  {expandedChannel === channel.id ? (
                                    <ChevronUp className="h-5 w-5" />
                                  ) : (
                                    <ChevronDown className="h-5 w-5" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Expanded content */}
                            {expandedChannel === channel.id && (
                              <div className="mt-4 border-t border-gray-200 pt-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-500">Webhook URL</h4>
                                    <div className="mt-1 flex items-center">
                                      <input
                                        type="text"
                                        readOnly
                                        value={channel.webhookUrl}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50"
                                      />
                                      <button
                                        type="button"
                                        className="ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        <Edit className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-500">Notification Types</h4>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                      {channel.notificationTypes.map((type) => (
                                        <span key={type} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                          {type}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-4 flex justify-end space-x-3">
                                  <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    <SettingsIcon className="-ml-0.5 mr-2 h-4 w-4" />
                                    Configure
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    <Bell className="-ml-0.5 mr-2 h-4 w-4" />
                                    Test Notification
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                  >
                                    <Trash2 className="-ml-0.5 mr-2 h-4 w-4" />
                                    Delete
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Connect a new Discord channel</h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>Follow these steps to connect a new Discord channel:</p>
                      </div>
                      <div className="mt-5 space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                              <span className="text-xs font-medium text-indigo-600">1</span>
                            </div>
                          </div>
                          <div className="ml-3 text-sm">
                            <p className="text-gray-700">In Discord, go to your server settings and select "Integrations"</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                              <span className="text-xs font-medium text-indigo-600">2</span>
                            </div>
                          </div>
                          <div className="ml-3 text-sm">
                            <p className="text-gray-700">Click "Create Webhook" and customize the name and channel</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                              <span className="text-xs font-medium text-indigo-600">3</span>
                            </div>
                          </div>
                          <div className="ml-3 text-sm">
                            <p className="text-gray-700">Copy the webhook URL and paste it below</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:flex sm:items-center">
                        <div className="w-full sm:max-w-xs">
                          <label htmlFor="webhook-url" className="sr-only">
                            Discord Webhook URL
                          </label>
                          <input
                            type="text"
                            name="webhook-url"
                            id="webhook-url"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="https://discord.com/api/webhooks/..."
                          />
                        </div>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Connect Channel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Templates Tab Content */}
              {activeTab === 'templates' && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-gray-900">Notification Templates</h2>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Plus className="-ml-1 mr-2 h-5 w-5" />
                      Create Template
                    </button>
                  </div>

                  <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                      {notificationTemplates.map((template) => (
                        <li key={template.id}>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <template.icon className="h-6 w-6 text-indigo-600" />
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-indigo-600">{template.name}</div>
                                  <div className="text-sm text-gray-500">Type: {template.type}</div>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <button
                                  type="button"
                                  className="inline-flex items-center p-1 border border-gray-300 rounded-full shadow-sm text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button
                                  type="button"
                                  className="inline-flex items-center p-1 border border-gray-300 rounded-full shadow-sm text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md font-mono">
                                {template.template}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Template Variables</h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>Use these variables in your notification templates:</p>
                      </div>
                      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm font-medium text-gray-900">Sales Variables</h4>
                          <ul className="mt-2 text-sm text-gray-500 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-1.5" />
                              <span><code>{'{{amount}}'}</code> - Sale amount</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-1.5" />
                              <span><code>{'{{plan}}'}</code> - Plan name</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-1.5" />
                              <span><code>{'{{customer}}'}</code> - Customer name</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm font-medium text-gray-900">User Variables</h4>
                          <ul className="mt-2 text-sm text-gray-500 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-1.5" />
                              <span><code>{'{{email}}'}</code> - User email</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-1.5" />
                              <span><code>{'{{name}}'}</code> - User name</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-1.5" />
                              <span><code>{'{{signup_date}}'}</code> - Sign-up date</span>
                            </li>
                          </ul>
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

export default DiscordChannels;