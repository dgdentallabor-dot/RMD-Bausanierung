import { FEATURES, STATS } from '../data';
import LucideIcon from './LucideIcon';

export default function WhyChooseUs() {
  const t = {
    badgeText: "DEUTSCHER QUALITÄTSSTANDARD",
    heading: "Warum RMD Bausanierung?",
    subheading: "Wir verbinden traditionelle deutsche Handwerkskunst mit modernsten Baumaterialien und transparenter Kundenkommunikation.",
    statsHeader: "Zahlen, die für sich sprechen",
  };

  return (
    <section id="why-choose-us" className="relative py-28 bg-[#111111] border-t border-white/10 overflow-hidden">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

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

        {/* 8 Distinct Value Proposition Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative p-6 bg-zinc-900/50 border border-white/10 hover:border-gold/40 rounded-none transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Index */}
              <span className="text-[10px] font-mono text-gray-600 group-hover:text-gold transition-colors font-bold absolute top-4 right-4">
                0{idx + 1}
              </span>

              <div>
                <div className="w-10 h-10 bg-matte-black border border-white/10 rounded-none flex items-center justify-center text-gold mb-5 group-hover:border-gold group-hover:bg-gold group-hover:text-matte-black transition-all duration-300">
                  <LucideIcon name={feature.iconName} size={18} />
                </div>
                
                <h3 className="text-sm font-bold text-white mb-2 font-serif group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Geprüfte Qualität</span>
                <div className="w-1.5 h-1.5 bg-gold/50 group-hover:bg-gold"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Counters & Statistics Strip */}
        <div className="bg-matte-black border border-white/10 rounded-none p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col items-center text-center ${i > 0 ? 'pt-6 md:pt-0' : ''}`}>
                <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-gold tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-300 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
