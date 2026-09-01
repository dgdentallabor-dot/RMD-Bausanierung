import { TIMELINE } from '../data';
import LucideIcon from './LucideIcon';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface WorkProcessProps {
  onStartProject: () => void;
}

export default function WorkProcess({ onStartProject }: WorkProcessProps) {
  const t = {
    badgeText: "TRANSPARENTER PROZESS",
    heading: "Unser 7-Schritte Ablauf",
    subheading: "Von der ersten Idee bis zur schlüsselfertigen Übergabe: Ein strukturierter, verlässlicher und VOB-konformer Bauablauf.",
    ctaText: "Projekt jetzt starten",
    calloutTitle: "Volle Transparenz & Qualitätsgarantie",
    calloutDesc: "Keine versteckten Kosten. Jeder Einzelschritt wird schriftlich fixiert und nach strengen deutschen Qualitätsrichtlinien ausgeführt.",
  };

  return (
    <section id="process" className="relative py-28 bg-[#111111] border-t border-white/10 overflow-hidden">
      
      {/* Structural ambient light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

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

        {/* 7-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TIMELINE.map((step, index) => (
            <div
              key={step.id}
              className={`relative p-6 bg-zinc-900/40 border border-white/10 rounded-none hover:border-gold/40 transition-all duration-300 flex flex-col justify-between ${
                index === 6 ? 'md:col-span-2 lg:col-span-2 bg-zinc-900/70 border-gold/30' : ''
              }`}
            >
              {/* Step number and icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-black text-gold tracking-tight">
                    {step.stepNumber}
                  </span>
                  <div className="w-9 h-9 bg-matte-black border border-white/10 rounded-none flex items-center justify-center text-gold">
                    <LucideIcon name={step.iconName} size={16} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-serif">
                  {step.title}
                </h3>
                
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  Phase {step.stepNumber} von 07
                </span>
                <div className="w-1.5 h-1.5 bg-gold/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner & CTA Bar */}
        <div className="p-8 sm:p-10 bg-matte-black border border-white/10 rounded-none flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start sm:items-center gap-5 text-left">
            <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-none flex items-center justify-center text-gold flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-serif uppercase tracking-tight">
                {t.calloutTitle}
              </h4>
              <p className="text-xs text-gray-400 font-light mt-1 max-w-xl">
                {t.calloutDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onStartProject}
            className="w-full lg:w-auto px-8 py-4 bg-gold hover:bg-gold-dark text-matte-black font-black tracking-widest uppercase rounded-none text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>{t.ctaText}</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>

    </section>
  );
}
