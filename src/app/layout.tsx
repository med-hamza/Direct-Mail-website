import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Covered_By_Your_Grace } from "next/font/google";
import Header from "@/components/Header";
import { Analytics } from '@vercel/analytics/react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const covered = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-covered",
});

export const metadata: Metadata = {
  title: "MailMagnet",
  description: "Meet your favorite new  marketing channel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${covered.variable}`}>
        <div className="grid mx-auto w-full px-4 py-4 font-sans md:px-8 md:py-20 lg:px-16 lg:py-3">
          <Header />
        </div>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
