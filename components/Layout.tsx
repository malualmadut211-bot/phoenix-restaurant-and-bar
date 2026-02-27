import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash scrolling or scroll to top
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-base text-text-main font-display">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-background-base/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
                className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
                onClick={handleLogoClick}
            >
              <img 
                src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8625b4e735541303cb02ff7964ca459fc8c207eb/3%20-%20Copy.jpg" 
                alt="Phoenix Logo" 
                className="h-12 w-12 object-cover rounded-full border-2 border-pink-200/20 group-hover:border-primary/50 transition-colors" 
              />
              <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-white tracking-wide leading-none group-hover:text-primary transition-colors">PHOENIX</span>
                  <span className="text-[9px] text-gray-400 font-medium tracking-[0.3em] uppercase leading-none mt-1">Restaurant & Bar</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-gray-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex flex-col items-center">
                <a href="tel:+211910249910" className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-bold text-xs shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 border border-primary/50 flex items-center gap-2">
                    <span className="material-icons text-sm">call</span>
                    Book a Table
                </a>
                <a href="tel:+211910249910" className="text-white/80 hover:text-primary text-[10px] font-bold mt-0.5 tracking-wider transition-colors">
                    +211 910 249 910
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-primary p-2 focus:outline-none"
              >
                <span className="material-icons text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="md:hidden bg-background-base border-t border-white/10 px-4 pt-2 pb-6 space-y-2 absolute w-full shadow-2xl">
                 {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium uppercase tracking-wider ${
                      isActive ? 'text-primary bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4">
                  <a href="tel:+211910249910" className="block w-full text-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold text-base shadow-lg transition-all">
                    Book a Table (+211 910 249 910)
                  </a>
              </div>
            </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-8 border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-icons text-primary text-3xl">local_fire_department</span>
                        <span className="font-bold text-xl tracking-tight uppercase">PHOENIX RESTAURANT & BAR</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                        Experience the finest dining and nightlife in Juba. Join us for unforgettable evenings and delicious flavors.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/share/17hnBW48vM/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-400 group">
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                             </svg>
                        </a>
                         <a href="https://www.instagram.com/phoenixjuba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-400 group">
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.5-1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                             </svg>
                        </a>
                        <a href="https://www.tiktok.com/@phoenixrestaurantandbar?_r=1&_t=ZS-941Ss7b1xLe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-400 group">
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                             </svg>
                        </a>
                    </div>
                </div>

                <div>
                     <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h3>
                     <ul className="space-y-3 text-sm text-gray-400">
                         <li><NavLink to="/menu" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Our Menu</NavLink></li>
                         <li><NavLink to="/contact" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Book a Table</NavLink></li>
                         <li><NavLink to="/music" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Events Gallery</NavLink></li>
                         <li><NavLink to="/about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">About Us</NavLink></li>
                     </ul>
                </div>

                <div>
                     <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact Us</h3>
                     <ul className="space-y-4 text-sm text-gray-400">
                         <li className="flex items-start gap-3">
                             <span className="material-icons text-primary text-sm mt-0.5">location_on</span>
                             <span>Behind Phenicia, Ministries Road,<br/>Juba, South Sudan</span>
                         </li>
                         <li className="flex items-center gap-3">
                             <span className="material-icons text-primary text-sm">phone</span>
                             <a href="tel:+211910249910" className="hover:text-white transition-colors">+211 910 249 910</a>
                         </li>
                         <li className="flex items-center gap-3">
                             <span className="material-icons text-primary text-sm">email</span>
                             <a href="mailto:info@phoenixrestaurantbar.com" className="hover:text-white transition-colors">info@phoenixrestaurantbar.com</a>
                         </li>
                     </ul>
                </div>
                 <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">Opening Hours</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Mon - Sun</span>
                            <span className="text-white font-medium">24 Hours</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© 2026 Phoenix Bar & Restaurant. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
          <a 
            href="https://wa.me/211910249910" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300"
            title="Chat on WhatsApp"
          >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8"/>
          </a>
      </div>

      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-110"
            title="Scroll to top"
          >
              <span className="material-icons">arrow_upward</span>
          </button>
      </div>

    </div>
  );
};

export default Layout;