import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  CreditCard,
  BarChart2,
  RefreshCw,
  Filter,
  Plus
} from 'lucide-react';
import Sidebar from './Sidebar';

// Sample events data
const events = [
  {
    id: 1,
    title: 'Monthly Financial Report',
    date: '2025-04-30T09:00:00',
    type: 'report',
    description: 'Review and analyze monthly financial performance',
    attendees: ['finance@company.com', 'ceo@company.com'],
    location: 'Virtual Meeting'
  },
  {
    id: 2,
    title: 'Subscription Renewal - Enterprise Plan',
    date: '2025-05-05T00:00:00',
    type: 'renewal',
    description: 'Major client subscription renewal due',
    amount: 1999,
    customer: 'Tech Solutions Inc.'
  },
  {
    id: 3,
    title: 'Product Update Release',
    date: '2025-04-25T12:00:00',
    type: 'update',
    description: 'Launch of new features and improvements',
    version: 'v2.1.0'
  },
  {
    id: 4,
    title: 'Quarterly Business Review',
    date: '2025-05-15T14:00:00',
    type: 'report',
    description: 'Q2 2025 business performance review',
    attendees: ['management@company.com', 'stakeholders@company.com'],
    location: 'Conference Room A'
  },
  {
    id: 5,
    title: 'Team Planning Session',
    date: '2025-05-10T10:00:00',
    type: 'meeting',
    description: 'Strategic planning for Q3 initiatives',
    attendees: ['team@company.com'],
    location: 'Virtual Meeting'
  }
];

const CalendarView = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState('month');

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventType = (type: string) => {
    switch (type) {
      case 'report':
        return { icon: BarChart2, bgColor: 'bg-blue-100', textColor: 'text-blue-800' };
      case 'renewal':
        return { icon: CreditCard, bgColor: 'bg-green-100', textColor: 'text-green-800' };
      case 'update':
        return { icon: RefreshCw, bgColor: 'bg-purple-100', textColor: 'text-purple-800' };
      default:
        return { icon: CalendarIcon, bgColor: 'bg-gray-100', textColor: 'text-gray-800' };
    }
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="bg-gray-50 p-2 h-32"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === day && 
               eventDate.getMonth() === currentDate.getMonth() && 
               eventDate.getFullYear() === currentDate.getFullYear();
      });

      days.push(
        <div key={day} className="bg-white border-t border-l p-2 h-32 relative">
          <div className="font-medium text-sm">{day}</div>
          <div className="space-y-1 mt-1">
            {dayEvents.map(event => {
              const { icon: Icon, bgColor, textColor } = getEventType(event.type);
              return (
                <div 
                  key={event.id}
                  className={`${bgColor} ${textColor} text-xs p-1 rounded flex items-center cursor-pointer hover:opacity-75`}
                >
                  <Icon className="h-3 w-3 mr-1" />
                  <span className="truncate">{event.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? 'visible' : 'invisible'}`}>
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${sidebarOpen ? 'opacity-100 ease-out duration-300' : 'opacity-0 ease-in duration-200'}`} onClick={() => setSidebarOpen(false)}></div>
        <Sidebar mobile={true} setSidebarOpen={setSidebarOpen} />
        <div className="flex-shrink-0 w-14"></div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <Sidebar mobile={false} />
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
                  <p className="mt-1 text-sm text-gray-500">
                    View and manage upcoming events and deadlines
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Filter className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                    Filter
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Plus className="-ml-1 mr-2 h-5 w-5" />
                    Add Event
                  </button>
                </div>
              </div>

              {/* Calendar Header */}
              <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button
                        onClick={previousMonth}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                      </button>
                      <h2 className="mx-4 text-xl font-semibold text-gray-900">
                        {formatDate(currentDate)}
                      </h2>
                      <button
                        onClick={nextMonth}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedView('month')}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          selectedView === 'month'
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Month
                      </button>
                      <button
                        onClick={() => setSelectedView('week')}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          selectedView === 'week'
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Week
                      </button>
                      <button
                        onClick={() => setSelectedView('day')}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          selectedView === 'day'
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Day
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="mt-6">
                    <div className="grid grid-cols-7 gap-px">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-px bg-gray-200">
                      {renderCalendarGrid()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Upcoming Events
                  </h3>
                  <div className="mt-4 space-y-4">
                    {events.map(event => {
                      const { icon: Icon, bgColor, textColor } = getEventType(event.type);
                      return (
                        <div key={event.id} className="flex items-start space-x-4">
                          <div className={`${bgColor} rounded-full p-2`}>
                            <Icon className={`h-5 w-5 ${textColor}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                            <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                            <div className="mt-2 flex items-center text-xs text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {new Date(event.date).toLocaleString()}
                              {event.location && (
                                <span className="ml-4">{event.location}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CalendarView;