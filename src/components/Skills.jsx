import React, { useState } from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Database, Code, Terminal, Layers, BookCheck } from 'lucide-react';
import { skillsData, personalData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Verified Skills', icon: ShieldCheck },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'core', label: 'Core CS Concepts', icon: BookCheck },
    { id: 'aiml', label: 'AI/ML & Vision', icon: Cpu },
    { id: 'tools', label: 'Tools & Ecosystem', icon: Layers }
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillsData.categories
    : skillsData.categories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#090d16]/70">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Experience-Verified Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Every technology listed below is backed by real coursework, public Git repositories, or published packages. No fluff, no unverified buzzwords.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all shadow-lg"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800/80 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40 w-fit">
                  {cat.skills.length} Verified Proficiencies
                </span>
              </div>

              {/* Individual Skill Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-[#0b101c] border border-slate-800/90 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {skill.context}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                      <span className="text-slate-500 text-[10px]">Sai Nihas</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Verification Guarantee Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Strict Authenticity Policy: Technologies displayed match actual GitHub codebases & official transcript records.</span>
          </div>
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 shrink-0"
          >
            Audit on GitHub &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
