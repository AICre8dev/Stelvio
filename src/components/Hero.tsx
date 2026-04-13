import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToApp = () => {
    const el = document.getElementById('app-download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://stelvio-videos.netlify.app/hero.mp4"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mb-6">
          Support Community,
          <br />
          Simplify Life
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
          Hire talented freelancers, book home services, and explore unique local
          home businesses — only on Stelvio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
          >
            Book Now
          </button>
          <button
            onClick={scrollToApp}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            Download App
          </button>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button onClick={scrollToServices} className="animate-bounce-slow">
          <ChevronDown className="text-white/70" size={36} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
