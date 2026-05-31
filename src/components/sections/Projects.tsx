import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Platforms',
    category: 'Full-Stack • Web App',
    video: '/project1.webm',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Websites',
    category: 'UI/UX Design • Next.js',
    video: '/project2.webm',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'SaaS Platform',
    category: 'React • Node.js',
    video: '/project3.webm',
    color: 'from-brand-500/20 to-red-500/20',
  },
  {
    title: 'Landing Pages',
    category: 'UI/UX • React Native',
    video: '/project4.webm',
    color: 'from-orange-500/20 to-pink-500/20',
  },
  {
    title: 'UI & UX',
    category: 'Design • Branding',
    image: '/projectimage.webp',
    color: 'from-violet-500/20 to-indigo-500/20',
  },
  {
    title: 'Website Redesign',
    category: 'Web Design • Figma',
    image: '/projectimage2.webp',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-zinc-950 leading-tight"
            >
              Some of my projects
            </motion.h3>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, key }: { project: any; index: number; key?: number | string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{ opacity }}
      className="relative group cursor-pointer"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* Video/Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
          whileHover={{ scale: 1.02 }}
          className={`md:col-span-8 overflow-hidden rounded-3xl bg-zinc-100 relative aspect-video shadow-xl ${index % 2 === 1 ? 'md:order-2' : ''}`}
        >
          <motion.div style={{ y, scale }} className="w-full h-[120%] -mt-[10%]">
             {project.video ? (
               <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
             ) : (
               <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
             )}
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className={`md:col-span-4 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
          <motion.div
             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-brand-500 font-medium text-sm mb-4"
            >
              {project.category}
            </motion.p>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ x: 5 }}
              className="text-3xl md:text-4xl font-display font-bold text-zinc-950 mb-6 group-hover:text-brand-500 transition-colors"
            >
              {project.title}
            </motion.h4>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
