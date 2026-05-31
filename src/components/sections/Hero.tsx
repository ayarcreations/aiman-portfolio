import { motion, useScroll, useTransform } from 'motion/react';
import { HeroFrameSequence } from './HeroSequence';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section id="home" className="relative h-[250vh] bg-white">
      {/* Sticky container to hold the view while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center overflow-hidden pt-20 relative">
        
        {/* Full Background Sequence */}
        <HeroFrameSequence />

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 md:px-12 flex flex-col justify-center h-full">
          <motion.div
            style={{ opacity, y }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl md:max-w-2xl"
          >
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="inline-flex items-center gap-2 px-2 py-1 md:px-3 md:py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-500 font-medium text-xs md:text-sm mb-4 md:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.1] tracking-tighter text-zinc-950 mb-4 md:mb-6"
            >
              FULL-STACK <br />
              <span className="text-gradient">DEVELOPER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm md:text-lg lg:text-xl text-zinc-600 font-light leading-relaxed max-w-xs md:max-w-xl mb-6 md:mb-10"
            >
              Building premium digital experiences that combine design, technology, and business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-zinc-950 text-white rounded-full font-medium overflow-hidden transition-transform active:scale-95 text-sm md:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.svg
                    className="w-4 h-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>

              <motion.a
                href="https://wa.me/905343608690"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-zinc-950 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all active:scale-95 text-sm md:text-base"
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
