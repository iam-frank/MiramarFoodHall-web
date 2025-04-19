import { Link } from "wouter";
import { FOOTER_INFO, NAVIGATION_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-[#0054AA] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="font-montserrat font-bold text-2xl">MIRAMAR</span>
              <span className="font-serif italic text-lg ml-1">Food Hall</span>
            </div>
            <p className="text-white opacity-80 mb-4">
              San Clemente's premier oceanfront food hall, featuring 15 unique vendors and 2 craft bars.
            </p>
            <p className="text-white opacity-80">
              Opening Summer 2025
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-white opacity-80 hover:opacity-100"
                  >
                    {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span className="opacity-80">{FOOTER_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                <span className="opacity-80">{FOOTER_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span className="opacity-80">{FOOTER_INFO.email}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Hours (Coming Soon)</h4>
            <ul className="space-y-1 opacity-80">
              {FOOTER_INFO.hours.map((hour, index) => (
                <li key={index} className="flex justify-between">
                  <span>{hour.days}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <hr className="border-t border-[#0094D4] opacity-20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white opacity-70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Miramar Food Hall. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {FOOTER_INFO.socialLinks.map(social => (
              <a 
                key={social.name}
                href={social.url} 
                className="text-white opacity-70 hover:opacity-100"
                aria-label={social.name}
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
