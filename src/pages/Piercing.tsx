import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Check, Award, Calendar, Shield, Sparkles, Gem, Compass, Star } from 'lucide-react';
import { OrnamentDivider } from '../components/CustomSvgs';

export const Piercing: FC = () => {
  return (
    <div className="bg-ink-black min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative" id="piercing-page">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tattoo-red rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-old-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto" id="piercing-header">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-tattoo-red">Präzision &amp; Ausdruck</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white tracking-wide">
            Piercing in Dresden
          </h1>
          <p className="text-sm text-soft-white/60 font-light leading-relaxed">
            Einzigartiger Körperschmuck, präzise platziert und meisterhaft gestochen – mit über 20 Jahren Erfahrung für deine Sicherheit.
          </p>
          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>
        </div>

        {/* Intro Section - 20 Years Experience */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-dark border border-soft-white/10 p-8 md:p-16 relative overflow-hidden" id="piercing-intro">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tattoo-red/5 rounded-full blur-3xl pointer-events-none" />
          <div className="lg:col-span-12 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-tattoo-red/10 border border-tattoo-red/30 px-3 py-1 font-mono text-[10px] tracking-widest text-tattoo-red uppercase">
              <Award className="h-3 w-3" />
              <span>Über 20 Jahre Erfahrung</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-light text-soft-white leading-tight">
                  Ausdruck von Individualität &amp; Persönlichkeit
                </h2>
                <p className="text-sm text-soft-white/70 leading-relaxed font-light">
                  Piercing ist weit mehr als nur Schmuck – es ist ein klares Statement, das deine Persönlichkeit und Individualität sichtbar macht. Seit über zwei Jahrzehnten begleite ich meine Kundinnen und Kunden auf diesem Weg und lege dabei allerhöchsten Wert auf kompromisslose Hygiene, maximale Sicherheit und eine anatomisch perfekte, präzise Platzierung.
                </p>
              </div>

              <div className="space-y-4 lg:border-l lg:border-soft-white/10 lg:pl-10">
                <p className="text-sm text-soft-white/70 leading-relaxed font-light">
                  Alle Piercings werden unter absolut sterilen Bedingungen und ausschließlich mit modernsten Einwegmaterialien durchgeführt. Als Erstschmuck kommt bei uns hochwertiger, zertifizierter Chirurgenstahl zum Einsatz. Dieser zeichnet sich durch seine exzellente Verträglichkeit, absolute Biokompatibilität und hervorragende Verheilungsqualität aus.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-old-gold">
                  <Shield className="h-4 w-4 text-tattoo-red shrink-0" />
                  <span>Sicherer Erstschmuck · Maximale Hygiene standards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Piercing Catalogue Section */}
        <div className="space-y-12" id="piercing-offerings">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-tattoo-red">Unser Leistungsspektrum</span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-soft-white">Unser Piercing-Angebot</h2>
            <div className="w-12 h-[1px] bg-old-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Ohrpiercings */}
            <div className="bg-surface-dark/40 border border-soft-white/10 p-8 space-y-6 hover:border-old-gold/50 transition-colors duration-350">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-old-gold/10 flex items-center justify-center border border-old-gold/20 text-old-gold">
                  <Gem className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-soft-white">Ohrpiercings</h3>
                <p className="text-xs text-soft-white/50 leading-relaxed">
                  Die klassischen und modernen Highlights für dein Ohr – perfekt miteinander kombinierbar für deinen individuellen Curated-Ear-Look.
                </p>
              </div>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-soft-white/70 pt-4 border-t border-soft-white/5">
                {[
                  'Lobe (Ohrläppchen)', 'Upper Lobe', 'Helix', 'Forward Helix',
                  'Flat', 'Tragus', 'Anti-Tragus', 'Conch',
                  'Daith', 'Rook', 'Snug', 'Industrial'
                ].map((p, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-tattoo-red rounded-full shrink-0" />
                    <span className="truncate">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Gesichtspiercings */}
            <div className="bg-surface-dark/40 border border-soft-white/10 p-8 space-y-6 hover:border-old-gold/50 transition-colors duration-350">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-old-gold/10 flex items-center justify-center border border-old-gold/20 text-old-gold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-soft-white">Gesichtspiercings</h3>
                <p className="text-xs text-soft-white/50 leading-relaxed">
                  Akzente, die deine Gesichtszüge harmonisch einrahmen und den Fokus auf deine natürliche Ausstrahlung legen.
                </p>
              </div>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-soft-white/70 pt-4 border-t border-soft-white/5">
                {[
                  'Augenbraue (Eyebrow)', 'Bridge', 'Nostril', 'High Nostril',
                  'Septum', 'Medusa', 'Monroe', 'Madonna',
                  'Labret', 'Vertical Labret', 'Ashley', 'Cheek Piercing'
                ].map((p, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-tattoo-red rounded-full shrink-0" />
                    <span className="truncate">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Zungen- & Körperpiercings & Tunnel */}
            <div className="bg-surface-dark/40 border border-soft-white/10 p-8 space-y-6 hover:border-old-gold/50 transition-colors duration-350 lg:col-span-1">
              <div className="space-y-6">
                
                {/* Zungenpiercings */}
                <div className="space-y-3">
                  <h4 className="font-display text-base text-soft-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-old-gold" /> Zungenpiercings
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-mono text-soft-white/70">
                    {['Klassisch', 'Venom', 'Surface Tongue'].map((p, i) => (
                      <li key={i} className="flex items-center space-x-1.5">
                        <span className="w-1 h-1 bg-soft-white/30 rounded-full" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Körperpiercings */}
                <div className="space-y-3 pt-4 border-t border-soft-white/5">
                  <h4 className="font-display text-base text-soft-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-old-gold" /> Körperpiercings
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-mono text-soft-white/70">
                    {['Bauchnabel', 'Brustwarze', 'Surface', 'Dermal Anchor'].map((p, i) => (
                      <li key={i} className="flex items-center space-x-1.5">
                        <span className="w-1 h-1 bg-soft-white/30 rounded-full" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tunnel & Dehnungen */}
                <div className="space-y-3 pt-4 border-t border-soft-white/5">
                  <h4 className="font-display text-base text-soft-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-old-gold" /> Tunnel &amp; Dehnungen
                  </h4>
                  <p className="text-[11px] text-soft-white/60 leading-relaxed font-light">
                    Professionelles Dehnen von Ohrlöchern, sanftes Einsetzen und Erweitern von Tunneln inklusive umfassender Beratung zu Pflege und gesunder Heilung.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Why Choose Me Section */}
        <section className="space-y-10" id="piercing-advantages">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-tattoo-red">Qualität &amp; Sicherheit</span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-soft-white">Warum Kundinnen &amp; Kunden mich wählen</h2>
            <div className="w-12 h-[1px] bg-old-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Über 20 Jahre Erfahrung', desc: 'Jahrzehntelange Routine und handwerkliche Perfektion für absolut präzise Ergebnisse.' },
              { title: 'Sterile Arbeitsweise', desc: 'Kompromissloser Einsatz von sterilen Einwegmaterialien und modernsten Prozeduren.' },
              { title: 'Chirurgenstahl als Erstschmuck', desc: 'Ausschließlich hochwertiger, hautverträglicher und biokompatibler Erstschmuck.' },
              { title: 'Individuelle Beratung', desc: 'Anatomische Beratung zur optimalen Positionierung passend zu deinem Körper.' },
              { title: 'Ausführliche Pflegehinweise', desc: 'Detaillierter, schriftlicher Pflegeplan für eine komplikationsfreie und schnelle Abheilung.' },
              { title: 'Angenehme Atmosphäre', desc: 'Ruhe, Empathie und Geduld in unserem einladenden privaten Atelier – ganz ohne Hektik.' },
            ].map((adv, idx) => (
              <div key={idx} className="bg-surface-dark border border-soft-white/5 p-6 hover:border-old-gold/30 transition-all">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-5 w-5 rounded-full border border-old-gold/40 flex items-center justify-center text-old-gold shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-sm font-medium text-soft-white">{adv.title}</h4>
                    <p className="text-xs text-soft-white/60 leading-relaxed font-light">{adv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface-dark/60 border border-soft-white/10 p-6 text-center text-xs text-soft-white/70 max-w-xl mx-auto italic font-light">
            „Egal ob erstes Piercing oder neues Projekt – mein Ziel ist ein sauberes, professionelles Ergebnis, das perfekt zu dir passt und optimal verheilt.“
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-surface-dark via-ink-black to-surface-dark border border-old-gold/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden" id="piercing-cta">
          <div className="absolute top-0 left-0 w-32 h-32 bg-tattoo-red/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-old-gold">Dein nächstes Schmuckstück</span>
            <h3 className="font-display text-2xl sm:text-3xl font-light text-soft-white">Bereit für ein neues Piercing?</h3>
            <p className="text-xs text-soft-white/60 leading-relaxed max-w-lg mx-auto font-light">
              Vereinbare einen Termin bei uns für dein neues Piercing oder lass dich unverbindlich zur genauen Positionierung beraten. Wir freuen uns darauf, dich bei uns im Atelier zu begrüßen.
            </p>
            <div className="pt-4">
              <Link
                to="/buchung"
                className="inline-flex items-center space-x-3 px-8 py-3.5 bg-old-gold hover:bg-soft-white text-ink-black font-semibold font-mono text-xs uppercase tracking-wider transition-colors duration-300"
              >
                <Calendar className="h-4 w-4" />
                <span>Terminanfrage stellen</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
