import React, { useState } from 'react';
import { Lightbulb, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-primary fill-primary" />
          <div className="text-xl font-black text-on-surface tracking-tighter font-headline">Dev AI Labs</div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#top">Platform</a>
          <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#products">Products</a>
          <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#use-cases">Use Cases</a>
          <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#team">Team</a>
          <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenModal('demo')}
            className="hidden md:block primary-gradient text-on-primary px-6 py-2 rounded-md font-bold text-sm tracking-tight active:scale-95 transition-all"
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
          <a className="text-on-surface/70" href="#top" onClick={() => setIsOpen(false)}>Platform</a>
          <a className="text-on-surface/70" href="#products" onClick={() => setIsOpen(false)}>Products</a>
          <a className="text-on-surface/70" href="#use-cases" onClick={() => setIsOpen(false)}>Use Cases</a>
          <a className="text-on-surface/70" href="#team" onClick={() => setIsOpen(false)}>Team</a>
          <a className="text-on-surface/70" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <button
            onClick={() => { onOpenModal('demo'); setIsOpen(false); }}
            className="primary-gradient text-on-primary px-6 py-3 rounded-md font-bold text-sm"
          >
            Request Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
