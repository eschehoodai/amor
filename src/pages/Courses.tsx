import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Check, GraduationCap, Users, Star } from 'lucide-react';
import { OrnamentDivider, StudioIcon } from '../components/CustomSvgs';

export const Courses: FC = () => {
  const [activeCourse, setActiveCourse] = useState<'tattoo' | 'pmu'>('tattoo');

  return (
    <div className="bg-transparent min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative" id="courses-page">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-old-gold rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-tattoo-red rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto" id="courses-header">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">AmorsNadel Academy</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white tracking-wide">
            Professionelle Ausbildungen
          </h1>
          <p className="text-lead text-soft-white/80 font-light">
            Starte deine erfolgreiche Karriere in der Body-Art- und Kosmetik-Branche. Lerne von den Besten in exklusiver und praxisnaher Atelier-Atmosphäre.
          </p>
          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center" id="course-selector-tabs">
          <div className="bg-surface-dark border border-soft-white/10 p-1 flex space-x-1">
            <button
              onClick={() => setActiveCourse('tattoo')}
              className={`px-4 sm:px-8 py-3 text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 ${
                activeCourse === 'tattoo'
                  ? 'bg-old-gold text-ink-black font-semibold'
                  : 'text-soft-white/60 hover:text-soft-white hover:bg-soft-white/5'
              }`}
            >
              Tattoo-Ausbildung
            </button>
            <button
              onClick={() => setActiveCourse('pmu')}
              className={`px-4 sm:px-8 py-3 text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 ${
                activeCourse === 'pmu'
                  ? 'bg-old-gold text-ink-black font-semibold'
                  : 'text-soft-white/60 hover:text-soft-white hover:bg-soft-white/5'
              }`}
            >
              PMU-Ausbildung
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {activeCourse === 'tattoo' ? (
            /* =========================================================================
               KURS 1: TÄTOWIERUNGS-AUSBILDUNG — GRUNDKURS
               ========================================================================= */
            <div className="space-y-16 transition-all duration-500" id="tattoo-course-details">
              
              {/* Cover Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-dark border border-soft-white/10 p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-old-gold/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="lg:col-span-12 space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-old-gold/10 border border-old-gold/30 px-3 py-1 font-mono text-eyebrow tracking-widest text-old-gold uppercase">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>5 Tage Intensiv-Grundkurs</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-light text-soft-white">
                    TÄTOWIERUNGS-AUSBILDUNG – GRUNDKURS
                  </h2>
                  <p className="text-lead text-old-gold/90 font-light tracking-wide max-w-3xl">
                    Starte deine Karriere als Tattoo Artist
                  </p>
                  <p className="text-body text-soft-white/80 font-light max-w-4xl">
                    Du möchtest das Tätowieren professionell erlernen und die wichtigsten Grundlagen direkt in einer praxisorientierten Ausbildung vermittelt bekommen? Dann ist dieser intensive 5-Tage-Grundkurs genau das Richtige für dich. Der Kurs richtet sich an Anfänger ohne Vorkenntnisse sowie an Personen, die ihr Wissen strukturiert aufbauen und erste praktische Erfahrungen sammeln möchten.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-soft-white/5">
                    {/* Variant 1 */}
                    <div className="p-4 bg-ink-black/40 border border-soft-white/5 space-y-1">
                      <div className="flex items-center space-x-2 text-old-gold">
                        <Users className="h-4 w-4" />
                        <span className="font-mono text-eyebrow uppercase tracking-wider">Einzelunterricht</span>
                      </div>
                      <p className="text-caption text-soft-white/75 font-light pl-6">
                        5 Tage hocheffiziente Intensivausbildung im 1-zu-1-Format für maximale Lernkurve.
                      </p>
                    </div>
                    {/* Variant 2 */}
                    <div className="p-4 bg-ink-black/40 border border-soft-white/5 space-y-1">
                      <div className="flex items-center space-x-2 text-old-gold">
                        <Users className="h-4 w-4" />
                        <span className="font-mono text-eyebrow uppercase tracking-wider">Gruppenkurs</span>
                      </div>
                      <p className="text-caption text-soft-white/75 font-light pl-6">
                        Kompakte, interaktive Lernstruktur in exklusiven Kleingruppen bis maximal 5 Personen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kursprogramm */}
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="font-mono text-eyebrow uppercase tracking-[0.25em] text-tattoo-red">Ablauf &amp; Inhalt</span>
                  <h3 className="font-hand text-2xl font-light text-soft-white">Das Kursprogramm im Detail</h3>
                  <div className="w-12 h-[1px] bg-old-gold mx-auto mt-3" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {[
                    {
                      tag: 'Tag 1',
                      title: 'Grundlagen & Arbeitsplatz',
                      icon: <StudioIcon name="049-sterilizer" className="h-7 w-7" />,
                      items: [
                        'Hygiene und Arbeitssicherheit im Studio',
                        'Vorbereitung und Desinfektion des Arbeitsplatzes',
                        'Aufbau einer professionellen Tattoo-Station',
                        'Arbeitsabläufe im laufenden Studiobetrieb',
                        'Auswahl und Qualitätsprüfung der Arbeitsmaterialien'
                      ]
                    },
                    {
                      tag: 'Tag 2',
                      title: 'Theorie der Tätowierung',
                      icon: <StudioIcon name="006-needle" className="h-7 w-7" />,
                      items: [
                        'Aufbau und Reaktionen der Hautschichten',
                        'Wie Pigmente materialsicher eingebracht werden',
                        'Heilungsprozess und Wundversorgung',
                        'Maschinenarten und technische Unterschiede',
                        'Nadeln, Loops und ihre präzisen Einsatzbereiche',
                        'Richtige Handhaltung & Maschinenführung'
                      ]
                    },
                    {
                      tag: 'Tag 3',
                      title: 'Design & Vorbereitung',
                      icon: <StudioIcon name="026-sketch" className="h-7 w-7" />,
                      items: [
                        'Auswahl und Analyse geeigneter Motive',
                        'Erstellung und Aufbereitung von Tattoo-Entwürfen',
                        'Größenanpassung an Körperproportionen & Platzierung',
                        'Erstellung präziser Schablonen (Stencil)',
                        'Fachgerechte Übertragung des Motivs auf die Haut'
                      ]
                    },
                    {
                      tag: 'Tag 4',
                      title: 'Praktische Übungen',
                      icon: <StudioIcon name="044-tattoo" className="h-7 w-7" />,
                      items: [
                        'Sichere Linienführung auf realer Kunsthaut',
                        'Einwandfreie Schattierungstechniken',
                        'Gleichmäßige Farbflächen füllen',
                        'Arbeiten mit wechselnden Nadelgruppen',
                        'Praktische Übungen auf Kunsthaut unter Anleitung',
                        'Detaillierte Analyse und Korrektur typischer Fehler'
                      ]
                    },
                    {
                      tag: 'Tag 5',
                      title: 'Arbeiten am Modell',
                      icon: <StudioIcon name="017-tattoo artist" className="h-7 w-7" />,
                      isSpecial: true,
                      items: [
                        'Vollständig der praktischen Arbeit gewidmet',
                        'Arbeitsplatzvorbereitung & Kundenberatung',
                        'Vorzeichnung & exaktes Anbringen des Stencils',
                        'Durchführung einer Tätowierung am realen Modell',
                        'Individuelle 1:1 Betreuung durch den Ausbilder'
                      ]
                    }
                  ].map((day, idx) => (
                    <div
                      key={idx}
                      className={`border p-6 flex flex-col justify-between transition-all ${
                        day.isSpecial
                          ? 'border-old-gold/60 bg-old-gold/5 shadow-md shadow-old-gold/5'
                          : 'border-soft-white/10 bg-surface-dark/40 hover:border-soft-white/20'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-eyebrow uppercase tracking-widest text-old-gold font-bold">{day.tag}</span>
                          {day.icon}
                        </div>
                        <h4 className="font-sans text-base font-semibold tracking-wide text-soft-white border-b border-soft-white/10 pb-2">{day.title}</h4>
                        <ul className="space-y-3">
                          {day.items.map((item, idy) => (
                            <li key={idy} className="text-caption text-soft-white/80 font-light flex items-start space-x-1.5">
                              <span className="text-old-gold shrink-0 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {day.isSpecial && (
                        <div className="mt-4 pt-3 border-t border-old-gold/20 text-eyebrow text-old-gold font-mono uppercase tracking-wider">
                          ★ Live Praxis Modell
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions and Requirements Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Im Kurspreis enthalten */}
                <div className="bg-surface-dark border border-soft-white/10 p-8 space-y-6">
                  <h4 className="font-sans text-lg font-semibold text-soft-white flex items-center space-x-2">
                    <Check className="h-5 w-5 text-old-gold" />
                    <span>Im Kurspreis enthalten</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-caption text-soft-white/80">
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Kunsthaut für alle Übungen</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Sämtliche Verbrauchsmaterialien</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Arbeitsmaterialien im Kurs</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Nutzung der Geräte &amp; Ausrüstung</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Persönliche Betreuung</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Offizielles Teilnahmezertifikat</span>
                    </li>
                  </ul>
                  <p className="text-caption text-soft-white/70 font-light pt-4 border-t border-soft-white/5">
                    Alle Materialien für die Ausbildung werden vollständig vom Schulungszentrum bereitgestellt. Lediglich das Modell für den fünften Ausbildungstag wird vom Kursteilnehmer selbst organisiert.
                  </p>
                </div>

                {/* Warum dieser Kurs */}
                <div className="bg-surface-dark border border-soft-white/10 p-8 space-y-6">
                  <h4 className="font-sans text-lg font-semibold text-soft-white flex items-center space-x-2">
                    <Star className="h-5 w-5 text-old-gold" />
                    <span>Warum diesen Kurs wählen?</span>
                  </h4>
                  <ul className="space-y-3.5 text-caption text-soft-white/80">
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Praxisorientierter, intensiver Unterricht auf Augenhöhe</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Individuelle Betreuung durch erfahrene Dozenten</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Exklusives Lernen in Kleingruppen für maximalen Fokus</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Direkte Arbeit mit professionellem, modernem Equipment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Echtes Lernen inmitten einer authentischen, professionellen Studioatmosphäre</span>
                    </li>
                  </ul>
                  <p className="text-body text-old-gold font-light">
                    Sichere dir eine solide, seriöse Grundlage für einen fabelhaften und selbstbewussten Einstieg in die weltweite Tattoo-Branche.
                  </p>
                </div>
              </div>

            </div>
          ) : (
            /* =========================================================================
               KURS 2: PERMANENT MAKE-UP AUSBILDUNG — INTENSIVKURS
               ========================================================================= */
            <div className="space-y-16 transition-all duration-500" id="pmu-course-details">
              
              {/* Cover Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-dark border border-soft-white/10 p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tattoo-red/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="lg:col-span-12 space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-tattoo-red/10 border border-tattoo-red/30 px-3 py-1 font-mono text-eyebrow tracking-widest text-tattoo-red uppercase">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>7 Tage Profi-Intensivkurs</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-light text-soft-white">
                    PERMANENT MAKE-UP AUSBILDUNG – INTENSIVKURS
                  </h2>
                  <p className="text-lead text-old-gold/90 font-light tracking-wide max-w-3xl">
                    Starte deine Karriere als Permanent-Make-up Artist
                  </p>
                  <p className="text-body text-soft-white/80 font-light max-w-4xl">
                    Dieser intensive 7-Tage-Grundkurs vermittelt verlässlich alle wichtigen theoretischen und praktischen Kenntnisse für den anspruchsvollen, professionellen Einstieg in die Welt des Permanent Make-ups. Der Kurs richtet sich an motivierte Anfänger ohne jegliche Vorkenntnisse sowie an ambitionierte Teilnehmer, die sich fundiertes Wissen in den Bereichen Augenbrauen-, Lippen- und Lidpigmentierung aneignen möchten.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-soft-white/5">
                    {/* Variant 1 */}
                    <div className="p-4 bg-ink-black/40 border border-soft-white/5 space-y-1">
                      <div className="flex items-center space-x-2 text-old-gold">
                        <Users className="h-4 w-4" />
                        <span className="font-mono text-eyebrow uppercase tracking-wider">Einzelunterricht</span>
                      </div>
                      <p className="text-caption text-soft-white/75 font-light pl-6">
                        Exklusive Intensivschulung mit direkter, individueller Begleitung und Typenanalyse.
                      </p>
                    </div>
                    {/* Variant 2 */}
                    <div className="p-4 bg-ink-black/40 border border-soft-white/5 space-y-1">
                      <div className="flex items-center space-x-2 text-old-gold">
                        <Users className="h-4 w-4" />
                        <span className="font-mono text-eyebrow uppercase tracking-wider">Gruppenkurs</span>
                      </div>
                      <p className="text-caption text-soft-white/75 font-light pl-6">
                        Ausbildung in fokussierten, inspirierenden Gruppen bis maximal 5 Personen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kursprogramm */}
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="font-mono text-eyebrow uppercase tracking-[0.25em] text-tattoo-red">Ausbildungsplan</span>
                  <h3 className="font-hand text-2xl font-light text-soft-white">Der 7-Tage-Ablaufplan</h3>
                  <div className="w-12 h-[1px] bg-old-gold mx-auto mt-3" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      tag: 'Tag 1',
                      title: 'Grundlagen & Hygiene',
                      items: [
                        'Arbeitssicherheit',
                        'Arbeitsplatzaufbau',
                        'Gerätekunde',
                        'Materialauswahl',
                        'Kundenberatung',
                        'Kontraindikationen',
                        'Einverständnis / Doku'
                      ]
                    },
                    {
                      tag: 'Tag 2',
                      title: 'Haut, Pigmente & Farblehre',
                      items: [
                        'Hautanatomie',
                        'Pigmenteinbringung',
                        'Hauttypen/Zustände',
                        'Gezielte Farblehre',
                        'Pigmentauswahl',
                        'Farbkorrekturen',
                        'Nachpflege-Phasen'
                      ]
                    },
                    {
                      tag: 'Tag 3',
                      title: 'Augenbrauen',
                      items: [
                        'Gesichtsanalyse',
                        'Ausmessen / Vorzeichnen',
                        'Symmetrie & Design',
                        'Passendes Pigment',
                        'Powder Brows Theorie',
                        'Gerätetechnik',
                        'Kunsthaut-Übung'
                      ]
                    },
                    {
                      tag: 'Tag 4',
                      title: 'Lippen & Lid',
                      items: [
                        'Lippen-Anatomie',
                        'Kontur & Schattierung',
                        'Lippen-Vollschattierung',
                        'Elegante Aquarell Lips',
                        'Wimpernkranz',
                        'Klassischer Lidstrich',
                        'Lid-Schattierung'
                      ]
                    },
                    {
                      tag: 'Tag 5',
                      title: 'Modell: Brauen',
                      isModel: true,
                      items: [
                        'Modell-Vorbereitung',
                        'Exakte Vorzeichnung',
                        'Pigmentabstimmung',
                        'Modell-Augenbrauen',
                        'Pigmentierung live',
                        'Aufsicht & Feedback'
                      ]
                    },
                    {
                      tag: 'Tag 6',
                      title: 'Modell: Lippen',
                      isModel: true,
                      items: [
                        'Platzeinrichtung',
                        'Lippen-Vorzeichnung',
                        'Pigmentbestimmung',
                        'Lippenpigmentierung',
                        'Live-Betreuung',
                        'Ansprüche & Feinschliff'
                      ]
                    },
                    {
                      tag: 'Tag 7',
                      title: 'Modell: Lider',
                      isModel: true,
                      items: [
                        'Lid-Vorzeichnung',
                        'Modell-Lidstrich',
                        'Lid-Pigmentierung',
                        'Präzise Korrekturen',
                        'Heilungstätigkeit',
                        'Abschlussanalyse',
                        'Zertifikatsübergabe'
                      ]
                    }
                  ].map((day, idx) => (
                    <div
                      key={idx}
                      className={`border p-4 flex flex-col justify-between transition-all ${
                        day.isModel
                          ? 'border-old-gold/60 bg-old-gold/5'
                          : 'border-soft-white/10 bg-surface-dark/40 hover:border-soft-white/15'
                      }`}
                    >
                      <div className="space-y-3">
                        <span className="font-mono text-eyebrow uppercase font-bold text-old-gold">{day.tag}</span>
                        <h4 className="font-sans text-base font-semibold tracking-wide text-soft-white border-b border-soft-white/5 pb-1.5">{day.title}</h4>
                        <ul className="space-y-1.5">
                          {day.items.map((item, idy) => (
                            <li key={idy} className="text-caption text-soft-white/80 font-light flex items-start space-x-1">
                              <span className="text-old-gold/80 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {day.isModel && (
                        <div className="mt-3 pt-2 border-t border-old-gold/20 text-eyebrow text-old-gold font-mono uppercase text-center font-semibold">
                          Praxismodell
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions and Why Choose */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Im Kurspreis enthalten */}
                <div className="bg-surface-dark border border-soft-white/10 p-8 space-y-6">
                  <h4 className="font-sans text-lg font-semibold text-soft-white flex items-center space-x-2">
                    <Check className="h-5 w-5 text-old-gold" />
                    <span>Im Kurspreis enthalten</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-caption text-soft-white/80">
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Kunsthaut für alle Übungen</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Sämtliche Verbrauchsmaterialien</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Arbeitsmaterialien im Kurs</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Gerätenutzung des Zentrums</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Ausführliche Schulungsunterlagen</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <span className="h-1.5 w-1.5 bg-old-gold" />
                      <span>Offizielles Teilnahmezertifikat</span>
                    </li>
                  </ul>
                  <p className="text-caption text-soft-white/70 font-light pt-4 border-t border-soft-white/5">
                    Alle benötigten High-End-Materialien und Profi-Arbeitsmittel werden vollständig vom Schulungszentrum bereitgestellt. Lediglich die persönlichen Modelle für die drei Praxistage werden vom Kursteilnehmer selbst organisiert.
                  </p>
                </div>

                {/* Warum dieser Kurs */}
                <div className="bg-surface-dark border border-soft-white/10 p-8 space-y-6">
                  <h4 className="font-sans text-lg font-semibold text-soft-white flex items-center space-x-2">
                    <Star className="h-5 w-5 text-old-gold" />
                    <span>Warum diesen Kurs wählen?</span>
                  </h4>
                  <ul className="space-y-3.5 text-caption text-soft-white/80">
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Strenge praxis- und kundenorientierte Ausbildung</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Ausbildung in sehr kleinen, überschaubaren Lerngruppen</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Engagierte, individuelle Betreuung auch bei schwierigen Techniken</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Arbeiten mit erstklassigen, professionellen Feinst-Geräten</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-tattoo-red mt-0.5">✓</span>
                      <span>Lernen in echter, entspannter und professioneller Studioatmosphäre</span>
                    </li>
                  </ul>
                  <p className="text-body text-old-gold font-light">
                    Schlage eine solide Brücke für den erfolgreichen Einstieg in den extrem lukrativen Permanent-Make-up-Sektor.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Closing Quote Banner */}
        <div className="bg-surface-dark/40 border border-soft-white/10 p-6 text-center text-body text-soft-white/80 max-w-xl mx-auto italic font-light">
          „Nach Abschluss des Kurses verfügst du über ein fundiertes, zertifiziertes Fachverständnis und die notwendigen praktischen Erfahrungen, um deine Fähigkeiten gezielt und erfolgreich weiterzuentwickeln.“
        </div>

        {/* CTA General */}
        <div className="bg-gradient-to-r from-surface-dark via-ink-black to-surface-dark border border-old-gold/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden" id="courses-cta">
          <div className="absolute top-0 left-0 w-32 h-32 bg-tattoo-red/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-old-gold">Academy Platz sichern</span>
            <h3 className="font-hand text-2xl sm:text-3xl font-light text-soft-white">Konntest du dich entscheiden?</h3>
            <p className="text-body text-soft-white/80 max-w-lg mx-auto font-light">
              Sende uns eine unverbindliche Anfrage für deine Wunsch-Ausbildung. Wir beraten dich gern zur optimalen Durchführung, den Terminen und Preisstrukturen.
            </p>
            <div className="pt-4">
              <Link
                to="/buchung"
                className="inline-flex items-center space-x-3 px-8 py-3.5 bg-old-gold hover:bg-soft-white text-ink-black font-semibold font-mono text-eyebrow uppercase tracking-wider transition-colors duration-300"
              >
                <Calendar className="h-4 w-4" />
                <span>Ausbildungsplatz anfragen</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
