import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const integrations = [
  {
    name: 'Stripe',
    logo: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    description: 'Get notified about new payments, subscriptions, and failed charges.',
  },
  {
    name: 'Shopify',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    description: 'Track new orders, inventory updates, and customer signups.',
  },
  {
    name: 'GitHub',
    logo: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    description: 'Stay updated on new issues, pull requests, and deployments.',
  },
  {
    name: 'Intercom',
    logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    description: 'Get notified about new support conversations and resolved tickets.',
  },
  {
    name: 'HubSpot',
    logo: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    description: 'Track new leads, deals, and marketing campaign performance.',
  },
  {
    name: 'Custom API',
    logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    description: 'Connect any service with our flexible API and webhooks.',
  },
];

const Connective = () => {
  return (
    <div id="integrations" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Integrations</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Connect with your favorite tools
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AllInfo integrates seamlessly with popular SaaS platforms and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration) => (
            <div 
              key={integration.name} 
              className="bg-white rounded-lg shadow-md p-6 flex items-start transition-transform duration-200 hover:scale-105"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden">
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`} 
                  className="h-full w-full object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{integration.name}</h3>
                <p className="mt-2 text-base text-gray-500">{integration.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
            View all integrations
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connective; 