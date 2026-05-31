/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { WhyWorkWithMe } from './components/sections/WhyWorkWithMe';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <main className="bg-white min-h-screen font-sans selection:bg-brand-500/20 selection:text-brand-500">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <WhyWorkWithMe />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
