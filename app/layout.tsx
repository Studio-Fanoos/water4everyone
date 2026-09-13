import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://water4everyone.vercel.app"),
  title: "Water4Everyone | Schoon water, één druppel tegelijk",
  description:
    "Water4Everyone werkt aan duurzame toegang tot schoon drinkwater. We beginnen in Marokko met een circulair model van installeren, onderhouden, hergebruiken en herinvesteren.",
  keywords: [
    "Water4Everyone",
    "schoon drinkwater",
    "Marokko",
    "stichting",
    "duurzaam water",
    "doneren",
  ],
  authors: [{ name: "Water4Everyone" }],
  openGraph: {
    title: "Water4Everyone | Schoon water, één druppel tegelijk",
    description:
      "Een Nederlands initiatief voor duurzame toegang tot schoon drinkwater. Eerste focusregio: Marokko.",
    locale: "nl_NL",
    type: "website",
    siteName: "Water4Everyone",
    images: [
      {
        url: "/images/morocco-dunes.webp",
        width: 2400,
        height: 1600,
        alt: "Sfeerbeeld uit Marokko",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water4Everyone | Schoon water, één druppel tegelijk",
    description:
      "Duurzame toegang tot schoon drinkwater. We beginnen in Marokko.",
    images: ["/images/morocco-dunes.webp"],
  },
  icons: {
    icon: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Water4Everyone",
    description:
      "Non-profit initiatief voor duurzame toegang tot schoon drinkwater, met Marokko als eerste focusregio.",
    url: "https://water4everyone.vercel.app",
    areaServed: "MA",
    knowsAbout: ["clean water", "sustainable water access", "circular maintenance"],
  };

  return (
    <html lang="nl" className={`${instrument.variable} ${manrope.variable}`}>
      <body className="min-h-svh bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
