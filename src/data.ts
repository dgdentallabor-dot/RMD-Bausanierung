import { Service, Project, Testimonial, FAQItem, TimelineStep } from './types';

import imgUserBathroomSkylight from './assets/images/user_bathroom_skylight_1783855442450.jpg';
import imgUserBathroomPartition from './assets/images/user_bathroom_partition_1783855458332.jpg';
import imgAtticBathroomSkylight from './assets/images/attic_bathroom_skylight_1783852426078.jpg';
import imgFreestandingTubNiche from './assets/images/freestanding_tub_niche_1783852440265.jpg';
import imgMiterTileCorner from './assets/images/miter_tile_corner_1783852452673.jpg';
import imgShowerRecessedNiches from './assets/images/shower_recessed_niches_1783852464779.jpg';
import imgMarbleWalkInShower from './assets/images/marble_walkin_shower_1783852476954.jpg';
import imgVerticalTilesShower from './assets/images/vertical_tiles_shower_1783852495170.jpg';
import imgDoubleBronzeShower from './assets/images/double_bronze_shower_1783852508244.jpg';
import imgMinimalistToiletRoom from './assets/images/minimalist_toilet_room_1783852519775.jpg';
import imgDoubleShowerDetail from './assets/images/double_shower_detail_1783852531913.jpg';
import imgDoubleShowerWide from './assets/images/double_shower_wide_1783852543518.jpg';

export const STORY_CONTENT = {
  title: "Eine Familientradition der Exzellenz",
  subtitle: "Drei Brüder, eine Vision: absolute Präzision, transparente Kommunikation und makellose deutsche Handwerkskunst.",
  paragraphs: [
    "RMD Bausanierung wurde in Bad Urach von drei Brüdern gegründet, von denen jeder über mehr als ein Jahrzehnt praktische, professionelle Erfahrung in der deutschen Bau- und Premium-Renovierungsbranche verfügt.",
    "Als Handwerksmeister, die Hunderte von Wohn- und Gewerbeprojekten in ganz Baden-Württemberg realisiert haben, stellten wir ein häufiges Defizit in der Branche fest: Kundenkommunikation, Pünktlichkeit und echte Liebe zum Detail wurden oft der Schnelligkeit geopfert. Wir haben RMD Bausanierung gegründet, um einen neuen Standard zu setzen – wo luxuriöse Materialien auf kompromisslose Präzision und klare, ehrliche Kundenbeziehungen treffen.",
    "Heute beschäftigen wir ein erstklassiges Team von erfahrenen Fachkräften, das in der Lage ist, Projekte jeder Größenordnung auszuführen – von modernen Dachgeschossausbauten und hochwertigen Badrenovierungen bis hin zu umfassenden gewerblichen Sanierungen. Unser schönster Beweis ist die absolute Zufriedenheit und Weiterempfehlung von Hunderten von glücklichen Kunden."
  ],
  brothers: [
    {
      name: "Muharem",
      role: "Meister für Fliesen- & Feinstoffarbeiten",
      desc: "Spezialist für Gehrungsschnitte (Jolly-Kanten), maßgeschneiderte Gefällepläne in Nassräumen und großformatige Luxusfliesen."
    },
    {
      name: "Denis",
      role: "Leiter Trockenbau & Rohbauarbeiten",
      desc: "Architektonische Trockenbaulösungen, Akustikdeckensysteme und komplexe Raumtrennwände."
    },
    {
      name: "Ramazan",
      role: "Projektmanagement & Endabnahme",
      desc: "Verantwortlich für die Projektplanung, die Kundenkommunikation und die abschließenden Qualitätskontrollen nach VOB."
    }
  ],
  badges: [
    { text: "Professionelles Team" },
    { text: "Erstklassige Materialien" },
    { text: "Schnelle Fertigstellung" },
    { text: "Kostenfreie Beratung" },
    { text: "Hunderte zufriedene Kunden" }
  ]
};

export const SERVICES: Service[] = [
  // Fassade & Außenbereich
  {
    id: "exterior-renovation",
    title: "Außensanierung",
    category: "Exterior",
    description: "Vollständiger Schutz der Gebäudehülle mit erstklassiger architektonischer Ästhetik.",
    longDescription: "Schützen und werten Sie Ihr Gebäude mit unseren ganzheitlichen Außensanierungsleistungen auf. Wir vereinen Witterungsschutz, strukturelle Integrität und anspruchsvolle Fassadenarchitektur.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    iconName: "Home"
  },
  {
    id: "facade-renovation",
    title: "Fassadensanierung",
    category: "Exterior",
    description: "Moderne Fassadengestaltung, Risssanierung und dauerhafter Witterungsschutz.",
    longDescription: "Unsere maßgeschneiderten Fassadenlösungen stellen die Ästhetik wieder her, sanieren Risse und schützen Ihr Mauerwerk mit hochwertigen deutschen Silikatfarben und diffusionsoffenen Putzsystemen.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    iconName: "Paintbrush"
  },
  {
    id: "thermal-insulation",
    title: "Wärmedämmung (WDVS)",
    category: "Exterior",
    description: "Zertifizierte, energieeffiziente Fassadendämmsysteme nach aktuellem GEG.",
    longDescription: "Senken Sie spürbar Ihre Energiekosten. Wir installieren zertifizierte Wärmedämm-Verbundsysteme (WDVS) in voller Übereinstimmung mit den Vorgaben des Gebäudeenergiegesetzes (GEG).",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    iconName: "ShieldAlert"
  },
  {
    id: "exterior-painting",
    title: "Fassadenanstrich",
    category: "Exterior",
    description: "Wetterbeständige Premiumanstriche mit maximalem UV- und Algenschutz.",
    longDescription: "Mit langlebigen, selbstreinigenden Silikonharzfarben (Lotus-Effekt) bleibt Ihre Fassade über Jahrzehnte hinweg strahlend sauber, trocken und vor Moos- sowie Algenbefall geschützt.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800",
    iconName: "Palette"
  },

  // Innenausbau & Bad
  {
    id: "drywall-trockenbau",
    title: "Trockenbau",
    category: "Interior",
    description: "Präzise Akustikwände, Deckenkonstruktionen und flexible Raumaufteilungen.",
    longDescription: "Makellose Trennwände, abgehängte Decken mit integrierten indirekten LED-Lichtvouten und Akustiklösungen. Exakte Ausführung bis zur höchsten Oberflächengüte Q4.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    iconName: "Layers"
  },
  {
    id: "bathroom-renovation",
    title: "Badsanierung",
    category: "Interior",
    description: "Luxuriöse Wellness-Bäder, bodengleiche Walk-In Duschen und Feinsteinzeug.",
    longDescription: "Unsere Paradedisziplin: Wir schaffen barrierefreie Wohlfühloasen mit edlen Linienabläufen, beleuchteten Wandnischen, Armaturen und perfekten 45°-Gehrungsschnitten (Jolly-Kanten).",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    iconName: "ShowerHead"
  },
  {
    id: "kitchen-renovation",
    title: "Küchenumbau & Sanierung",
    category: "Interior",
    description: "Hochwertiger Ausbau inklusive Sanitärvorbereitung und Fliesenspiegel.",
    longDescription: "Vorbereitung Ihrer Küche auf moderne Designer-Einbauten: Leitungsverlegungen, Schwerlastverstärkungen im Trockenbau sowie präzise Boden- und Wandverfliesungen.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    iconName: "ChefHat"
  },
  {
    id: "floor-installation",
    title: "Bodenbeläge & Parkett",
    category: "Interior",
    description: "Fischgrät-Parkett, großformatiges Feinsteinzeug und Bodenausgleich.",
    longDescription: "Fachgerechte Verlegung von edlem Eichenparkett im Fischgrät- oder Chevron-Verband, Großformatfliesen sowie professionelle Untergrundnivellierung mit Dehnungsfugen.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
    iconName: "Grid"
  },
  {
    id: "painting-decoration",
    title: "Maler- & Lackierarbeiten",
    category: "Interior",
    description: "Q4-Spachtelung, moderne Akzentwände und schadstofffreie Innenfarben.",
    longDescription: "Von feinsten mineralischen Kalkputzen bis hin zu stilvollen Farbakzenten. Wir verarbeiten ausschließlich emissions- und lösungsmittelfreie Premiumfarben für ein gesundes Raumklima.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    iconName: "Brush"
  },
  {
    id: "plastering",
    title: "Verputzarbeiten",
    category: "Interior",
    description: "Hochwertiger mineralischer Innenputz für widerstandsfähige, glatte Wände.",
    longDescription: "Professioneller Gips- oder Kalkzementputz für vollkommen plane, atmungsaktive Wandflächen, die das Raumklima auf natürliche Weise regulieren und Schimmelbildung vorbeugen.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    iconName: "Wand"
  },
  {
    id: "ceilings",
    title: "Decken & Beleuchtung",
    category: "Interior",
    description: "Abgehängte Deckensysteme, Schattenfugen und indirekte Lichtsysteme.",
    longDescription: "Modernisieren Sie Ihre Räume mit abgehängten Decken, integrierten Deckenspots, Akustikpaneelen und filigranen Schattenfugen für ein exklusives Raumambiente.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    iconName: "Sun"
  },
  {
    id: "attic-conversion",
    title: "Dachgeschossausbau",
    category: "Interior",
    description: "Verwandlung ungenutzter Dachböden in hochwertige Wohnräume.",
    longDescription: "Komplette Wärmedämmung nach EnEV/GEG, Velux-Dachfenstermontage, Trockenbauwände und maßgefertigte Dachbäder mit angepassten Glasduschabtrennungen.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    iconName: "Box"
  },
  {
    id: "stair-renovation",
    title: "Treppensanierung",
    category: "Interior",
    description: "Fliesenverkleidung, Echtholzstufen und integrierte Kantenprofile.",
    longDescription: "Verwandeln Sie abgenutzte Betontreppen in architektonische Blickfänge. Verkleidung mit edlem Feinsteinzeug, bündigen LED-Stufenleuchten und sicheren Kantenschienen.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    iconName: "ArrowUpRight"
  },
  {
    id: "basement-renovation",
    title: "Kellersanierung",
    category: "Interior",
    description: "Feuchtigkeitsabdichtung, Dämmung und Ausbau zu vollwertigem Wohnraum.",
    longDescription: "Fachgerechte Bauwerksabdichtung gegen Feuchtigkeit, energetische Dämmung und feuchtigkeitsresistente Bodenbeläge für Fitnessräume, Büros oder Hobbyzimmer.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    iconName: "ArrowDown"
  },

  // Altbau & Kernsanierung
  {
    id: "house-renovation",
    title: "Altbausanierung & Kernsanierung",
    category: "General",
    description: "Ganzheitliche Generalsanierung historischer oder in die Jahre gekommener Immobilien.",
    longDescription: "Umfassende Kernsanierung aus einer Hand: Entkernung, energetische Erneuerung, Neuinstallationen im Trockenbau und schlüsselfertige Übergabe in meisterhafter Qualität.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    iconName: "CheckCircle2"
  },
  {
    id: "commercial-renovation",
    title: "Gewerbe- & Praxisausbau",
    category: "General",
    description: "Termintreue Sanierungen für Büros, Praxen und Einzelhandel bei minimalen Ausfallzeiten.",
    longDescription: "Moderne Raumkonzepte, schallisolierte Akustikwände und hochbelastbare Bodensysteme – abgestimmt auf den professionellen Geschäftsbetrieb.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    iconName: "Building2"
  },
  {
    id: "new-construction-finishing",
    title: "Innenausbau bei Neubauten",
    category: "General",
    description: "Kompletter Innenausbau ab Rohbauzustand bis zur schlüsselfertigen Übergabe.",
    longDescription: "Wir übernehmen den neu errichteten Rohbau und führen alle Putz-, Trockenbau-, Fliesen-, Maler- und Bodenlegerarbeiten perfekt aufeinander abgestimmt aus.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    iconName: "Sparkles"
  },
  {
    id: "custom-solutions",
    title: "Individuelle Sonderlösungen",
    category: "General",
    description: "Architektonische Sonderanfertigungen, beleuchtete Nischen und Spezialverkleidungen.",
    longDescription: "Ob komplexe Deckenformationen, freischwebende Waschtischkonsolen oder handgefertigte Ablagen: Wir setzen anspruchsvolle architektonische Pläne präzise in die Realität um.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    iconName: "Wrench"
  }
];

export const STATS = [
  { value: "3+", label: "Jahre als Unternehmen" },
  { value: "20+", label: "Erfahrene Fachkräfte" },
  { value: "500+", label: "Erfolgreiche Projekte" },
  { value: "100%", label: "Kundenzufriedenheit" }
];

export const FEATURES = [
  {
    title: "Deutsche Qualitätsstandards",
    description: "Strikte Einhaltung aller VOB- und DIN-Vorschriften für langlebige und makellose Bausubstanzen.",
    iconName: "Award"
  },
  {
    title: "Erstklassige Materialien",
    description: "Wir verarbeiten ausschließlich Premiummarken wie PCI, Knauf, Sto und Brillux für maximale Haltbarkeit.",
    iconName: "Gem"
  },
  {
    title: "Erfahrene Fachkräfte",
    description: "Unser großes Team besteht aus hochqualifizierten Fliesenlegern, Malern und Trockenbauern mit Meistererfahrung.",
    iconName: "Users"
  },
  {
    title: "Transparente Festpreise",
    description: "Detaillierte, nachvollziehbare Angebote ohne versteckte Nebenkosten. Sie zahlen genau das, was vereinbart ist.",
    iconName: "FileText"
  },
  {
    title: "Verlässliche Termine",
    description: "Zeit ist kostbar. Wir planen alle Bauabschnitte sorgfältig und garantieren eine pünktliche Fertigstellung.",
    iconName: "Calendar"
  },
  {
    title: "Persönliche Beratung",
    description: "Direkte Abstimmung und Bauplanung mit den Gründungsbrüdern von der ersten Idee bis zur schlüsselfertigen Übergabe.",
    iconName: "MessageSquare"
  },
  {
    title: "Moderne Ausrüstung",
    description: "Einsatz von High-Tech-Lasern, Staubschutztüren und staubfreien Luftreinigungssystemen im bewohnten Zustand.",
    iconName: "Cpu"
  },
  {
    title: "Liebe zum Detail",
    description: "Exakte 45°-Gehrungsschnitte (Jollys), perfekt glatte Q4-Wandflächen und millimetergenaue Silikonfugen.",
    iconName: "Maximize"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-user-bathroom-skylight",
    title: "Premium Bad-Sanierung mit Dachfenster",
    category: "Bathroom",
    description: "Ein meisterhaft saniertes Badezimmer im Dachgeschoss. Das extra große Dachfenster flutet den Raum mit viel Tageslicht. Der bündig geflieste Badewannenbereich, die großformatigen beigegrauen Fliesen und die perfekt installierte wandhängende Waschtisch-Kombination schaffen eine zeitlose Wohlfühloase.",
    image: imgUserBathroomSkylight,
    location: "Bad Urach",
    year: "2026",
    size: "14 m²",
    tags: ["Tageslicht", "Dachausbau", "Waschtischanlage", "Gehrungsschnitt"]
  },
  {
    id: "proj-user-bathroom-partition",
    title: "Exklusive WC-Trennung & Fliesendesign",
    category: "Bathroom",
    description: "Präzise Raumgestaltung durch eine halbhohe, geflieste Trennwand, die das wandhängende WC dezent vom Waschtischbereich abgrenzt. Die fugenlos verlegten, beigegrauen Feinsteinzeug-Fliesen im XL-Format überzeugen durch absolute Symmetrie und millimetergenaue Ausführung.",
    image: imgUserBathroomPartition,
    location: "Metzingen",
    year: "2026",
    size: "12 m²",
    tags: ["Gästetoilette", "Raumteiler", "Großformat", "Perfekte Fugen"]
  },
  {
    id: "proj-attic-bathroom-skylight",
    title: "Exklusiver Dachbadausbau",
    category: "Bathroom",
    description: "Komplettsanierung eines Badezimmers unter der Dachschräge. Perfekte Integration des Dachflächenfensters zur Maximierung des Tageslichteinfalls, kombiniert mit einer bodengleichen Dusche und maßgeschneiderten Trockenbaulösungen.",
    image: imgAtticBathroomSkylight,
    location: "Bad Urach",
    year: "2026",
    size: "16 m²",
    tags: ["Dachschräge", "Velux", "Trockenbau", "Bodengleich"]
  },
  {
    id: "proj-freestanding-tub-niche",
    title: "Freistehende Badewanne & Wellness-Nische",
    category: "Bathroom",
    description: "Luxuriöse Wohlfühloase mit einer eleganten freistehenden Badewanne. Die im Hintergrund integrierte, warm beleuchtete LED-Wandnische setzt edle Akzente und bietet stilvollen Stauraum auf feinstem Feinsteinzeug.",
    image: imgFreestandingTubNiche,
    location: "Stuttgart-Nord",
    year: "2026",
    size: "18 m²",
    tags: ["Badewanne", "LED-Beleuchtung", "Lichtnische", "Naturstein-Optik"]
  },
  {
    id: "proj-miter-tile-corner",
    title: "Präzise 45-Grad-Gehrungen (Jolly-Kanten)",
    category: "Bathroom",
    description: "Fliesenhandwerk in Perfektion. Die Außenecken im Dusch- und Wannenbereich wurden auf Gehrung (45° Jolly) geschliffen und vollkommen ohne störende Kunststoff- oder Metallschienen präzise zusammengefügt.",
    image: imgMiterTileCorner,
    location: "Reutlingen",
    year: "2026",
    size: "Detail",
    tags: ["Gehrungsschnitt", "Jolly-Kante", "Handwerkskunst", "Eckausbildung"]
  },
  {
    id: "proj-shower-recessed-niches",
    title: "Eingebaute Wandnischen & Duschkomfort",
    category: "Bathroom",
    description: "Praktische und elegante Aufbewahrungslösungen im Duschbereich. Die bündig gefliesten und abgedichteten Nischen fügen sich nahtlos in das symmetrische Fliesenraster ein.",
    image: imgShowerRecessedNiches,
    location: "Metzingen",
    year: "2026",
    size: "Detail",
    tags: ["Dusch-Nische", "Wandnische", "Symmetrie", "Abdichtung"]
  },
  {
    id: "proj-marble-walkin-shower",
    title: "Walk-In Dusche in Marmor-Optik",
    category: "Bathroom",
    description: "Moderne, offene Walk-In Dusche mit großformatigen Fliesen in edler weißer Marmor-Optik. Die fortlaufende Äderung der Fliesen und die bodengleiche Ausführung vermitteln Großzügigkeit und Luxus.",
    image: imgMarbleWalkInShower,
    location: "Stuttgart-Mitte",
    year: "2026",
    size: "15 m²",
    tags: ["Marmor-Design", "Walk-In Dusche", "Fugenlos-Optik", "Bodengleich"]
  },
  {
    id: "proj-vertical-tiles-shower",
    title: "Vertikale Design-Wandverfliesung",
    category: "Bathroom",
    description: "Kreative Raumgestaltung im Duschbereich durch vertikal verlegte Riegel-Fliesen. Die präzise Ausrichtung streckt den Raum optisch und setzt moderne, architektonische Akzente.",
    image: imgVerticalTilesShower,
    location: "Tübingen",
    year: "2026",
    size: "8 m²",
    tags: ["Vertikalverlegung", "Riegelfliesen", "Designbad", "Akzentwand"]
  },
  {
    id: "proj-double-bronze-shower",
    title: "Exklusive Doppel-Duschanlage in Bronze",
    category: "Bathroom",
    description: "Großzügige Walk-In Doppeldusche ausgestattet mit hochwertigen, unter Putz verlegten Regenduschen in gebürsteter Bronze-Optik. Symmetrisches XL-Fliesenbild für ein harmonisches Raumerlebnis.",
    image: imgDoubleBronzeShower,
    location: "Ludwigsburg",
    year: "2026",
    size: "20 m²",
    tags: ["Doppeldusche", "Unterputz-Armaturen", "Bronze-Finish", "Walk-In"]
  },
  {
    id: "proj-minimalist-toilet-room",
    title: "Minimalistisches WC mit LED-Rückwand",
    category: "Bathroom",
    description: "Modernes Hänge-WC mit einer halbhohen Vorwandinstallation. Die darüber liegende, warm hinterleuchtete Nische dient als elegante Ablage und sorgt für ein sanftes Ambientelicht.",
    image: imgMinimalistToiletRoom,
    location: "Esslingen",
    year: "2026",
    size: "4 m²",
    tags: ["Hänge-WC", "Ambientelicht", "Vorwandinstallation", "Minimalismus"]
  },
  {
    id: "proj-double-shower-detail",
    title: "Perfektion im Detail",
    category: "Bathroom",
    description: "Detailaufnahme einer Doppeldusche. Zeigt die millimetergenaue Flucht der Fugen und den perfekten Anschluss der edlen Armaturen an das Fliesenbild.",
    image: imgDoubleShowerDetail,
    location: "Nürtingen",
    year: "2026",
    size: "Detail",
    tags: ["Fugenbild", "Präzisionsarbeit", "Armaturenanschluss", "Luxusbad"]
  },
  {
    id: "proj-double-shower-wide",
    title: "Großzügige Wellness-Doppeldusche",
    category: "Bathroom",
    description: "Komplette Ansicht der bodengleichen Doppeldusche. Das Zusammenspiel aus großformatigen Fliesen, edler Verglasung und modernen Armaturen schafft ein echtes Spa-Gefühl zu Hause.",
    image: imgDoubleShowerWide,
    location: "Bad Urach",
    year: "2026",
    size: "22 m²",
    tags: ["Wellness", "Ganzglas-Abtrennung", "Bodengleich", "Premium-Sanierung"]
  }
];

export const TIMELINE: TimelineStep[] = [
  {
    id: "step1",
    stepNumber: "01",
    title: "Erstberatung",
    description: "Wir besprechen Ihre Sanierungsideen, Anforderungen und Wünsche – telefonisch oder direkt bei Ihnen vor Ort.",
    iconName: "MessageSquare"
  },
  {
    id: "step2",
    stepNumber: "02",
    title: "Kostenlose Vor-Ort-Besichtigung",
    description: "Unsere Experten vermessen Ihre Räumlichkeiten per Laser, begutachten die Bausubstanz und dokumentieren alle technischen Details.",
    iconName: "Search"
  },
  {
    id: "step3",
    stepNumber: "03",
    title: "Technische Detailplanung",
    description: "Wir erstellen Materialvorschläge, Trockenbaupläne, Fliesenverlegemuster auf Gehrung (Jolly) und Lichtkonzepte.",
    iconName: "DraftingCompass"
  },
  {
    id: "step4",
    stepNumber: "04",
    title: "Verbindliches Festpreisangebot",
    description: "Sie erhalten ein transparentes, VOB-konformes Angebot mit klarem Leistungsumfang und Festpreisgarantie – ohne versteckte Kosten.",
    iconName: "FileCheck"
  },
  {
    id: "step5",
    stepNumber: "05",
    title: "Fachgerechte Bauausführung",
    description: "Die Brüder und unser Team setzen die Arbeiten mit staubfreier Absaugung, modernen Präzisionswerkzeugen und ständiger Bauleitung um.",
    iconName: "Hammer"
  },
  {
    id: "step6",
    stepNumber: "06",
    title: "Gemeinsame Qualitätsabnahme",
    description: "Eine detaillierte gemeinsame Endbegehung stellt sicher, dass jede Fliese, Fuge und Oberfläche höchsten Ansprüchen genügt.",
    iconName: "ShieldCheck"
  },
  {
    id: "step7",
    stepNumber: "07",
    title: "Besenreine Übergabe & Garantie",
    description: "Wir übergeben Ihr Zuhause sauber und bezugsfertig – inklusive voller 5-jähriger Gewährleistung nach deutschem VOB/B-Recht.",
    iconName: "Heart"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Dr. Marcus Becker",
    role: "Villa-Besitzer",
    review: "Die drei Brüder haben bei der Komplettsanierung unseres Badezimmers und Wohnbereichs herausragende Arbeit geleistet. Das Fischgrät-Parkett liegt absolut plan, und die Walk-In Doppeldusche mit bronzenen Armaturen gleicht einem Luxus-Spa. Pünktlich, ehrlich und handwerklich unübertroffen.",
    rating: 5,
    projectType: "Komplette Haussanierung",
    location: "Killesberg, Stuttgart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test2",
    name: "Sabine Wagner",
    role: "Architektin",
    review: "Ich arbeite bei anspruchsvollen Wohnprojekten regelmäßig mit RMD Bausanierung zusammen. Die Fliesenleger gehören zu den besten in ganz Baden-Württemberg. 45°-Gehrungsschnitte an großem Feinsteinzeug werden vollkommen splitterfrei ausgeführt, und die Q4-Spachtelung ist makellos.",
    rating: 5,
    projectType: "Luxus Penthouse-Sanierung",
    location: "Stuttgart-West",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test3",
    name: "Thomas & Anna Müller",
    role: "Hauseigentümer",
    review: "Wir haben unseren Dachboden zu einem Schlafzimmer mit integriertem Bad ausbauen lassen. RMD Bausanierung hat alles übernommen: Dämmung, Trockenbau, Velux-Fenster, Sanitär und Fliesen. Das Angebot war verbindlich und ohne Überraschungen. Uneingeschränkte Weiterempfehlung!",
    rating: 5,
    projectType: "Dachbodenausbau & Bad",
    location: "Ludwigsburg",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Wie lange dauert eine typische luxuriöse Badrenovierung?",
    answer: "Eine vollständige Badsanierung dauert je nach Umfang ca. 10 bis 18 Werktage. Dies umfasst alle Vorarbeiten, Rohrleitungsanpassungen, Gefälle-Estrich für die Walk-In Dusche, großformatige Fliesenverlegung auf Gehrung und die finale Sanitärinstallation."
  },
  {
    id: "faq2",
    question: "Bieten Sie eine kostenlose Besichtigung und Angebotserstellung an?",
    answer: "Ja, absolut. Unser persönliches Erstgespräch sowie die Begutachtung und Vermessung vor Ort im Großraum Stuttgart und Umgebung sind für Sie zu 100 % unverbindlich und kostenfrei. Anschließend erhalten Sie ein detailliertes Angebot."
  },
  {
    id: "faq3",
    question: "In welchen Regionen sind Sie tätig?",
    answer: "Wir sind im gesamten Raum Baden-Württemberg aktiv – mit Schwerpunkt auf Bad Urach, Reutlingen, Metzingen, Tübingen, Nürtingen, Esslingen, Stuttgart, Ludwigsburg, Böblingen und Sindelfingen sowie im Umkreis von ca. 60 km."
  },
  {
    id: "faq4",
    question: "Welche Baustoffmarken und Materialien verarbeiten Sie?",
    answer: "Wir machen bei der Bausubstanz keine Kompromisse. Wir setzen ausschließlich auf führende deutsche und europäische Markenhersteller: PCI für Baukleber und Abdichtungen, Knauf für Trockenbausysteme, Sto und Brillux für Fassaden und Farben sowie Geberit und Schlüter-Systems für Entwässerung und Sanitär."
  },
  {
    id: "faq5",
    question: "Können Sanierungsarbeiten auch im bewohnten Zustand stattfinden?",
    answer: "Ja, wir sind auf bewohnte Sanierungen spezialisiert. Durch luftdichte Staubschutztüren, Abdeckvliese und moderne Luftreiniger mit Unterdruckabsaugung halten wir Ihre Wohnbereiche sauber und staubfrei."
  },
  {
    id: "faq6",
    question: "Welche Gewährleistung bieten Sie auf Ihre Arbeiten?",
    answer: "Auf sämtliche von uns ausgeführten Handwerks-, Abdichtungs- und Sanierungsleistungen erhalten Sie eine volle 5-jährige Gewährleistung nach deutschem VOB/B-Baurecht."
  }
];
