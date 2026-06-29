import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed AC Services | Best AC Repair & Installation Jayanagar Bangalore",
  description:
    "Professional AC repair, gas refill, cleaning, and installation services in Jayanagar & across Bangalore. Open 7 days a week, 9 AM to 7 PM. Call 8778184915.",
  keywords: [
    "AC repair Bangalore",
    "AC installation Jayanagar",
    "AC gas refill Bangalore",
    "Split AC service Jayanagar",
    "Window AC repair Bangalore",
    "Ahmed AC Services Jayanagar",
    "Voltas AC service Bangalore",
    "LG AC repair Bangalore",
    "Samsung AC service Bangalore",
  ],
  metadataBase: new URL("https://ahmedacservices.in"),
  openGraph: {
    title: "Ahmed AC Services | Expert AC Repair & Installation Bangalore",
    description:
      "Doorstep Split & Window AC repair, installation, and gas refilling in Jayanagar & South Bangalore. Trusted technicians, transparent pricing.",
    url: "/",
    siteName: "Ahmed AC Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ahmed AC Services",
    url: "https://ahmedacservices.in",
    telephone: "+918778184915",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jayanagar 4th Block",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560011",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.927923,
      longitude: 77.590623,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Jayanagar" },
      { "@type": "AdministrativeArea", name: "Koramangala" },
      { "@type": "AdministrativeArea", name: "JP Nagar" },
      { "@type": "AdministrativeArea", name: "HSR Layout" },
      { "@type": "AdministrativeArea", name: "BTM Layout" },
      { "@type": "AdministrativeArea", name: "Basavanagudi" },
      { "@type": "AdministrativeArea", name: "Banashankari" },
      { "@type": "AdministrativeArea", name: "Bengaluru" },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
