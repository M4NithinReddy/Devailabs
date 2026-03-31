import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

const Modal = ({ type, onClose }: { type: string, onClose: () => void }) => {
  const content = {
    demo: {
      title: "Request a Demo",
      description: "Experience the stratified intelligence of Dev AI Labs firsthand. Our engineering team will reach out within 24 hours to schedule a custom walkthrough tailored to your infrastructure.",
      cta: "Experience the Power"
    },
    products: {
      title: "Our Product Suite",
      description: "Discover our specialized AI tools: (1) Voice Intelligence for vocal cloning, (2) Cognitive Chat for RAG-based support, (3) Sales Catalyst for lead scoring, (4) Marketing Core for generation, (5) Strategic Insight for BI, and (6) Automate Pro for RPA.",
      cta: "Explore Our Stack"
    },
    'how-it-works': {
      title: "The Stratified Architecture",
      description: "Our platform operates on a 4-layer stratified intelligence architecture: (1) AI Intelligence for reasoning, (2) Software Platform for orchestration, (3) Data Infrastructure for security, and (4) Industry Application for deployment.",
      cta: "Understand the Core"
    }
  }[type as keyof typeof content];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-background/80 backdrop-blur-2xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="max-w-xl w-full glass-card p-10 md:p-16 rounded-3xl border border-primary/20 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="font-label text-primary text-[10px] uppercase tracking-widest mb-6">Matter / {type.replace('-', ' ')}</div>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">{content?.title}</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10">{content?.description}</p>
        <button
          onClick={onClose}
          className="primary-gradient text-on-primary px-8 py-4 rounded-md font-bold text-sm tracking-tight active:scale-95 transition-all"
        >
          {content?.cta}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
