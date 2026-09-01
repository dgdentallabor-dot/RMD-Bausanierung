import { motion } from 'motion/react';
import { Check, ChevronDown } from 'lucide-react';
import heroImage from '../assets/images/Gemini_Generated_Image_z8lmdbz8lmdbz8lm_1.png';

interface HeroProps {
  language?: 'DE' | 'EN';
  onQuoteClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onQuoteClick, onProjectsClick }: HeroProps) {
  const t = {
    tag: "DEUTSCHE MEISTERPRÄZISION",
    title: "Premium Renovierungs- & Bauleistungen",
    subtitle: "Wir verwandeln Ihr Zuhause mit deutscher Präzision, erstklassiger Handwerkskunst und jahrelanger Erfahrung.",
    ctaContact: "Jetzt Kontaktieren",
    ctaProjects: "Unsere Projekte",
    badges: [
      "Professionelles Team",
      "Erstklassige Materialien",
      "Termintreue Fertigstellung",
      "Kostenfreie Beratung",
      "Hunderte zufriedene Kunden"
    ]
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-matte-black overflow-hidden pt-24 pb-16">
      
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Renovation Showcase"
          className="w-full h-full object-cover object-center filter brightness-[0.35]"
        />
        {/* Dark Overlays for luxurious high-contrast depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-matte-black/40"></div>
        
        {/* Background Decorative Grid Line */}
        <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/[0.03]"></div>
        <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white/[0.03]"></div>
        <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white/[0.03]"></div>
        <div className="absolute h-[1px] inset-x-0 bottom-1/4 bg-white/[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        
        {/* Main Content Area */}
        <div className="max-w-4xl text-left pt-12 sm:pt-16">
          
          {/* Animated Gold Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-none mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-gold uppercase font-bold">
              {t.tag}
            </span>
          </motion.div>

          {/* Master Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase"
          >
            {t.title.split(' & ').map((part, index) => (
              <span key={index} className="block">
                {index === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                    & {part}
                  </span>
                ) : part}
              </span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-light-gray max-w-2xl font-light leading-relaxed mb-10"
          >
            {t.subtitle}
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <button
              onClick={onQuoteClick}
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-matte-black font-black tracking-widest uppercase rounded-none text-xs transition-all duration-300 cursor-pointer border border-gold"
            >
              {t.ctaContact}
            </button>
            <button
              onClick={onProjectsClick}
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white font-black tracking-widest uppercase rounded-none text-xs transition-all duration-300 cursor-pointer"
            >
              {t.ctaProjects}
            </button>
          </motion.div>

        </div>

        {/* Floating Trust Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full mt-auto mb-4"
        >
          <div className="bg-matte-black/80 rounded-none border border-white/10 p-5 md:p-6 backdrop-blur-md relative">
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-center">
              {t.badges.map((badge, idx) => (
                <div
                  key={badge}
                  className={`flex items-center gap-3 ${
                    idx === 4 ? 'col-span-2 md:col-span-1 justify-center' : 'justify-start'
                  } md:justify-center border-r border-white/10 last:border-0 pr-2 last:pr-0`}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-none bg-gold/10 flex items-center justify-center border border-gold/30">
                    <Check size={11} className="text-gold" />
                  </div>
                  <span className="text-[11px] font-bold text-white/90 font-sans tracking-wide uppercase">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-18 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-widest text-white uppercase font-bold">Scroll</span>
        <ChevronDown size={14} className="text-gold animate-bounce" />
      </div>

      {/* Marquee Bar at Bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-12 bg-matte-black border-t border-b border-white/10 flex items-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-white/40">
          <span className="mx-8">German Engineering</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Master Craftsmanship</span>
          <span className="text-gold">•</span>
          <span className="mx-8">High-End Materials</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Certified Specialists</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Reliability & Punctuality</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Stuttgart & Baden-Württemberg</span>
          <span className="text-gold">•</span>
          
          {/* Duplicate to enable seamless wrap */}
          <span className="mx-8">German Engineering</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Master Craftsmanship</span>
          <span className="text-gold">•</span>
          <span className="mx-8">High-End Materials</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Certified Specialists</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Reliability & Punctuality</span>
          <span className="text-gold">•</span>
          <span className="mx-8">Stuttgart & Baden-Württemberg</span>
          <span className="text-gold">•</span>
        </div>
      </div>

    </section>
  );
}
