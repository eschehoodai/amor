import { useState, FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { LogoSvg } from './CustomSvgs';
import { motion, AnimatePresence } from 'motion/react';

export const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Startseite' },
    { path: '/galerie', label: 'Portfolio' },
    { path: '/permanent-makeup', label: 'Permanent Make-up' },
    { path: '/piercing', label: 'Piercing' },
    { path: '/kurse', label: 'Kurse' },
    { path: '/buchung', label: 'Anfrage stellen' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink-black/95 backdrop-blur-md relative" id="header-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Branding */}
          <Link to="/" className="flex items-center space-x-3 group" id="logo-link">
            <div className="transition-transform duration-500 group-hover:rotate-180">
              <LogoSvg className="h-12 w-12 text-old-gold" />
            </div>
            <div className="flex flex-col relative">
              <span className="font-display text-xl tracking-[0.2em] uppercase text-soft-white leading-tight group-hover:text-old-gold transition-colors duration-300">
                AmorsNadel
              </span>
              <svg className="my-0.5" width="100" height="4" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2 Q 25 1, 50 2 T 98 2" stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-tattoo-red leading-none">
                Hautkunst Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative py-2 ${
                    isActive
                      ? 'text-old-gold font-medium'
                      : 'text-soft-white/70 hover:text-soft-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-old-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Button & Contact info */}
          <div className="hidden lg:flex items-center space-x-6" id="header-cta-container">
            <a
              href="tel:+491744312856"
              className="flex items-center space-x-2 font-mono text-[11px] text-soft-white/60 hover:text-old-gold transition-colors duration-300"
            >
              <Phone className="h-3.5 w-3.5 text-tattoo-red" />
              <span>0174 4312856</span>
            </a>
            <Link
              to="/buchung"
              className="relative inline-flex items-center px-5 py-2.5 overflow-hidden text-xs font-mono uppercase tracking-[0.15em] text-soft-white bg-transparent border border-tattoo-red hover:text-ink-black group transition duration-300"
              id="header-cta-btn"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full bg-tattoo-red group-hover:translate-x-0" />
              <span className="relative flex items-center space-x-2">
                <Calendar className="h-3.5 w-3.5" />
                <span>Anfrage Senden</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-soft-white opacity-85 hover:opacity-100 transition-opacity"
            aria-label="Hauptmenü"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface-dark border-b border-soft-white/10 overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm uppercase tracking-[0.25em] border-l-2 transition-colors ${
                      isActive
                        ? 'border-tattoo-red text-old-gold bg-ink-black'
                        : 'border-transparent text-soft-white/70 hover:text-soft-white hover:bg-ink-black/40'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-soft-white/10 px-4 flex flex-col space-y-4">
                <a
                  href="tel:+491744312856"
                  className="flex items-center space-x-3 text-xs font-mono text-soft-white/60"
                >
                  <Phone className="h-4 w-4 text-tattoo-red" />
                  <span>0174 4312856</span>
                </a>
                <Link
                  to="/buchung"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-tattoo-red text-soft-white font-mono text-xs uppercase tracking-[0.2em] rounded-none hover:bg-tattoo-red/80 transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Termin vereinbaren</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden opacity-30 pointer-events-none">
        <svg width="100%" height="3" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 1 Q 512 0, 1024 1" fill="none" stroke="#D4A017" strokeWidth="2" />
        </svg>
      </div>
    </header>
  );
};
