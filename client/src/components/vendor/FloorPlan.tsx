import { useState } from "react";
import { Vendor } from "@/lib/types";

interface FloorPlanProps {
  vendors: Vendor[];
}

const FloorPlan = ({ vendors }: FloorPlanProps) => {
  const [activeVendor, setActiveVendor] = useState<number | null>(null);

  const handleMarkerHover = (vendorId: number) => {
    setActiveVendor(vendorId);
  };

  const handleMarkerLeave = () => {
    setActiveVendor(null);
  };

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] text-center mb-8">Interactive Floor Plan</h3>
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <div className="aspect-w-16 aspect-h-9 relative">
          <div className="bg-[#CADEEF] w-full h-96 rounded-lg relative">
            {/* This would be the actual floor plan image in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg text-[#0054AA] text-center p-4">Interactive Floor Plan Map</p>
            </div>
            
            {/* Vendor markers on the map */}
            {vendors.map(vendor => (
              <div 
                key={vendor.id}
                className="floor-map-marker absolute w-8 h-8 bg-[#0094D4] rounded-full flex items-center justify-center text-white font-bold"
                style={{ 
                  top: `${vendor.floorPlanY}%`, 
                  left: `${vendor.floorPlanX}%` 
                }}
                onMouseEnter={() => handleMarkerHover(vendor.id)}
                onMouseLeave={handleMarkerLeave}
              >
                {vendor.locationNumber}
                <div className={`tooltip absolute ${vendor.floorPlanX > 50 ? 'right-full mr-2' : 'left-full ml-2'} bg-white p-3 rounded-lg shadow-lg w-48 z-10 ${activeVendor === vendor.id ? 'opacity-100 visible' : ''}`}>
                  <h4 className="font-montserrat font-bold text-[#0054AA]">{vendor.name}</h4>
                  <p className="text-sm text-gray-700">{vendor.description.substring(0, 60)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Hover or tap on a vendor marker to learn more about their location and offerings.</p>
        </div>
      </div>

      <style jsx>{`
        .floor-map-marker {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .floor-map-marker:hover {
          transform: scale(1.2);
        }
        .tooltip {
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .floor-map-marker:hover .tooltip {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
};

export default FloorPlan;
