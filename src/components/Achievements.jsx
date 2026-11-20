import React from 'react';
import { Award, Trophy, Package, CheckCircle2, Edit3, Sparkles, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const verifiedList = achievementsData.filter(item => item.type === 'verified');
  const placeholderList = achievementsData.filter(item => item.type === 'placeholder');

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Milestones & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified academic milestones and open-source contributions, paired with designated editable slots for industry certifications.
          </p>
        </div>

        {/* Verified Achievements Grid */}
        <div className="mb-14">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Verified Honors & Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedList.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                      {item.category.includes('Open Source') ? (
                        <Package className="w-5 h-5" />
                      ) : (
                        <Trophy className="w-5 h-5 text-amber-400" />
                      )}
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {item.year}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">{item.organization}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Coding Profiles (With Editable Placeholders) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800/80 gap-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Certifications & Coding Profiles (Customizable Slots)</span>
            </h3>
            <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-800/40 w-fit flex items-center gap-1">
              <Edit3 className="w-3 h-3" />
              <span>Easily editable in portfolioData.js</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placeholderList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-dashed border-slate-700 hover:border-cyan-500/60 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-lg bg-slate-800/80 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <Award className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/50 flex items-center gap-1">
                    <Edit3 className="w-3 h-3" />
                    <span>Editable Placeholder</span>
                  </span>
                </div>

                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{item.organization}</span>
                  <span className="text-cyan-400 font-mono">Ready to link</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
