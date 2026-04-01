import React, { useState } from 'react';
import { Lightbulb, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('platform');

  const navLinks = [
    { name: 'Platform', href: '#top', id: 'platform' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Use Cases', href: '#use-cases', id: 'use-cases' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActiveTab('platform'); window.scrollTo(0, 0); }}>
          <Lightbulb className="w-6 h-6 text-primary fill-primary drop-shadow-[0_0_8px_rgba(255,193,7,0.5)]" />
          <div className="text-xl font-black text-on-surface tracking-tighter font-headline">Dev AI Labs</div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveTab(link.id)}
              className={`relative py-1 transition-all duration-300 ${
                activeTab === link.id 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(255,193,7,0.4)]' 
                  : 'text-on-surface/70 hover:text-on-surface'
              }`}
            >
              {link.name}
              {activeTab === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full shadow-[0_0_8px_#ffc107]"></span>
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenModal('demo')}
            className="hidden md:block primary-gradient text-on-primary px-6 py-2 rounded-md font-bold text-sm tracking-tight active:scale-95 transition-all shadow-[0_0_15px_rgba(255,193,7,0.2)] hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            Request Demo
          </button>
          <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-outline-variant/10 px-6 py-8 flex flex-col gap-6 font-headline font-bold">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => { setActiveTab(link.id); setIsOpen(false); }}
              className={`transition-all duration-300 ${
                activeTab === link.id 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(255,193,7,0.4)] block border-l-2 border-primary pl-3' 
                  : 'text-on-surface/70 pl-3'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { onOpenModal('demo'); setIsOpen(false); }}
            className="primary-gradient text-on-primary px-6 py-3 rounded-md font-bold text-sm mt-4 shadow-[0_0_15px_rgba(255,193,7,0.2)]"
          >
            Request Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
