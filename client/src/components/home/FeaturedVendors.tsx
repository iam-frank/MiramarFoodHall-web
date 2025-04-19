import { useState } from "react";
import { Link } from "wouter";
import { useVendors } from "@/hooks/use-vendors";
import VendorCard from "@/components/vendor/VendorCard";
import FloorPlan from "@/components/vendor/FloorPlan";
import { CUISINES } from "@/lib/constants";

const FeaturedVendors = () => {
  const [activeCuisine, setActiveCuisine] = useState("All");
  const { data: vendors, isLoading, isError } = useVendors();

  const filteredVendors = vendors ? 
    (activeCuisine === "All" 
      ? vendors 
      : vendors.filter(vendor => vendor.cuisineType === activeCuisine)
    ) : [];

  const handleCuisineFilter = (cuisine: string) => {
    setActiveCuisine(cuisine);
  };

  if (isLoading) {
    return <div className="text-center py-16">Loading vendors...</div>;
  }

  if (isError) {
    return <div className="text-center py-16 text-red-600">Error loading vendors.</div>;
  }

  return (
    <section className="py-16 bg-white" id="vendors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0054AA] mb-4">Featured Vendors</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our carefully curated selection of culinary delights, from farm-fresh California cuisine to international flavors.
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
        
        {/* Vendor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/vendors" 
            className="inline-flex items-center bg-[#0677BA] hover:bg-[#0054AA] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
          >
            View All Vendors <i className="fas fa-chevron-right ml-2"></i>
          </Link>
        </div>
        
        {/* Interactive Floor Plan */}
        {vendors && vendors.length > 0 && <FloorPlan vendors={vendors} />}

        <style jsx>{`
          .cuisine-filter.active {
            background-color: #0094D4;
            color: white;
          }
        `}</style>
      </div>
    </section>
  );
};

export default FeaturedVendors;
