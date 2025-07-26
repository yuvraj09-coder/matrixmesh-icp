import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              className="sm:text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Heading */}
              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="block xl:inline">Real-Time SaaS Insights,</span>{" "}
                <span className="block text-indigo-600 xl:inline">Delivered to Your Discord And Other Platform</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
               AllInfo is the easiest way to monitor your SaaS Product. Get instant notifications for sales, new users, financial updates or any other event sent directly to your Discord.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="rounded-md shadow">
                  <motion.button
                    onClick={() => navigate("/dashboard")}
                    className="w-full flex items-center justify-center px-8 py-3
                     border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Get started
                  </motion.button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <motion.a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border 
                    border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Learn more
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
         {/* Floating notification mockup */}
         <div className="absolute top-1/4 right-8 bg-white rounded-lg shadow-xl p-4 max-w-xs transform rotate-3 animate-pulse">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">New Customer!</h3>
                <p className="mt-1 text-sm text-gray-500">
                  John Smith just signed up for the Pro plan ($99/mo)
                </p>
                <p className="mt-1 text-xs text-gray-400">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Hero;
