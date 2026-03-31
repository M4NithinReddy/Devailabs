import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  const industryData = [
    {
      label: "Drone Services",
      matter: "High-precision aerial data collection and autonomous mission planning for industrial surveying, infrastructure surveillance, and technical visual intelligence.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2070"
    },
    {
      label: "Pilot Training",
      matter: "Elite UAV flight training programs using high-fidelity simulations, motion sensors, and virtual reality environments to prepare pilots for complex mission scenarios.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
    },
    {
      label: "Geospatial",
      matter: "Advanced 3D mapping and GIS data integration, transforming raw topographical sensor data into actionable spatial intelligence and millimeter-precise terrain models.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
    },
    {
      label: "Agri-tech",
      matter: "Sustainable precision farming solutions leveraging multispectral imaging to monitor crop pathology, optimize irrigation cycles, and automate nutrient distribution.",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=2070"
    },
    {
      label: "Defence",
      matter: "Mission-critical AI-driven tactical intelligence and unmanned combat support systems for high-stakes strategic reconnaissance and integrated battlefield awareness.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2072"
    },
    {
      label: "Logistics",
      matter: "Next-generation autonomous supply chain solutions, featuring last-mile drone delivery swarms and intelligent warehouse inventory management systems.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-all duration-700">
          {industryData.map((ind, i) => (
            <span
              key={i}
              onClick={() => setActiveIndustry(activeIndustry === i ? null : i)}
              className={`font-label text-sm tracking-widest uppercase transition-all cursor-pointer hover:text-primary ${activeIndustry === i ? 'text-primary scale-110' : ''}`}
            >
              {ind.label}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {activeIndustry !== null && (
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden glass-card border border-primary/20 shadow-2xl relative"
            >
              <div className="aspect-video relative overflow-hidden group">
                <img
                  src={industryData[activeIndustry].image}
                  alt={industryData[activeIndustry].label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-10 z-10 w-full max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="font-label text-primary text-xs tracking-widest uppercase mb-4 block">Strategic Focus</span>
                    <h3 className="font-headline text-3xl font-bold mb-4">{industryData[activeIndustry].label}</h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed">{industryData[activeIndustry].matter}</p>
                  </motion.div>
                </div>
              </div>

              <div className="absolute top-6 right-6 z-20">
                <button
                  onClick={() => setActiveIndustry(null)}
                  className="p-2 glass-card rounded-full text-on-surface hover:text-primary transition-colors border border-outline-variant/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Industries;
