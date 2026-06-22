import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Filter, Image as ImageIcon, X, Clock, Maximize2, User, Landmark, ShieldCheck } from 'lucide-react';
import { TATTOO_PORTFOLIO } from '../data';
import { TattooItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { OrnamentDivider } from '../components/CustomSvgs';

export const Gallery: FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>('Alle');
  const [activeTattoo, setActiveTattoo] = useState<TattooItem | null>(null);

  const filterCategories = [
    'Alle',
    'Fineline',
    'Blackwork',
    'Wikingisch',
    'Calligraphy',
    'Realismus',
    'Lettering',
    'Ornamental'
  ];

  const filteredPortfolio = selectedStyle === 'Alle'
    ? TATTOO_PORTFOLIO
    : TATTOO_PORTFOLIO.filter(item => item.style.toLowerCase() === selectedStyle.toLowerCase());

  return (
    <div className="bg-transparent min-h-screen text-soft-white font-sans py-16" id="portfolio-gallery-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Haut-Meisterwerke</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white">Unsere Galerie</h1>
          <p className="text-body text-soft-white/80 max-w-xl mx-auto font-light">
            Jede Tätowierung ist ein Unikat. Schau dir unsere hochauflösenden Abzüge echter Arbeiten an. Klicke auf ein Bild, um Details zu Artist, Größe und Stechzeit zu erfahren.
          </p>
          <div className="pt-2 relative flex flex-col items-center">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
            <span className="font-hand text-old-gold text-2xl -rotate-[4deg] mt-2 block">
              handgezeichnet.
            </span>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="gallery-filters-container">
          {filterCategories.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
                selectedStyle === style
                  ? 'bg-old-gold border-old-gold text-ink-black font-bold'
                  : 'bg-transparent border-soft-white/10 text-soft-white/70 hover:border-soft-white/40 hover:text-soft-white'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* The TattooGrid (6 items, highly aesthetic) */}
        {filteredPortfolio.length === 0 ? (
          <div className="text-center py-20 text-soft-white/50 font-mono text-body">
            Momentan keine Tattoos in dieser Kategorie gelistet.
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="tattoo-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="group bg-surface-dark border border-soft-white/10 p-4 hover:border-old-gold/50 transition-colors duration-300 relative flex flex-col justify-between"
                  id={`tattoo-item-${item.id}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-ink-black/40">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-ink-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center space-y-4">
                      <button
                        onClick={() => setActiveTattoo(item)}
                        className="p-3 bg-old-gold rounded-full text-ink-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-soft-white"
                        aria-label="Details anzeigen"
                      >
                        <Maximize2 className="h-5 w-5" />
                      </button>
                      <span className="font-mono text-eyebrow uppercase tracking-wider text-soft-white/60">
                        Klicken für Details &amp; Infos
                      </span>
                    </div>

                    <span className="absolute top-3 left-3 bg-ink-black/80 font-mono text-eyebrow uppercase tracking-[0.2em] px-2 py-1 text-old-gold border border-old-gold/30">
                      {item.style}
                    </span>
                    <span className="absolute top-3 right-3 font-mono text-eyebrow text-old-gold bg-ink-black/85 px-2 py-1 border border-old-gold/30">
                      Nº 04{item.id}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-hand text-lg text-soft-white group-hover:text-old-gold transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="pt-3 border-t border-soft-white/5 grid grid-cols-2 gap-2 text-caption font-mono text-soft-white/60">
                      <div>
                        <span className="block text-eyebrow uppercase text-old-gold/70">Artist</span>
                        <span className="truncate block text-soft-white/70">{item.artist}</span>
                      </div>
                      <div>
                        <span className="block text-eyebrow uppercase text-old-gold/70">Sitzung</span>
                        <span className="block text-soft-white/70">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Portfolio CTA segment */}
        <div className="mt-20 border-t border-soft-white/10 pt-16 text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-2xl font-light text-soft-white">Gefällt dir einer dieser Stile?</h2>
          <p className="text-body text-soft-white/80 font-light">
            Buche direkt ein kostenloses Beratungsgespräch mitsamt Wunschstil-Auswahl. Wir entwerfen dein Wunschmotiv maßgeschneidert und zentimetergenau.
          </p>
          <div className="pt-2">
            <Link
              to="/buchung"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-tattoo-red hover:bg-tattoo-red/80 text-soft-white text-xs font-mono uppercase tracking-[0.15em] transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>Terminanfrage stellen</span>
            </Link>
          </div>
        </div>

      </div>

      {/* 5. Lightbox Modal Integration with Deep Details */}
      <AnimatePresence>
        {activeTattoo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
            onClick={() => setActiveTattoo(null)}
            id="tattoo-lightbox"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-surface-dark border border-old-gold/30 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 relative shadow-2xl p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveTattoo(null)}
                className="absolute top-4 right-4 p-2 bg-ink-black/80 hover:bg-tattoo-red text-soft-white rounded-none border border-soft-white/10 transition-colors z-10"
                aria-label="Schließen"
                id="close-lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Column 1: Medium Image */}
              <div className="relative aspect-[4/5] bg-ink-black flex items-center justify-center border border-soft-white/10 overflow-hidden">
                <img
                  src={activeTattoo.imageUrl}
                  alt={activeTattoo.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Column 2: Deep details & Metadata */}
              <div className="p-4 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-eyebrow text-tattoo-red uppercase tracking-widest block">
                      {activeTattoo.style} Stil
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-light text-soft-white tracking-wide mt-1">
                      {activeTattoo.title}
                    </h2>
                  </div>

                  <p className="text-body text-soft-white/80 font-light">
                    {activeTattoo.description}
                  </p>

                  <div className="w-12 h-[1px] bg-old-gold" />

                  {/* Metadata fields */}
                  <div className="space-y-3 font-mono text-caption">
                    <div className="flex items-center space-x-3 text-soft-white/80">
                      <User className="h-4 w-4 text-old-gold" />
                      <span><strong>Artist:</strong> {activeTattoo.artist}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-soft-white/80">
                      <Maximize2 className="h-4 w-4 text-old-gold" />
                      <span><strong>Größe:</strong> {activeTattoo.size}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-soft-white/80">
                      <Clock className="h-4 w-4 text-old-gold" />
                      <span><strong>Stechzeit:</strong> {activeTattoo.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-soft-white/80">
                      <Calendar className="h-4 w-4 text-old-gold" />
                      <span><strong>Gestochen am:</strong> {activeTattoo.date}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-soft-white/10 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/buchung"
                    state={{ preselectedArtist: activeTattoo.artist, preselectedStyle: activeTattoo.style }}
                    onClick={() => setActiveTattoo(null)}
                    className="flex-1 py-3 bg-tattoo-red hover:bg-tattoo-red/80 text-center font-mono text-xs uppercase tracking-wider text-soft-white border border-tattoo-red"
                  >
                    Analoges Motiv anfragen
                  </Link>
                  <button
                    onClick={() => setActiveTattoo(null)}
                    className="px-4 py-3 bg-transparent hover:bg-soft-white/10 text-center font-mono text-xs uppercase tracking-wider text-soft-white/70 border border-soft-white/20"
                  >
                    Zurück
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
