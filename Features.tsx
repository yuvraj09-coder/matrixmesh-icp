import React from 'react';
import { Bell, Clock, DollarSign, Users, Zap, Shield, BarChart2, Globe, Sliders, Smartphone } from 'lucide-react';

const features = [
  {
    name: 'Real-time Discord alerts',
    description: 'Get instant notifications for critical events directly in your Discord channels.',
    icon: Bell,
    color: 'bg-red-500',
  },
  {
    name: 'Buy once, use forever',
    description: 'No monthly subscriptions. Pay once and use AllInfo for as long as you want.',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    name: 'Track sales & new users',
    description: 'Monitor important metrics like new sales, user signups, and other key events.',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    name: 'Lightning fast setup',
    description: 'Get up and running in minutes with our simple integration process.',
    icon: Zap,
    color: 'bg-yellow-500',
  },
  {
    name: 'Customizable alerts',
    description: 'Choose which events trigger notifications and customize their appearance.',
    icon: Sliders,
    color: 'bg-purple-500',
  },
  {
    name: 'Secure & reliable',
    description: 'Your data is encrypted and our service maintains 99.9% uptime.',
    icon: Shield,
    color: 'bg-indigo-500',
  },
  {
    name: 'Advanced analytics',
    description: 'Gain insights into your business with detailed analytics and reporting.',
    icon: BarChart2,
    color: 'bg-pink-500',
  },
  {
    name: 'Global availability',
    description: 'Our infrastructure is distributed globally for fast performance worldwide.',
    icon: Globe,
    color: 'bg-teal-500',
  },
  {
    name: 'Mobile notifications',
    description: 'Get alerts on your mobile device with our companion mobile app.',
    icon: Smartphone,
    color: 'bg-orange-500',
  },
  {
    name: 'Scheduled reports',
    description: 'Set up automated reports to be delivered at regular intervals.',
    icon: Clock,
    color: 'bg-cyan-500',
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to monitor your SaaS
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AllInfo provides powerful tools to keep you informed about your business in real-time.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className={`absolute flex items-center justify-center h-12 w-12 rounded-md ${feature.color} text-white transform transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Why choose AllInfo?</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Unlike other monitoring solutions that charge monthly fees, AllInfo offers a one-time payment model with all these benefits:
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-700">No recurring costs eating into your profits</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Predictable cost structure for better financial planning</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Lifetime updates and improvements at no extra cost</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Scale your business without increasing monitoring costs</p>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 bg-indigo-600 rounded-full transform rotate-45"></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Customer success story</h4>
                  <blockquote className="italic text-gray-600 mb-6">
                    "AllInfo has transformed how we monitor our SaaS business. We've increased our response time to critical events by 78% and improved customer satisfaction scores by 23% in just three months."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">UJJWAL SINHA</p>
                      <p className="text-sm text-gray-500">CEO, TechFlow</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-2xl font-bold text-indigo-600">88%</p>
                        <p className="text-sm text-gray-500">Faster response time</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-indigo-600">33%</p>
                        <p className="text-sm text-gray-500">Improved satisfaction</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-indigo-600">100%</p>
                        <p className="text-sm text-gray-500">Team adoption</p>
                      </div>
                    </div>
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

export default Features;