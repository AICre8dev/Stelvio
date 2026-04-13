import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import Testimonials from './components/Testimonials';
import AppDownload from './components/AppDownload';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingBookNow from './components/FloatingBookNow';

const App: React.FC = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <WhatMakesUsDifferent />
      <Testimonials />
      <AppDownload />
      <FAQ />
      <Footer />
      <FloatingBookNow />
    </div>
  );
};

export default App;
