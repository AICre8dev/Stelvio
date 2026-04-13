import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const appScreenshots = [
  { src: 'https://stelvio-videos.netlify.app/app-login.png', label: 'Login' },
  { src: 'https://stelvio-videos.netlify.app/app-home.png', label: 'Home' },
  { src: 'https://stelvio-videos.netlify.app/app-booking.png', label: 'Booking' },
  { src: 'https://stelvio-videos.netlify.app/app-notifications.png', label: 'Notifications' },
  { src: 'https://stelvio-videos.netlify.app/app-account.png', label: 'Account' },
];

const GooglePlayIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
  </svg>
);

const AppDownload: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = sectionRef.current?.querySelector('.app-left');
    const right = sectionRef.current?.querySelector('.app-right');

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

  const allScreenshots = [...appScreenshots, ...appScreenshots];

  return (
    <section
      id="app-download"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6C63FF 0%, #5A52D5 40%, #4338ca 100%)',
      }}
      ref={sectionRef}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="app-left text-white">
            {/* Stelvio Logo */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://stelvio-videos.netlify.app/stelvio-logo-white.webp"
                alt="Stelvio Home Hub"
                className="h-10 w-auto object-contain"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Get the Stelvio App
            </h2>
            <p className="text-white/80 text-lg mt-6 leading-relaxed max-w-lg">
              Book services, track live, pay securely — all from your phone. Download now and experience the easiest way to manage your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              {/* App Store */}
              <a
                href="https://apps.apple.com/us/app/stelvio-hub/id6757171506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-white/70 text-xs">Download on the</div>
                  <div className="text-white font-semibold text-base">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.stelvio.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105"
              >
                <GooglePlayIcon className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <div className="text-white/70 text-xs">Get it on</div>
                  <div className="text-white font-semibold text-base">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="app-right flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[570px]">
              {/* Phone Frame — White iPhone style */}
              <div className="absolute inset-0 rounded-[3rem] border-[6px] border-white/90 bg-black overflow-hidden shadow-2xl shadow-black/30">
                {/* Dynamic Island notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-[22px] bg-black rounded-full z-20" />

                {/* Scrolling Real Screenshots */}
                <div className="absolute inset-0 overflow-hidden rounded-[2.4rem]">
                  <div className="phone-scroll-track">
                    {allScreenshots.map((screen, i) => (
                      <img
                        key={i}
                        src={screen.src}
                        alt={`Stelvio App - ${screen.label}`}
                        className="phone-screen-img"
                        draggable={false}
                      />
                    ))}
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .phone-scroll-track {
          display: flex;
          flex-direction: column;
          animation: phoneScroll 25s ease-in-out infinite;
        }

        .phone-screen-img {
          width: 100%;
          height: 558px;
          object-fit: cover;
          object-position: top center;
          flex-shrink: 0;
          display: block;
        }

        @keyframes phoneScroll {
          0%, 8% {
            transform: translateY(0);
          }
          12% {
            transform: translateY(-10%);
          }
          12%, 20% {
            transform: translateY(-10%);
          }
          24% {
            transform: translateY(-20%);
          }
          24%, 32% {
            transform: translateY(-20%);
          }
          36% {
            transform: translateY(-30%);
          }
          36%, 44% {
            transform: translateY(-30%);
          }
          48% {
            transform: translateY(-40%);
          }
          48%, 56% {
            transform: translateY(-40%);
          }
          60% {
            transform: translateY(-50%);
          }
          60%, 100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default AppDownload;
