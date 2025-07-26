import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Settings as SettingsIcon, 
  User,
  CreditCard,
  Bell,
  Shield,
  Key,
  Save,
  ExternalLink,
  LogOut,
  Mail,
  Globe,
  Moon,
  Sun,
  Smartphone,
  Trash2
} from 'lucide-react';
import Sidebar from './Sidebar';

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [discordNotifications, setDiscordNotifications] = useState(true);
  
  // Profile form state
  const [profileForm, setProfileForm] = useState({
    name: 'Tom Cook',
    email: 'tom@example.com',
    company: 'Example SaaS Inc.',
    website: 'https://example.com'
  });

  // API key state
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Production API Key', key: 'sk_live_123456789abcdefghijklmnopqrstuvwxyz', created: '2025-01-15', lastUsed: '2025-04-14' },
    { id: 2, name: 'Development API Key', key: 'sk_test_abcdefghijklmnopqrstuvwxyz123456789', created: '2025-02-20', lastUsed: '2025-04-10' }
  ]);

  // Handle profile form changes
  const handleProfileChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProfileForm({
      ...profileForm,
      [name]: value
    });
  };

  // Generate new API key
  const handleGenerateKey = () => {
    // In a real app, this would call an API to generate a secure key
    const newKey = {
      id: apiKeys.length + 1,
      name: 'New API Key',
      key: 'sk_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never'
    };
    
    setApiKeys([...apiKeys, newKey]);
  };

  // Delete API key
  const handleDeleteKey = (id: number) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
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
              <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your account settings and preferences.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`${
                        activeTab === 'profile'
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                    >
                      <User className="h-5 w-5 mr-2" />
                      Profile
                    </button>
                    <button
                      onClick={() => setActiveTab('billing')}
                      className={`${
                        activeTab === 'billing'
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Billing
                    </button>
                    <button
                      onClick={() => setActiveTab('notifications')}
                      className={`${
                        activeTab === 'notifications'
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                    >
                      <Bell className="h-5 w-5 mr-2" />
                      Notifications
                    </button>
                    <button
                      onClick={() => setActiveTab('security')}
                      className={`${
                        activeTab === 'security'
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                    >
                      <Shield className="h-5 w-5 mr-2" />
                      Security
                    </button>
                    <button
                      onClick={() => setActiveTab('api')}
                      className={`${
                        activeTab === 'api'
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                    >
                      <Key className="h-5 w-5 mr-2" />
                      API Keys
                    </button>
                  </nav>
                </div>

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="px-4 py-5 sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Update your account information and how we can reach you.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <form>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                value={profileForm.name}
                                onChange={handleProfileChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                value={profileForm.email}
                                onChange={handleProfileChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company
                              </label>
                              <input
                                type="text"
                                name="company"
                                id="company"
                                value={profileForm.company}
                                onChange={handleProfileChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                Website
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  https://
                                </span>
                                <input
                                  type="text"
                                  name="website"
                                  id="website"
                                  value={profileForm.website.replace('https://', '')}
                                  onChange={handleProfileChange}
                                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                />
                              </div>
                            </div>

                            <div className="col-span-6">
                              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                Profile photo
                              </label>
                              <div className="mt-2 flex items-center">
                                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                  <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    className="h-full w-full object-cover"
                                  />
                                </span>
                                <button
                                  type="button"
                                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex justify-end">
                            <button
                              type="button"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <Save className="h-4 w-4 mr-2" />
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                      <div className="py-5">
                        <div className="border-t border-gray-200"></div>
                      </div>
                    </div>

                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Preferences</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Customize your experience with AllInfo.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Moon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-300'}`} />
                              <Sun className={`h-5 w-5 ml-1 ${darkMode ? 'text-gray-300' : 'text-yellow-500'}`} />
                              <span className="ml-3 text-sm font-medium text-gray-900">Dark Mode</span>
                            </div>
                            <button
                              type="button"
                              className={`${
                                darkMode ? 'bg-indigo-600' : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                              onClick={() => setDarkMode(!darkMode)}
                            >
                              <span className="sr-only">Toggle dark mode</span>
                              <span
                                className={`${
                                  darkMode ? 'translate-x-5' : 'translate-x-0'
                                } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              >
                                <span
                                  className={`${
                                    darkMode ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'
                                  } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
                                >
                                  <Sun className="h-3 w-3 text-yellow-500" />
                                </span>
                                <span
                                  className={`${
                                    darkMode ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'
                                  } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
                                >
                                  <Moon className="h-3 w-3 text-gray-600" />
                                </span>
                              </span>
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Globe className="h-5 w-5 text-gray-400" />
                              <span className="ml-3 text-sm font-medium text-gray-900">Language</span>
                            </div>
                            <select
                              id="language"
                              name="language"
                              className="mt-1 block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                              <option>English</option>
                              <option>Spanish</option>
                              <option>French</option>
                              <option>German</option>
                            </select>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Smartphone className="h-5 w-5 text-gray-400" />
                              <span className="ml-3 text-sm font-medium text-gray-900">Mobile Notifications</span>
                            </div>
                            <button
                              type="button"
                              className="bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <span className="sr-only">Enable mobile notifications</span>
                              <span
                                className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                              ></span>
                            </button>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus: ring-offset-2 focus:ring-indigo-500"
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save Preferences
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Billing Tab */}
                {activeTab === 'billing' && (
                  <div className="px-4 py-5 sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Current Plan</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          View and manage your subscription plan.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-indigo-600">Professional Plan</h4>
                              <p className="text-sm text-gray-500 mt-1">Purchased on April 1, 2025</p>
                            </div>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          </div>
                          <div className="mt-4">
                            <h5 className="text-sm font-medium text-gray-700">Plan includes:</h5>
                            <ul className="mt-2 space-y-2 text-sm text-gray-500">
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                                Up to 10 Discord channels
                              </li>
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                                Advanced event notifications
                              </li>
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                                Custom notification templates
                              </li>
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                                Financial alerts
                              </li>
                              <li className="flex items-start">
                                <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                                Priority email support
                              </li>
                            </ul>
                          </div>
                          <div className="mt-6 flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900">$99</span>
                            <div>
                              <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Upgrade Plan
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-lg font-medium text-gray-900">Payment Method</h4>
                          <div className="mt-2 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <CreditCard className="h-8 w-8 text-gray-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">Visa ending in 4242</p>
                              <p className="text-sm text-gray-500">Expires 12/2025</p>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-lg font-medium text-gray-900">Billing History</h4>
                          <div className="mt-2 flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                  <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                      <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Description
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Receipt
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                      <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          Apr 1, 2025
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                          Professional Plan
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          $99.00
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Download
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div className="px-4 py-5 sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Notification Settings</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Decide how you want to be notified about important events.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-center">
                                <input
                                  id="email-notifications"
                                  name="email-notifications"
                                  type="checkbox"
                                  checked={emailNotifications}
                                  onChange={() => setEmailNotifications(!emailNotifications)}
                                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                                  Receive email notifications
                                </label>
                              </div>
                              <div className="ml-7 space-y-4">
                                <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="sales-emails"
                                      name="sales-emails"
                                      type="checkbox"
                                      disabled={!emailNotifications}
                                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label htmlFor="sales-emails" className={`font-medium ${emailNotifications ? 'text-gray-700' : 'text-gray-400'}`}>
                                      Sales notifications
                                    </label>
                                    <p className={`${emailNotifications ? 'text-gray-500' : 'text-gray-400'}`}>Get notified when a new sale is made.</p>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="user-emails"
                                      name="user-emails"
                                      type="checkbox"
                                      disabled={!emailNotifications}
                                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label htmlFor="user-emails" className={`font-medium ${emailNotifications ? 'text-gray-700' : 'text-gray-400'}`}>
                                      User activity
                                    </label>
                                    <p className={`${emailNotifications ? 'text-gray-500' : 'text-gray-400'}`}>Get notified when a new user signs up.</p>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="system-emails"
                                      name="system-emails"
                                      type="checkbox"
                                      disabled={!emailNotifications}
                                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label htmlFor="system-emails" className={`font-medium ${emailNotifications ? 'text-gray-700' : 'text-gray-400'}`}>
                                      System alerts
                                    </label>
                                    <p className={`${emailNotifications ? 'text-gray-500' : 'text-gray-400'}`}>Get notified about important system events.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-6 border-t border-gray-200">
                            <h4 className="text-sm font-medium text-gray-900">Discord Notifications</h4>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-center">
                                <input
                                  id="discord-notifications"
                                  name="discord-notifications"
                                  type="checkbox"
                                  checked={discordNotifications}
                                  onChange={() => setDiscordNotifications(!discordNotifications)}
                                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="discord-notifications" className="ml-3 text-sm text-gray-700">
                                  Send notifications to Discord
                                </label>
                              </div>
                              <div className="ml-7">
                                <p className="text-sm text-gray-500">
                                  Configure which notifications are sent to each Discord channel in the{' '}
                                  <a href="/discord-channels" className="text-indigo-600 hover:text-indigo-500">
                                    Discord Channels
                                  </a>{' '}
                                  section.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save Notification Settings
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div className="px-4 py-5 sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Password</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Update your password to keep your account secure.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <form>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-4">
                              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                                Current password
                              </label>
                              <input
                                type="password"
                                name="current-password"
                                id="current-password"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                                New password
                              </label>
                              <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                Confirm password
                              </label>
                              <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="mt-6 flex justify-end">
                            <button
                              type="button"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <Key className="h-4 w-4 mr-2" />
                              Update Password
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                      <div className="py-5">
                        <div className="border-t border-gray-200"></div>
                      </div>
                    </div>

                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Two-Factor Authentication</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Add an extra layer of security to your account.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-gray-900">Two-factor authentication is disabled</h4>
                              <p className="text-sm text-gray-500 mt-1">
                                Two-factor authentication adds an extra layer of security to your account by requiring more than just a password to sign in.
                              </p>
                            </div>
                            <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Enable
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                      <div className="py-5">
                        <div className="border-t border-gray-200"></div>
                      </div>
                    </div>

                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Sessions</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Manage your active sessions and sign out from other devices.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="overflow-hidden shadow sm:rounded-md">
                          <ul className="divide-y divide-gray-200">
                            <li>
                              <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                      <Globe className="h-6 w-6 text-gray-400" />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        Chrome on Windows
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        Last active: Just now (Current session)
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                      Current
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                      <Smartphone className="h-6 w-6 text-gray-400" />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        Safari on iPhone
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        Last active: 2 hours ago
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <button
                                      type="button"
                                      className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                      <LogOut className="h-3 w-3 mr-1" />
                                      Sign out
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="button"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <LogOut className="h-4 w-4 mr-2" />
                              Sign out of all other sessions
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* API Keys Tab */}
                {activeTab === 'api' && (
                  <div className="px-4 py-5 sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">API Keys</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Manage your API keys for integrating with AllInfo.
                        </p>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="flex justify-end mb-4">
                          <button
                            type="button"
                            onClick={handleGenerateKey}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Key className="h-4 w-4 mr-2" />
                            Generate New API Key
                          </button>
                        </div>

                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                          <ul className="divide-y divide-gray-200">
                            {apiKeys.map((apiKey) => (
                              <li key={apiKey.id}>
                                <div className="px-4 py-4 sm:px-6">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h4 className="text-sm font-medium text-indigo-600">{apiKey.name}</h4>
                                      <div className="mt-1 flex items-center">
                                        <input
                                          type="password"
                                          readOnly
                                          value={apiKey.key}
                                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-sm border-gray-300 rounded-md bg-gray-50"
                                        />
                                        <button
                                          type="button"
                                          className="ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                          onClick={() => navigator.clipboard.writeText(apiKey.key)}
                                        >
                                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                          </svg>
                                        </button>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Created: {apiKey.created} • Last used: {apiKey.lastUsed}
                                      </p>
                                    </div>
                                    <div className="ml-2 flex-shrink-0 flex">
                                      <button
                                        type="button"
                                        onClick={() => handleDeleteKey(apiKey.id)}
                                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                      >
                                        <Trash2 className="h-4 w-4 mr-1" />
                                        Revoke
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-sm font-medium text-gray-900">API Documentation</h4>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn how to integrate with our API to send notifications programmatically.
                          </p>
                          <div className="mt-2">
                            <a
                              href="#"
                              className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500"
                            >
                              View API Documentation
                              <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;