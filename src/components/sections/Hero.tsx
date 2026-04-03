
import React from 'react';
import { motion } from 'motion/react';

const Hero = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => (
  <section className="relative pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-5xl mx-auto"
    >
      <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-6 block">The Stratified Intelligence Architecture</span>
      <h1 className="font-headline text-5xl md:text-8xl font-extrabold text-on-surface tracking-tighter mb-8 leading-[1.1]">
        The Intelligence Behind <br /><span className="text-gradient">the Platform</span>
      </h1>
      <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12">
        Deploy enterprise-grade AI layers across your infrastructure. From data foundations to autonomous industry applications, Dev AI Labs builds the core.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button
          onClick={() => onOpenModal('products')}
          className="primary-gradient text-on-primary px-8 py-4 rounded-md font-bold transition-all hover:shadow-[0_0_30px_rgba(255,193,7,0.3)]"
        >
          Explore Products
        </button>
        <button
          onClick={() => onOpenModal('how-it-works')}
          className="glass-card text-on-surface px-8 py-4 rounded-md font-bold border border-outline-variant/20 hover:bg-surface-high/60 transition-all"
        >
          How It Works
        </button>
      </div>
    </motion.div>
  </section>
);

export default Hero;
