import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowUpRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';

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
  {
    title: 'Project Showcase',
    category: 'Video • Motion',
    video: '/projectres.webm',
    color: 'from-rose-500/20 to-orange-500/20',
    hasSound: true,
    normalDisplay: true,
    vertical: true,
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          className={`md:col-span-8 overflow-hidden rounded-3xl bg-zinc-100 relative ${project.vertical ? 'aspect-[9/16] max-w-md mx-auto' : 'aspect-video'} shadow-xl ${index % 2 === 1 ? 'md:order-2' : ''}`}
        >
          {project.video ? (
            <div className="relative w-full h-full">
              {project.normalDisplay ? (
                <motion.video
                  ref={project.hasSound ? videoRef : undefined}
                  src={project.video}
                  autoPlay={false}
                  muted={project.hasSound ? isMuted : true}
                  loop
                  playsInline
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="w-full h-full object-cover"
                />
              ) : (
                <motion.div style={{ y, scale }} className="w-full h-[120%] -mt-[10%]">
                  <video
                    ref={project.hasSound ? videoRef : undefined}
                    src={project.video}
                    autoPlay
                    muted={project.hasSound ? isMuted : true}
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
              {project.normalDisplay && !isPlaying && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center transition-all z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg">
                    <Play className="w-8 h-8 text-zinc-950 ml-1" />
                  </div>
                </motion.button>
              )}
              {project.normalDisplay && isPlaying && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all z-10"
                >
                  <Pause className="w-5 h-5" />
                </motion.button>
              )}
              {project.hasSound && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all z-10"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </motion.button>
              )}
            </div>
          ) : (
            <motion.div style={{ y, scale }} className="w-full h-[120%] -mt-[10%]">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
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
