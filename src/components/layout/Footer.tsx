import React from 'react';
import { Lightbulb } from 'lucide-react';

const Footer = () => (
  <footer className="bg-background w-full border-t border-outline-variant/10">
    <div className="max-w-screen-2xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Lightbulb className="w-10 h-10 text-primary fill-primary" />
            <h3 className="text-2xl font-black text-on-surface tracking-tighter font-headline uppercase leading-none">Dev AI Labs</h3>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">The Intelligence Behind The Platform</span>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-[280px]">
              An AI platform company headquartered in Hyderabad, India, with roots in Singapore since 2008.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-6">
          <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Products</h4>
          <div className="flex flex-col gap-3">
            {[
              { name: 'Dev AI Voice', id: 'prod-voice' },
              { name: 'Dev AI Chat', id: 'prod-chat' },
              { name: 'Dev AI Sales', id: 'prod-sales' },
              { name: 'Dev AI Marketing', id: 'prod-marketing' },
              { name: 'Dev AI Insight', id: 'prod-insight' },
              { name: 'Dev AI Automate', id: 'prod-automate' }
            ].map((item) => (
              <a key={item.id} className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href={`#${item.id}`}>{item.name}</a>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="flex flex-col gap-6">
          <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Our Brands</h4>
          <div className="flex flex-col gap-3">
            {[
              { name: 'IPage UMS', link: 'https://ipageums.com/' },
              { name: 'India Drone Academy', link: 'https://indiadroneacademy.com/' },
              { name: 'IPage Drone Simulator', link: 'https://www.dronesimulator.pro/' },
              { name: 'IPage Vision', link: 'https://www.ipagevision.com/' },
              { name: 'DroneTV', link: 'https://www.dronetv.in/' },
              { name: 'VirelBiz', link: 'https://vixelbiz.com/' }
            ].map((item) => (
              <a 
                key={item.name} 
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Contact</h4>
          <div className="flex flex-col gap-3">
            <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="mailto:hello@devailabs.in">hello@devailabs.in</a>
            <span className="font-body text-sm text-on-surface-variant cursor-default">Hyderabad, India</span>
            <span className="font-body text-sm text-on-surface-variant cursor-default">Singapore</span>
            <div className="mt-4 flex flex-col gap-3">
              <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Request a Demo</a>
              <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Partner With Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
          © 2025 Dev AI Labs. All rights reserved.
        </p>
        <p className="font-body text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
          Incorporated in Singapore — Est. 2008
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
