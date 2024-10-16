"use client"
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Services } from '@/sections/Services';
import { Testimonials } from '@/sections/Testimonials';
import { useRef } from 'react';
import { useScrollContext } from './ScrollContext';

export default function Home() {
  const { serviceRef } = useScrollContext();

  return (
    <div className="bg-white">
      <Hero />
      <LogoTicker />
      <Services ref={serviceRef} />
      <Testimonials />
    </div>
  );
}
