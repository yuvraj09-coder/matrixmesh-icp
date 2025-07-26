import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does AllInfo connect to my Discord server?",
    answer: "AllInfo uses Discord's official bot API. You'll authorize our bot to join your server through a secure OAuth2 flow, giving you complete control over which channels it can access."
  },
  {
    question: "What kind of events can I track with AllInfo?",
    answer: "You can track virtually any event in your SaaS application, including new sign-ups, subscription payments, feature usage, customer support tickets, and more. Our flexible API allows you to send any data you want to your Discord channels."
  },
  {
    question: "Is there a limit to how many notifications I can receive?",
    answer: "Each plan comes with a specific notification limit per month. The Starter plan includes 1,000 notifications, Pro includes 10,000, and Enterprise offers unlimited notifications."
  },
  {
    question: "Do I need to be a developer to use AllInfo?",
    answer: "While basic integration requires some technical knowledge, we provide detailed documentation and code examples to make it as simple as possible. Many popular SaaS platforms also have pre-built integrations available."
  },
  {
    question: "Is the pricing really one-time, or are there hidden fees?",
    answer: "Yes, AllInfo uses a one-time payment model. You pay once and use the service forever within the limits of your chosen plan. There are no monthly subscriptions or hidden fees."
  },
  {
    question: "Can I customize how the notifications look in Discord?",
    answer: "Absolutely! You can customize the appearance of your notifications with different colors, add your brand logo, include dynamic data, and format the text however you like using Discord's rich embed format."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to know about AllInfo and how it can help your business.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 text-base text-gray-500">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;