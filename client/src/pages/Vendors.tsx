import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { useVendors } from '@/hooks/use-vendors';
import VendorCard from '@/components/vendor/VendorCard';
import FloorPlan from '@/components/vendor/FloorPlan';
import { CUISINES } from '@/lib/constants';

const Vendors = () => {
  const [activeCuisine, setActiveCuisine] = useState("All");
  const [, setLocation] = useLocation();
  const { data: vendors, isLoading, isError } = useVendors();

  // Parse query params for cuisine filter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cuisineParam = params.get('cuisine');
    if (cuisineParam && CUISINES.includes(cuisineParam)) {
      setActiveCuisine(cuisineParam);
    }
  }, []);

  const filteredVendors = vendors ? 
    (activeCuisine === "All" 
      ? vendors 
      : vendors.filter(vendor => vendor.cuisineType === activeCuisine)
    ) : [];

  const handleCuisineFilter = (cuisine: string) => {
    setActiveCuisine(cuisine);
    
    // Update URL without full page reload
    if (cuisine === "All") {
      setLocation("/vendors", { replace: true });
    } else {
      setLocation(`/vendors?cuisine=${cuisine}`, { replace: true });
    }
  };

  return (
    <>
      <Helmet>
        <title>Vendors | Miramar Food Hall</title>
        <meta name="description" content="Explore the diverse food vendors at Miramar Food Hall in San Clemente, CA. From Mexican to Italian, Asian to Seafood, and more." />
      </Helmet>
      
      <div className="pt-24 md:pt-20 bg-[#E8F1F8]">
        {/* Hero Banner */}
        <div className="relative">
          <div 
            className="h-[40vh] bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80')" }}
          >
            <div className="absolute inset-0 bg-[#0054AA] bg-opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white leading-tight">OUR VENDORS</h1>
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0054AA] mb-4">Meet Our Vendors</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our carefully curated selection of culinary delights, from farm-fresh California cuisine to international flavors. Each vendor is handpicked for their exceptional quality and unique offerings.
            </p>
          </div>
          
          {/* Cuisine Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CUISINES.map(cuisine => (
              <button 
                key={cuisine}
                className={`cuisine-filter px-4 py-2 rounded-full ${activeCuisine === cuisine ? 'active bg-[#0094D4] text-white' : 'bg-[#E8F1F8] text-[#0054AA]'} font-montserrat font-semibold text-sm transition-colors`}
                onClick={() => handleCuisineFilter(cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
          
          {/* Loading and Error States */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-[#0094D4] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-[#0054AA] font-montserrat">Loading vendors...</p>
            </div>
          )}
          
          {isError && (
            <div className="text-center py-12 text-red-600">
              <i className="fas fa-exclamation-circle text-4xl mb-4"></i>
              <p>Error loading vendors. Please try again later.</p>
            </div>
          )}
          
          {/* Vendor Cards Grid */}
          {!isLoading && !isError && (
            <>
              {filteredVendors.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-[#0054AA] font-montserrat">No vendors found for this cuisine type. Please check back later.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredVendors.map(vendor => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                  ))}
                </div>
              )}
            </>
          )}
          
          {/* Interactive Floor Plan */}
          {vendors && vendors.length > 0 && !isLoading && !isError && (
            <FloorPlan vendors={vendors} />
          )}
          
          {/* Vendor Application CTA */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4">Interested in Becoming a Vendor?</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for unique food concepts to join our community. If you're passionate about food and interested in becoming part of Miramar Food Hall, we'd love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-[#0677BA] hover:bg-[#0054AA] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Contact Us for Vendor Opportunities
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .cuisine-filter.active {
            background-color: #0094D4;
            color: white;
          }
        `}</style>
      </div>
    </>
  );
};

export default Vendors;
