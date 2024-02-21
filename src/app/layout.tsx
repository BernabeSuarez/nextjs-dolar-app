import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cotizacion del Dolar",
  description: "Cotizaciones del dolar, euro y otras monedas en Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero /> {children}
      </body>
    </html>
  );
}
