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
      bio: "Founding Partner with 20+ years of expertise in stratified AI architecture and neural system orchestration. Architect of the core intelligence layers at Dev AI Labs."
    },
    {
      name: "Preetham",
      role: "CTO",
      img: preethamProfile,
      bio: "Chief Technology Officer specializing in distributed computing and high-throughput data infrastructure. Former lead architect for global financial analytics systems."
    },
    {
      name: "Vamsi",
      role: "AI Lead",
      img: vamsiProfile,
      bio: "AI Lead with a PhD in deep reinforcement learning. Pioneering autonomous flight simulations and real-time decision models for the UAV sector."
    },
    {
      name: "Poorvek",
      role: "Growth",
      img: poorvekProfile,
      bio: "Head of Growth focused on B2B strategic expansion. Expert in scaling enterprise AI across aerospace, defense, and global logistics markets."
    },
    {
      name: "Kamala",
      role: "Product Strategy",
      img: kamalaProfile,
      bio: "Product Strategy lead bridging deep tech with human-centric interfaces. Transforming complex cognitive engines into intuitive business solutions."
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
          <p className="text-on-surface-variant">Hover a name to reveal photo. Click photo for professional background.</p>
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
                <div className="aspect-square rounded-xl bg-surface mb-6 overflow-hidden border border-primary/20 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center 30%' }}
                    src={member.img}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                  />
                  {activeBioIndex === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/95 p-4 flex items-center justify-center text-center z-10"
                    >
                      <p className="text-on-primary text-xs font-medium leading-relaxed">
                        {member.bio}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <h6
                className={`font-headline font-bold cursor-pointer transition-colors mt-2 ${(hoveredIndex === i || activeBioIndex === i) ? 'text-primary' : 'hover:text-primary'}`}
              >
                {member.name}
              </h6>
              <p className="text-primary text-[10px] font-label mt-1 uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
