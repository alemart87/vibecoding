export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Animated Scan Lines */}
      <div className="fixed inset-0 scanlines pointer-events-none"></div>
      
      {/* Header */}
      <header className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-mono font-bold tracking-wider">
            VIBE_CODING_WITH_<span className="rafa-name-tech">RAFA</span>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title with RAFA highlight */}
          <div className="text-center mb-20">
            <div className="mb-12">
              <div className="rafa-hero-container-tech">
                <h2 className="rafa-hero-text-tech">
                  <span className="rafa-tech-text glitch" data-text="RAFA">RAFA</span>
                </h2>
                <div className="rafa-grid-overlay"></div>
                <div className="rafa-terminal-lines">
                  <div className="terminal-line">$ cd /vibe-coding</div>
                  <div className="terminal-line">$ git init</div>
                  <div className="terminal-line">$ ./build.sh</div>
                </div>
              </div>
              <p className="text-xl md:text-2xl font-mono mt-6 text-gray-400 tracking-wider">
                {'>'} Full-Stack Development Guide
              </p>
            </div>
            <div className="border-t border-b border-white/10 py-8">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-white tracking-tight">
                Learn Full-Stack Development
              </h2>
              <p className="text-lg md:text-xl font-mono text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Master modern web development using Cursor AI to build scalable, production-ready applications
              </p>
            </div>
          </div>

          {/* What We're Building Section */}
          <section className="mb-16">
            <div className="bg-black border border-white/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-8 text-white tracking-wider border-b border-white/10 pb-4">
                {'>'} WHAT_WE_ARE_BUILDING
              </h3>
              <div className="space-y-6 text-gray-300 font-mono">
                <p className="text-base md:text-lg leading-relaxed">
                  This repository is a practical guide to learning how to use <span className="text-white font-bold">Cursor AI</span> as a development assistant by building a modern full-stack project. We'll create a complete application using <span className="text-white font-bold">Next.js</span> for the frontend and <span className="text-white font-bold">Python Flask</span> for the backend, following a professional modular architecture.
                </p>
                
                <div className="mt-8 border-l-2 border-white/20 pl-6">
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-white">
                    {'>'} WHAT_YOU_WILL_LEARN:
                  </h4>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-white mr-3">{'>'}</span>
                      <span>How to structure a full-stack project with AI assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">{'>'}</span>
                      <span>Professional modular architecture with models, services, utils, and routes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">{'>'}</span>
                      <span>Modern frontend development with Next.js, TypeScript, and Tailwind CSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">{'>'}</span>
                      <span>RESTful API development with Flask and SQLAlchemy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">{'>'}</span>
                      <span>Database management from SQLite to PostgreSQL</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">{'>'}</span>
                      <span>Best practices for environment variables and configuration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3">{'>'}</span>
                      <span>Version control and deployment strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-white/5 border border-white/10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-white"></div>
                  <p className="text-white leading-relaxed text-sm md:text-base">
                    <span className="text-white font-bold">{'>'} PERFECT_FOR:</span> Developers who want to leverage AI tools to accelerate their learning and build clean, scalable, production-ready applications. Whether you're a beginner or experienced developer, this guide will help you master modern development workflows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-mono font-bold mb-8 text-center text-white tracking-wider border-b border-white/10 pb-4">
              {'>'} TECH_STACK
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Next.js",
                "TypeScript",
                "Flask",
                "Python",
                "SQLAlchemy",
                "Tailwind CSS",
                "SQLite",
                "PostgreSQL",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-white/10 p-4 text-center hover:border-white/30 transition-all group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 left-0 w-full h-px bg-white/20 group-hover:bg-white transition-colors"></div>
                  <p className="text-sm font-mono text-white relative z-10 tracking-wider">{tech}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-black border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            
            <h3 className="text-2xl md:text-3xl font-mono font-bold mb-6 text-center text-white tracking-wider">
              {'>'} GET_IN_TOUCH
            </h3>
            <p className="text-center mb-8 text-gray-400 font-mono">
              Have questions or want to collaborate? Reach out to us!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+595994132806"
                className="flex items-center gap-3 bg-black border border-white/20 hover:border-white hover:bg-white/5 px-6 py-4 transition-all group font-mono relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg
                  className="w-5 h-5 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white relative z-10 tracking-wider">+595 994 132 806</span>
              </a>
              <a
                href="mailto:ia@marketlabs.pro"
                className="flex items-center gap-3 bg-black border border-white/20 hover:border-white hover:bg-white/5 px-6 py-4 transition-all group font-mono relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg
                  className="w-5 h-5 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white relative z-10 tracking-wider">ia@marketlabs.pro</span>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center text-gray-500 font-mono border-t border-white/10 pt-8">
            <p className="text-sm">Built for developers who want to level up their skills</p>
            <p className="mt-2 text-xs text-gray-600">
              © {new Date().getFullYear()} VIBE_CODING_WITH_RAFA. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
