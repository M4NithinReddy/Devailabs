import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mic, MessageSquare, TrendingUp, Megaphone, BarChart3, Settings } from 'lucide-react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const productData = [
    {
      title: "Voice Intelligence",
      desc: "Natural language synthesis and vocal recognition for high-stakes operational environments.",
      details: "High-fidelity vocal cloning and real-time transcription with sub-100ms latency, optimized for low-bandwidth mission environments and secure field communication.",
      icon: Mic,
      color: "text-primary",
      span: "md:col-span-2",
      tags: ["SYNTHETIC VOICE", "NLP ENGINE"]
    },
    {
      title: "Cognitive Chat",
      desc: "Autonomous text-based support with deep contextual memory and complex reasoning.",
      details: "State-of-the-art context-aware LLM orchestration featuring enterprise-grade security, vector search RAG, and multi-turn reasoning capabilities.",
      icon: MessageSquare,
      color: "text-tertiary"
    },
    {
      title: "Sales Catalyst",
      desc: "Predictive lead scoring and automated outreach optimization for global sales teams.",
      details: "Advanced CRM-integrated intelligence layer that scores leads in real-time and automates personalized outreach sequences to accelerate conversions.",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Marketing Core",
      desc: "AI-driven content generation and audience segmentation at massive scale.",
      details: "End-to-end generative pipeline for cross-channel content including video, social, and long-form text, maintaining perfect brand-voice consistency.",
      icon: Megaphone,
      color: "text-primary"
    },
    {
      title: "Strategic Insight",
      desc: "Big data visualization and trend forecasting for C-suite decision making.",
      details: "AI-powered BI dashboards that run continuous simulations on market data to identify anomalies and recommend strategic pivots before they are needed.",
      icon: BarChart3,
      color: "text-tertiary"
    }
  ];

  return (
    <section id="products" className="py-6 md:py-4 min-h-[90vh] flex flex-col justify-center px-6 bg-surface/30">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-fit mx-auto text-center mb-4 group">
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-1">Six AI Products. Built for Business.</h2>
          <div className="flex justify-center mb-2">
            <div className="relative h-4 w-full overflow-hidden">
              <svg viewBox="0 0 200 20" className="w-full h-full text-primary fill-none stroke-current stroke-2">
                <motion.path
                  animate={{ 
                    d: [
                      "M 0 10 Q 25 15, 50 10 T 100 10 T 150 10 T 200 10",
                      "M 0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10",
                      "M 0 10 Q 25 15, 50 10 T 100 10 T 150 10 T 200 10"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  d="M 0 10 Q 25 15, 50 10 T 100 10 T 150 10 T 200 10"
                />
              </svg>
            </div>
          </div>
          <p className="text-on-surface-variant">Modular intelligence tools that integrate seamlessly into your existing stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {productData.map((product, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredProduct(i)}
              onMouseLeave={() => setHoveredProduct(null)}
              className={`${product.span || ''} p-4 bg-surface rounded-2xl group hover:bg-surface-high transition-all border border-outline-variant/10 relative overflow-hidden flex flex-col justify-center`}
            >
              <div className="relative mb-3 w-fit">
                {/* Product Icon Glow Aura */}
                <div className={`absolute inset-0 ${product.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-150 rounded-full`} />
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <product.icon className={`relative z-10 w-6 h-6 ${product.color} transition-colors duration-300 group-hover:brightness-125`} />
                </motion.div>
              </div>
              <h3 className={`font-headline ${product.span ? 'text-lg md:text-xl' : 'text-base md:text-lg'} font-bold mb-1`}>{product.title}</h3>
              <p className="text-on-surface-variant mb-2 text-xs leading-relaxed">
                {product.desc}
              </p>

              {product.tags && (
                <div className="flex gap-2 mb-4">
                  {product.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-surface-high rounded-full text-[10px] font-label tracking-widest">{tag}</span>
                  ))}
                </div>
              )}

              <motion.div
                initial={false}
                animate={{ height: hoveredProduct === i ? "auto" : 0, opacity: hoveredProduct === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-3 border-t border-outline-variant/10 mt-1">
                  <p className="text-primary text-[10px] md:text-xs leading-relaxed font-medium">
                    {product.details}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Automate Pro Feature Block */}
          <motion.div
            onMouseEnter={() => setHoveredProduct(5)}
            onMouseLeave={() => setHoveredProduct(null)}
            className="md:col-span-3 p-4 md:p-6 bg-surface-high relative overflow-hidden rounded-2xl border border-primary/10 group"
          >
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
              <div className="max-w-xl">
                <span className="text-primary font-label text-[10px] tracking-widest uppercase mb-1 block">New Release</span>
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-1">Automate Pro</h3>
                <p className="text-on-surface-variant mb-3 text-sm leading-relaxed">End-to-end robotic process automation powered by our proprietary Layer 01 intelligence engine. Connect anything, automate everything.</p>

                <motion.div
                  initial={false}
                  animate={{ height: hoveredProduct === 5 ? "auto" : 0, opacity: hoveredProduct === 5 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-8"
                >
                  <p className="text-primary text-xs leading-relaxed pb-4 border-b border-outline-variant/10">
                    Comprehensive RPA platform that pairs legacy systems with agentic AI models to automate high-complexity administrative workflows, reducing overhead by up to 80%.
                  </p>
                </motion.div>

                <button className="primary-gradient text-on-primary px-6 py-2 rounded-md font-bold text-xs md:text-sm">Deploy Automate</button>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="aspect-video w-full max-w-[200px] glass-card rounded-xl border border-outline-variant/20 flex items-center justify-center p-4 relative overflow-hidden group/logo">
                  {/* Glowing Aura for Automate Pro logo */}
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover/logo:opacity-15 blur-2xl transition-all duration-700 scale-150" />
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="relative z-10"
                  >
                    <Settings className="w-12 h-12 text-primary/30 group-hover:text-primary transition-colors duration-500 animate-spin-slow" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
