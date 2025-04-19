import { Link } from "wouter";
import { useEvents, useFeaturedEvents } from "@/hooks/use-events";
import EventCalendar from "@/components/ui/EventCalendar";

const EventsSection = () => {
  const { data: events, isLoading: eventsLoading, isError: eventsError } = useEvents();
  const { data: featuredEvents, isLoading: featuredLoading, isError: featuredError } = useFeaturedEvents();
  
  const isLoading = eventsLoading || featuredLoading;
  const isError = eventsError || featuredError;
  
  // Default featured event
  const featuredEvent = featuredEvents && featuredEvents.length > 0 ? featuredEvents[0] : null;

  if (isLoading) {
    return <div className="text-center py-16">Loading events...</div>;
  }

  if (isError) {
    return <div className="text-center py-16 text-red-600">Error loading events.</div>;
  }

  return (
    <section className="py-16 bg-white" id="events">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0054AA] mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join us for special events, tastings, live music, and more coming in Summer 2025.
          </p>
        </div>
        
        {/* Events Calendar */}
        {events && events.length > 0 && <EventCalendar events={events} />}
        
        {/* Featured Event */}
        {featuredEvent && (
          <div className="bg-[#0054AA] rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-block bg-[#0094D4] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Featured Event
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
                  {featuredEvent.name}
                </h3>
                <p className="text-white opacity-90 mb-6">
                  {featuredEvent.description}
                </p>
                <div className="mb-6">
                  <div className="flex items-center text-white mb-2">
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>
                      {new Date(featuredEvent.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-white mb-2">
                    <i className="far fa-clock mr-2"></i>
                    <span>{featuredEvent.startTime} - {featuredEvent.endTime}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
                <Link 
                  href={`/events/${featuredEvent.id}`} 
                  className="inline-block bg-white text-[#0054AA] font-montserrat font-semibold py-3 px-6 rounded-md hover:bg-[#CADEEF] transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div 
                className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')` 
                }}
              >
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
