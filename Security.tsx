import React from 'react';
import { Shield, Lock, Key, Eye, Server, FileText } from 'lucide-react';

const securityFeatures = [
  {
    name: 'End-to-End Encryption',
    description: 'All data transmitted between your systems and AllInfo is encrypted using industry-standard TLS 1.3.',
    icon: Lock,
  },
  {
    name: 'API Key Authentication',
    description: 'Secure API keys with configurable permissions ensure only authorized systems can send notifications.',
    icon: Key,
  },
  {
    name: 'Privacy Controls',
    description: 'Fine-grained controls let you determine exactly what data is shared and with whom.',
    icon: Eye,
  },
  {
    name: 'SOC 2 Compliant',
    description: 'Our infrastructure and processes meet SOC 2 compliance standards for security and availability.',
    icon: Shield,
  },
  {
    name: 'Data Residency Options',
    description: 'Choose where your data is stored to meet regulatory and compliance requirements.',
    icon: Server,
  },
  {
    name: 'Audit Logging',
    description: 'Comprehensive logs of all system activities for security monitoring and compliance reporting.',
    icon: FileText,
  },
];

const Security = () => {
  return (
    <div id="security" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Security</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enterprise-grade security
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your data security is our top priority. AllInfo implements multiple layers of protection to keep your information safe.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {securityFeatures.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 bg-gradient-to-r from-indigo-600 to-blue-600">
            <h3 className="text-2xl font-bold text-white">Security certifications</h3>
            <p className="mt-2 text-indigo-100">
              AllInfo meets the highest security standards in the industry.
            </p>
          </div>
          <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-gray-900">SOC 2 Type II</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Lock className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-gray-900">GDPR Compliant</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Server className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-gray-900">ISO 27001</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-gray-900">HIPAA Compliant</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 md:p-8">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Our security commitment</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Regular security audits and penetration testing</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Continuous monitoring for suspicious activities</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Automatic security patches and updates</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Data backups with point-in-time recovery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;