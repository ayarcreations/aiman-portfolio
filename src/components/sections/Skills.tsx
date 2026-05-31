import { motion } from 'motion/react';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'] },
  { category: 'Design', items: ['Figma', 'Photoshop', 'Illustrator', 'UI/UX', 'Wireframing', 'Prototyping'] },
  { category: 'Platforms', items: ['Framer', 'WordPress', 'Shopify', 'Wix', 'Vercel', 'AWS'] },
];

export function Skills() {
  return (
    <section className="py-32 bg-white/80 backdrop-blur-xl text-zinc-950 relative overflow-hidden">
      {/* Background aesthetic */}
      <div className="absolute inset-0 max-w-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4"
            >
              Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6"
            >
              The tools I use to build the future.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-600 font-light text-lg"
            >
              I leverage modern technologies to deliver high-performance, accessible, and scalable digital products.
            </motion.p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              {skills.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                >
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + 0.1 }}
                    className="text-xl font-display font-medium text-zinc-700 mb-6 border-b border-zinc-200 pb-2"
                  >
                    {group.category}
                  </motion.h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (groupIndex * 0.1) + (index * 0.05) + 0.2, duration: 0.4 }}
                        whileHover={{ y: -8, scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-brand-500 hover:text-brand-500 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
