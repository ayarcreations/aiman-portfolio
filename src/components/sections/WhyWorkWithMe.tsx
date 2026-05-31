import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

const features = [
  {
    title: 'End-to-End Solutions',
    description: 'From wireframes to deployment, I handle the complete product lifecycle.',
    icon: Target,
  },
  {
    title: 'Performance Focused',
    description: 'Lightning-fast load times and optimized architecture for the best UX.',
    icon: Zap,
  },
  {
    title: 'Scalable Development',
    description: 'Writing clean, maintainable code that grows with your business.',
    icon: ShieldCheck,
  },
  {
    title: 'Long-Term Support',
    description: 'Building relationships, not just websites. I am here for your continuous growth.',
    icon: HeartHandshake,
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="w-full md:w-1/3 md:sticky top-32">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4"
            >
              Why Me
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-zinc-950 leading-tight mb-6"
            >
              A partner in your digital journey.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-600 font-light text-lg"
            >
              I don't just write code or design screens. I build digital products that solve real business problems and create lasting value.
            </motion.p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-6 h-6 outline-none" />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-xl font-display font-bold text-zinc-950 mb-3"
                >
                  {feature.title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.35 }}
                  className="text-zinc-600 font-light"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
