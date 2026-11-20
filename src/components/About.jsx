import React from 'react';
import { Server, Cpu, Layout, Terminal, CheckCircle2, UserCheck, Code, BookOpen } from 'lucide-react';
import { aboutData, personalData } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Server: Server,
    Cpu: Cpu,
    Layout: Layout,
    Terminal: Terminal
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineering foundation grounded in computer science principles, with hands-on development in full-stack architecture and applied machine learning.
          </p>
        </div>

        {/* Top Story & Recruiter Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                Software Engineering Aspirations
              </h3>
              {aboutData.summary.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Education Callout */}
            <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-800/40 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-cyan-900/40 text-cyan-300 shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">VIT-AP University, Amaravati</span>
                <p className="text-slate-300 mt-0.5">
                  Pursuing 5-Year Integrated M.Tech in Software Engineering (2022–2027) with a cumulative CGPA of <strong className="text-cyan-300">7.96 / 10</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar / Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800/90 shadow-xl space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                Recruiter Snapshot
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-slate-800 text-sm">
                  <span className="text-slate-400">Degree Focus</span>
                  <span className="text-white font-medium">Software Engineering</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800 text-sm">
                  <span className="text-slate-400">Primary Languages</span>
                  <span className="text-cyan-300 font-mono font-medium">Java, Python, SQL</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800 text-sm">
                  <span className="text-slate-400">AI / ML Toolkit</span>
                  <span className="text-slate-200 font-mono text-xs">YOLOv5, PyTorch, RAG, XGBoost</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800 text-sm">
                  <span className="text-slate-400">Current Standing</span>
                  <span className="text-emerald-400 font-semibold">Pre-Final Year (2022-2027)</span>
                </div>
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-slate-400">Target Roles</span>
                  <span className="text-cyan-300 font-medium">SDE Intern / Graduate Developer</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>Discuss Opportunities</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Competency Pillars */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
            <Code className="w-5 h-5 text-cyan-400" />
            <span>Technical Pillars & Disciplines</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutData.pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || Terminal;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified in Projects</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills & Work Ethic */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <h3 className="text-base font-bold text-white mb-4 font-mono text-slate-300">
            Soft Skills & Engineering Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutData.softSkills.map((skill, index) => (
              <div key={index} className="p-4 rounded-xl bg-[#0c121e] border border-slate-800">
                <div className="text-sm font-semibold text-cyan-300 mb-1">
                  {skill.name}
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
