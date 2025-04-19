import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useEvents, useFeaturedEvents } from '@/hooks/use-events';
import EventCalendar from '@/components/ui/EventCalendar';
import { Link } from 'wouter';
import { Event } from '@/lib/types';

const Events = () => {
  const { data: events, isLoading: eventsLoading, isError: eventsError } = useEvents();
  const { data: featuredEvents, isLoading: featuredLoading, isError: featuredError } = useFeaturedEvents();
  
  const [selectedMonth, setSelectedMonth] = useState("July 2025");
  
  const isLoading = eventsLoading || featuredLoading;
  const isError = eventsError || featuredError;
  
  // Format event date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Get event details for display
  const getEventDetails = (event: Event) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="inline-block bg-[#0094D4] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
          {event.featured ? "Featured Event" : "Upcoming Event"}
        </div>
        <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-3">{event.name}</h3>
        <p className="text-gray-700 mb-6">{event.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Date & Time</h4>
            <div className="flex items-center text-gray-700 mb-2">
              <i className="far fa-calendar-alt w-6 text-[#00A9DD]"></i>
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <i className="far fa-clock w-6 text-[#00A9DD]"></i>
              <span>{event.startTime} - {event.endTime}</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Location</h4>
            <div className="flex items-center text-gray-700">
              <i className="fas fa-map-marker-alt w-6 text-[#00A9DD]"></i>
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        {event.imageUrl && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src={event.imageUrl} 
              alt={event.name} 
              className="w-full h-56 object-cover"
            />
          </div>
        )}
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="#" 
            className="inline-flex items-center bg-[#0677BA] hover:bg-[#0054AA] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Add to Calendar <i className="fas fa-calendar-plus ml-2"></i>
          </a>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white border-2 border-[#0677BA] text-[#0677BA] hover:bg-[#E9F6FB] font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Inquire About This Event
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Events | Miramar Food Hall</title>
        <meta name="description" content="Discover upcoming events at Miramar Food Hall in San Clemente, CA. Join us for tastings, live music, and special celebrations." />
      </Helmet>
      
      <div className="pt-24 md:pt-20 bg-[#E8F1F8]">
        {/* Hero Banner */}
        <div className="relative">
          <div 
            className="h-[40vh] bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
          >
            <div className="absolute inset-0 bg-[#0054AA] bg-opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white leading-tight">EVENTS</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-[#E8F1F8]">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0054AA] mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join us for special events, tastings, live music, and more. From grand opening celebrations to seasonal festivals, there's always something exciting happening at Miramar Food Hall.
            </p>
          </div>
          
          {/* Loading and Error States */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-[#0094D4] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-[#0054AA] font-montserrat">Loading events...</p>
            </div>
          )}
          
          {isError && (
            <div className="text-center py-12 text-red-600">
              <i className="fas fa-exclamation-circle text-4xl mb-4"></i>
              <p>Error loading events. Please try again later.</p>
            </div>
          )}
          
          {/* Events Content */}
          {!isLoading && !isError && events && (
            <>
              {/* Featured Event */}
              {featuredEvents && featuredEvents.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-6">Featured Event</h3>
                  <div className="bg-[#0054AA] rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 p-8 md:p-12">
                        <div className="inline-block bg-[#0094D4] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                          Featured Event
                        </div>
                        <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                          {featuredEvents[0].name}
                        </h3>
                        <p className="text-white opacity-90 mb-6">
                          {featuredEvents[0].description}
                        </p>
                        <div className="mb-6">
                          <div className="flex items-center text-white mb-2">
                            <i className="far fa-calendar-alt mr-2"></i>
                            <span>{formatDate(featuredEvents[0].date)}</span>
                          </div>
                          <div className="flex items-center text-white mb-2">
                            <i className="far fa-clock mr-2"></i>
                            <span>{featuredEvents[0].startTime} - {featuredEvents[0].endTime}</span>
                          </div>
                          <div className="flex items-center text-white">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            <span>{featuredEvents[0].location}</span>
                          </div>
                        </div>
                        <a 
                          href="#featuredDetails" 
                          className="inline-block bg-white text-[#0054AA] font-montserrat font-semibold py-3 px-6 rounded-md hover:bg-[#CADEEF] transition-colors"
                        >
                          Learn More
                        </a>
                      </div>
                      <div 
                        className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" 
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Events Calendar */}
              <div className="mb-16">
                <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-6">Events Calendar</h3>
                <EventCalendar events={events} />
              </div>
              
              {/* Event Details */}
              <div id="eventDetails" className="mb-16">
                <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-6">Event Details</h3>
                
                {/* Featured Event Details */}
                {featuredEvents && featuredEvents.length > 0 && (
                  <div id="featuredDetails">
                    {getEventDetails(featuredEvents[0])}
                  </div>
                )}
                
                {/* Other Events */}
                {events.length > 0 && (
                  <div>
                    {events
                      .filter(event => !event.featured)
                      .map(event => (
                        <div key={event.id} id={`event-${event.id}`}>
                          {getEventDetails(event)}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
              
              {/* Host an Event */}
              <div className="bg-white rounded-lg shadow-md p-8 mt-12">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4 text-center">Host Your Event at Miramar Food Hall</h3>
                  <p className="text-gray-700 mb-6 text-center">
                    Looking for a unique venue for your next celebration, corporate event, or special occasion? Miramar Food Hall offers customizable spaces with stunning ocean views and exceptional catering options.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#0094D4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-glass-cheers text-white text-2xl"></i>
                      </div>
                      <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Private Parties</h4>
                      <p className="text-gray-700 text-sm">Birthdays, anniversaries, graduations, and more.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#00A9DD] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-briefcase text-white text-2xl"></i>
                      </div>
                      <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Corporate Events</h4>
                      <p className="text-gray-700 text-sm">Team gatherings, client meetings, and networking events.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#7BADD7] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-utensils text-white text-2xl"></i>
                      </div>
                      <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Food Experiences</h4>
                      <p className="text-gray-700 text-sm">Tastings, cooking demonstrations, and culinary tours.</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Link 
                      href="/contact" 
                      className="inline-block bg-[#0677BA] hover:bg-[#0054AA] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
                    >
                      Inquire About Event Hosting
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
