import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
}

const services: ServiceCard[] = [
  {
    title: 'Cleaning Services',
    description: 'Daily or weekly housekeeping to keep your home clean, fresh & tidy',
    videoSrc: 'https://stelvio-videos.netlify.app/cleaning.mp4',
  },
  {
    title: 'Furniture Cleaning',
    description: 'Deep furniture cleaning for sofa, mattress, carpet & more',
    imageSrc: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Moving Services',
    description: 'Professional moving with care. Packing, transport, unpacking.',
    videoSrc: 'https://stelvio-videos.netlify.app/moving.mp4',
  },
  {
    title: 'Laundry Services',
    description: 'Fresh, crisp laundry delivered to your door.',
    videoSrc: 'https://stelvio-videos.netlify.app/laundry.mp4',
  },
];

const ServiceCardComponent: React.FC<{ service: ServiceCard }> = ({ service }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (service.videoSrc) {
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (service.videoSrc && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleBookService = () => {
    const el = document.getElementById('app-download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="service-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-52 overflow-hidden">
        {service.videoSrc ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={service.videoSrc}
          />
        ) : (
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
        <button
          onClick={handleBookService}
          className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
        >
          Book Service
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.service-card');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="services" className="py-20 lg:py-28 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Our Services
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Professional home services delivered by trusted experts in Abu Dhabi
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCardComponent key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
