import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  CreditCard, 
  Check, 
  ArrowRight, 
  ArrowUp, 
  Shield, 
  Zap, 
  MessageSquare, 
  Bell, 
  Puzzle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

// Plan features
const planFeatures = {
  starter: {
    name: 'Starter',
    price: '$49',
    discordChannels: 3,
    notificationTypes: ['Sales', 'New Users'],
    customTemplates: false,
    integrations: 2,
    support: 'Email',
    apiAccess: false,
    dataRetention: '30 days',
    analyticsDepth: 'Basic',
  },
  professional: {
    name: 'Professional',
    price: '$99',
    discordChannels: 10,
    notificationTypes: ['Sales', 'New Users', 'Financial', 'System'],
    customTemplates: true,
    integrations: 5,
    support: 'Priority Email',
    apiAccess: true,
    dataRetention: '90 days',
    analyticsDepth: 'Advanced',
  },
  enterprise: {
    name: 'Enterprise',
    price: '$199',
    discordChannels: 'Unlimited',
    notificationTypes: ['All Available'],
    customTemplates: true,
    integrations: 'Unlimited',
    support: 'Dedicated Support',
    apiAccess: true,
    dataRetention: '1 year',
    analyticsDepth: 'Comprehensive',
  }
};

// FAQ items
const faqItems = [
  {
    question: 'How do I upgrade my plan?',
    answer: 'You can upgrade your plan by selecting the plan you want and clicking the "Upgrade Now" button. You\'ll be taken to a secure checkout page where you can complete your purchase.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'We don\'t offer a free trial, but we do have a 30-day money-back guarantee if you\'re not satisfied with your purchase.'
  },
  {
    question: 'Can I downgrade my plan later?',
    answer: 'Yes, you can downgrade your plan at any time. Your current plan benefits will remain active until the end of your current billing period.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact our support team within 30 days for a full refund.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) as well as PayPal.'
  }
];

const UpgradePlan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
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
              <h1 className="text-2xl font-semibold text-gray-900">Upgrade Your Plan</h1>
              <p className="mt-1 text-sm text-gray-500">
                Choose the plan that best fits your needs and take your Discord notifications to the next level.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              {/* Current Plan */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Your Current Plan</h3>
                  <div className="mt-5 border-t border-gray-200 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Starter Plan</h4>
                          <p className="text-sm text-gray-500">One-time purchase of $49</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="bg-gray-50 overflow-hidden rounded-lg p-4">
                        <div className="flex items-center">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                          <span className="ml-2 text-sm font-medium text-gray-900">Discord Channels</span>
                        </div>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-2xl font-semibold text-indigo-600">3/3</span>
                          <span className="ml-2 text-sm text-gray-500">channels used</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 overflow-hidden rounded-lg p-4">
                        <div className="flex items-center">
                          <Bell className="h-5 w-5 text-gray-400" />
                          <span className="ml-2 text-sm font-medium text-gray-900">Notification Types</span>
                        </div>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-2xl font-semibold text-indigo-600">2</span>
                          <span className="ml-2 text-sm text-gray-500">types available</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 overflow-hidden rounded-lg p-4">
                        <div className="flex items-center">
                          <Puzzle className="h-5 w-5 text-gray-400" />
                          <span className="ml-2 text-sm font-medium text-gray-900">Integrations</span>
                        </div>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-2xl font-semibold text-indigo-600">2/2</span>
                          <span className="ml-2 text-sm text-gray-500">integrations used</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="rounded-md bg-yellow-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Shield className="h-5 w-5 text-yellow-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">Plan Limitations</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                              <p>
                                You've reached the maximum number of Discord channels and integrations available on your current plan. 
                                Upgrade to unlock more features and capacity.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900">Choose Your Plan</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Select the plan that best fits your needs. All plans are one-time purchases with lifetime access.
                </p>
                <div className="mt-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
                  {/* Starter Plan */}
                  <div className={`border rounded-lg shadow-sm divide-y divide-gray-200 ${selectedPlan === 'starter' ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-200'}`}>
                    <div className="p-6">
                      <h2 className="text-lg leading-6 font-medium text-gray-900">Starter</h2>
                      <p className="mt-4 text-sm text-gray-500">Perfect for small SaaS businesses just getting started.</p>
                      <p className="mt-8">
                        <span className="text-4xl font-extrabold text-gray-900">$49</span>
                        <span className="text-base font-medium text-gray-500">/one-time</span>
                      </p>
                      <button
                        onClick={() => setSelectedPlan('starter')}
                        className={`mt-8 block w-full py-2 px-3 border rounded-md shadow-sm text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                          selectedPlan === 'starter'
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 border-transparent'
                            : 'bg-white text-indigo-600 hover:bg-gray-50 border-indigo-600'
                        }`}
                      >
                        {selectedPlan === 'starter' ? 'Selected' : 'Select'}
                      </button>
                    </div>
                    <div className="pt-6 pb-8 px-6">
                      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                      <ul className="mt-6 space-y-4">
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Up to 3 Discord channels</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Basic event notifications</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Sales alerts</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">New user notifications</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Email support</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Professional Plan */}
                  <div className={`border rounded-lg shadow-sm divide-y divide-gray-200 ${selectedPlan === 'professional' ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-200'}`}>
                    <div className="p-6">
                      <h2 className="text-lg leading-6 font-medium text-gray-900">Professional</h2>
                      <p className="mt-4 text-sm text-gray-500">For growing SaaS businesses with more advanced needs.</p>
                      <p className="mt-8">
                        <span className="text-4xl font-extrabold text-gray-900">$99</span>
                        <span className="text-base font-medium text-gray-500">/one-time</span>
                      </p>
                      <button
                        onClick={() => setSelectedPlan('professional')}
                        className={`mt-8 block w-full py-2 px-3 border rounded-md shadow-sm text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                          selectedPlan === 'professional'
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 border-transparent'
                            : 'bg-white text-indigo-600 hover:bg-gray-50 border-indigo-600'
                        }`}
                      >
                        {selectedPlan === 'professional' ? 'Selected' : 'Select'}
                      </button>
                    </div>
                    <div className="pt-6 pb-8 px-6">
                      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                      <ul className="mt-6 space-y-4">
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Up to 10 Discord channels</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Advanced event notifications</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Custom notification templates</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Financial alerts</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">User activity monitoring</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Priority email support</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className={`border rounded-lg shadow-sm divide-y divide-gray-200 ${selectedPlan === 'enterprise' ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-200'}`}>
                    <div className="p-6">
                      <h2 className="text-lg leading-6 font-medium text-gray-900">Enterprise</h2>
                      <p className="mt-4 text-sm text-gray-500">For large SaaS businesses with complex requirements.</p>
                      <p className="mt-8">
                        <span className="text-4xl font-extrabold text-gray-900">$199</span>
                        <span className="text-base font-medium text-gray-500">/one-time</span>
                      </p>
                      <button
                        onClick={() => setSelectedPlan('enterprise')}
                        className={`mt-8 block w-full py-2 px-3 border rounded-md shadow-sm text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                          selectedPlan === 'enterprise'
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 border-transparent'
                            : 'bg-white text-indigo-600 hover:bg-gray-50 border-indigo-600'
                        }`}
                      >
                        {selectedPlan === 'enterprise' ? 'Selected' : 'Select'}
                      </button>
                    </div>
                    <div className="pt-6 pb-8 px-6">
                      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                      <ul className="mt-6 space-y-4">
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Unlimited Discord channels</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Advanced event notifications</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Custom notification templates</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Financial alerts</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">User activity monitoring</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Custom integrations</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">Dedicated support</span>
                        </li>
                        <li className="flex space-x-3">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-500">API access</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Comparison */}
              <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Plan Comparison
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Detailed comparison of features across all plans.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Feature
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Starter
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Professional
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Price
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          $49
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          $99
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          $199
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Discord Channels
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          3
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          10
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Notification Types
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Sales, New Users
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Sales, New Users, Financial, System
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          All Available
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Custom Templates
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <X className="h-5 w-5 text-red-500" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Check className="h-5 w-5 text-green-500" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Check className="h-5 w-5 text-green-500" />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Integrations
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          5
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Support
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Email
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Priority Email
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Dedicated Support
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          API Access
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <X className="h-5 w-5 text-red-500" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Check className="h-5 w-5 text-green-500" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Check className="h-5 w-5 text-green-500" />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Data Retention
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          30 days
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          90 days
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          1 year
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Analytics Depth
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Basic
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Advanced
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Comprehensive
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Upgrade Button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <ArrowUp className="mr-2 h-5 w-5" />
                  Upgrade to Plan
                </button>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <dl className="space-y-6 divide-y divide-gray-200">
                    {faqItems.map((item, index) => (
                      <div key={index} className={index === 0 ? '' : 'pt-6'}>
                        <dt className="text-lg">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none"
                          >
                            <span className="font-medium text-gray-900">{item.question}</span>
                            <span className="ml-6 h-7 flex items-center">
                              {expandedFaq === index ? (
                                <ChevronUp className="h-6 w-6" />
                              ) : (
                                <ChevronDown className="h-6 w-6" />
                              )}
                            </span>
                          </button>
                        </dt>
                        {expandedFaq === index && (
                          <dd className="mt-2 pr-12">
                            <p className="text-base text-gray-500">{item.answer}</p>
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Contact Support */}
              <div className="mt-8 mb-8 bg-indigo-50 shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Need Help Deciding?</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Our team is ready to help you choose the right plan for your needs.</p>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      <HelpCircle className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                      Contact Support
                    </button>
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

export default UpgradePlan;