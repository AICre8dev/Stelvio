import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'About Us',
    answer:
      'Stelvio Home Hub is Abu Dhabi\'s premier home services marketplace. We connect you with verified, trusted professionals for cleaning, laundry, moving, and handyman services. Our mission is to simplify your life while supporting the local community.',
  },
  {
    question: 'How do I book a service?',
    answer:
      'Simply download the Stelvio app, browse available services, select your preferred date and time, and confirm your booking. You can also book through our website. It takes less than 60 seconds!',
  },
  {
    question: 'How much do you charge?',
    answer:
      'Our pricing is transparent and competitive. Each service has a clear price displayed before you book. No hidden fees, no surprises. You can see the full breakdown in the app before confirming.',
  },
  {
    question: 'How long does a service take?',
    answer:
      'Service duration varies depending on the type and scope. A standard cleaning typically takes 2-4 hours, laundry pickup and delivery is same-day, and moving services depend on the volume. You\'ll see estimated times when booking.',
  },
  {
    question: 'What services does Stelvio provide?',
    answer:
      'We offer cleaning services (daily, weekly, deep clean), furniture cleaning (sofa, mattress, carpet), moving services (packing, transport, unpacking), laundry services (wash, iron, deliver), and handyman services. More services are being added regularly!',
  },
  {
    question: 'How to become a vendor?',
    answer:
      'If you\'re a skilled professional, you can join our platform! Download the Stelvio Vendor app, complete your profile, submit your documents for verification, and start receiving bookings. We support freelancers and small businesses.',
  },
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }> = ({
  faq,
  isOpen,
  toggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen ? 'border-primary/30 bg-primary/5 shadow-md shadow-primary/5' : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className={`font-semibold text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-900'}`}>
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'
          }`}
        >
          <ChevronDown size={18} />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 200}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.faq-item');
    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }
  }, []);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
