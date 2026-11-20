import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink } from 'lucide-react';
import { personalData, educationData, projectsData, skillsData, aboutData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const plainTextResume = `=====================================================
PERAKAM SAI NIHAS
Nellore, Andhra Pradesh, India
Phone: ${personalData.phone} | Email: ${personalData.email}
GitHub: ${personalData.socials.github} | LinkedIn: ${personalData.socials.linkedin}
=====================================================

PROFILE
Integrated M.Tech Software Engineering student at VIT-AP University with a strong foundation in Java, Python, SQL, and modern software architectures. Experienced in building full-stack web applications and machine learning projects with verifiable real-world impact.

EDUCATION
1. VIT-AP University, Amaravati (2022 – 2027)
   Integrated M.Tech (Software Engineering) — Full-time — CGPA: 7.96 / 10
2. Sri Chaitanya Junior College (2020 – 2022)
   Intermediate (MPC) — Board of Intermediate Education, AP — 77.7%
3. Zilla Praja Parishad Oriented School (2019 – 2020)
   SSC — Board of Secondary Education, AP — 99%

TECHNICAL SKILLS
- Languages: Java, Python, TypeScript, JavaScript, SQL
- Database: MySQL, PostgreSQL
- Core Subjects: Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Operating Systems (OS), Computer Networks (CN), Software Engineering
- AI / ML & Vision: YOLOv5 (PyTorch), XGBoost, Computer Vision (OpenCV), RAG (Retrieval-Augmented Generation), Streamlit
- Tools: Git, GitHub, VS Code, Eclipse, Vite, npm, Supabase, Vercel

PROJECTS
1. AI-Based Government Scheme Recommendation System
   - Multi-step eligibility web platform matching citizen demographics against JSON rules deterministically.
   - Integrated an XGBoost recommendation model and local RAG retrieval for chatbot interactions.
   - Built with React 19, TypeScript, Vite, Tailwind CSS, supporting English, Hindi, and Telugu with voice input.
   - GitHub: https://github.com/sainihas2004/AI-Based-Scheme-Recommandation-System

2. YOLOv5 Real-Time Object Detection System
   - Real-time object detection across image, video, and live webcam feeds using PyTorch and YOLOv5s.
   - Created an interactive Streamlit UI with Pandas detection confidence tables and processed video exports.
   - GitHub: https://github.com/sainihas2004/yolov5-object-detection

3. Lightweight TypeScript ORM & Full-Stack System
   - Custom TypeScript ORM package published on npm: @sai_nihas/lightweight-orm
   - Full-stack monorepo featuring Node.js/Express, React, and PostgreSQL.
   - GitHub: https://github.com/sainihas2004/lightweight-orm-project
   - Live Demo: https://lightweight-orm-project-todo-fronte.vercel.app/

SOFT SKILLS
- Problem Solving, Self-Learning, Team Collaboration, Technical Communication, Analytical Thinking.
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - Perakam Sai Nihas</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #111; padding: 30px; max-width: 800px; margin: auto; }
            h1 { margin-bottom: 2px; text-transform: uppercase; font-size: 24px; }
            .contact { font-size: 13px; color: #444; margin-bottom: 20px; border-bottom: 2px solid #222; padding-bottom: 10px; }
            h2 { font-size: 15px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 20px; margin-bottom: 8px; color: #111; }
            .item { margin-bottom: 12px; }
            .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; }
            .item-sub { font-style: italic; font-size: 13px; color: #444; }
            ul { margin-top: 4px; margin-bottom: 4px; padding-left: 20px; font-size: 13px; }
            li { margin-bottom: 3px; }
            .skills-line { font-size: 13px; margin-bottom: 4px; }
          </style>
        </head>
        <body>
          <h1>PERAKAM SAI NIHAS</h1>
          <div class="contact">
            Nellore, Andhra Pradesh | Phone: ${personalData.phone} | Email: ${personalData.email} <br/>
            GitHub: ${personalData.socials.github} | LinkedIn: ${personalData.socials.linkedin}
          </div>

          <h2>Profile</h2>
          <p style="font-size: 13px;">Integrated M.Tech Software Engineering student with a strong foundation in Java, SQL, and software development. Experienced in building full-stack web platforms and machine learning applications with verifiable real-world impact.</p>

          <h2>Education</h2>
          <div class="item">
            <div class="item-header"><span>VIT-AP University, Amaravati</span><span>2022 – 2027</span></div>
            <div class="item-sub">Integrated M.Tech (Software Engineering) — Full-time — CGPA: 7.96 / 10</div>
          </div>
          <div class="item">
            <div class="item-header"><span>Sri Chaitanya Junior College</span><span>2020 – 2022</span></div>
            <div class="item-sub">Intermediate (MPC) — Board of Intermediate Education, Andhra Pradesh — 77.7%</div>
          </div>
          <div class="item">
            <div class="item-header"><span>Zilla Praja Parishad Oriented School</span><span>2019 – 2020</span></div>
            <div class="item-sub">SSC — Board of Secondary Education, Andhra Pradesh — 99%</div>
          </div>

          <h2>Technical Skills</h2>
          <div class="skills-line"><strong>Languages:</strong> Java, Python, TypeScript, JavaScript, SQL</div>
          <div class="skills-line"><strong>Databases:</strong> MySQL, PostgreSQL</div>
          <div class="skills-line"><strong>Core Subjects:</strong> OOP, DSA, DBMS, Operating Systems, Computer Networks, Software Engineering</div>
          <div class="skills-line"><strong>AI/ML:</strong> YOLOv5, PyTorch, Streamlit, XGBoost, Computer Vision (OpenCV), RAG</div>
          <div class="skills-line"><strong>Tools:</strong> Git, GitHub, VS Code, Eclipse, npm, Vite, Supabase, Vercel</div>

          <h2>Projects</h2>
          <div class="item">
            <div class="item-header"><span>AI-Based Government Scheme Recommendation System</span></div>
            <ul>
              <li>Developed an AI-based application helping users identify welfare schemes based on personal eligibility criteria.</li>
              <li>Engineered a deterministic Rule-Based Engine using structured JSON rules to eliminate hallucinations.</li>
              <li>Integrated XGBoost recommendation model and local RAG retrieval for context-grounded chatbot interactions.</li>
              <li>Built multi-step wizard supporting English, Hindi, and Telugu, voice input, and PDF reports.</li>
            </ul>
          </div>
          <div class="item">
            <div class="item-header"><span>YOLOv5 Real-Time Object Detection System</span></div>
            <ul>
              <li>Built real-time computer vision system using YOLOv5 and PyTorch across image, video, and live webcam feeds.</li>
              <li>Implemented Streamlit UI with bounding box visualizations and Pandas-backed detection confidence tables.</li>
            </ul>
          </div>
          <div class="item">
            <div class="item-header"><span>Lightweight TypeScript ORM & Full-Stack System</span></div>
            <ul>
              <li>Developed custom TypeScript ORM package published on npm (@sai_nihas/lightweight-orm) for PostgreSQL databases.</li>
              <li>Built and deployed full-stack monorepo featuring Node.js, Express, React, and PostgreSQL on Vercel.</li>
            </ul>
          </div>

          <h2>Soft Skills</h2>
          <p style="font-size: 13px;">Problem Solving, Self-Learning, Team Collaboration, Technical Communication, Analytical Thinking.</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([plainTextResume], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Perakam_Sai_Nihas_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-[#0b0f19] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c14] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Resume Preview — {personalData.name}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Placement Ready · Software Engineering · VIT-AP University
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3 bg-[#0d1322] border-b border-slate-800/80 gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Text (.txt)</span>
            </button>
          </div>

          <button
            onClick={handleCopyText}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 hover:bg-cyan-900/50 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Plaintext</span>
              </>
            )}
          </button>
        </div>

        {/* Modal Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed bg-[#0b0f19]">
          
          {/* Header Info */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-1">
            <h1 className="text-2xl font-extrabold text-white tracking-wide">
              {personalData.name}
            </h1>
            <p className="text-xs font-mono text-cyan-400">
              Nellore, Andhra Pradesh · {personalData.phone} · {personalData.email}
            </p>
            <div className="flex justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 underline">
                GitHub: sainihas2004
              </a>
              <span>•</span>
              <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 underline">
                LinkedIn: Perakam Sai Nihas
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Integrated M.Tech Software Engineering student with a strong foundation in Java, SQL, and software development. Interested in building practical software solutions and applying programming and problem-solving skills to real-world applications. Experienced in developing academic projects involving web development and machine learning applications.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="text-xs sm:text-sm">
                <div className="flex justify-between font-semibold text-white">
                  <span>{edu.institution}</span>
                  <span className="font-mono text-slate-400">{edu.period}</span>
                </div>
                <div className="text-slate-300 flex justify-between">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-emerald-400 font-medium">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              <p><strong className="text-white">Languages:</strong> Java, Python, TypeScript, JavaScript, SQL</p>
              <p><strong className="text-white">Databases:</strong> MySQL, PostgreSQL</p>
              <p><strong className="text-white">Core Subjects:</strong> OOP, Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering</p>
              <p><strong className="text-white">AI / ML & Vision:</strong> YOLOv5, PyTorch, Streamlit, XGBoost, Computer Vision (OpenCV), RAG</p>
              <p><strong className="text-white">Tools:</strong> Git, GitHub, VS Code, Eclipse, Vite, npm, Supabase, Vercel</p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              Featured Projects
            </h2>
            
            {projectsData.map((proj, pIdx) => (
              <div key={pIdx} className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between font-semibold text-white">
                  <span>{proj.title}</span>
                  <span className="font-mono text-cyan-400 text-xs">{proj.techStack.slice(0, 3).join(', ')}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>
                      <strong className="text-slate-200">{h.title}:</strong> {h.detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              Soft Skills
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Problem Solving, Self-Learning, Team Collaboration, Technical Communication, Analytical Thinking.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
