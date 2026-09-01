import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Search, ChevronRight, X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import LucideIcon from './LucideIcon';
import ImageLightbox from './ImageLightbox';

interface ServicesProps {
  language: 'DE' | 'EN';
  onBookService: (serviceTitle: string) => void;
}

export default function Services({ language, onBookService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Interior' | 'Exterior' | 'General'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [lightboxService, setLightboxService] = useState<Service | null>(null);

  const t = {
    DE: {
      badgeText: "UNSERE DIENSTLEISTUNGEN",
      heading: "Meisterhafte Handwerksleistungen",
      searchPlaceholder: "Nach Leistungen suchen... (z.B. Bad, Estrich, Malen)",
      all: "Alle Leistungen",
      interior: "Innenausbau & Bad",
      exterior: "Fassade & Außenbereich",
      general: "Altbau & Kernsanierung",
      learnMore: "Details ansehen",
      bookService: "Jetzt kontaktieren",
      emptyState: "Keine Leistungen gefunden. Versuchen Sie es mit einem anderen Suchbegriff.",
      categoryLabel: "Kategorie",
      techSpecsTitle: "Technische Details & VOB-Ausführung",
      specifications: [
        "Verwendung zertifizierter Markenprodukte (Sto, PCI, Knauf)",
        "Ausführung durch qualifizierte Fachkräfte",
        "Einhaltung aller deutschen Bau- und Energienormen (GEG)",
        "Staubfreie Sanierungstechnologie im bewohnten Zustand"
      ]
    },
    EN: {
      badgeText: "OUR SERVICES",
      heading: "Mastercraft Construction Services",
      searchPlaceholder: "Search services... (e.g., Drywall, Bathroom, Floor)",
      all: "All Services",
      interior: "Interior & Bath",
      exterior: "Facade & Exterior",
      general: "Restoration & General",
      learnMore: "Learn More",
      bookService: "Request Estimate",
      emptyState: "No services found matching your criteria. Try another search query.",
      categoryLabel: "Category",
      techSpecsTitle: "Technical Specs & German Workmanship",
      specifications: [
        "Use of certified premium products (Sto, PCI, Knauf)",
        "Execution by certified and licensed trade professionals",
        "Compliance with latest German energy saving laws (GEG)",
        "Sub-micron dust extraction for occupied homes"
      ]
    }
  }[language];

  // Filtering Logic
  const filteredServices = SERVICES.filter((service) => {
    const matchesTab = activeTab === 'All' || service.category === activeTab;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.longDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="services" className="relative py-24 bg-matte-black border-t border-white/10 overflow-hidden">
      
      {/* Design accents */}
      <div className="absolute top-1/4 right-0 w-[1px] h-96 bg-gold/15"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/[0.01] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-gold"></span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase font-bold">
                {t.badgeText}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
              {t.heading}
            </h2>
            <div className="h-[1.5px] w-20 bg-gold mt-4"></div>
          </div>

          {/* Search bar inside header */}
          <div className="relative w-full md:w-85">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-900 text-xs text-white border border-white/10 rounded-none focus:border-gold focus:bg-zinc-850 focus:outline-none transition-all placeholder:text-gray-500 font-mono tracking-wider"
            />
            <Search className="absolute left-3.5 top-3.5 text-gray-500" size={14} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3 text-gray-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Selectors */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-6">
          {(['All', 'Interior', 'Exterior', 'General'] as const).map((tab) => {
            const label = tab === 'All' ? t.all : tab === 'Interior' ? t.interior : tab === 'Exterior' ? t.exterior : t.general;
            const count = tab === 'All' ? SERVICES.length : SERVICES.filter((s) => s.category === tab).length;
            
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-350 flex items-center gap-2.5 cursor-pointer border ${
                  activeTab === tab
                    ? 'bg-gold text-matte-black border-gold font-black'
                    : 'bg-zinc-900 text-gray-400 border-white/10 hover:border-gold/30 hover:text-white'
                }`}
              >
                {label}
                <span className={`text-[10px] font-mono rounded-none px-2 py-0.5 font-bold ${
                  activeTab === tab ? 'bg-matte-black/20 text-matte-black' : 'bg-white/5 text-gray-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col h-full bg-zinc-900/40 rounded-none border border-white/10 hover:border-gold/45 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer hover:shadow-gold/5"
                onClick={() => setSelectedService(service)}
              >
                
                {/* Responsive Image Card Frame */}
                <div 
                  className="relative h-56 overflow-hidden bg-matte-black cursor-zoom-in group/img"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setLightboxService(service);
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-matte-black/20 to-transparent"></div>
                  
                  {/* Category Pill Tag inside Card */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-matte-black border border-white/15 text-[9px] font-mono tracking-widest uppercase text-gold font-bold rounded-none">
                    {service.category === 'Interior' ? 'Interior' : service.category === 'Exterior' ? 'Exterior' : 'General'}
                  </span>

                  {/* Icon Emblem floating on image bottom */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-gold/95 border border-white/10 rounded-none flex items-center justify-center text-matte-black shadow-none">
                    <LucideIcon name={service.iconName} size={18} />
                  </div>

                  {/* Zoom hint overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1.5 bg-gold text-matte-black font-mono text-[9px] font-bold tracking-widest uppercase border border-white/10 shadow-lg">
                      {language === 'DE' ? 'BILD VERGRÖSSERN' : 'ZOOM IMAGE'}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors font-serif">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    {/* Learn More Button */}
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-white hover:text-gold tracking-widest uppercase flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5 duration-350"
                    >
                      {t.learnMore}
                      <ChevronRight size={13} className="text-gold" />
                    </button>
                    
                    <span className="text-[10px] font-mono text-gray-500">DIN Verified</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-zinc-900/40 border border-white/10 rounded-none p-8 max-w-md mx-auto">
            <X className="mx-auto text-gold mb-4" size={32} />
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              {t.emptyState}
            </p>
          </div>
        )}

      </div>

      {/* Luxury Service Details Overlay Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="relative w-full max-w-xl bg-matte-black border border-white/15 rounded-none overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
            >
              
              {/* Header Image Header */}
              <div 
                className="relative h-36 sm:h-44 bg-steel-gray flex-shrink-0 cursor-zoom-in group/modalimg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setLightboxService(selectedService);
                }}
              >
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover object-center filter brightness-75 hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent"></div>
                
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedService(null);
                  }}
                  className="absolute top-3 right-3 p-2 bg-matte-black/80 hover:bg-gold hover:text-matte-black border border-white/10 rounded-none text-white transition-all cursor-pointer z-10"
                >
                  <X size={14} />
                </button>

                {/* Floating Title */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-mono tracking-widest text-gold uppercase bg-gold/10 px-2 py-0.5 border border-gold/20 rounded-none">
                      {selectedService.category}
                    </span>
                    <span className="text-[9px] font-mono text-gray-400">RMD Stuttgart HQ</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-sans font-black text-white uppercase tracking-tight truncate">
                    {selectedService.title}
                  </h3>
                </div>

                {/* Zoom hint overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/modalimg:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-gold text-matte-black font-mono text-[9px] font-bold tracking-widest uppercase border border-white/10 shadow-lg">
                    {language === 'DE' ? 'BILD VERGRÖSSERN' : 'ZOOM IMAGE'}
                  </span>
                </div>
              </div>

              {/* Scrollable Modal Content (Compact Height) */}
              <div className="p-4 sm:p-5 space-y-4 flex-grow flex flex-col justify-between overflow-hidden">
                
                {/* Service Detailed Narrative */}
                <div className="max-h-24 overflow-y-auto pr-1">
                  <p className="text-xs sm:text-sm text-light-gray font-light leading-relaxed font-serif">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Dynamic Technical Specs Checklists */}
                <div className="p-3 bg-steel-gray/30 border border-white/10 rounded-none space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={12} className="text-gold" />
                    <h4 className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">
                      {t.techSpecsTitle}
                    </h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {t.specifications.slice(0, 2).map((spec) => (
                      <li key={spec} className="flex items-start gap-1.5 text-[10px] text-gray-400 font-light">
                        <CheckCircle2 size={12} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="truncate">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Actions Footer */}
              <div className="p-4 bg-steel-gray/20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
                <span className="text-[10px] font-mono text-gray-500">
                  {t.categoryLabel}: <strong className="text-gold">{selectedService.category}</strong>
                </span>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-1/2 sm:w-auto px-4 py-2 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border border-white/10 text-[10px] font-bold tracking-widest uppercase rounded-none transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onBookService(selectedService.title);
                      setSelectedService(null);
                    }}
                    className="w-1/2 sm:w-auto px-4.5 py-2.5 bg-gold hover:bg-gold-dark text-matte-black text-[10px] font-black tracking-widest uppercase rounded-none transition-all shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {t.bookService}
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ImageLightbox
        isOpen={lightboxService !== null}
        onClose={() => setLightboxService(null)}
        image={lightboxService?.image || ''}
        title={lightboxService?.title}
        category={lightboxService?.category}
        description={lightboxService?.longDescription}
        language={language}
      />

    </section>
  );
}
