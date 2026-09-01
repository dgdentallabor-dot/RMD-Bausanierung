import { TESTIMONIALS } from '../data';
import { Star, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const t = {
    badgeText: "KUNDENSTIMMEN",
    heading: "Was unsere Auftraggeber sagen",
    subheading: "Echtes Feedback von Eigentümern, Bauherren und Architekten aus Baden-Württemberg.",
    verified: "Verifizierter Auftraggeber"
  };

  return (
    <section id="testimonials" className="relative py-28 bg-matte-black border-t border-white/10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-gold"></span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase font-bold">
              {t.badgeText}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            {t.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-2xl font-serif">
            {t.subheading}
          </p>
          <div className="h-[1.5px] w-20 bg-gold mt-6"></div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="relative p-8 bg-zinc-900/40 border border-white/10 hover:border-gold/40 rounded-none transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote size={20} className="text-white/20" />
                </div>

                {/* Project Badge */}
                <span className="inline-block px-2.5 py-0.5 bg-gold/10 border border-gold/30 text-[9px] font-mono tracking-wider text-gold font-bold uppercase mb-4">
                  {test.projectType}
                </span>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-8 italic">
                  "{test.review}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-11 h-11 rounded-none border border-white/10 object-cover"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white font-serif">
                    {test.name}
                  </h4>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {test.role}
                  </p>
                  <p className="text-[10px] font-mono text-gold flex items-center gap-1 mt-0.5">
                    <MapPin size={10} />
                    {test.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
