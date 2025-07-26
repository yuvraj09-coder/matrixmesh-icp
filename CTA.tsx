import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const CTA = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to supercharge your SaaS monitoring?</span>
            <span className="block text-indigo-200">Get started with AllInfo today.</span>
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-3xl">
            Join hundreds of SaaS businesses that use AllInfo to stay informed about critical events in real-time.
            Our one-time payment model means you'll never worry about recurring costs again.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-2">For Startups</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Affordable one-time pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Easy integration with popular tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">No technical expertise required</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-2">For Enterprises</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Advanced security features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Custom integration support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Dedicated account manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-0 lg:ml-8 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start monitoring today</h3>
            <p className="text-gray-600 mb-6">
              Set up AllInfo in minutes and start receiving real-time notifications in your Discord.
            </p>
            <div className="space-y-4">
              <button   onClick={() => navigate("/dashboard")}className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-md">
                Get started
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </button>
              <button className="w-full flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50">
                Schedule a demo
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;