
import React from 'react';
import { motion } from 'motion/react';

const Hero = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => (
  <section className="relative pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden">
    {/* AI Layered Architecture / Data Foundation graphic video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 select-none pointer-events-none"
      style={{
        filter: "sepia(100%) hue-rotate(5deg) saturate(300%) contrast(150%)",
        mixBlendMode: "screen"
      }}
    >
      {/* Abstract flying through high-tech AI layers/data streams */}
      <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 z-0 bg-background/70">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px]"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-5xl mx-auto"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <motion.span 
          animate={{ opacity: [1, 0.7, 1, 1, 0.4, 1, 1, 0.8, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="font-label text-primary tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold drop-shadow-[0_0_8px_rgba(255,193,7,0.5)]"
        >
          The Stratified Intelligence Architecture
        </motion.span>
        {/* Blinking Terminal Cursor */}
        <motion.span 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          className="w-1.5 h-3 md:h-3.5 bg-primary rounded-sm shadow-[0_0_10px_#ffc107]"
        />
      </div>

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
