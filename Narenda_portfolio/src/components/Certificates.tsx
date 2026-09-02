import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Certificate image imports
import cert1 from '../assets/Naren_Leadership Skilss Certificate.jpg';
import cert2 from '../assets/Generative AI Foundations.png';
import cert3 from '../assets/Introduction to Artificial Intelligence.png';
import cert4 from '../assets/Prompt-Based Attacks and Mitigations.png';
import cert5 from '../assets/CDP Certificate.jpeg';
import cert6 from '../assets/Louise Braille.jpeg';
import cert7 from '../assets/NSS State Camp.jpeg';
import cert8 from '../assets/National Camp Certificates.jpeg';
import cert9 from '../assets/Punjab State Olympics.jpeg';

interface CertificateItem {
  id: string;
  number: string;
  title: string;
  category: string;
  img: string;
}

const certificateList: CertificateItem[] = [
  {
    id: '01',
    number: 'CREDENTIAL 01',
    title: 'LEADERSHIP SKILLS CERTIFICATE',
    category: 'EXECUTIVE & LEADERSHIP',
    img: cert1,
  },
  {
    id: '02',
    number: 'CREDENTIAL 02',
    title: 'GENERATIVE AI FOUNDATIONS & IT INTEGRATION',
    category: 'ARTIFICIAL INTELLIGENCE',
    img: cert2,
  },
  {
    id: '03',
    number: 'CREDENTIAL 03',
    title: 'INTRODUCTION TO ARTIFICIAL INTELLIGENCE',
    category: 'CORE AI/ML',
    img: cert3,
  },
  {
    id: '04',
    number: 'CREDENTIAL 04',
    title: 'SECURING AI: PROMPT-BASED ATTACKS & MITIGATIONS',
    category: 'AI SECURITY',
    img: cert4,
  },
  {
    id: '05',
    number: 'CREDENTIAL 05',
    title: 'COMMUNITY DEVELOPMENT PROJECT',
    category: 'SOCIAL IMPACT & NSS',
    img: cert5,
  },
  {
    id: '06',
    number: 'CREDENTIAL 06',
    title: 'NSS LOUIS BRAILLE OUTREACH EVENT',
    category: 'COMMUNITY SERVICE',
    img: cert6,
  },
  {
    id: '07',
    number: 'CREDENTIAL 07',
    title: 'NSS STATE CAMP PARTICIPATION',
    category: 'LEADERSHIP & SERVICE',
    img: cert7,
  },
  {
    id: '08',
    number: 'CREDENTIAL 08',
    title: 'NSS NATIONAL CAMP RECOGNITION',
    category: 'NATIONAL INITIATIVE',
    img: cert8,
  },
  {
    id: '09',
    number: 'CREDENTIAL 09',
    title: 'NSS PUNJAB STATE OLYMPICS',
    category: 'SPORTS & LEADERSHIP',
    img: cert9,
  },
];

export const Certificates: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const handleNext = () => {
    setSelectedIndex((prev) => 
      prev !== null ? (prev + 1) % certificateList.length : null
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => 
      prev !== null ? (prev - 1 + certificateList.length) % certificateList.length : null
    );
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  // Keyboard navigation support (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow matching Experience Section */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / CREDENTIALS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline matching Experience style */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              VERIFIED SKILLS &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              CREDENTIALS.
            </span>
          </h2>
        </motion.div>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {certificateList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              onClick={() => setSelectedIndex(idx)}
              className="group relative bg-[#120F0C] border border-[#8C6D4F]/20 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] cursor-pointer flex flex-col justify-between"
            >
              {/* Card Header Tag */}
              <div className="px-5 pt-4 pb-2 flex items-center justify-between border-b border-[#8C6D4F]/10">
                <span 
                  className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]"
                >
                  {cert.number}
                </span>
                <span 
                  className="text-[9px] font-medium tracking-[0.15em] text-[#8C6D4F] group-hover:text-[#D5CBC0] transition-colors uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.category}
                </span>
              </div>

              {/* Certificate Image Frame */}
              <div className="w-full h-56 bg-black relative overflow-hidden flex items-center justify-center p-3">
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="w-full h-full object-cover rounded transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>

              {/* Title & Footer Details */}
              <div className="p-5 bg-gradient-to-t from-[#120F0C] to-[#181410] flex flex-col justify-between flex-grow">
                <h3
                  className="text-2xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-2 leading-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between pt-3 border-t border-[#8C6D4F]/15">
                  <span 
                    className="text-[10px] font-light tracking-[0.15em] uppercase text-[#A8988B] group-hover:text-[#D5CBC0]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Click to Inspect
                  </span>
                  <span className="text-[#D4AF37] transform group-hover:translate-x-1 transition-transform text-sm font-mono">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 text-[#E8DFD8] hover:text-[#D4AF37] bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37] p-3 rounded-full transition-all z-20 shadow-xl"
            aria-label="Close Preview"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left / Previous Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 sm:left-8 text-[#E8DFD8] hover:text-[#D4AF37] bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37] p-3 sm:p-4 rounded-full transition-all z-20 shadow-xl"
            aria-label="Previous Certificate"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Modal Content Box */}
          <div 
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center bg-[#120F0C] border border-[#8C6D4F]/30 rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={certificateList[selectedIndex].img} 
              alt={certificateList[selectedIndex].title} 
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-[#8C6D4F]/20"
            />
            
            {/* Title & Counter */}
            <div className="mt-6 text-center">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-1 block">
                {certificateList[selectedIndex].category}
              </span>
              <h4 
                className="text-3xl tracking-wide text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {certificateList[selectedIndex].title}
              </h4>
              <p 
                className="text-xs font-mono text-[#8C6D4F] mt-2 tracking-widest"
              >
                {selectedIndex + 1} / {certificateList.length}
              </p>
            </div>
          </div>

          {/* Right / Next Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 sm:right-8 text-[#E8DFD8] hover:text-[#D4AF37] bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37] p-3 sm:p-4 rounded-full transition-all z-20 shadow-xl"
            aria-label="Next Certificate"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;