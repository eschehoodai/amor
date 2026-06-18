import { TattooItem, Artist, FaqItem, Testimonial } from './types';

export const TATTOO_PORTFOLIO: TattooItem[] = [
  {
    id: '1',
    title: 'Wikinger-Wolf & Runen',
    style: 'Wikingisch',
    imageUrl: '/images/wikinger-wolf-krieger-runen-tattoo.png',
    description: 'Ein kraftvolles Blackwork-Tattoo, in dem ein Wolf nahtlos mit dem Gesicht eines nordischen Kriegers verschmilzt. Ergänzt durch geometrische Akzente, einen Vegvísir-Kompass und schützende Runen – ein mythologisches Statement aus Stärke und Schutz, präzise auf den Unterarm modelliert.',
    artist: 'Sergej',
    size: 'Unterarm',
    duration: '11 Stunden (2 Sessions)',
    date: '14. Mai 2026'
  },
  {
    id: '2',
    title: 'Wirbelsäulen-Kalligrafie',
    style: 'Calligraphy',
    imageUrl: '/images/wirbelsaeule-kalligrafie-schriftzug-tattoo.png',
    description: 'Filigrane, handgezeichnete Schriftkunst entlang der Wirbelsäule. Ein tiefgründiges Statement: "Live the life you have but fight for the one you want". Hochpräzise Linienführung, die jeder Bewegung des Rückens elegant folgt.',
    artist: 'Sergej',
    size: 'Rücken (Wirbelsäule)',
    duration: '4.5 Stunden',
    date: '28. April 2026'
  },
  {
    id: '3',
    title: 'Geometrischer Hirsch',
    style: 'Blackwork',
    imageUrl: '/images/geometrisches-hirsch-brust-tattoo.png',
    description: 'Ein majestätischer Hirschkopf auf der Brust, eingebettet in feine Geometrie und Mondphasen. Sattes Blackwork trifft auf filigranes Dotwork – für einen dramatischen Tiefen-Effekt, der sich symmetrisch über den Brustkorb spannt.',
    artist: 'Sergej',
    size: 'Brust (groß)',
    duration: '8 Stunden',
    date: '11. Januar 2026'
  },
  {
    id: '4',
    title: 'Lady & Revolver',
    style: 'Realismus',
    imageUrl: '/images/realistisches-frauenportrait-revolver-unterarm-tattoo.png',
    description: 'Black-&-Grey-Realismus vom Feinsten: ein ausdrucksstarkes Frauenporträt, kombiniert mit einem detailliert ausgearbeiteten Revolver. Weiche Schattierungen und kontrastreiche Tiefen verleihen dem Unterarm-Motiv echte Dreidimensionalität.',
    artist: 'Sergej',
    size: 'Unterarm',
    duration: '7 Stunden',
    date: '02. Juni 2026'
  },
  {
    id: '5',
    title: 'One Life One Chance',
    style: 'Lettering',
    imageUrl: '/images/chicano-lettering-one-life-one-chance-tattoo.png',
    description: 'Ausdrucksstarkes Chicano-Lettering "One Life – One Chance", kombiniert mit einem charaktervollen Money-Motiv. Kräftige Schattierungen und saubere Schriftzüge, exakt nach Custom-Stencil auf die Wade übertragen.',
    artist: 'Sergej',
    size: 'Wade',
    duration: '6 Stunden',
    date: '19. Mai 2026'
  },
  {
    id: '6',
    title: 'Fineline Bienen-Duo',
    style: 'Fineline',
    imageUrl: '/images/fineline-bienen-tattoo.png',
    description: 'Zwei hauchzarte Bienen in feinster Single-Needle-Technik. Trotz der kleinen Größe (siehe Münze als Referenz) sind feinste Details und realistische Schattierungen klar erkennbar – filigrane Hautkunst mit Liebe zum Detail.',
    artist: 'Sergej',
    size: '6 x 5 cm',
    duration: '2.5 Stunden',
    date: '10. März 2026'
  },
  {
    id: '7',
    title: 'Vater & Kind Gedenktattoo',
    style: 'Fineline',
    imageUrl: '/images/vater-und-kind-gedenktattoo-silhouette.png',
    description: 'Ein berührendes Erinnerungstattoo: die Silhouette von Vater und Kind, aus der sich Vögel in den Himmel lösen, gerahmt von den Jahreszahlen 1934–2024. Zarte Linien und sanfte Verläufe machen daraus ein stilles, würdevolles Andenken.',
    artist: 'Sergej',
    size: 'Unterarm',
    duration: '4 Stunden',
    date: '05. April 2026'
  },
  {
    id: '8',
    title: 'Ornamentales Mandala',
    style: 'Ornamental',
    imageUrl: '/images/mandala-ornament-unterbrust-tattoo.png',
    description: 'Ein symmetrisches Unterbrust-Mandala mit Lotus, floralen Ranken und feinstem Dotwork. Herabfallende Perlenketten und Punktierungen umspielen die Körperkontur und betonen die natürliche Anatomie auf elegante Weise.',
    artist: 'Sergej',
    size: 'Unterbrust / Sternum',
    duration: '6.5 Stunden',
    date: '22. Februar 2026'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'sergej',
    name: 'Sergej',
    role: 'Gründer & Master Artist',
    bio: 'Mit über 20 Jahren Erfahrung im Bereich der feinen Nadelkunst gründete Sergej das exklusive „One-Artist-Studio“ AmorsNadel. Seine einzigartige Passion liegt im Gestalten hochpräziser Segmente, ausdrucksstarker Blackwork-Muster, lebendiger Porträts und anspruchsvoller Körperkunst. Jedes Werk wird von ihm persönlich gezeichnet und gestochen, um absolute Perfektion und vollkommene Konzentration auf deine Hautkunst zu garantieren.',
    imageUrl: '/images/tattoo-kuenstler-sergej-amorsnadel.png',
    specialties: ['Finelines', 'Blackwork', 'Kalligrafie (Calligraphy)', 'Realismus & Custom Portrait', 'Wikingische Runen & Mythen'],
    languages: ['Deutsch', 'Englisch', 'Ukrainisch'],
    instagram: '@amors_nadel_'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'Wie vereinbare ich einen Termin bei AmorsNadel?',
    answer: 'Nutze am besten unser interaktives Buchungsformular auf dieser Website. Hier kannst du deinen Wunschstil, die Größe und Platzierung angeben sowie deinen bevorzugten Artist auswählen. Wir melden uns innerhalb von 48 Stunden mit einem konkreten Beratungstermin oder Entwurfsvorschlag bei dir.'
  },
  {
    id: '2',
    question: 'Was muss ich vor meinem Tattoo-Termin beachten?',
    answer: 'Trinke 24 Stunden vorher keinen Alkohol, konsumiere keine Drogen und nimm keine blutverdünnenden Medikamente (wie Aspirin) ein. Frühstücke ausgiebig, trinke ausreichend Wasser und komm gerne in bequemer Kleidung, die leicht Zugang zur zu tätowierenden Körperstelle gewährt.'
  },
  {
    id: '3',
    question: 'Wie funktioniert die Nachpflege (Aftercare)?',
    answer: 'Nach dem Stechen reinigen wir dein Tattoo steril und bringen einen atmungsaktiven Schutzfilm (Second Skin) an, den du 3 bis 5 Tage tragen kannst. Danach wäschst du das Tattoo vorsichtig mit lauwarmem Wasser und pH-neutraler Seife und cremst es 3-mal täglich dünn mit einer speziellen Tattoo-Salbe ein.'
  },
  {
    id: '4',
    question: 'Tätowiert ihr jede Stelle und jeden Entwurf?',
    answer: 'Wir legen allergrößten Wert auf Haltbarkeit und Ästhetik. Manche Körperstellen (wie die Innenseiten der Lippen oder Fußsohlen) tätowieren wir aus Qualitätsgründen nicht. Jeder Entwurf wird von uns individuell gezeichnet — wir kopieren niemals die Arbeiten anderer Künstler.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah K.',
    text: 'Sergejs Kalligrafie an meiner Wirbelsäule ist ein Meisterwerk. Die feinen Linien sind auch nach Monaten noch messerscharf. Das ganze Studio strahlt eine so warme und beruhigende Atmosphäre aus. Unfassbare Präzision!',
    rating: 5,
    date: 'Vor 2 Wochen',
    style: 'Kalligrafie'
  },
  {
    id: 't2',
    name: 'Dennis M.',
    text: 'Wer ein wikingisches oder geometrisches Tattoo will, muss zu Sergej. Er hat mein voriges Tattoo perfekt überarbeitet und einen gigantischen Ärmel gestochen. Spitzenklasse in Beratung, Hygiene und Umsetzung.',
    rating: 5,
    date: 'Vor 1 Monat',
    style: 'Wikingisch / Blackwork'
  },
  {
    id: 't3',
    name: 'Emilia L.',
    text: 'Ich habe mein erstes Fineline-Tattoo bei AmorsNadel stechen lassen. Die Aufklärung zur Hygiene und Pflege war erstklassig. Ich habe mich absolut sicher und professionell aufgehoben gefühlt.',
    rating: 5,
    date: 'Vor 3 Tagen',
    style: 'Botanisch Fineline'
  }
];
