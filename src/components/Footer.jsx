import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060910] border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono text-cyan-400 font-bold text-xs">SN</span>
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalData.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Aspiring Software Developer passionate about algorithmic excellence, robust backend engineering, and verifiable applied AI.
            </p>

            <div className="text-xs font-mono text-slate-500">
              VIT-AP University · Integrated M.Tech Software Engineering (2022–2027)
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.email}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 hover:bg-cyan-900/60 transition-colors text-xs font-mono cursor-pointer ml-2"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-xs font-mono text-slate-500">
              Designed & Built for Placement Season
            </div>

          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <div>
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React · Vite · Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
