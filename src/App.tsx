/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
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

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = image.onerror = () => resolve();
    image.src = src;
  });
}

function preloadVideo(src: string) {
  return new Promise<void>((resolve) => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.oncanplaythrough = video.onerror = () => resolve();
    video.src = src;
    video.load();
  });
}

function buildPreloadAssets(isMobile: boolean) {
  const projectMedia = [
    '/logo.png',
    '/me.webm',
    '/project1.webm',
    '/project2.webm',
    '/project3.webm',
    '/project4.webm',
    '/projectimage.webp',
    '/projectimage2.webp',
  ];

  const frameCount = isMobile ? 271 : 240;
  const folder = isMobile ? 'frame-phone' : 'frame-desktop';

  for (let index = 0; index < frameCount; index += 1) {
    projectMedia.push(`/${folder}/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`);
  }

  return projectMedia;
}

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const isMobile = window.innerWidth < 768;
    const assets = buildPreloadAssets(isMobile);
    let loadedCount = 0;
    const totalCount = assets.length;

    const updateProgress = () => {
      loadedCount += 1;
      if (!isCancelled) {
        setProgress(Math.min(100, Math.round((loadedCount / totalCount) * 100)));
      }
    };

    const loaders = assets.map((src) => {
      if (src.endsWith('.webm')) {
        return preloadVideo(src).then(updateProgress).catch(updateProgress);
      }
      return preloadImage(src).then(updateProgress).catch(updateProgress);
    });

    // Hide scroll while the loader is active.
    const pageOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    Promise.allSettled(loaders).then(() => {
      if (isCancelled) return;
      setProgress(100);
      window.setTimeout(() => {
        if (!isCancelled) {
          setIsReady(true);
          document.documentElement.style.overflow = pageOverflow || '';
        }
      }, 250);
    });

    return () => {
      isCancelled = true;
      document.documentElement.style.overflow = pageOverflow || '';
    };
  }, []);

  return (
    <>
      {!isReady && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-zinc-950 px-6">
          <div className="w-full max-w-md space-y-8 text-center">
            <img src="/logo.png" alt="Logo" className="mx-auto w-28 h-28 object-contain" />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">Loading portfolio</p>
              <div className="rounded-full bg-zinc-200 h-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-300 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-sm font-medium text-zinc-700">
                Preparing animations and media — {progress}%
              </p>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
}
