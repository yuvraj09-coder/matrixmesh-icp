import React from 'react';
import { ArrowRight, CheckCircle, Clock, Code, Settings } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Connect your Discord server',
    description: 'Add the AllInfo bot to your Discord server with just a few clicks.',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '02',
    title: 'Integrate with your SaaS',
    description: 'Use our simple API or integrations to connect your SaaS product.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '03',
    title: 'Configure your alerts',
    description: 'Choose which events trigger notifications and customize their appearance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '04',
    title: 'Start receiving notifications',
    description: 'Get real-time alerts in your Discord channels whenever important events occur.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple setup, powerful results
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Follow these easy steps to integrate AllInfo with your Discord server and start receiving instant updates.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              <div className="relative">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute -top-3 -left-3 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.id}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-600">
              <h3 className="text-2xl font-bold text-white mb-4">Setup in minutes, not days</h3>
              <p className="text-indigo-100 mb-6">
                Our streamlined integration process gets you up and running quickly, without complex configuration or development work.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0" />
                  <span className="text-white">No coding required for basic setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0" />
                  <span className="text-white">Pre-built integrations for popular platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0" />
                  <span className="text-white">Detailed documentation for advanced use cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0" />
                  <span className="text-white">Dedicated support for Enterprise customers</span>
                </li>
              </ul>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration options</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <Code className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">API Integration</h4>
                    <p className="mt-2 text-gray-600">
                      Use our RESTful API to send custom events from your application to AllInfo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <Settings className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">No-Code Integrations</h4>
                    <p className="mt-2 text-gray-600">
                      Connect with Zapier, n8n, or Make.com for codeless integration with 3000+ apps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Scheduled Reports</h4>
                    <p className="mt-2 text-gray-600">
                      Set up automated daily, weekly, or monthly reports delivered to your Discord.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;