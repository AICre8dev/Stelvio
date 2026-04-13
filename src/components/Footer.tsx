import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-dark-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="https://stelvio-videos.netlify.app/stelvio-logo-white.webp"
                alt="Stelvio Home Hub"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Abu Dhabi's trusted home services marketplace. Book cleaning, laundry, moving, and more.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/stelviohomehub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Stelvio-cleaning/61574239726142/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@stelviohomehub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://www.snapchat.com/@stelviohomehub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.076-.375-.09-.84-.181-1.484-.181-.255 0-.51.015-.764.049-.538.074-1.004.359-1.545.689-.794.48-1.71 1.029-3.222 1.029h-.03c-1.514 0-2.429-.549-3.224-1.029-.539-.33-1.004-.614-1.544-.689-.255-.034-.509-.049-.764-.049-.645 0-1.109.091-1.484.181-.225.044-.405.076-.539.076-.285 0-.479-.135-.555-.405-.06-.193-.104-.374-.134-.553-.045-.195-.105-.479-.165-.57-1.872-.283-2.905-.702-3.146-1.271-.029-.075-.044-.149-.044-.225-.015-.24.164-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.21-.644.119-.869-.195-.434-.884-.658-1.332-.809-.136-.045-.256-.09-.346-.12-.809-.329-1.224-.72-1.227-1.153-.015-.36.284-.69.734-.838.149-.06.329-.09.509-.09.12 0 .3.015.449.09.375.18.734.301 1.049.316.18 0 .314-.045.374-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span className="text-white/60 text-sm">Al Yasat Tower, Abu Dhabi City, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:info@stelviohomehub.com" className="text-white/60 text-sm hover:text-primary transition-colors">
                  info@stelviohomehub.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:600555482" className="text-white/60 text-sm hover:text-primary transition-colors">
                  600 555 482
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Useful Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Vendor Portal', action: () => scrollTo('footer') },
                { label: 'FAQs', action: () => scrollTo('faq') },
                { label: 'About Us', action: () => scrollTo('hero') },
                { label: 'Contact Us', action: () => scrollTo('footer') },
                { label: 'Terms & Conditions', action: () => {} },
                { label: 'Privacy Policy', action: () => {} },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="block text-white/60 text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-bold text-lg mb-5">Download App</h4>
            <div className="space-y-3">
              <a
                href="https://apps.apple.com/us/app/stelvio-hub/id6757171506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-white/50 text-xs">Download on the</div>
                  <div className="text-white font-semibold text-sm">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.stelvio.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.18 23.67c-.37-.2-.68-.57-.68-1.06V1.39c0-.49.31-.86.68-1.06l11.4 11.67L3.18 23.67zm15.32-8.35l-3.22-1.85-3.53 3.63 3.53 3.63 3.22-1.85c.93-.53.93-1.86 0-2.39v-.01l-.01-.01.01-.01v-.14zm-3.22-6.97l3.22-1.85c.93-.53.93-1.86 0-2.39l-3.22-1.85-3.53 3.63 3.53 3.63v-.17zM4.85 1.2l9.23 9.47-3.53 3.63L4.85 1.2z" />
                </svg>
                <div>
                  <div className="text-white/50 text-xs">Get it on</div>
                  <div className="text-white font-semibold text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Stelvio Home Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
