import React, { useEffect, useRef } from 'react';
import { Users, DollarSign, Headphones, Star } from './Icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '5,000+', label: 'Happy Customers', icon: Users },
  { value: '200+', label: 'Verified Pros', icon: Star },
  { value: '24/7', label: 'Support', icon: Headphones },
  { value: '0', label: 'Hidden Fees', icon: DollarSign },
];

const WhatMakesUsDifferent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = sectionRef.current?.querySelector('.diff-left');
    const right = sectionRef.current?.querySelector('.diff-right');

    if (left) {
      gsap.fromTo(left, { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }
    if (right) {
      gsap.fromTo(right, { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div className="diff-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">What Makes Us Different</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              One App. Endless Services.
              <br />
              <span className="text-primary">All to Your Doorstep.</span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg leading-relaxed">
              We connect you with trusted professionals who deliver quality work at transparent prices.
              Our responsive support team is always ready to help, ensuring every experience is seamless.
            </p>
            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-gray-700 font-medium italic text-lg">
                "One app. One promise. We show up. We deliver. We care."
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="diff-right grid grid-cols-2 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-surface rounded-2xl p-6 text-center border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
