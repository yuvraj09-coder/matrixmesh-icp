import React from "react";
import {
  Bell,
  Twitter,
  Github as GitHub,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">AllInfo</span>
            </div>
            <p className="mt-4 text-gray-300">
              Real-time SaaS insights delivered directly to your Discord.
              Monitor your business metrics effortlessly with our one-time
              payment solution.
            </p>
            <div className="mt-6 flex space-x-6">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <GitHub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/api-docs"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="/changelog"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/about"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} AllInfo. All rights reserved , Built By UJJWAL SINHA.  
            </p>
          </div>

          <div className="mt-8 bg-gray-800 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-white font-medium">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Get the latest updates and news about AllInfo.
                </p>
              </div>
              <form className="mt-4 md:mt-0 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 appearance-none rounded-md border border-gray-700 bg-gray-700 py-2 px-4 text-base text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="ml-3 flex-shrink-0 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
