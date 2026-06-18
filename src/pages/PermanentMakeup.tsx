import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Heart, Shield, Award, Calendar, Eye, Smile, Star } from 'lucide-react';
import { OrnamentDivider } from '../components/CustomSvgs';
import { motion } from 'motion/react';

export const PermanentMakeup: FC = () => {
  return (
    <div className="bg-ink-black min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative" id="pmu-page">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-old-gold rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-tattoo-red rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto" id="pmu-header">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-tattoo-red">Schönheit, die bleibt</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white tracking-wide">
            Permanent Make-up in Dresden
          </h1>
          <p className="text-sm text-soft-white/60 font-light leading-relaxed">
            Natürliche Schönheit dauerhaft unterstreichen, Form korrigieren und jeden Morgen wertvolle Zeit sparen.
          </p>
          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>
        </div>

        {/* Intro Section - 20 Years Experience */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-dark border border-soft-white/10 p-8 md:p-16 relative overflow-hidden" id="pmu-intro">
          <div className="absolute top-0 right-0 w-32 h-32 bg-old-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-old-gold/10 border border-old-gold/30 px-3 py-1 font-mono text-[10px] tracking-widest text-old-gold uppercase">
              <Award className="h-3 w-3" />
              <span>Über 20 Jahre Erfahrung</span>
            </div>
            <h2 className="font-display text-3xl font-light text-soft-white leading-tight">
              Deine natürliche Ausstrahlung im Fokus
            </h2>
            <p className="text-sm text-soft-white/70 leading-relaxed font-light">
              Schönheit sollte nicht jeden Morgen Zeit kosten. Permanent Make-up ermöglicht es, die natürlichen Gesichtszüge sanft zu betonen, kleine Unregelmäßigkeiten zu korrigieren und jederzeit frisch und gepflegt auszusehen.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-soft-white/10 lg:pl-12">
            <p className="text-sm text-soft-white/70 leading-relaxed font-light">
              Seit über 20 Jahren beschäftige ich mich leidenschaftlich mit Permanent Make-up und helfe meinen Kundinnen dabei, ihre persönliche Schönheit bestmöglich zur Geltung zu bringen. Mein Ziel ist stets ein harmonisches, ästhetisches und vor allem individuelles Ergebnis, das perfekt zu der Anatomie deines Gesichts passt.
            </p>
            <p className="text-sm text-soft-white/70 leading-relaxed font-light italic text-old-gold/90">
              „Ich arbeite ausschließlich mit modernsten und besonders schonenden Techniken, certified hochwertigen Pigmenten und lege allerhöchsten Wert auf Präzision, Hygiene und Natürlichkeit.“
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-soft-white/5 text-center font-mono text-[10px] uppercase tracking-wider text-soft-white/50">
              <div className="space-y-1">
                <span className="block text-old-gold text-lg font-bold font-sans">100%</span>
                <span>Präzision</span>
              </div>
              <div className="space-y-1 border-x border-soft-white/10">
                <span className="block text-old-gold text-lg font-bold font-sans">Premium</span>
                <span>Pigmente</span>
              </div>
              <div className="space-y-1">
                <span className="block text-old-gold text-lg font-bold font-sans">Steril</span>
                <span>Hygiene</span>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Main Categories Grid */}
        <div className="space-y-12" id="pmu-categories">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-tattoo-red">Unsere Behandlungen</span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-soft-white">Präzise Lippen-, Brauen- &amp; Lid-Pigmentierung</h2>
            <div className="w-12 h-[1px] bg-old-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Category 1: Augenbrauen */}
            <div className="bg-surface-dark/40 border border-soft-white/10 p-8 space-y-6 flex flex-col justify-between hover:border-old-gold/50 transition-colors duration-300 relative group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-old-gold/10 flex items-center justify-center border border-old-gold/20 text-old-gold">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-soft-white">Augenbrauen</h3>
                <p className="text-xs text-soft-white/50 leading-relaxed">
                  Augenbrauen geben dem Gesicht Ausdruck und Charakter. Mit Permanent Make-up können Form, Dichte und Symmetrie der Augenbrauen optimiert werden.
                </p>
                <div className="border-t border-soft-white/5 pt-4 space-y-4">
                  <div className="space-y-2">
                    <span className="block text-xs font-mono text-old-gold uppercase tracking-wider">Powder Brows</span>
                    <p className="text-xs text-soft-white/70 leading-relaxed">
                      Die beliebteste moderne Technik. Durch eine sanfte Schattierung entsteht ein natürlicher, weicher Puder-Effekt, wie mit Augenbrauenpuder geschminkt.
                    </p>
                  </div>
                  <div className="space-y-1 bg-ink-black/40 p-3 border border-soft-white/5">
                    <span className="block text-[9px] font-mono text-tattoo-red uppercase tracking-wider mb-1.5">Besonders geeignet für:</span>
                    <ul className="text-[11px] text-soft-white/60 space-y-1 list-disc pl-4 font-light">
                      <li>dünne oder ungleichmäßige Brauen</li>
                      <li>Kleine Lücken im Haarwuchs</li>
                      <li>Präzise Wunsch-Formkorrekturen</li>
                      <li>Mehr Ausdruck &amp; Definition</li>
                    </ul>
                  </div>
                </div>
              </div>
              <span className="block font-sans text-xs text-old-gold/80 italic pt-2">Ergebnis wirkt weich, elegant und harmonisch.</span>
            </div>

            {/* Category 2: Augenlider */}
            <div className="bg-surface-dark/40 border border-soft-white/10 p-8 space-y-6 flex flex-col justify-between hover:border-old-gold/50 transition-colors duration-300 relative group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-old-gold/10 flex items-center justify-center border border-old-gold/20 text-old-gold">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-soft-white">Augenlider</h3>
                <p className="text-xs text-soft-white/50 leading-relaxed">
                  Permanent Make-up der Augenlider verleiht den Augen strahlenden Ausdruck und spart dir täglich das zeitintensive Schminken.
                </p>
                <div className="border-t border-soft-white/5 pt-4 space-y-4">
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-old-gold uppercase">Klassischer Eyeliner</span>
                    </div>
                    <p className="text-xs text-soft-white/70 font-light">
                      Feine und elegante Linie am Wimpernkranz. Die Augen wirken ausdrucksstark und die Wimpern dichter.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-old-gold uppercase">Eyeliner mit Schattierung</span>
                    </div>
                    <p className="text-xs text-soft-white/70 font-light">
                      Weiche Lidschattierung für einen elegant-femininen Look, ähnlich professionellem Lidschatten.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-old-gold uppercase">Eyeliner mit Farb-Akzent</span>
                    </div>
                    <p className="text-xs text-soft-white/70 font-light">
                      Farbige Schattierung, farblich exakt abgestimmt auf deine Augenfarbe und deinen Typ.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-old-gold uppercase">Wimpernkranzverdichtung</span>
                    </div>
                    <p className="text-xs text-soft-white/70 font-light">
                      Pigmentierung direkt zwischen den Wimpern. Wirkt extrem natürlich und verdichtet optisch das Haar.
                    </p>
                  </div>

                </div>
              </div>
              <span className="block font-sans text-xs text-old-gold/80 italic pt-2">Perfekter Blick auch ganz ohne herkömmliches Make-up.</span>
            </div>

            {/* Category 3: Lippen */}
            <div className="bg-surface-dark/40 border border-soft-white/10 p-8 space-y-6 flex flex-col justify-between hover:border-old-gold/50 transition-colors duration-300 relative group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-old-gold/10 flex items-center justify-center border border-old-gold/20 text-old-gold">
                  <Smile className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-soft-white">Lippen</h3>
                <p className="text-xs text-soft-white/50 leading-relaxed">
                  Lippen-Pigmentierung sorgt für dauerhaft frische Farbe, makellose Konturen und mehr optisches Volumen ganz ohne Verwischen.
                </p>
                <div className="border-t border-soft-white/5 pt-4 space-y-4">
                  
                  <div className="space-y-1">
                    <span className="block text-xs font-mono text-old-gold uppercase">Kontur &amp; Schattierung</span>
                    <p className="text-xs text-soft-white/70 font-light text-justify">
                      Die natürliche Form wird elegant betont und sanft einwärts verlaufend einschattiert. Wirkt sehr dezent.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-xs font-mono text-old-gold uppercase">Vollschattierung</span>
                    <p className="text-xs text-soft-white/70 font-light text-justify">
                      Die gesamte Lippe wird pigmentiert. Das optische Endergebnis ähnelt einem feinen Lippenstift oder Lip Tint.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-xs font-mono text-old-gold uppercase">Kontur mit Vollschattierung</span>
                    <p className="text-xs text-soft-white/70 font-light text-justify">
                      Klare Konturen mit vollständig ausgefüllter Lippenfarbe. Wirkt elegant wie perfekt geschminkt.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-xs font-mono text-old-gold uppercase">Aquarell-Lips</span>
                    <p className="text-xs text-soft-white/70 font-light text-justify">
                      Besonders softe, transparente Farbverläufe ohne harte Ränder für extrem viel Frische und Natürlichkeit.
                    </p>
                  </div>

                </div>
              </div>
              <span className="block font-sans text-xs text-old-gold/80 italic pt-2">Kaschiert kleine Asymmetrien und schenkt neue Vitalität.</span>
            </div>

          </div>
        </div>

        {/* Why Choose Me Section */}
        <section className="space-y-10" id="pmu-advantages">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-tattoo-red">Präzision &amp; Vertrauen</span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-soft-white">Warum Kundinnen mich wählen</h2>
            <div className="w-12 h-[1px] bg-old-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Über 20 Jahre Erfahrung', desc: 'Jahrzehntelange Erfahrung im Bereich der feinen Gesichtspigmentierung.' },
              { title: 'Individuelle Beratung', desc: 'Jedes Gesicht ist anders. Wir stimmen Form und Pigmente exakt auf deinen Typ ab.' },
              { title: 'Natürliche Ergebnisse', desc: 'Kein Maskeneffekt. Mein Ziel ist die harmonische Unterstützung deiner Schönheit.' },
              { title: 'Moderne Techniken', desc: 'Schonende Verfahren und exakteste Handarbeit für minimale Hautbelastung.' },
              { title: 'Höchste Hygiene', desc: 'Kompromisslos sterile Materialien und verlässliche Desinfektion nach Studio-Standards.' },
              { title: 'Hochwertige Pigmente', desc: 'Zertifizierte, verträgliche Farben, die langfristig farbstabil und schön bleiben.' },
              { title: 'Persönliche Betreuung', desc: 'Detaillierter Nachsorgeplan und verlässliche Begleitung bis zum fertig abgeheilten Ergebnis.' },
              { title: 'Entspannte Atmosphäre', desc: 'Ruhige 1-zu-1-Sitzungen in unserem privaten, modernen Atelier.' },
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
            „Mein Ziel ist es nicht, Ihr Gesicht zu verändern, sondern Ihre natürliche Schönheit dauerhaft zu unterstreichen.“
          </div>
        </section>

        {/* CTA Banner Section */}
        <div className="bg-gradient-to-r from-surface-dark via-ink-black to-surface-dark border border-old-gold/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden" id="pmu-cta">
          <div className="absolute top-0 left-0 w-32 h-32 bg-tattoo-red/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-old-gold">Deine unverbindliche Anfrage</span>
            <h3 className="font-display text-2xl sm:text-3xl font-light text-soft-white">Lust auf ein frisches, dauerhaft gepflegtes Gefühl?</h3>
            <p className="text-xs text-soft-white/60 leading-relaxed max-w-lg mx-auto font-light">
              Lass dich ganz unverbindlich und persönlich von uns beraten. Wir besprechen deine Formkorrekturen und finden die perfekte Nuance.
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
