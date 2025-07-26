import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small SaaS businesses just getting started.',
    features: [
      'Up to 3 Discord channels',
      'Basic event notifications',
      'Email support',
      'API access',
      '1,000 notifications/month',
    ],
    cta: 'Buy Now',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Ideal for growing SaaS businesses with more needs.',
    features: [
      'Up to 10 Discord channels',
      'Advanced event notifications',
      'Priority email support',
      'API access',
      '10,000 notifications/month',
      'Custom notification templates',
    ],
    cta: 'Buy Now',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'For established SaaS businesses with complex requirements.',
    features: [
      'Unlimited Discord channels',
      'Advanced event notifications',
      'Priority email & phone support',
      'API access',
      'Unlimited notifications',
      'Custom notification templates',
      'Dedicated account manager',
      'Custom integrations',
    ],
    cta: 'Buy Now',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Buy once, use forever. No monthly subscriptions or hidden fees.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                tier.mostPopular
                  ? 'border-indigo-500 ring-2 ring-indigo-500'
                  : 'border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {tier.mostPopular && (
                <motion.div
                  className="absolute top-0 right-6 -mt-4 bg-indigo-500 rounded-full px-4 py-1 text-xs font-semibold text-white uppercase tracking-wide"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Most popular
                </motion.div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-xl font-semibold">/lifetime</span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
