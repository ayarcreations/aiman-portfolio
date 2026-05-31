import { motion } from 'motion/react';
import { Code2, PenTool, Layout, Layers, ShoppingBag, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Scalable and secure web applications built from the robust back-end to the engaging front-end.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive, aesthetically pleasing, and user-centered designs that drive engagement and conversions.',
    icon: PenTool,
  },
  {
    title: 'Front-End Development',
    description: 'Pixel-perfect, interactive, and responsive interfaces crafted with modern frameworks like React and Next.js.',
    icon: Layout,
  },
  {
    title: 'Web Applications',
    description: 'Complex SaaS and progressive web apps optimized for performance and reliability.',
    icon: Layers,
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom headless storefronts on Shopify or WooCommerce to maximize your online sales.',
    icon: ShoppingBag,
  },
  {
    title: 'Digital Strategy',
    description: 'Consulting on architecture, tech stack, and user journeys to ensure your digital product succeeds.',
    icon: TrendingUp,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-zinc-950 leading-tight"
          >
            Premium Solutions for Modern Brands
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-500/30 group-hover:bg-brand-500 transition-colors"
              />

              {/* Decorative lines */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.35 }}
                className="absolute top-4 right-8 w-8 h-px bg-brand-500/20 group-hover:bg-brand-500/40 transition-colors origin-right"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="absolute top-8 right-4 w-px h-8 bg-brand-500/20 group-hover:bg-brand-500/40 transition-colors origin-top"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.45 }}
                className="absolute bottom-4 left-4 w-8 h-px bg-brand-500/20 group-hover:bg-brand-500/40 transition-colors origin-left"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="absolute bottom-4 left-4 w-px h-8 bg-brand-500/20 group-hover:bg-brand-500/40 transition-colors origin-bottom"
              />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-out"
              />

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.25 }}
                className="w-14 h-14 rounded-2xl bg-white border border-orange-200 flex items-center justify-center mb-8 group-hover:border-orange-500 group-hover:text-orange-500 text-orange-600 transition-colors duration-500 relative z-10 shadow-sm"
              >
                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-xl font-display font-bold text-zinc-950 mb-3 relative z-10"
              >
                {service.title}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.35 }}
                className="text-zinc-600 font-light leading-relaxed relative z-10"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
