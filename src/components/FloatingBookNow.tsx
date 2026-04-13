import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const FloatingBookNow: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById('app-download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-24 z-50 flex items-center gap-2 bg-primary text-white font-semibold px-6 py-4 rounded-full shadow-2xl shadow-primary/30 hover:bg-primary-dark hover:scale-105 transition-all duration-500 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'
      }`}
    >
      <Calendar size={20} />
      Book Now
    </button>
  );
};

export default FloatingBookNow;
