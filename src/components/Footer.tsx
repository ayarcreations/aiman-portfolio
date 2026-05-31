import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-zinc-400 font-medium text-sm"
        >
          © {new Date().getFullYear()} Aiman Aldawla. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
