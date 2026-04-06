import React, { useState } from 'react';
import { Lightbulb, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const element = document.getElementById(targetId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
        <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-primary fill-primary" />
            <div className="text-xl font-black text-on-surface tracking-tighter font-headline">Dev AI Labs</div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#top')}>Platform</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#products')}>Products</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#use-cases')}>Use Cases</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#team')}>Team</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
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
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#top')}>Platform</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#products')}>Products</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#use-cases')}>Use Cases</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#team')}>Team</a>
            <a className="text-on-surface/70 hover:text-primary focus:underline focus:underline-offset-4 transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            <button
              onClick={() => { onOpenModal('demo'); setIsOpen(false); }}
              className="primary-gradient text-on-primary px-6 py-3 rounded-md font-bold text-sm"
            >
              Request Demo
            </button>
          </div>
        )}
      </header>

      {/* Full Screen Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[1000] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300">
          <Lightbulb className="w-16 h-16 text-primary fill-primary animate-pulse drop-shadow-[0_0_15px_rgba(255,193,7,0.5)]" />
          <div className="mt-8 text-xl font-bold font-headline text-primary tracking-widest animate-pulse">LOADING</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
