import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { LogoSvg, OrnamentDivider } from './CustomSvgs';

export const Footer: FC = () => {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-dark text-soft-white border-t border-soft-white/10 pt-16 pb-8 font-sans" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Ornament Separator */}
        <div className="mb-12 flex justify-center">
          <OrnamentDivider className="max-w-md text-old-gold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Studio Identity */}
          <div className="space-y-4" id="footer-col-studio">
            <div className="flex items-center space-x-3">
              <LogoSvg className="h-10 w-10 text-old-gold" />
              <span className="font-display text-lg tracking-[0.15em] uppercase text-soft-white">
                AmorsNadel
              </span>
            </div>
            <p className="text-sm text-soft-white/65 leading-relaxed">
              Dein meisterhaftes Tätowieratelier im kulturellen Herzen Zittaus, Kamens, Dresdens. Wir vereinen historische Präzision mit modernster Hautkunst. Jedes Tattoo ist ein maßgeschneidertes, hygienisch makelloses Meisterwerk, das deine Geschichte erzählt.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/amors_nadel_"
                target="_blank"
                rel="noreferrer"
                className="text-soft-white/50 hover:text-old-gold transition-colors text-xs font-mono tracking-wider uppercase"
              >
                Instagram
              </a>
              <span className="text-soft-white/20">•</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-soft-white/50 hover:text-old-gold transition-colors text-xs font-mono tracking-wider uppercase"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4" id="footer-col-nav">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-old-gold">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-soft-white/75 hover:text-tattoo-red transition-colors duration-250">
                  Startseite (Home)
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-sm text-soft-white/75 hover:text-tattoo-red transition-colors duration-250">
                  Portfolio Galerie
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup" className="text-sm text-soft-white/75 hover:text-tattoo-red transition-colors duration-250">
                  Permanent Make-up
                </Link>
              </li>
              <li>
                <Link to="/piercing" className="text-sm text-soft-white/75 hover:text-tattoo-red transition-colors duration-250">
                  Piercing
                </Link>
              </li>
              <li>
                <Link to="/kurse" className="text-sm text-soft-white/75 hover:text-tattoo-red transition-colors duration-250">
                  Ausbildung &amp; Kurse
                </Link>
              </li>
              <li>
                <Link to="/buchung" className="text-sm text-soft-white/75 hover:text-tattoo-red transition-colors duration-250">
                  Terminanfrage stellen
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4" id="footer-col-contact">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-old-gold">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-soft-white/75">
                <MapPin className="h-4.5 w-4.5 text-tattoo-red shrink-0 mt-0.5" />
                <span>
                  AmorsNadel Atelier<br />
                  Straße einfügen<br />
                  Kamenz, Zittau, Dresden
                </span>
              </li>
              <li>
                <a href="tel:+491744312856" className="flex items-center space-x-3 text-sm text-soft-white/75 hover:text-old-gold transition-colors">
                  <Phone className="h-4.5 w-4.5 text-tattoo-red shrink-0" />
                  <span>0174 4312856</span>
                </a>
              </li>
              <li>
                <a href="mailto:atelier@amorsnadel.de" className="flex items-center space-x-3 text-sm text-soft-white/75 hover:text-old-gold transition-colors">
                  <Mail className="h-4.5 w-4.5 text-tattoo-red shrink-0" />
                  <span>atelier@amorsnadel.de</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="space-y-4" id="footer-col-hours">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-old-gold">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2.5 text-sm text-soft-white/75">
              <li className="flex justify-between">
                <span>Mo – Fr:</span>
                <span className="font-mono text-xs">12:00 – 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sa:</span>
                <span className="font-mono text-xs">11:00 – 18:00</span>
              </li>
              <li className="flex justify-between text-soft-white/45">
                <span>So:</span>
                <span className="font-mono text-xs">Geschlossen</span>
              </li>
              <li className="pt-2 flex items-center space-x-2 text-xs font-mono text-old-gold">
                <Clock className="h-4 w-4 shrink-0" />
                <span>NUR MIT TERMIN</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with hand-drawn gold curve */}
        <div className="relative pt-8 mt-8">
          <div className="absolute top-0 left-0 right-0 w-full h-[2px] overflow-hidden opacity-30 pointer-events-none">
            <svg width="100%" height="2" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0 1 Q 512 2, 1024 0" fill="none" stroke="#D4A017" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-soft-white/45 font-mono pt-4">
            <p>© {new Date().getFullYear()} AmorsNadel Tattoo. Gemacht mit Tinte und Geduld. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-soft-white cursor-pointer transition-colors">Impressum</span>
              <span className="hover:text-soft-white cursor-pointer transition-colors">Datenschutz</span>
              <button
                onClick={scrolltoTop}
                className="flex items-center space-x-1 hover:text-old-gold transition-colors"
                aria-label="Zum Seitenanfang scrollen"
              >
                <span>Nach oben</span>
                <ArrowUp className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
