import { useState } from "react";
import { Link, useLocation } from "wouter";
import { NAVIGATION_LINKS } from "@/lib/constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileVendorsOpen, setMobileVendorsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileVendors = () => setMobileVendorsOpen(!mobileVendorsOpen);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-[#0054AA]">
              <span className="font-montserrat font-bold text-2xl">MIRAMAR</span>
              <span className="font-serif italic text-lg ml-1">Food Hall</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.name} className={link.dropdown ? "dropdown relative" : ""}>
                <Link 
                  href={link.path} 
                  className={`nav-link font-montserrat font-semibold text-[#0054AA] flex items-center ${location === link.path ? 'after:w-full' : ''}`}
                >
                  {link.name}
                  {link.dropdown && <i className="fas fa-chevron-down text-xs ml-1"></i>}
                </Link>
                
                {link.dropdown && (
                  <div className="dropdown-menu absolute mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                    {link.items?.map((item) => (
                      <Link 
                        key={item} 
                        href={item === "All" ? "/vendors" : `/vendors?cuisine=${item}`}
                        className="block px-4 py-2 text-[#0677BA] hover:bg-[#E8F1F8]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-[#0054AA]" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <ul className="px-4 py-2">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.name}>
              {!link.dropdown ? (
                <Link 
                  href={link.path} 
                  className="block py-3 font-montserrat font-semibold text-[#0054AA] border-b border-[#CADEEF]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <>
                  <button 
                    className="w-full text-left py-3 font-montserrat font-semibold text-[#0054AA] border-b border-[#CADEEF] flex justify-between items-center"
                    onClick={toggleMobileVendors}
                  >
                    {link.name} 
                    <i className={`fas fa-chevron-${mobileVendorsOpen ? 'up' : 'down'} text-xs`}></i>
                  </button>
                  <div className={`${mobileVendorsOpen ? 'block' : 'hidden'} bg-[#E9F6FB] py-2 pl-4`}>
                    {link.items?.map((item) => (
                      <Link 
                        key={item} 
                        href={item === "All" ? "/vendors" : `/vendors?cuisine=${item}`}
                        className="block py-2 text-[#0677BA]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #0094D4;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .dropdown-menu {
          display: none;
          transition: all 0.3s ease;
        }
        .dropdown:hover .dropdown-menu {
          display: block;
        }
      `}</style>
    </header>
  );
};

export default Header;
