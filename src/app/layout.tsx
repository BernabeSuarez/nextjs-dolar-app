import type { Metadata } from "next";

import "./globals.css";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Cotizacion del Dolar",
  description: "Cotizaciones del dolar, euro y otras monedas en Argentina",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Hero /> {children}
      </body>
    </html>
  );
}
