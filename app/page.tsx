import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Services } from '@/sections/Services';
import { Testimonials } from '@/sections/Testimonials';

export default function Home() {


  return (
    <div className="bg-white">
      <Hero />
      <LogoTicker />
      <Services />
      <Testimonials />
    </div>
  );
}
