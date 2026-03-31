import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Code, Database, Globe, Cpu } from 'lucide-react';

const LayersSection = () => {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const layers = [
    {
      id: "01",
      title: "AI Intelligence",
      desc: "Neural engines and cognitive models that drive decision making.",
      details: "Leveraging large-scale transformer models and proprietary reinforcement learning to provide real-time decision synthesis and predictive accuracy at the edge.",
      color: "border-tertiary",
      icon: Brain
    },
    {
      id: "02",
      title: "Software Platform",
      desc: "Orchestration middleware connecting intelligence to interfaces.",
      details: "A unified orchestration layer built with high-availability microservices, providing seamless API endpoints for complex intelligence workflows and cross-platform sync.",
      color: "border-primary",
      icon: Code
    },
    {
      id: "03",
      title: "Data Infrastructure",
      desc: "Scalable pipelines ensuring data integrity and processing speeds.",
      details: "End-to-end data lifecycle management featuring automated ETL pipelines, vector database indexing, and ultra-low latency retrieval for high-stakes environments.",
      color: "border-info",
      icon: Database
    },
    {
      id: "04",
      title: "Industry Application",
      desc: "Customized endpoints tailored for specific vertical needs.",
      details: "Vertical-specific cognitive tools designed for mission-critical operations in aerospace, logistics, and strategic business sectors with specialized UX.",
      color: "border-success",
      icon: Globe
    }
  ];

  return (
    <section id="platform" className="py-32 px-6 overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
          <motion.path
            animate={{ 
              d: [
                "M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,218.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            fill="#ffc107"
            fillOpacity="0.4"
          />
          <motion.path
            animate={{ 
              d: [
                "M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,160C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
                "M0,224L60,240C120,256,240,288,360,277.3C480,267,600,213,720,202.7C840,192,960,224,1080,240C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
                "M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,160C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ]
            }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            fill="#ac89ff"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="w-fit mb-20 group">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-2 tracking-tight">Four Layers. One Intelligence.</h2>
          <div className="relative h-4 w-full overflow-hidden mb-6">
            <svg viewBox="0 0 200 20" className="w-full h-full text-primary fill-none stroke-current stroke-2">
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredLayer(i)}
                onMouseLeave={() => setHoveredLayer(null)}
                whileHover={{ x: 10 }}
                className="p-8 rounded-xl bg-surface border border-outline-variant/5 border-l-4 transition-all cursor-default flex items-start gap-6"
                style={{ borderLeftColor: i === 0 ? '#ac89ff' : i === 1 ? '#ffc107' : i === 2 ? '#00bcd4' : i === 3 ? '#4caf50' : 'inherit' }}
              >
                <div className="p-3 rounded-lg bg-surface-high border border-outline-variant/10">
                  <layer.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-label text-on-surface-variant text-[10px] mb-2 uppercase tracking-widest">Layer {layer.id}</div>
                  <h3 className="font-headline text-2xl font-bold mb-3">{layer.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-0">{layer.desc}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: hoveredLayer === i ? "auto" : 0, opacity: hoveredLayer === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-primary/80 text-sm mt-4 leading-relaxed pt-4 border-t border-outline-variant/10">
                      {layer.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex justify-center">
            <div className="aspect-square w-full max-w-md glass-card rounded-full border border-primary/10 flex items-center justify-center p-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border border-tertiary/10 flex items-center justify-center p-12 relative"
              >
                {/* Orbiting Icons */}
                {layers.map((layer, idx) => {
                  const positions = [
                    "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                    "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                    "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ];
                  return (
                    <div key={idx} className={`absolute ${positions[idx]} p-3 glass-card rounded-full border border-primary/20 bg-surface/80 backdrop-blur-md z-20`}>
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <layer.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                  );
                })}

                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-tertiary/10 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-primary" />
                </div>
              </motion.div>
            </div>
            <div className="absolute -top-4 -right-4 p-4 glass-card rounded-lg intelligence-glow font-label text-[10px] tracking-widest">REAL-TIME SYNC ACTIVE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayersSection;
