import React, { useEffect, useRef } from 'react';
import { Search, CalendarDays, CheckCircle2 } from './Icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Choose Your Service',
    description: 'Browse our wide range of home services and pick what you need.',
  },
  {
    icon: CalendarDays,
    number: '02',
    title: 'Pick a Time',
    description: 'Select a convenient date and time that works for your schedule.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'We Show Up',
    description: 'Our verified professional arrives on time and gets the job done.',
  },
];

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.step-item');
    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    const line = sectionRef.current?.querySelector('.connecting-line');
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Three Simple Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="connecting-line hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="step-item text-center relative">
                  <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-8 bg-white rounded-3xl shadow-lg shadow-primary/10 flex flex-col items-center justify-center border border-primary/10">
                    <span className="text-primary font-black text-2xl mb-1">{step.number}</span>
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
