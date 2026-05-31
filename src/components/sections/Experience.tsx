import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { label: 'Years of Experience', value: 9, suffix: '+', prefix: '+' },
  { label: 'Projects Delivered', value: 120, suffix: '+' },
  { label: 'Technologies Mastered', value: 15, suffix: '+' },
  { label: 'Happy Clients', value: 90, suffix: '+', prefix: '+' },
];

export function Experience() {
  return (
    <section className="py-32 bg-zinc-50 border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 divide-y-0 md:divide-y-0 md:divide-x divide-zinc-200">
          {stats.map((stat, index) => (
            <Counter key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ stat, index, key }: { stat: any; index: number; key?: number | string }) {
  const ref = useRef(null);
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
        
        setCount(Math.floor(easeProgress * stat.value));
        
        if (progress < 1) {
          requestAnimationFrame(updateRef);
        }
      };
      
      requestAnimationFrame(updateRef);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center px-4"
    >
      <div className="text-5xl md:text-6xl font-display font-bold text-zinc-950 mb-2">
        {stat.prefix || ''}{count}{stat.suffix}
      </div>
      <div className="text-sm md:text-base text-zinc-500 font-medium tracking-wide uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
}
