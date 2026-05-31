import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4"
            >
              About Me
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-display font-bold text-zinc-950 mb-8 leading-tight"
            >
              Designing with purpose. <br />
              <span className="text-zinc-400">Engineering with precision.</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed"
            >
              <p>
                I am Aiman Aldawla, a Full-Stack Developer and UI/UX Designer dedicated to bridging the gap between aesthetic design and robust technical architecture.
              </p>
              <p>
                My approach to digital product design focuses on understanding business goals and translating them into seamless, conversion-oriented experiences. Whether it's crafting a pixel-perfect interface or building a scalable backend, I ensure every detail serves a greater purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-8 mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCounter value={9} prefix="+" suffix="" />
                <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Years Exp.</p>
              </motion.div>
               <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCounter value={120} prefix="" suffix="+" />
                <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Projects</p>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-zinc-200"
          >
            <video
              src="/me.webm"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const updateRef = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          requestAnimationFrame(updateRef);
        }
      };
      
      requestAnimationFrame(updateRef);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl font-display font-bold text-zinc-950 mb-2">
      {prefix}{count}{suffix}
    </div>
  );
}
