import { useState } from "react";
import { Event } from "@/lib/types";

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState("July 2025");

  // This is a simplified version. In a real app, you would implement 
  // proper month navigation and filtering of events by month.
  
  // Function to parse event date for sorting
  const parseEventDate = (dateString: string) => new Date(dateString);
  
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => 
    parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-[#E9F6FB] rounded-lg shadow-md p-6 md:p-8 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4 md:mb-0">Events Calendar</h3>
        <div className="flex items-center space-x-2">
          <button className="bg-white hover:bg-[#CADEEF] p-2 rounded-full transition-colors">
            <i className="fas fa-chevron-left text-[#0054AA]"></i>
          </button>
          <span className="font-montserrat font-semibold text-[#0054AA]">{currentMonth}</span>
          <button className="bg-white hover:bg-[#CADEEF] p-2 rounded-full transition-colors">
            <i className="fas fa-chevron-right text-[#0054AA]"></i>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[768px]">
          <thead>
            <tr>
              <th className="py-3 text-left font-montserrat font-semibold text-[#0054AA]">Event</th>
              <th className="py-3 text-left font-montserrat font-semibold text-[#0054AA]">Date</th>
              <th className="py-3 text-left font-montserrat font-semibold text-[#0054AA]">Time</th>
              <th className="py-3 text-left font-montserrat font-semibold text-[#0054AA]">Location</th>
              <th className="py-3 text-left font-montserrat font-semibold text-[#0054AA]">Details</th>
            </tr>
          </thead>
          <tbody>
            {sortedEvents.map(event => (
              <tr key={event.id} className="border-t border-[#CADEEF]">
                <td className="py-4">
                  <div className="font-montserrat font-semibold text-[#0054AA]">{event.name}</div>
                </td>
                <td className="py-4 text-gray-700">{formatDate(event.date)}</td>
                <td className="py-4 text-gray-700">{event.startTime} - {event.endTime}</td>
                <td className="py-4 text-gray-700">{event.location}</td>
                <td className="py-4">
                  <a href={`/events/${event.id}`} className="text-[#0094D4] hover:text-[#0677BA]">
                    <i className="fas fa-info-circle mr-1"></i> Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventCalendar;
