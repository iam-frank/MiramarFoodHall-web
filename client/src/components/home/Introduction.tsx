import { Link } from "wouter";

const Introduction = () => {
  return (
    <section className="py-16 bg-[#E8F1F8]" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0054AA] mb-6">
              San Clemente's Coastal <span className="text-[#0094D4]">Culinary Destination</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Miramar Food Hall brings together the finest local and regional flavors in one stunning oceanfront location. Experience 15 unique vendors and 2 craft bars in our open, airy space designed to capture the essence of coastal California living.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              From farm-fresh California cuisine to international delights, our carefully curated selection offers something for every palate. Enjoy your meal with breathtaking Pacific views from our expansive patio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/vendors" className="inline-block bg-[#0094D4] hover:bg-[#0677BA] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors">
                Explore Vendors
              </Link>
              <Link href="/visit" className="inline-block bg-white border-2 border-[#0094D4] text-[#0094D4] hover:bg-[#E9F6FB] font-montserrat font-semibold py-3 px-6 rounded-md transition-colors">
                Plan Your Visit
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Miramar Food Hall Interior" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -left-8 p-4 bg-white rounded-lg shadow-lg w-48 hidden md:block">
                <div className="font-montserrat font-bold text-[#0054AA] text-xl">15+</div>
                <div className="text-[#0677BA]">Unique Food Vendors</div>
              </div>
              <div className="absolute -top-8 -right-8 p-4 bg-white rounded-lg shadow-lg w-48 hidden md:block">
                <div className="font-montserrat font-bold text-[#0054AA] text-xl">2</div>
                <div className="text-[#0677BA]">Craft Bars</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-[#6FCCEA] flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-utensils text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-3">Diverse Culinary Selection</h3>
            <p className="text-gray-700">Experience 15 unique food vendors and 2 craft bars offering everything from local California cuisine to international flavors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-[#0094D4] flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-water text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-3">Oceanfront Patio</h3>
            <p className="text-gray-700">Enjoy your meal with breathtaking views of the Pacific Ocean on our expansive waterfront patio.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-[#00A9DD] flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-calendar-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-3">Year-Round Events</h3>
            <p className="text-gray-700">From live music to seasonal festivals, our event calendar offers excitement throughout the year.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
