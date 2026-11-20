import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-950">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Placement Ready · VIT-AP University</span>
            </div>

            {/* Name */}
            <div>
              <p className="text-sm sm:text-base font-mono text-slate-400 tracking-wider uppercase mb-1">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                <span className="gradient-text">{personalData.name}</span>
              </h1>
            </div>

            {/* Headline */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-medium text-slate-300">
              <span className="text-cyan-400 font-semibold">Aspiring Software Developer</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-200">Java</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-200">Python</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-indigo-400 font-semibold">AI/ML Enthusiast</span>
            </div>

            {/* Short Bio */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Integrated M.Tech Software Engineering student at <span className="text-white font-medium">VIT-AP University</span>.
              Specialized in building practical, high-performance software solutions—from deterministic rule engines and <span className="text-cyan-300 font-medium">RAG recommendation pipelines</span> to real-time <span className="text-indigo-300 font-medium">YOLOv5 computer vision</span> and custom ORM tooling.
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CGPA 7.96 / 10</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-white transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons & Email */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Connect:</span>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalData.socials.email}
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              {/* Terminal Frame */}
              <div className="relative rounded-2xl bg-[#0b0f19] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080c14] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SaiNihas.profile.java</span>
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase">UTF-8</div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                  <p className="text-slate-500 italic">// Developer Candidate Model</p>
                  <p>
                    <span className="text-indigo-400 font-semibold">public record </span>
                    <span className="text-yellow-300 font-bold">SoftwareDeveloper</span>
                    <span className="text-slate-400">(</span>
                  </p>
                  
                  <div className="pl-4 space-y-1">
                    <p>
                      <span className="text-cyan-400">String</span> name = <span className="text-emerald-300">"{personalData.name}"</span>,
                    </p>
                    <p>
                      <span className="text-cyan-400">String</span> university = <span className="text-emerald-300">"VIT-AP University"</span>,
                    </p>
                    <p>
                      <span className="text-cyan-400">double</span> cgpa = <span className="text-amber-300 font-semibold">7.96</span>,
                    </p>
                    <p>
                      <span className="text-cyan-400">String[]</span> primaryStacks = <span className="text-slate-400">{"{"}</span>
                      <span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"SQL"</span>
                      <span className="text-slate-400">{"}"}</span>,
                    </p>
                    <p>
                      <span className="text-cyan-400">String[]</span> aiCapabilities = <span className="text-slate-400">{"{"}</span>
                      <span className="text-emerald-300">"YOLOv5"</span>, <span className="text-emerald-300">"PyTorch"</span>, <span className="text-emerald-300">"RAG"</span>, <span className="text-emerald-300">"XGBoost"</span>
                      <span className="text-slate-400">{"}"}</span>,
                    </p>
                    <p>
                      <span className="text-cyan-400">boolean</span> readyToBuild = <span className="text-amber-300 font-semibold">true</span>
                    </p>
                  </div>
                  
                  <p className="text-slate-400">) {"{"}</p>
                  <p className="pl-4">
                    <span className="text-indigo-400 font-semibold">public void </span>
                    <span className="text-yellow-300">deployImpact</span>() {"{"}
                  </p>
                  <p className="pl-8 text-emerald-300">
                    System.out.println(<span className="text-emerald-200">"Ready to create value in production."</span>);
                  </p>
                  <p className="pl-4 text-slate-400">{"}"}</p>
                  <p className="text-slate-400">{"}"}</p>
                </div>

                {/* Terminal Footer status */}
                <div className="px-4 py-2.5 bg-[#080c14]/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Status: Open for Internships</span>
                  </div>
                  <span className="text-cyan-400">Compiled · 0 Errors</span>
                </div>

              </div>
            </div>

            {/* Quick Stat Tiles Under Code */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {personalData.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-[11px] font-mono text-cyan-400">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
