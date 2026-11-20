import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Package, 
  Code2, 
  X,
  FileCode,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'systems', label: 'Systems & Full-Stack' }
  ];

  const filteredProjects = projectsData.filter(proj => {
    if (filter === 'all') return true;
    if (filter === 'ai') return proj.category.includes('AI');
    if (filter === 'systems') return proj.category.includes('Systems') || proj.category.includes('Full-Stack');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Public Open-Source Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Authentic, functional codebases directly linked to my GitHub profile. Highlighting verified software engineering, custom tooling, and intelligent architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Listing */}
        <div className="space-y-12">
          
          {/* Highlighted Flagship Project: Scheme Recommendation System */}
          {filteredProjects.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0b101c] border-2 border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-cyan-950/30 overflow-hidden group"
            >
              {/* Featured Badge Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-0" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded bg-slate-800/80 border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-cyan-400/90 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Architecture Breakdown Callout (Rule Engine + RAG Model) */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-2">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      Core Engineering Architecture
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-2.5 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-cyan-300 font-semibold block mb-0.5 font-mono">1. Rule-Based Engine</span>
                        <span className="text-slate-400">Strict JSON eligibility matching (age, income limit, social category, student status) without hallucinations.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-indigo-300 font-semibold block mb-0.5 font-mono">2. RAG & XGBoost Model</span>
                        <span className="text-slate-400">Local RAG contextual retrieval for chatbot queries + XGBoost recommendation classifier for user profile scoring.</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links & CTA */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer"
                    >
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span>View Key Features & Specs</span>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Architecture Spec Box */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl bg-[#090e1a] border border-slate-800 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>scheme_engine.json</span>
                      </span>
                      <span className="text-[10px] text-emerald-400">Deterministic Match</span>
                    </div>

                    <pre className="text-slate-300 text-[11px] overflow-x-auto leading-relaxed">
{`{
  "eligibilityRule": {
    "minAge": 18,
    "maxAge": 25,
    "incomeLimit": 300000,
    "categories": ["SC", "ST", "OBC"],
    "studentOnly": true
  },
  "retrievalEngine": "Local RAG Vectorizer",
  "mlRanker": "XGBoost Classifier",
  "locales": ["en", "hi", "te"],
  "exports": ["PDF Eligibility Report"]
}`}
                    </pre>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-2.5">
                    {project.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                        <div className="font-semibold text-white text-xs flex items-center gap-1.5 mb-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{hl.title}</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-normal pl-5">
                          {hl.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.filter(p => !p.featured).map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                      {project.npmPackage ? <Package className="w-3.5 h-3.5 text-cyan-400" /> : <Cpu className="w-3.5 h-3.5 text-indigo-400" />}
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Special Callouts for npm or Streamlit */}
                  {project.npmPackage && (
                    <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">npm registry package:</span>
                      <code className="text-emerald-400 font-semibold">{project.npmPackage}</code>
                    </div>
                  )}

                  {/* Highlights overview */}
                  <div className="space-y-2 pt-1">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-200">{h.title}:</strong> {h.detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80 gap-3">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Codebase</span>
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono cursor-pointer"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#0d1424] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Project Objective & Architecture
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.summary}
                </p>
                <div className="mt-3 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                  <span className="text-slate-500 block mb-1">Architecture Flow:</span>
                  {selectedProject.architecture}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Features
                </h4>
                <div className="space-y-3">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-xs font-semibold text-white mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                </a>

                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
