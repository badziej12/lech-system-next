import type { Metadata } from "next";
import "./globals.css";
import "../scss/main.scss";

import {Header} from '@/templates/header-footer/Header';
import {Footer} from "@/templates/header-footer/Footer";
import SmoothScroll from "@/templates/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
