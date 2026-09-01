import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Sliders, MapPin, Calendar, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  beforeImage?: string;
  title?: string;
  category?: string;
  description?: string;
  location?: string;
  year?: string;
  size?: string;
  tags?: string[];
}

export default function ImageLightbox({
  isOpen,
  onClose,
  image,
  beforeImage,
  title,
  category,
  description,
  location,
  year,
  size,
  tags,
}: ImageLightboxProps) {
  const [slidePosition, setSlidePosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const t = {
    beforeLabel: 'VORHER',
    afterLabel: 'NACHHER',
    sliderHint: 'Ziehen zum Vergleichen',
    close: 'Schließen'
  };

  // Prevent background scrolling and handle escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  // Handle slide compare dragging
  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSlidePosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black/85 z-[999999] p-4 sm:p-6 select-none"
        >
          {/* Animated Lightbox Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-4xl bg-matte-black border border-white/10 rounded-none overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-[1000000]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/80 flex-shrink-0">
              <div className="flex items-center gap-2.5 truncate">
                {category && (
                  <span className="px-2 py-0.5 bg-gold/10 border border-gold/30 text-[9px] font-mono tracking-widest uppercase text-gold font-bold rounded-none">
                    {category === 'Bathroom' ? 'Bäder' : category}
                  </span>
                )}
                {title && (
                  <h3 className="text-sm font-bold text-white tracking-tight leading-tight font-serif truncate max-w-[240px] sm:max-w-md">
                    {title}
                  </h3>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClose();
                }}
                className="p-1.5 bg-white/5 hover:bg-gold text-gray-400 hover:text-matte-black border border-white/10 rounded-none transition-colors cursor-pointer"
                aria-label={t.close}
              >
                <X size={16} />
              </button>
            </div>

            {/* Media Viewport */}
            <div className="relative bg-black flex-grow flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[350px] md:min-h-[450px]">
              {beforeImage ? (
                /* BEFORE/AFTER INTERACTIVE SLIDER */
                <div
                  ref={sliderRef}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onTouchStart={() => setIsDragging(true)}
                  className="absolute inset-0 w-full h-full select-none overflow-hidden cursor-ew-resize"
                >
                  {/* AFTER Image (Background) */}
                  <img
                    src={image}
                    alt="Nach der Sanierung"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    style={{ maxWidth: '85vw', maxHeight: '85vh' }}
                  />
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-gold text-matte-black font-mono font-bold text-[9px] uppercase rounded-none tracking-widest shadow border border-white/10 z-10">
                    {t.afterLabel}
                  </div>

                  {/* BEFORE Image (Clipped Foreground) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: `${slidePosition}%` }}
                  >
                    <img
                      src={beforeImage}
                      alt="Vor der Sanierung"
                      className="absolute top-0 left-0 w-full h-full object-contain max-w-none pointer-events-none"
                      style={{ 
                        width: sliderRef.current?.getBoundingClientRect().width,
                        height: sliderRef.current?.getBoundingClientRect().height,
                      }}
                    />
                    <div className="absolute top-4 left-4 px-2 py-0.5 bg-red-600 text-white font-mono font-bold text-[9px] uppercase rounded-none tracking-widest shadow border border-white/10 z-10">
                      {t.beforeLabel}
                    </div>
                  </div>

                  {/* Splitter Line and Handle */}
                  <div
                    className="absolute inset-y-0 w-[2px] bg-gold flex items-center justify-center z-20 pointer-events-none"
                    style={{ left: `${slidePosition}%` }}
                  >
                    <div className="w-7 h-7 rounded-none bg-gold border border-matte-black shadow-lg flex items-center justify-center text-matte-black pointer-events-auto cursor-ew-resize">
                      <Sliders size={12} className="transform rotate-90" />
                    </div>
                  </div>

                  {/* Comparison Help Hint */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-matte-black/90 backdrop-blur-sm border border-white/10 rounded-none text-[9px] font-mono tracking-widest uppercase text-gray-300 flex items-center gap-1.5 pointer-events-none z-10">
                    <Sliders size={10} className="text-gold" />
                    {t.sliderHint}
                  </div>
                </div>
              ) : (
                /* SINGLE IMAGE VIEW */
                <img
                  src={image}
                  alt={title || "Projektansicht"}
                  className="w-full h-full object-contain bg-black/40"
                  style={{
                    maxWidth: '85vw',
                    maxHeight: '85vh',
                    objectFit: 'contain'
                  }}
                />
              )}
            </div>

            {/* Details / Footer Section */}
            {description && (
              <div className="p-4 bg-zinc-900/90 border-t border-white/10 flex flex-col gap-3.5 flex-shrink-0 text-left">
                <p className="text-xs text-gray-300 font-light leading-relaxed font-serif max-h-[100px] overflow-y-auto">
                  {description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] font-mono text-gray-400">
                    {location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-gold" />
                        Standort: {location}
                      </span>
                    )}
                    {year && (
                      <span className="flex items-center gap-1">
                        <Calendar size={11} className="text-gold" />
                        Baujahr: {year}
                      </span>
                    )}
                    {size && (
                      <span className="flex items-center gap-1">
                        <Grid size={11} className="text-gold" />
                        Fläche: {size}
                      </span>
                    )}
                  </div>

                  {tags && tags.length > 0 && (
                    <div className="flex gap-1">
                      {tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-zinc-800 border border-white/10 text-[8px] text-gray-300 font-mono tracking-wider">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
