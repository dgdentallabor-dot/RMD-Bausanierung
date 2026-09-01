import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Über Uns', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Vorteile', href: '#why-choose-us' },
    { name: 'Projekte', href: '#gallery' },
    { name: 'Ablauf', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-black/10 shadow-[0_4px_25px_rgba(0,0,0,0.05)] text-matte-black'
          : 'bg-matte-black/40 backdrop-blur-sm py-5 border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 bg-gradient-to-br from-gold via-gold/90 to-gold-dark rounded-none flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
              <span className="font-mono text-2xl font-black text-matte-black tracking-tighter">R</span>
            </div>
            <div className="flex flex-col justify-center text-left">
              <div className="flex items-center">
                <span className={`text-2xl font-black tracking-[0.1em] font-sans uppercase transition-colors duration-500 ${isScrolled ? 'text-matte-black' : 'text-white'}`}>RMD</span>
                <span className="ml-1.5 h-1.5 w-1.5 bg-gold animate-pulse"></span>
              </div>
              <span className="text-[9px] font-mono tracking-[0.4em] text-gold uppercase -mt-0.5 font-bold">
                Bausanierung
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-[11px] font-extrabold tracking-[0.2em] uppercase transition-colors duration-300 relative group py-2 ${
                  isScrolled ? 'text-matte-black/80 hover:text-gold' : 'text-light-gray hover:text-gold'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center">
            {/* Quick Call */}
            <a
              href="tel:+491729081394"
              className={`flex items-center gap-2 text-xs font-mono font-bold text-gold transition-colors duration-300 ${
                isScrolled ? 'hover:text-matte-black' : 'hover:text-white'
              }`}
            >
              <Phone size={13} className="animate-pulse text-gold" />
              +49 (0) 172 9081394
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Quick Phone for mobile */}
            <a
              href="tel:+491729081394"
              className={`p-2.5 rounded-none border transition-colors ${
                isScrolled ? 'bg-slate-100 border-black/10 text-gold hover:text-matte-black' : 'bg-steel-gray/80 border-white/10 text-gold hover:text-white'
              }`}
              aria-label="Telefonanruf"
            >
              <Phone size={14} />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-matte-black hover:text-gold' : 'text-light-gray hover:text-gold'}`}
              aria-label="Menü öffnen"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Backdrop with heavy blur */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-xl lg:hidden transition-opacity"
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[100] w-full max-w-[340px] sm:max-w-sm bg-[#0d0d0d] border-l border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        } lg:hidden`}
        style={{ backgroundColor: '#0d0d0d' }}
      >
        <div className="pt-12">
          <div className="flex items-center justify-between pb-5 border-b border-white/15 mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold">// Navigation</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-none cursor-pointer transition-colors"
              aria-label="Menü schließen"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col space-y-2.5 text-left">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-bold text-white hover:text-gold bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-gold/40 px-4 py-3.5 flex items-center justify-between group transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="text-gold/60 group-hover:text-gold transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/15 pt-6 mt-8">
          <a
            href="tel:+491729081394"
            className="flex items-center justify-center gap-3 text-xs font-mono font-bold text-gold hover:text-white bg-gold/10 hover:bg-gold/20 border border-gold/40 py-3.5 px-4 transition-colors"
          >
            <Phone size={15} className="text-gold animate-pulse" />
            +49 (0) 172 9081394
          </a>
        </div>
      </div>
    </header>
  );
}
