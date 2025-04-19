import { Vendor } from "@/lib/types";

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <div className="vendor-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div className="h-48 bg-[#CADEEF] flex items-center justify-center p-6">
        <div className="font-serif italic text-3xl text-[#0054AA]">{vendor.name}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-[#0094D4] text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">
            {vendor.cuisineType}
          </span>
          {/* Additional cuisine types could be added here if needed */}
        </div>
        <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-2">{vendor.name}</h3>
        <p className="text-gray-700 mb-4">{vendor.description}</p>
        {vendor.websiteUrl && (
          <a 
            href={vendor.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0094D4] font-semibold hover:text-[#0677BA] flex items-center"
          >
            Visit Website <i className="fas fa-arrow-right ml-2"></i>
          </a>
        )}
      </div>

      <style jsx>{`
        .vendor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 84, 170, 0.1), 0 10px 10px -5px rgba(0, 84, 170, 0.04);
        }
      `}</style>
    </div>
  );
};

export default VendorCard;
