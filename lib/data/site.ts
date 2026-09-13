export const siteConfig = {
  name: "Water4Everyone",
  language: "nl",
  tagline: "De wereld verbeteren. Eén druppel tegelijk.",
  shortTagline: "Eén druppel tegelijk.",
  pilotCountry: "Marokko",
  exactPilotLocation: null as string | null,
  verifiedANBI: false,
  verifiedEUFunding: false,
  donationMode: "mock" as const,
  contactMode: "demo" as const,
  url: "https://water4everyone.vercel.app",
  emailPlaceholder: null as string | null,
  navigation: [
    { href: "#verhaal", label: "Ons verhaal" },
    { href: "#model", label: "Hoe het werkt" },
    { href: "#marokko", label: "Marokko" },
    { href: "#impact", label: "Impact" },
    { href: "#vragen", label: "Vragen" },
  ],
  stats: [
    {
      value: "2,1 miljard",
      label: "mensen hebben nog geen veilig beheerd drinkwater",
      source: "WHO/UNICEF JMP, 2025",
      sourceUrl:
        "https://www.who.int/news/item/26-08-2025-1-in-4-people-globally-still-lack-access-to-safe-drinking-water---who--unicef",
    },
  ],
  modelSteps: [
    {
      id: "plaatsen",
      number: "01",
      title: "Plaatsen",
      body: "Een nieuwe waterinstallatie vormt het begin. Lokaal, met aandacht voor de omgeving en de mensen die er dagelijks van afhankelijk zijn.",
      image: "/images/morocco-fountain.webp",
      imageAlt: "Sfeerbeeld: traditionele waterfontein in Marokko",
    },
    {
      id: "onderhouden",
      number: "02",
      title: "Onderhouden",
      body: "Filters worden gecontroleerd en waar nodig vervangen. Onderhoud hoort bij het model — niet als bijzaak, maar als vaste schakel.",
      image: "/images/water-hands.webp",
      imageAlt: "Sfeerbeeld: helder water wordt geschonken",
    },
    {
      id: "hergebruiken",
      number: "03",
      title: "Hergebruiken",
      body: "Gebruikte filters en materialen worden waar mogelijk opnieuw verwerkt, in plaats van simpelweg weggegooid.",
      image: "/images/morocco-atlas-green.webp",
      imageAlt: "Sfeerbeeld: groene vallei en bergen in Marokko",
    },
    {
      id: "herinvesteren",
      number: "04",
      title: "Herinvesteren",
      body: "Beschikbare middelen vloeien terug naar onderhoud en nieuwe installaties — zo kan de cyclus zich stap voor stap uitbreiden.",
      image: "/images/morocco-dunes.webp",
      imageAlt: "Sfeerbeeld: karavaan in de Marokkaanse woestijn",
    },
  ],
  principles: [
    {
      number: "01",
      title: "Lokaal beginnen",
      body: "Projecten worden locatie voor locatie opgebouwd, samen met lokale betrokkenen.",
    },
    {
      number: "02",
      title: "Onderhoud meenemen",
      body: "Niet alleen plaatsen, maar ook nadenken over de levensduur van filters en installaties.",
    },
    {
      number: "03",
      title: "Opnieuw investeren",
      body: "Een circulair model waarin beschikbare middelen terug kunnen vloeien naar onderhoud en uitbreiding.",
    },
  ],
  donationAmounts: [10, 25, 50, 100] as const,
} as const;

export type SiteConfig = typeof siteConfig;
