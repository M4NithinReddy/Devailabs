import React from 'react';
import { motion } from 'motion/react';

const Stats = () => {
  const stats = [
    { val: "6", label: "AI Products", id: "products" },
    { val: "4", label: "Intelligence Layers", id: "platform" },
    { val: "10+", label: "Industry Verticals", id: "use-cases" },
    { val: "Singapore", label: "Global HQ", sub: "Est. 2008" }
  ];

  const scrollTo = (id?: string) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-surface/50">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={stat.id ? { y: -5, scale: 1.02 } : {}}
            viewport={{ once: true }}
            onClick={() => scrollTo(stat.id)}
            className={`p-8 glass-card rounded-xl intelligence-glow transition-all ${stat.id ? 'cursor-pointer' : ''}`}
          >
            {stat.sub && <div className="font-label text-primary text-[10px] uppercase tracking-widest mb-1">{stat.sub}</div>}
            <div className={`font-headline font-bold text-primary mb-2 ${stat.val.length > 3 ? 'text-2xl' : 'text-4xl'}`}>{stat.val}</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
