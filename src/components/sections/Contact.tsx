import { motion } from 'motion/react';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 relative overflow-hidden text-center md:text-left"
        >
          {/* Aesthetic Gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-12">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/3 text-center md:text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6"
              >
                Let's Build Something <span className="text-gradient">Exceptional.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-xl text-zinc-400 font-light max-w-xl mx-auto md:mx-0"
              >
                Ready to take your digital presence to the next level? Get in touch and let's craft an award-winning experience together.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/3 flex flex-col gap-4 items-center md:items-end"
            >
              <motion.a
                href="mailto:aldawladeveloper@gmail.com"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between gap-4 bg-white/10 hover:bg-white border border-white/10 hover:border-white p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 w-full max-w-md"
              >
                <div className="flex items-center gap-3 md:gap-4 text-white group-hover:text-zinc-950 transition-colors">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 group-hover:bg-zinc-100 flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider opacity-70 mb-1 hidden sm:block">Email Me</p>
                    <p className="font-medium text-sm md:text-base">aldawladeveloper@gmail.com</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/967783231711"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between gap-4 bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-300 w-full max-w-md"
              >
                <div className="flex items-center gap-3 md:gap-4 text-zinc-300 group-hover:text-white transition-colors">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-800 group-hover:border-zinc-600 flex items-center justify-center"
                  >
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider opacity-70 mb-1 hidden sm:block">WhatsApp</p>
                    <p className="font-medium text-sm md:text-base">Whatsapp</p>
                  </div>
                </div>
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
