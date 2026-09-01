import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyImprintModal from './components/PrivacyImprintModal';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const language = 'DE';
  
  // Legal modal states
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  // Back to top scroll state
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const launchWhatsAppDirect = () => {
    const waText = encodeURIComponent(
      "Hallo Ramazan Sallaj RMD Bausanierung,\n\nich würde gerne ein persönliches Gespräch bezüglich einer Renovierung / Sanierung vereinbaren."
    );
    window.open(`https://wa.me/491729081394?text=${waText}`, '_blank');
  };

  return (
    <div id="landing-root" className="min-h-screen bg-matte-black text-white font-sans antialiased overflow-x-hidden selection:bg-gold selection:text-matte-black">
      
      {/* 1. Persistent navigation */}
      <Header
        onContactClick={launchWhatsAppDirect}
      />

      {/* 2. Core scrollable blocks */}
      <main className="animate-fade-in">
        
        {/* Hero block */}
        <Hero
          onQuoteClick={launchWhatsAppDirect}
          onProjectsClick={() => handleScrollToSection('#gallery')}
        />

        {/* Company profile & brothers */}
        <AboutUs language={language} />

        {/* Services catalog */}
        <Services
          language={language}
          onBookService={launchWhatsAppDirect}
        />

        {/* Numeric stats & benefits */}
        <WhyChooseUs language={language} />

        {/* Gallery with project showcase */}
        <Gallery language={language} />

        {/* Timeline roadmap */}
        <WorkProcess language={language} />

        {/* Customer reviews */}
        <Testimonials language={language} />

        {/* FAQ accordions */}
        <FAQ language={language} />

      </main>

      {/* 3. Persistent page footer */}
      <Footer
        language={language}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenImprint={() => setIsImprintOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* 4. MODALS & OVERLAYS */}
      <AnimatePresence>
        {/* Legal disclosures modal (Privacy / Imprint) */}
        {(isPrivacyOpen || isImprintOpen) && (
          <PrivacyImprintModal
            language={language}
            isOpen={isPrivacyOpen || isImprintOpen}
            type={isPrivacyOpen ? 'privacy' : 'imprint'}
            onClose={() => {
              setIsPrivacyOpen(false);
              setIsImprintOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* 5. FLOATING QUICK-ACTIONS HUB */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        
        {/* Back to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-zinc-900 border border-white/15 text-gold hover:text-white rounded-none flex items-center justify-center shadow-2xl transition-colors cursor-pointer"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp floating widget */}
        <button
          onClick={launchWhatsAppDirect}
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-none flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform duration-300 cursor-pointer relative group"
          aria-label="WhatsApp Direktkontakt"
        >
          {/* Ripple glow effect */}
          <span className="absolute inset-0 border-2 border-[#25D366] animate-ping opacity-30 pointer-events-none"></span>
          
          <MessageCircle size={22} className="fill-current" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-matte-black border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            WhatsApp Direktkontakt
          </span>
        </button>

      </div>

    </div>
  );
}
