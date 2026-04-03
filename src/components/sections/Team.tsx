import React, { useState } from 'react';
import { motion } from 'motion/react';

import devProfile from '../../assets/dev-profile.png';
import preethamProfile from '../../assets/preetham-profile.png';
import vamsiProfile from '../../assets/vamsi-profile.png';
import poorvekProfile from '../../assets/poorvek-profile.png';
import kamalaProfile from '../../assets/kamala-profile.png';

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeBioIndex, setActiveBioIndex] = useState<number | null>(null);

  const members = [
    {
      name: "Dev",
      role: "Founding Partner",
      img: devProfile,
      bio: "Founding Partner with 20+ years of expertise in stratified AI architecture and neural system orchestration. Architect of the core intelligence layers at Dev AI Labs.",
      color: "from-primary/20 via-primary/40 to-primary/20"
    },
    {
      name: "Preetham",
      role: "CTO",
      img: preethamProfile,
      bio: "Chief Technology Officer specializing in distributed computing and high-throughput data infrastructure. Former lead architect for global financial analytics systems.",
      color: "from-indigo-500/20 via-indigo-500/40 to-indigo-500/20"
    },
    {
      name: "Vamsi",
      role: "AI Lead",
      img: vamsiProfile,
      bio: "AI Lead with a PhD in deep reinforcement learning. Pioneering autonomous flight simulations and real-time decision models for the UAV sector.",
      color: "from-cyan-500/20 via-cyan-500/40 to-cyan-500/20"
    },
    {
      name: "Poorvek",
      role: "Growth",
      img: poorvekProfile,
      bio: "Head of Growth focused on B2B strategic expansion. Expert in scaling enterprise AI across aerospace, defense, and global logistics markets.",
      color: "from-emerald-500/20 via-emerald-500/40 to-emerald-500/20"
    },
    {
      name: "Kamala",
      role: "Product Strategy",
      img: kamalaProfile,
      bio: "Product Strategy lead bridging deep tech with human-centric interfaces. Transforming complex cognitive engines into intuitive business solutions.",
      color: "from-tertiary/20 via-tertiary/40 to-tertiary/20"
    }
  ];

  return (
    <section id="team" className="py-32 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-fit mx-auto text-center mb-20 group">
          <h2 className="font-headline text-4xl font-bold mb-2">The People Building This</h2>
          <div className="flex justify-center mb-6">
            <div className="relative h-4 w-full overflow-hidden">
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
          <p className="text-primary font-medium tracking-wide animate-pulse">Hover or click a name to reveal the architect and their technical background.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {members.map((member, i) => (
            <div
              key={i}
              className="text-center group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={false}
                animate={{
                  height: (hoveredIndex === i || activeBioIndex === i) ? "auto" : 0,
                  opacity: (hoveredIndex === i || activeBioIndex === i) ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mb-0 cursor-pointer"
                onClick={() => setActiveBioIndex(activeBioIndex === i ? null : i)}
              >
                <div className="aspect-square rounded-xl bg-surface mb-4 overflow-hidden border border-primary/20 relative shadow-2xl">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center 20%' }}
                    src={member.img}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: activeBioIndex === i || hoveredIndex === i ? "auto" : 0, opacity: activeBioIndex === i || hoveredIndex === i ? 1 : 0 }}
                  className="overflow-hidden mb-6"
                >
                  <p className="text-on-surface-variant text-xs leading-relaxed text-left border-l-2 border-primary/30 pl-3">
                    {member.bio}
                  </p>
                </motion.div>

              </motion.div>
              <div className="relative pt-4 flex flex-col items-center group/name">
                {/* Pulsing Aurora Glow Backdrop */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-28 aurora-glow animate-pulse-glow transition-opacity duration-1000 ${(hoveredIndex === i || activeBioIndex === i) ? 'opacity-100' : 'opacity-30'}`} />

                {/* Editorial Background Number */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.1] transition-all duration-1000 group-hover:-translate-y-2">
                  0{i + 1}
                </span>

                <div className="relative z-10 w-full px-2 mt-8">
                  <div
                    className={`relative py-4 px-6 rounded-2xl border transition-all duration-700 cursor-pointer overflow-hidden backdrop-blur-xl shadow-2xl ${(hoveredIndex === i || activeBioIndex === i) ? 'border-primary/60 shadow-[0_0_50px_rgba(255,193,7,0.4)] bg-surface-high/90 scale-105' : 'border-white/10 hover:border-white/20 bg-surface/30'}`}
                  >
                    {/* Unique Background Color Layer */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} transition-opacity duration-700 ${(hoveredIndex === i || activeBioIndex === i) ? 'opacity-100' : 'opacity-40'}`} />

                    {/* Animated Shimmer Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/name:animate-[shimmer_2s_infinite] transition-opacity duration-500 ${(hoveredIndex === i || activeBioIndex === i) ? 'opacity-100' : 'opacity-0'}`} />

                    <h3
                      className={`flex flex-col items-center justify-center gap-1 font-headline tracking-[0.3em] text-xl md:text-2xl font-black transition-all duration-500 relative z-10 ${(hoveredIndex === i || activeBioIndex === i) ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary drop-shadow-[0_0_10px_rgba(255,193,7,0.3)]' : 'text-white/90'}`}
                    >
                      <span>{member.name.toUpperCase()}</span>
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-white/20 text-[10px] font-label mt-5 uppercase tracking-[0.4em] font-black group-hover:text-primary transition-colors duration-500 relative z-10">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
