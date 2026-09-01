import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook, Youtube, ShieldAlert } from 'lucide-react';

interface FooterProps {
  language: 'DE' | 'EN';
  onOpenPrivacy: () => void;
  onOpenImprint: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ language, onOpenPrivacy, onOpenImprint, onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onScrollToSection(href);
  };

  const t = {
    DE: {
      desc: "Meisterbetrieb für exklusiven Innenausbau, Badrenovierungen, Trockenbau und Feinsteinzeug-Fliesenlegung in Bad Urach, Stuttgart und Umgebung.",
      servicesTitle: "Dienstleistungen",
      quickLinksTitle: "Unternehmens-Links",
      legalTitle: "Rechtliches",
      contactTitle: "Direktkontakt",
      privacyLink: "Datenschutzerklärung",
      imprintLink: "Impressum",
      copyright: `© ${currentYear} Ramazan Sallaj RMD Bausanierung. Alle Rechte vorbehalten. Handwerkliche Perfektion.`,
      quickLinks: [
        { name: "Über Uns", href: "#about" },
        { name: "Leistungen", href: "#services" },
        { name: "Vorteile", href: "#why-choose-us" },
        { name: "Projekte", href: "#gallery" },
        { name: "Ablauf", href: "#process" },
        { name: "Häufige Fragen", href: "#faq" }
      ],
      services: [
        { name: "Badsanierung" },
        { name: "Trockenbau" },
        { name: "Fliesenlegerarbeiten" },
        { name: "Chevron-Bodenleger" },
        { name: "Maler- & Putzarbeiten" },
        { name: "Dachausbau" }
      ]
    },
    EN: {
      desc: "Premium trade company specializing in luxury interior finishing, bathroom remodeling, drywall, and custom stoneware tiling across Bad Urach and Stuttgart.",
      servicesTitle: "Our Services",
      quickLinksTitle: "Corporate Links",
      legalTitle: "Legal Policies",
      contactTitle: "Get in Touch",
      privacyLink: "Privacy Policy",
      imprintLink: "Imprint / Disclosure",
      copyright: `© ${currentYear} Ramazan Sallaj RMD Bausanierung. All rights reserved. Crafted with German Precision.`,
      quickLinks: [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Our Advantages", href: "#why-choose-us" },
        { name: "Project Gallery", href: "#gallery" },
        { name: "Our Process", href: "#process" },
        { name: "FAQ", href: "#faq" }
      ],
      services: [
        { name: "Bathroom Remodeling" },
        { name: "Drywall & Partitioning" },
        { name: "Precision Tiling" },
        { name: "Chevron Parquet Wood" },
        { name: "Painting & Decor" },
        { name: "Attic Suite Conversion" }
      ]
    }
  }[language];

  return (
    <footer className="bg-white border-t border-black/[0.05] pt-20 pb-10 text-left relative overflow-hidden">
      
      {/* Decorative vertical divider line */}
      <div className="absolute left-1/4 inset-y-0 w-[1px] bg-black/[0.01]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-black/10">
          
          {/* Col 1: Corporate Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded-none flex items-center justify-center border border-gold-light/25 shadow-none">
                <span className="font-mono text-xl font-extrabold text-matte-black tracking-tighter">R</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl font-bold tracking-widest text-matte-black font-serif">RMD</span>
                  <span className="ml-1.5 h-1.5 w-1.5 bg-gold rounded-none"></span>
                </div>
                <span className="text-[9px] font-mono tracking-[0.35em] text-gold uppercase -mt-1 font-bold">
                  Bausanierung
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              {t.desc}
            </p>

            {/* Social Media Vectors */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/rmd_bausanierung"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-slate-50 border border-black/10 hover:border-gold hover:bg-gold/5 rounded-none flex items-center justify-center text-gray-500 hover:text-gold transition-colors"
                aria-label="Instagram link"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-slate-50 border border-black/10 hover:border-gold hover:bg-gold/5 rounded-none flex items-center justify-center text-gray-500 hover:text-gold transition-colors"
                aria-label="Facebook link"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-slate-50 border border-black/10 hover:border-gold hover:bg-gold/5 rounded-none flex items-center justify-center text-gray-500 hover:text-gold transition-colors"
                aria-label="YouTube link"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Services Index (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-mono font-bold text-matte-black tracking-widest uppercase text-gold">
              // {t.servicesTitle}
            </h4>
            <ul className="space-y-3">
              {t.services.map((srv) => (
                <li key={srv.name}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="text-xs text-gray-600 hover:text-gold transition-colors font-light"
                  >
                    {srv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-mono font-bold text-matte-black tracking-widest uppercase text-gold">
              // {t.quickLinksTitle}
            </h4>
            <ul className="space-y-3">
              {t.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-gray-600 hover:text-gold transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address Details (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-mono font-bold text-matte-black tracking-widest uppercase text-gold">
              // {t.contactTitle}
            </h4>
            <ul className="space-y-4 text-xs font-light text-gray-600">
              
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Ramazan Sallaj RMD Bausanierung</strong><br />
                  Ulmer Str. 6<br />
                  72574 Bad Urach, Deutschland
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:+491729081394" className="hover:text-gold transition-colors">
                  +49 (0) 172 9081394
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:rmd.bausanierung@gmail.com" className="hover:text-gold transition-colors">
                  rmd.bausanierung@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <span>Mo - Sa: 07:00 - 18:00 Uhr</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer Base Legal bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-mono text-gray-500 text-center md:text-left">
            {t.copyright}
          </p>

          <div className="flex items-center gap-6 text-[10px] font-mono">
            <button
              onClick={onOpenImprint}
              className="text-gray-500 hover:text-gold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.imprintLink}
            </button>
            <button
              onClick={onOpenPrivacy}
              className="text-gray-500 hover:text-gold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.privacyLink}
            </button>
            <span className="text-gray-500 flex items-center gap-1">
              <ShieldAlert size={10} />
              VOB/B Compliant
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
