import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="https://stelvio-videos.netlify.app/stelvio-logo.webp"
            alt="Stelvio Home Hub"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'Services', id: 'services' },
            { label: 'FAQs', id: 'faq' },
            { label: 'Help', id: 'footer' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo('footer')}
            className={`text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-white'
                : 'border-white/60 text-white hover:bg-white/10'
            }`}
          >
            Register as Vendor
          </button>
          <button
            onClick={() => scrollTo('app-download')}
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300"
          >
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl border-t mt-2 animate-in">
          <div className="px-6 py-4 flex flex-col gap-3">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Services', id: 'services' },
              { label: 'FAQs', id: 'faq' },
              { label: 'Help', id: 'footer' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-gray-700 font-medium py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <hr className="my-2" />
            <button
              onClick={() => scrollTo('footer')}
              className="text-primary font-medium py-2 border border-primary rounded-full text-center hover:bg-primary hover:text-white transition-all"
            >
              Register as Vendor
            </button>
            <button
              onClick={() => scrollTo('app-download')}
              className="bg-primary text-white font-medium py-2 rounded-full text-center hover:bg-primary-dark transition-all"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
