import type { Metadata } from "next";
import "./globals.css";
import "../scss/main.scss";

import {Header} from '@/templates/header-footer/Header';
import {Footer} from "@/templates/header-footer/Footer";
import {Analytics} from "@vercel/analytics/next";

const ogImage = "/assets/images/og-image-ls.png";

export const metadata: Metadata = {
  title: "LECH-SYSTEM | Rolety, żaluzje i moskietiery | Kąty Wrocławskie",
  description: "Rolety, żaluzje i moskitiery na wymiar z profesjonalnym montażem. Obejmujemy w Kąty Wrocławskie, Wrocław i okolice, oferując bezpłatny dojazd, pomiar i doradztwo. Gwarancja jakości – 2 lata!",
  keywords: "rolety, żaluzje, moskitiery, Kąty Wrocławskie, Wrocław, montaż, na wymiar",
  robots: "index, follow",
  openGraph: {
    title: "LECH-SYSTEM - Rolety, Żaluzje, Moskitiery",
    description: "Oferujemy szeroką gamę produktów na wymiar, takich jak rolety, żaluzje i moskitiery. Sprawdź naszą ofertę i skontaktuj się z nami!",
    images: ogImage,
    url: "https://www.lech-system.pl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LECH-SYSTEM - Rolety, Żaluzje, Moskitiery, Meble na Wymiar",
    description: "Oferujemy rolety, żaluzje i moskitiery na wymiar z profesjonalnym montażem. Sprawdź naszą ofertę i skontaktuj się z nami!",
    images: ogImage,
  },
  authors: {name: "Błażej Tondel"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
          <Header />
          {children}
          <Footer />
          <Analytics />
      </body>
    </html>
  );
}
