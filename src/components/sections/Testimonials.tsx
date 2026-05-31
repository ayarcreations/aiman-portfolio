import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Aiman completely transformed our online presence. His eye for design and technical architecture resulted in a 40% increase in user engagement within the first month.",
    author: "Sarah Jenkins",
    role: "Marketing Director at TechFlow"
  },
  {
    text: "Working with Aiman was a seamless experience. He didn't just build what we asked for; he improved upon our ideas and delivered a product that exceeded our expectations.",
    author: "David Chen",
    role: "Founder, StartupX"
  },
  {
    text: "The perfect blend of creative design and solid engineering. The new dashboard is not only beautiful but incredibly fast and intuitive.",
    author: "Elena Rodriguez",
    role: "Product Manager"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-white/80 backdrop-blur-xl text-zinc-950 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Quote className="w-16 h-16 text-brand-500/50 mx-auto mb-16" />
        </motion.div>

        <div className="h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-4xl font-display font-medium leading-relaxed text-zinc-800 mb-8"
              >
                "{testimonials[current].text}"
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h5 className="text-lg font-bold text-zinc-950">{testimonials[current].author}</h5>
                <p className="text-zinc-600">{testimonials[current].role}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
