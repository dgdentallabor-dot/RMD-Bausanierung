import { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

interface FAQProps {
  onContactClick: () => void;
}

export default function FAQ({ onContactClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = {
    badgeText: "HÄUFIGE FRAGEN",
    heading: "Antworten auf Ihre Fragen",
    subheading: "Hier finden Sie transparente Details zu unseren Abläufen, Kosten, Vor-Ort-Terminen und Qualitätsstandards.",
    stillQuestions: "Sie haben eine spezifische Frage zu Ihrem Projekt?",
    stillQuestionsDesc: "Rufen Sie uns direkt an oder fordern Sie eine kostenfreie Vor-Ort-Besichtigung an.",
    callBtn: "+49 (0) 1522 4941028",
    messageBtn: "Nachricht schreiben"
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#111111] border-t border-white/10 overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-gold"></span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase font-bold">
              {t.badgeText}
            </span>
            <span className="w-6 h-[1.5px] bg-gold"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            {t.heading}
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed font-serif">
            {t.subheading}
          </p>
          <div className="h-[1.5px] w-16 bg-gold mx-auto mt-6"></div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-20 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border border-white/10 bg-zinc-900/40 rounded-none overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-3">
                    <span className="text-gold font-mono text-xs">0{index + 1}.</span>
                    {faq.question}
                  </span>
                  <div className={`p-1 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 bg-matte-black border border-white/10 rounded-none flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gold/10 border border-gold/30 rounded-none flex items-center justify-center text-gold flex-shrink-0">
              <HelpCircle size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-serif">
                {t.stillQuestions}
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                {t.stillQuestionsDesc}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:+4915224941028"
              className="px-5 py-2.5 bg-white/5 hover:bg-gold text-white hover:text-matte-black border border-white/10 hover:border-gold text-[11px] font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Phone size={12} />
              <span>{t.callBtn}</span>
            </a>
            <button
              onClick={onContactClick}
              className="px-5 py-2.5 bg-gold hover:bg-gold-dark text-matte-black font-mono font-black text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare size={12} />
              <span>{t.messageBtn}</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
