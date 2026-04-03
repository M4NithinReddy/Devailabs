import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Video, Building2, Rotate3D } from 'lucide-react';

const UseCases = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const cases: Array<{id: string, title: string, desc: string, details: string, img?: string, icon?: any}> = [
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
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGX_7eCTd-_CXTeFhMQdVkVOHzsd6fuFbds5WTLY2BSIN96wjM61NgNVBv1DB744NHnMejuirTyhrJtHQaJ5SdkWqut2fKRFfI2_CoS72eqtnsRsMDJbqfzaKqtMemUY6Eq_qXtJLVLxeXEviIDzMS4jayRkmUNIQqDYSVyzX7RIbk_t0ZwTVZzRPZ83fpU3nZXPe2sIOr_e1WAvARbsivP2VZHN5wbAht1HGqALTbaU6ZonJBLf2HZ6XZtN9_fFdeCFB49gPipqUu"
    },
    {
      id: "sim",
      title: "Simulation",
      desc: "Large-scale digital twins and predictive modeling.",
      details: "Industrial-grade digital twin architecture that models physical assets with millimeter precision to stress test structural integrity and maintenance cycles.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvvYZtZhQmZGcbR8p8wgyG5AqpTtZlqBrYFlKz0d5QOxmDe5a9LDXrTrsvFyqjhRlzS9BiOOtvjBrfXq7TYnDbwAMEVLLjIQg_g0_q5shuEOYr01oD5F2mFbF0HTU2n2xxsNQbwH8x2_Y7HJVU0jJZbaeQ0RW47HyopHU71pvV8UjFl_H6wAFuElpAjQrsfggV5siD3k8kAFryJJxNcKNV4QLzJHioAQenTEQq294nc9X_N3Za57LVaNNzxcAy7YVhsmjsT4mTw39a"
    },
    {
      id: "media",
      title: "Media",
      desc: "Automated editing and content metadata tagging.",
      details: "Generative AI pipelines for storyboarding, scene composition, and dynamic color grading to transform concepts into cinema-quality visual sequences.",
      img: "/images/media_indian.png"
    },
    {
      id: "b2b",
      title: "B2B",
      desc: "Enterprise resource optimization and logistics.",
      details: "Strategic intelligence for high-ticket corporate ecosystems, automating complex contract analysis and global market sentiment tracking.",
      img: "/images/b2b_indian.png"
    },
    {
      id: "3d",
      title: "3D Visualisation",
      desc: "Advanced rendering for geospatial analysis.",
      details: "Ultra-high-resolution spatial rendering featuring real-time ray tracing and interactive AR/VR endpoints to visualize complex 3D data structures.",
      img: "/images/3d_indian.png"
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
              {item.img ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={item.img}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-surface-high flex flex-col items-center justify-center p-12 text-center">
                  <item.icon className="w-16 h-16 text-primary mb-6 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
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
