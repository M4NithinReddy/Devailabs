import React from 'react';
import { Globe, Share2 } from 'lucide-react';

const Footer = () => (
  <footer className="bg-background w-full border-t border-outline-variant/10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-screen-2xl mx-auto">
      <div className="md:col-span-1">
        <div className="text-lg font-bold text-on-surface mb-4 font-headline">Dev AI Labs</div>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
          © 2024 Dev AI Labs. The Stratified Intelligence Architecture.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-label text-[10px] uppercase tracking-widest text-primary">Platform</span>
        <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Products</a>
        <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">API Documentation</a>
        <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-label text-[10px] uppercase tracking-widest text-primary">Company</span>
        <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
        <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Status</a>
        <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-label text-[10px] uppercase tracking-widest text-primary">Connect</span>
        <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <div className="flex gap-4 mt-2">
          <Globe className="w-5 h-5 text-on-surface-variant hover:text-primary cursor-pointer" />
          <Share2 className="w-5 h-5 text-on-surface-variant hover:text-primary cursor-pointer" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
