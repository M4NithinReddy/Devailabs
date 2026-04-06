import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Video, Building2, Rotate3D } from 'lucide-react';

const UseCases = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const cases: Array<{ id: string, title: string, desc: string, details: string, img?: string, icon?: any }> = [
    {
      id: "drone",
      title: "Drone Training",
      desc: "Simulation-based AI for autonomous flight training.",
      details: "Advanced simulation environments featuring procedural terrain generation and multi-agent reinforcement learning for risk-free autonomous flight operations.",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: "uav",
      title: "UAV Services",
      desc: "Real-time data processing for unmanned aerial fleets.",
      details: "End-to-end aerial intelligence for large-scale infrastructure monitoring, featuring real-time thermal analysis and automated path optimization.",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: "sim",
      title: "Simulation",
      desc: "Large-scale digital twins and predictive modeling.",
      details: "Industrial-grade digital twin architecture that models physical assets with millimeter precision to stress test structural integrity and maintenance cycles.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2070",
      icon: null
    },
    {
      id: "media",
      title: "Media",
      desc: "Automated editing and content metadata tagging.",
      details: "Generative AI pipelines for storyboarding, scene composition, and dynamic color grading to transform concepts into cinema-quality visual sequences.",
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2070",
      icon: Video
    },
    {
      id: "b2b",
      title: "B2B",
      desc: "Enterprise resource optimization and logistics.",
      details: "Strategic intelligence for high-ticket corporate ecosystems, automating complex contract analysis and global market sentiment tracking.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070",
      icon: Building2
    },
    {
      id: "3d",
      title: "3D Visualisation",
      desc: "Advanced rendering for geospatial analysis.",
      details: "Ultra-high-resolution spatial rendering featuring real-time ray tracing and interactive AR/VR endpoints to visualize complex 3D data structures.",
      img: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=2070",
      icon: Rotate3D
    }
  ];

  return (
    <section id="use-cases" className="py-6 md:py-4 min-h-[90vh] flex flex-col justify-center px-6">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="mb-3 md:mb-4 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="w-fit">
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight mb-1">Where Dev AI Labs <br />Gets Deployed</h2>
            <div className="relative h-4 w-full overflow-hidden mb-4">
              <svg viewBox="0 0 200 20" className="w-full h-full text-tertiary fill-none stroke-current stroke-2">
                <motion.path
                  animate={{
                    d: [
                      "M 0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10",
                      "M 0 10 Q 25 15, 50 10 T 100 10 T 150 10 T 200 10",
                      "M 0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  d="M 0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10"
                />
              </svg>
            </div>
          </div>
          <p className="text-on-surface-variant max-w-xs md:max-w-sm text-xs">Click any scenario to explore the deep technical background of our deployments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {cases.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -3 }}
              onClick={() => setActiveCase(activeCase === item.id ? null : item.id)}
              className="group relative aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden bg-surface cursor-pointer border border-outline-variant/10"
            >
              {/* Background Image */}
              {item.img && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10 z-10" />
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={item.img}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                </>
              )}

              {/* Icon-only fallback (no image) */}
              {!item.img && item.icon && (
                <div className="absolute inset-0 bg-surface-high flex flex-col items-center justify-center p-12 text-center">
                  <item.icon className="w-16 h-16 text-primary mb-6 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                </div>
              )}

              {/* Icon Badge Overlay (for cards that have both img + icon) */}
              {item.img && item.icon && (
                <div className="absolute top-5 right-5 z-20 p-2.5 rounded-xl bg-background/70 backdrop-blur-md border border-primary/30 shadow-[0_0_20px_rgba(255,193,7,0.2)]">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 p-3 md:p-4 z-20 w-full">
                <h4 className="font-headline text-lg md:text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-on-surface-variant text-[10px] md:text-xs leading-relaxed">{item.desc}</p>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeCase === item.id ? "auto" : 0,
                    opacity: activeCase === item.id ? 1 : 0
                  }}
                  className="overflow-hidden mt-4"
                >
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-primary text-xs leading-relaxed font-medium">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              </div>

              {activeCase === item.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/60 backdrop-blur-md z-10"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
