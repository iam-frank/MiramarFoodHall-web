import { Helmet } from 'react-helmet';
import { Link } from 'wouter';

const Visit = () => {
  return (
    <>
      <Helmet>
        <title>Visit | Miramar Food Hall</title>
        <meta name="description" content="Plan your visit to Miramar Food Hall in San Clemente, CA. Find our location, hours, parking information, and directions." />
      </Helmet>
      
      <div className="pt-24 md:pt-20 bg-[#E8F1F8]">
        {/* Hero Banner */}
        <div className="relative">
          <div 
            className="h-[40vh] bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80')" }}
          >
            <div className="absolute inset-0 bg-[#0054AA] bg-opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white leading-tight">PLAN YOUR VISIT</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-[#E8F1F8]">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Location & Hours Info */}
            <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">Location & Hours</h2>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Address</h3>
                <p className="text-gray-700">123 Oceanfront Drive<br />San Clemente, CA 92672</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Hours (Starting Summer 2025)</h3>
                <ul className="text-gray-700">
                  <li className="flex justify-between py-1 border-b border-[#CADEEF]">
                    <span>Monday - Thursday</span>
                    <span>11am - 9pm</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-[#CADEEF]">
                    <span>Friday - Saturday</span>
                    <span>11am - 11pm</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Sunday</span>
                    <span>11am - 8pm</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">* Individual vendor hours may vary</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Parking</h3>
                <p className="text-gray-700 mb-2">Complimentary parking available in our dedicated lot.</p>
                <p className="text-gray-700">Additional street parking available along Oceanfront Drive.</p>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Accessibility</h3>
                <p className="text-gray-700 mb-2">Miramar Food Hall is fully accessible with ramp access, spacious walkways, and accessible restrooms.</p>
                <p className="text-gray-700">Service animals are welcome in all areas of the food hall.</p>
              </div>
            </div>
            
            {/* Map & Directions */}
            <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-80 bg-[#CADEEF] relative flex items-center justify-center">
                {/* This would typically be an actual Google Maps embed */}
                <div className="text-center p-6">
                  <p className="text-lg text-[#0054AA]">Interactive Location Map</p>
                  <p className="text-[#0677BA] mt-2">Google Maps Integration</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4">Directions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">From I-5 North</h3>
                    <p className="text-gray-700 text-sm">
                      Take exit 75 for Avenida Pico. Turn right onto Avenida Pico. Continue to El Camino Real. Turn left onto El Camino Real. Turn right onto Avenida Del Mar.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">From I-5 South</h3>
                    <p className="text-gray-700 text-sm">
                      Take exit 75 for Avenida Pico. Turn left onto Avenida Pico. Continue to El Camino Real. Turn left onto El Camino Real. Turn right onto Avenida Del Mar.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Public Transportation</h3>
                  <p className="text-gray-700 text-sm">
                    OCTA bus routes 91 and 191 stop within a 5-minute walk of Miramar Food Hall. The San Clemente Metrolink station is a 15-minute walk or short rideshare trip away.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* What to Expect */}
          <div className="bg-white rounded-lg shadow-md p-8 my-12">
            <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">What to Expect</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-3">The Space</h3>
                <p className="text-gray-700 mb-4">
                  Miramar Food Hall features 15,000 square feet of indoor dining space with floor-to-ceiling windows offering panoramic ocean views. Our modern, airy design incorporates coastal elements with comfortable seating options for groups of all sizes.
                </p>
                <p className="text-gray-700">
                  The oceanfront patio provides additional seating with breathtaking views of the San Clemente coastline and pier.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-3">Dining Experience</h3>
                <p className="text-gray-700 mb-4">
                  Choose from 15 unique food vendors and 2 craft bars, offering everything from local California cuisine to international specialties. Order at any vendor and enjoy your meal throughout our communal dining areas or oceanfront patio.
                </p>
                <p className="text-gray-700">
                  Our staff is available to help with recommendations and to ensure you have a wonderful experience.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-3">Amenities</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#00A9DD] mt-1 mr-2"></i>
                    <span>Free high-speed Wi-Fi throughout the food hall</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#00A9DD] mt-1 mr-2"></i>
                    <span>Multiple charging stations for electronic devices</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#00A9DD] mt-1 mr-2"></i>
                    <span>Family-friendly seating areas and high chairs available</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#00A9DD] mt-1 mr-2"></i>
                    <span>Clean, modern restrooms with changing stations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#00A9DD] mt-1 mr-2"></i>
                    <span>Outdoor heating elements for cooler evenings</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-3">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Is there a cover charge or entrance fee?</h4>
                    <p className="text-gray-700">No, entrance to Miramar Food Hall is always free.</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Are reservations required?</h4>
                    <p className="text-gray-700">No reservations needed; seating is available on a first-come, first-served basis.</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Is Miramar Food Hall family-friendly?</h4>
                    <p className="text-gray-700">Yes! We welcome guests of all ages and offer kid-friendly menu options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gallery */}
          <div className="my-12">
            <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6 text-center">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" 
                  alt="Food Image" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Patio View" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Happy Customers" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                  alt="San Clemente Coastline" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-[#0054AA] rounded-lg shadow-lg overflow-hidden my-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-3xl font-montserrat font-bold text-white mb-4">Looking for More Information?</h3>
                <p className="text-white opacity-90 mb-6">
                  Have questions about visiting Miramar Food Hall? Our team is happy to help with any inquiries about our vendors, special events, or private bookings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white text-[#0054AA] font-montserrat font-semibold py-3 px-6 rounded-md hover:bg-[#CADEEF] transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/events" 
                    className="inline-block bg-[#00A9DD] hover:bg-[#0094D4] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    Upcoming Events
                  </Link>
                </div>
              </div>
              <div 
                className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
