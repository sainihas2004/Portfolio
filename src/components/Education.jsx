import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#090d16]/70">
      
      {/* Ambient decorative blur */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified academic trajectory highlighting formal education in software engineering, physical sciences, and mathematics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500/40 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Badge on Center Line */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b101c] border-2 border-cyan-400 items-center justify-center text-cyan-400 z-10 shadow-lg shadow-cyan-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-cyan-500/40 transition-all shadow-xl space-y-4">
                      
                      {/* Card Header */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                            <Calendar className="w-3 h-3" />
                            {edu.period}
                          </span>
                          <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                            {edu.score}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {edu.institution}
                        </h3>
                        <p className="text-sm font-medium text-cyan-300/90 mt-0.5">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {edu.status}
                        </p>
                      </div>

                      {/* Coursework & Highlights */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        {edu.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Education verification note */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs font-mono text-slate-400">
          <span>Official transcripts and semester marksheets available upon recruiter verification request.</span>
        </div>

      </div>
    </section>
  );
}
