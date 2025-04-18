
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google"
import { twMerge } from "tailwind-merge";
import { useRef } from 'react';
import { ScrollProvider } from './ScrollContext';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zora Tech",
  description: "",
  icons: {
    icon: "/zora-light.svg",
    apple: "/zora-light.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/zora-dark.svg" />
        <link rel="apple-touch-icon" href="/img/zora-dark.svg" />
      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <ScrollProvider>
          <Header />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
