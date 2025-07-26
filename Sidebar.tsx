import React from 'react';
import { 
  Bell, 
  Home, 
  Settings, 
  MessageSquare,
  X,
  Puzzle,
  CreditCard,
  ArrowUp
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
interface SidebarProps {
  mobile?: boolean;
  setSidebarOpen?: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobile = false, setSidebarOpen }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
const navigator= useNavigate(); 
  return (
    <div className={`${mobile ? 'relative flex-1 flex flex-col max-w-xs w-full' : 'flex flex-col w-64'} bg-indigo-700`}>
      {mobile && setSidebarOpen && (
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Bell className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">AllInfo</span>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          <Link 
            to="/dashboard" 
            className={`${isActive('/dashboard') ? 'bg-indigo-800' : 'hover:bg-indigo-600'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <Home className="mr-3 h-6 w-6" />
            Dashboard
          </Link>
          <Link 
            to="/discord-channels" 
            className={`${isActive('/discord-channels') ? 'bg-indigo-800' : 'hover:bg-indigo-600'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <MessageSquare className="mr-3 h-6 w-6" />
            Discord Channels
          </Link>
          <Link 
            to="/notifications" 
            className={`${isActive('/notifications') ? 'bg-indigo-800' : 'hover:bg-indigo-600'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <Bell className="mr-3 h-6 w-6" />
            Notifications
          </Link>
          <Link 
            to="/integrations" 
            className={`${isActive('/integrations') ? 'bg-indigo-800' : 'hover:bg-indigo-600'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <Puzzle className="mr-3 h-6 w-6" />
            Integrations
          </Link>
          <Link 
            to="/settings" 
            className={`${isActive('/settings') ? 'bg-indigo-800' : 'hover:bg-indigo-600'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <Settings className="mr-3 h-6 w-6" />
            Settings
          </Link>
          <Link 
            to="/upgrade" 
            className={`${isActive('/upgrade') ? 'bg-indigo-800' : 'hover:bg-indigo-600'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
            onClick={() => navigator("/upgrade")}
          >
            <ArrowUp className="mr-3 h-6 w-6" />
            Upgrade Plan
          </Link>
        </nav>
        
        {/* Upgrade Plan Card */}
        <div className="mt-6 mx-2">
          <div className="bg-indigo-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-indigo-200" />
                <span className="ml-2 text-sm font-medium text-white">Current Plan</span>
              </div>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-600 text-white">Starter</span>
            </div>
            <div className="mt-3">
              <div className="text-xs text-indigo-200">
                <div className="flex items-center mb-1">
                  <span className="mr-2">●</span>
                  <span>3/3 Discord channels used</span>
                </div>
                <div className="flex items-center mb-1">
                  <span className="mr-2">●</span>
                  <span>Basic notifications</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">●</span>
                  <span>Limited integrations</span>
                </div>
              </div>
              <button className="mt-3 w-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium py-2 px-4 rounded-md flex items-center justify-center">
                <ArrowUp className="h-4 w-4 mr-1" />
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
        <Link to="/" className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Tom Cook</p>
              <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;