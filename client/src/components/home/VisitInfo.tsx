const VisitInfo = () => {
  return (
    <section className="py-16 bg-[#E9F6FB]" id="visit">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0054AA] mb-4">Plan Your Visit</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find everything you need to know about visiting Miramar Food Hall, opening Summer 2025.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Location & Hours Info */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4">Location & Hours</h3>
            
            <div className="mb-6">
              <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Address</h4>
              <p className="text-gray-700">123 Oceanfront Drive<br />San Clemente, CA 92672</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Hours (Starting Summer 2025)</h4>
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
            
            <div>
              <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">Parking</h4>
              <p className="text-gray-700 mb-2">Complimentary parking available in our dedicated lot.</p>
              <p className="text-gray-700">Additional street parking available along Oceanfront Drive.</p>
            </div>
          </div>
          
          {/* Map & Directions */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-80 bg-[#CADEEF] relative flex items-center justify-center">
              {/* This would be an actual map in production */}
              <div className="text-center p-6">
                <p className="text-lg text-[#0054AA]">Interactive Location Map</p>
                <p className="text-[#0677BA] mt-2">Google Maps Integration</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4">Directions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">From I-5 North</h4>
                  <p className="text-gray-700 text-sm">
                    Take exit 75 for Avenida Pico. Turn right onto Avenida Pico. Continue to El Camino Real. Turn left onto El Camino Real. Turn right onto Avenida Del Mar.
                  </p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#0677BA] mb-2">From I-5 South</h4>
                  <p className="text-gray-700 text-sm">
                    Take exit 75 for Avenida Pico. Turn left onto Avenida Pico. Continue to El Camino Real. Turn left onto El Camino Real. Turn right onto Avenida Del Mar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gallery Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] text-center mb-8">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" 
                alt="Food Image" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Patio View" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Happy Customers" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                alt="San Clemente Coastline" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitInfo;
