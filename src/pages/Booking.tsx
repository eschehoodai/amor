import React, { useState, useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, User, AlignLeft, Check, CheckCircle2, RefreshCw, ArrowRight, ArrowLeft, Mail, Phone, Clock, ChevronDown } from 'lucide-react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { OrnamentDivider } from '../components/CustomSvgs';

interface FormState {
  style: string;
  placement: string;
  size: string;
  artist: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  newsletter: boolean;
}

export const Booking: FC = () => {
  const location = useLocation();
  const preselected = location.state as { preselectedArtist?: string; preselectedStyle?: string } | null;

  // Multi-step Form Tracker
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submissionCode, setSubmissionCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form Fields State
  const [formData, setFormData] = useState<FormState>({
    style: preselected?.preselectedStyle || 'Fineline',
    placement: '',
    size: 'Mittel (ca. 10-15 cm)',
    artist: preselected?.preselectedArtist || 'Sergey',
    name: '',
    email: '',
    phone: '',
    description: '',
    newsletter: false,
  });

  // Keep track of accordion open state in FAQs
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Errors for basic validation
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // If redirected from Gallery link with a state, pre-populate
    if (preselected) {
      if (preselected.preselectedStyle) {
        setFormData(prev => ({ ...prev, style: preselected.preselectedStyle! }));
      }
      if (preselected.preselectedArtist) {
        setFormData(prev => ({ ...prev, artist: preselected.preselectedArtist! }));
      }
    }
  }, [preselected]);

  const tattooStyles = [
    { value: 'Fineline', label: 'Fineline (Feine Nadeln / Minimalistisch)' },
    { value: 'Blackwork', label: 'Blackwork (Sattes Schwarz / Kontrastreich)' },
    { value: 'Wikingisch', label: 'Wikingischer Stil (Mythen / Runen / Knoten)' },
    { value: 'Calligraphy', label: 'Kalligrafie (Schriftzüge / Schriftkunst)' },
    { value: 'Anime', label: 'Anime & Manga Art (Otaku- und Comicpanels)' },
    { value: 'Custom', label: 'Custom-Entwurf (Eigene Bildvorlage / Anderes)' },
  ];

  const sizeOptions = [
    { value: 'Klein (unter 5 cm)', label: 'Klein (Filigrane Akzente, unter 5 cm)' },
    { value: 'Mittel (ca. 10-15 cm)', label: 'Mittel (Klassisches Motiv, ca. 10-15 cm)' },
    { value: 'Groß (ca. 15-25 cm)', label: 'Groß (Oberschenkel, Rippenbogen, ca. 15-25 cm)' },
    { value: 'Großprojekt (Kompletter Arm/Rücken)', label: 'Großprojekt (Kompletter Ärmel, Rücken-Epos)' },
  ];

  const artistOptions = [
    { value: 'Sergey', label: 'Sergey (Studio-Inhaber & Master Artist)' },
  ];

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.placement.trim()) {
      errors.placement = 'Bitte gib die gewünschte Körperstelle an (z.B. Unterarm, Rippen).';
    }
    if (!formData.size) {
      errors.size = 'Bitte wähle eine ungefähre Größe.';
    }
    if (!formData.name.trim()) {
      errors.name = 'Dein Name wird benötigt.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Deine Telefonnummer ist für Rückfragen notwendig.';
    }
    if (!formData.description.trim()) {
      errors.description = 'Beschreibe kurz deine Motividee.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database booking request post
    setTimeout(() => {
      const code = `AN-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmissionCode(code);
      setIsSubmitting(false);
      setFormSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1500);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-transparent min-h-screen text-soft-white font-sans py-16" id="booking-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Online-Buchungsdienst</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white">Terminanfrage stellen</h1>
          <p className="text-body text-soft-white/80 max-w-xl mx-auto font-light">
            Fülle das Planungsformular bequem aus. Wir prüfen deine Anfrage direkt und senden dir binnen 48 Stunden direkte Vorschläge für deinen Termin.
          </p>
          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24" id="booking-grid">
          
          {/* Column 1: Booking Steps block (8 cols) */}
          <div className="lg:col-span-8 bg-surface-dark border border-soft-white/10 p-6 md:p-10 relative">
            <AnimatePresence mode="wait">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmitForm} className="space-y-10" id="booking-interactive-form">
                  {/* Step Indicators */}
                  <div className="flex items-center justify-between pb-6 border-b border-soft-white/10 text-eyebrow font-mono tracking-widest text-soft-white/40">
                    <span className="text-old-gold font-bold">1. PLATZ &amp; GRÖSSE</span>
                    <ArrowRight className="h-3.5 w-3.5 text-old-gold/40" />
                    <span className="text-old-gold font-bold">2. KONTAKT &amp; DATEN</span>
                  </div>

                  {/* SECTION 1: SIZE & PLACEMENT (1. Platz) */}
                  <div className="space-y-6" id="section-placement">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-old-gold bg-old-gold/10 border border-old-gold/20 px-2.5 py-0.5 font-bold">1.</span>
                        <h3 className="font-sans text-xl font-semibold text-soft-white">Körperstelle &amp; Größe (Platz)</h3>
                      </div>
                      <p className="text-body text-soft-white/75">Gib uns eine grobe Orientierung, wohin das Tattoo wandert und welche Dimensionen es einnimmt.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">
                          Körperstelle *
                        </label>
                        <input
                          type="text"
                          placeholder="z.B. Rechter Unterarm, Nacken, Wirbelsäule, Knöchel..."
                          value={formData.placement}
                          onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                          className="w-full bg-ink-black border border-soft-white/10 px-4 py-3.5 text-base text-soft-white focus:outline-none focus:border-old-gold"
                        />
                        {fieldErrors.placement && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.placement}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">
                          Gewünschte Größe *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {sizeOptions.map((opt) => (
                            <div
                              key={opt.value}
                              onClick={() => setFormData({ ...formData, size: opt.value })}
                              className={`p-4 border cursor-pointer transition-colors text-caption flex justify-between items-center ${
                                formData.size === opt.value
                                  ? 'bg-ink-black border-old-gold text-old-gold font-medium'
                                  : 'bg-ink-black/40 border-soft-white/5 text-soft-white/70 hover:border-soft-white/20'
                              }`}
                            >
                              <span>{opt.label}</span>
                              {formData.size === opt.value && <Check className="h-4 w-4 text-tattoo-red" />}
                            </div>
                          ))}
                        </div>
                        {fieldErrors.size && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.size}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-soft-white/10 my-8"></div>

                  {/* SECTION 2: CONTACT & DETAILS (2. Daten) */}
                  <div className="space-y-6" id="section-details">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-old-gold bg-old-gold/10 border border-old-gold/20 px-2.5 py-0.5 font-bold">2.</span>
                        <h3 className="font-sans text-xl font-semibold text-soft-white">Deine Daten &amp; Motiv-Idee</h3>
                      </div>
                      <p className="text-body text-soft-white/75">Teile uns mit, wie wir dich erreichen können, und beschreibe deine Idee kurz für Sergey.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Vollständiger Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="z.B. Sarah Kaiser"
                            className="w-full bg-ink-black border border-soft-white/10 px-4 py-3 text-base focus:outline-none focus:border-old-gold"
                          />
                          {fieldErrors.name && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.name}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">E-Mail-Adresse *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="sarah.kaiser@email.de"
                            className="w-full bg-ink-black border border-soft-white/10 px-4 py-3 text-base focus:outline-none focus:border-old-gold"
                          />
                          {fieldErrors.email && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.email}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Telefonnummer für Rückfragen *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="z.B. +49 40 12345678"
                          className="w-full bg-ink-black border border-soft-white/10 px-4 py-3 text-base focus:outline-none focus:border-old-gold"
                        />
                        {fieldErrors.phone && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.phone}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Motivbeschreibung &amp; Notizen (z.B. Stil, Symbole, Bedeutung) *</label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          rows={4}
                          placeholder="Erläutere kurz das Motiv: Symbole, Schriftzüge, Bedeutung oder Platzierungsdetails... (z. B. feine botanische Blumenranken mit Initialen J &amp; B)"
                          className="w-full bg-ink-black border border-soft-white/10 p-4 text-base focus:outline-none focus:border-old-gold resize-none"
                        />
                        {fieldErrors.description && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.description}</p>}
                      </div>

                      <div className="flex items-start space-x-3 pt-2 text-body text-soft-white/75">
                        <input
                          type="checkbox"
                          id="newsletter"
                          checked={formData.newsletter}
                          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                          className="mt-1 accent-tattoo-red shrink-0"
                        />
                        <label htmlFor="newsletter" className="leading-relaxed cursor-pointer select-none">
                          Ich stimme zu, dass AmorsNadel meine Formulardaten speichert, um meine Anfrage zu bearbeiten. (Kein Spam, wir schätzen Privatsphäre).
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-6 border-t border-soft-white/10 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-4 bg-old-gold text-ink-black hover:bg-soft-white hover:text-ink-black disabled:bg-old-gold/40 text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center space-x-3 transition-colors duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <span>Anfrage absenden</span>
                          <Check className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                
                /* SUBMISSION SUCCESS SCREEN */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 text-center py-8"
                  id="booking-success"
                >
                  <div className="flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-old-gold animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-hand text-2xl sm:text-3xl text-soft-white">Vielen Dank für deine Anfrage!</h3>
                    <p className="text-body text-soft-white/80 max-w-md mx-auto">
                      Deine Terminanfrage wurde erfolgreich ins System eingetragen. Unser Team meldet sich in Kürze persönlich bei dir.
                    </p>
                  </div>

                  {/* Visual Recap Box */}
                  <div className="border border-old-gold/20 bg-ink-black/80 max-w-md mx-auto p-6 font-mono text-caption text-left text-soft-white/80 space-y-3">
                    <div className="border-b border-soft-white/10 pb-2.5 flex justify-between">
                      <span className="text-old-gold uppercase">Referenz-Code:</span>
                      <strong className="text-soft-white">{submissionCode}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="text-soft-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wunschstil:</span>
                      <span className="text-soft-white">{formData.style}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Körperstelle:</span>
                      <span className="text-soft-white">{formData.placement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Größe:</span>
                      <span className="text-soft-white">{formData.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>E-Mail:</span>
                      <span className="text-soft-white truncate max-w-[200px]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zuständiger Artist:</span>
                      <span className="text-old-gold text-right">{formData.artist}</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 max-w-md mx-auto text-body text-soft-white/75 font-light leading-relaxed">
                    <p>
                      Wir senden dir eine vorläufige Terminbestätigung mitsamt einigen Zeichenentwürfen und Preisschätzungen an <strong>{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setFormData({
                          style: 'Fineline',
                          placement: '',
                          size: 'Mittel (ca. 10-15 cm)',
                          artist: 'Keine Präferenz',
                          name: '',
                          email: '',
                          phone: '',
                          description: '',
                          newsletter: false,
                        });
                        setFormSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-3 bg-transparent border border-soft-white/20 text-soft-white/70 hover:text-soft-white hover:border-soft-white uppercase text-eyebrow font-mono tracking-widest"
                    >
                      Eine weitere Anfrage stellen
                    </button>
                  </div>
                </motion.div>
                
              )}
            </AnimatePresence>
          </div>

          {/* Column 2: Quick Studio Info (4 cols) */}
          <div className="lg:col-span-4 space-y-8" id="booking-info-rail">
            
            {/* Quick Contact Box */}
            <div className="border border-soft-white/10 p-6 bg-surface-dark space-y-4">
              <h3 className="font-sans text-lg font-semibold text-soft-white border-b border-soft-white/10 pb-2">Unsere Erreichbarkeit</h3>
              
              <ul className="space-y-4 text-caption text-soft-white/80">
                <li className="flex items-start space-x-3">
                  <Mail className="h-4.5 w-4.5 text-tattoo-red mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-old-gold uppercase text-eyebrow">E-Mail</span>
                    <a href="mailto:atelier@amorsnadel.de" className="text-soft-white/90 hover:text-old-gold transition-colors font-sans text-body">
                      atelier@amorsnadel.de
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Phone className="h-4.5 w-4.5 text-tattoo-red mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-old-gold uppercase text-eyebrow">Telefon</span>
                    <a href="tel:+491744312856" className="text-soft-white/90 hover:text-old-gold transition-colors font-sans text-body">
                      0174 4312856
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Clock className="h-4.5 w-4.5 text-tattoo-red mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-old-gold uppercase text-eyebrow">Kapazitäten</span>
                    <span className="block text-soft-white/90 font-sans text-body mt-0.5">
                      Wartezeit ca. 1-3 Wochen bei Vorbesprechung. Spontantermin („Walk-Ins“) nur samstags möglich.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Studio Note */}
            <div className="border border-old-gold/20 p-6 bg-ink-black space-y-3 relative">
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-old-gold/50" />
              <h4 className="font-sans text-base font-semibold tracking-widest uppercase text-old-gold">Hinweis zu Preisen</h4>
              <p className="text-body text-soft-white/80 font-light">
                Unsere Mindestpreise für Tätowierungen starten bei <strong>80,- EUR</strong> zur Abdeckung steriler Einwegmaterialien und Rüstzeiten. Der finale Preis basiert auf Motiv-Komplexität, Einspitz-Präzision und der tatsächlichen Stechzeit.
              </p>
            </div>

          </div>

        </div>

        {/* 6. FAQ Accordion Section */}
        <section className="mt-20 border-t border-soft-white/10 pt-16" id="faq-section">
          <div className="text-center space-y-3 mb-12">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Häufige Fragen</span>
            <h2 className="font-display text-3xl font-light text-soft-white">Fragen &amp; Antworten</h2>
            <div className="w-12 h-[1px] bg-old-gold mx-auto mt-2" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4" id="faq-accordion-group">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-soft-white/10 bg-surface-dark transition-all duration-300 overflow-hidden"
                  id={`faq-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-display text-base sm:text-lg text-soft-white hover:text-old-gold transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-old-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-soft-white/5 bg-ink-black/40"
                      >
                        <div className="px-6 py-5 text-body text-soft-white/80 font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
