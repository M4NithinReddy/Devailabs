import React from 'react';
import { motion } from 'motion/react';

const Process = () => (
  <section className="py-32 px-6 bg-surface">
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-fit mx-auto text-center mb-20 group">
        <h2 className="font-headline text-4xl font-bold mb-2">Implementation Process</h2>
        <div className="flex justify-center">
          <div className="relative h-4 w-full overflow-hidden">
            <svg viewBox="0 0 200 20" className="w-full h-full text-primary fill-none stroke-current stroke-2">
              <motion.path
                animate={{ 
                  d: [
                    "M 0 10 Q 25 8, 50 10 T 100 10 T 150 10 T 200 10",
                    "M 0 10 Q 25 12, 50 10 T 100 10 T 150 10 T 200 10",
                    "M 0 10 Q 25 8, 50 10 T 100 10 T 150 10 T 200 10"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                d="M 0 10 Q 25 8, 50 10 T 100 10 T 150 10 T 200 10"
              />
            </svg>
          </div>
        </div>
        <p className="text-on-surface-variant mt-4">Precision-engineered deployment from first meeting to full scale.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-10"></div>
        {[
          { id: "01", title: "Discovery", desc: "Identifying core needs and architectural gaps." },
          { id: "02", title: "Audit", desc: "Comprehensive data and security infrastructure review." },
          { id: "03", title: "Configuration", desc: "Customizing the 4 layers to your specific operational scale." },
          { id: "04", title: "Integration", desc: "Seamless API and middleware connection to your stack." },
          { id: "05", title: "Monitoring", desc: "Continuous AI optimization and performance reporting." }
        ].map((step, i) => (
          <div key={i} className="flex-1 text-center group">
            <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center font-headline text-xl font-bold mx-auto mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all text-primary">
              {step.id}
            </div>
            <h5 className="font-headline font-bold mb-2">{step.title}</h5>
            <p className="text-on-surface-variant text-sm px-4">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
