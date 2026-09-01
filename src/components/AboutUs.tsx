import { useState } from 'react';
import { STORY_CONTENT } from '../data';
import { CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import imgFounderStory from '../assets/images/Gemini_Generated_Image_z8lmdbz8lmdbz8lm_1.png';
import ImageLightbox from './ImageLightbox';

export default function AboutUs() {
  const [isTeamPhotoOpen, setIsTeamPhotoOpen] = useState(false);
  const t = {
    heading: "Über RMD Bausanierung",
    badgeText: "UNSERE GRÜNDUNGSGESCHICHTE",
    highlightTitle: "Qualitätsversprechen",
    highlightText: "Über ein Jahrzehnt praktische Branchenerfahrung in ganz Deutschland sichert Ihnen fehlerfreie Bauausführungen nach höchsten DIN-Normen.",
    brothersTitle: "Die Gründungsbrüder",
    experienceTag: "Jahre Erfahrung"
  };

  return (
    <section id="about" className="relative py-32 md:py-44 bg-[#FAF9F6] border-t border-black/[0.05] overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-24 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1.5px] bg-gold"></span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase font-bold">
              {t.badgeText}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-matte-black tracking-tight uppercase leading-none">
            {t.heading}
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-6"></div>
        </div>

        {/* Story Intro & Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-28 md:mb-36">
          
          {/* Column 1: Core Story Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-matte-black leading-relaxed font-serif">
              {STORY_CONTENT.subtitle}
            </h3>
            
            <div className="space-y-6">
              {STORY_CONTENT.paragraphs.map((p, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-5 bg-white border border-black/10 rounded-none flex items-start gap-4 shadow-sm">
                <ShieldCheck size={22} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-matte-black tracking-widest uppercase mb-1.5 font-mono">
                    VOB & DIN Konform
                  </span>
                  <span className="text-xs text-gray-600 leading-relaxed">
                    Regelkonforme Ausführung aller Sanierungsarbeiten.
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white border border-black/10 rounded-none flex items-start gap-4 shadow-sm">
                <CheckCircle2 size={22} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-matte-black tracking-widest uppercase mb-1.5 font-mono">
                    Festpreisgarantie
                  </span>
                  <span className="text-xs text-gray-600 leading-relaxed">
                    Sichere Kalkulationen ohne nachträgliche Überraschungen.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Side Feature Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative group mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-gold/15 rounded-none blur-none border border-gold/20 pointer-events-none"></div>
            
            <div 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsTeamPhotoOpen(true);
              }}
              className="relative overflow-hidden rounded-none border border-black/10 shadow-lg bg-white cursor-pointer"
            >
              <img
                src={imgFounderStory}
                alt="RMD Bausanierung Team"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent"></div>
              
              {/* Zoom Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mb-24">
                <div className="w-12 h-12 bg-gold text-matte-black flex items-center justify-center border border-white/10 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                   <span className="text-[10px] font-mono font-bold tracking-widest uppercase">ZOOM</span>
                </div>
              </div>

              {/* Highlight Badge inside Image */}
              <div className="absolute bottom-4 left-4 right-4 p-5 bg-matte-black/95 border border-white/10 rounded-none">
                <div className="flex items-center gap-3 mb-1.5">
                  <Star size={14} className="text-gold fill-gold" />
                  <span className="text-[10px] font-bold text-gold font-mono uppercase tracking-widest">
                    {t.highlightTitle}
                  </span>
                </div>
                <p className="text-xs text-light-gray leading-relaxed">
                  {t.highlightText}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Brothers Section */}
        <div className="border-t border-black/10 pt-24 mt-24 md:pt-32">
          <div className="mb-12 text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase font-mono text-gold">
              // {t.brothersTitle}
            </h3>
            <p className="text-xs text-gray-500 mt-2 uppercase font-mono tracking-widest">Die Gründungsmitglieder von RMD Bad Urach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORY_CONTENT.brothers.map((brother, index) => (
              <div
                key={brother.name}
                className="group relative p-6 sm:p-8 bg-white rounded-none border border-black/10 hover:border-gold/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                {/* Floating corner background count */}
                <div className="absolute top-4 right-6 text-7xl font-mono font-extrabold text-black/[0.02] group-hover:text-gold/[0.04] transition-colors pointer-events-none">
                  0{index + 1}
                </div>

                <div>
                  {/* Avatar / Initials Box */}
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-none flex items-center justify-center text-gold font-mono font-bold text-lg mb-6 group-hover:bg-gold group-hover:text-matte-black transition-all duration-300">
                    {brother.name.charAt(0)}
                  </div>

                  <h4 className="text-lg font-bold text-matte-black mb-1 group-hover:text-gold transition-colors font-serif font-extrabold">
                    {brother.name}
                  </h4>
                  <p className="text-xs font-mono tracking-widest uppercase text-gold/80 mb-4 font-bold">
                    {brother.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {brother.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">Bad Urach HQ</span>
                  <span className="text-[10px] font-mono text-gold font-bold">12+ {t.experienceTag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Team Photo Lightbox Modal */}
      <ImageLightbox
        isOpen={isTeamPhotoOpen}
        onClose={() => setIsTeamPhotoOpen(false)}
        image={imgFounderStory}
        title="Die Gründungsbrüder Sallaj"
        category="UNSER TEAM"
        description="Muharem, Ramazan und Denis Sallaj – Ihr verlässliches Expertenteam für erstklassige Bausanierung und Modernisierung aus Bad Urach."
      />

    </section>
  );
}
