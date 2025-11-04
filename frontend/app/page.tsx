export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            VIBE CODING WITH RAFA
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
              Learn Full-Stack Development
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                with AI Assistance
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Master modern web development using Cursor AI to build scalable, production-ready applications
            </p>
          </div>

          {/* What We're Building Section */}
          <section className="mb-16">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                What We're Building
              </h3>
              <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                <p className="text-lg leading-relaxed">
                  This repository is a practical guide to learning how to use <strong className="text-purple-600 dark:text-purple-400">Cursor AI</strong> as a development assistant by building a modern full-stack project. We'll create a complete application using <strong className="text-blue-600 dark:text-blue-400">Next.js</strong> for the frontend and <strong className="text-green-600 dark:text-green-400">Python Flask</strong> for the backend, following a professional modular architecture.
                </p>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-3 list-disc list-inside marker:text-purple-600 dark:marker:text-purple-400">
                    <li>How to structure a full-stack project with AI assistance</li>
                    <li>Professional modular architecture with models, services, utils, and routes</li>
                    <li>Modern frontend development with Next.js, TypeScript, and Tailwind CSS</li>
                    <li>RESTful API development with Flask and SQLAlchemy</li>
                    <li>Database management from SQLite to PostgreSQL</li>
                    <li>Best practices for environment variables and configuration</li>
                    <li>Version control and deployment strategies</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
                  <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                    <strong className="text-purple-600 dark:text-purple-400">Perfect for:</strong> Developers who want to leverage AI tools to accelerate their learning and build clean, scalable, production-ready applications. Whether you're a beginner or experienced developer, this guide will help you master modern development workflows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-zinc-900 dark:text-zinc-50">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Next.js", color: "from-black to-gray-800" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                { name: "Flask", color: "from-yellow-400 to-yellow-600" },
                { name: "Python", color: "from-blue-400 to-blue-600" },
                { name: "SQLAlchemy", color: "from-red-500 to-red-700" },
                { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
                { name: "SQLite", color: "from-blue-600 to-blue-800" },
                { name: "PostgreSQL", color: "from-indigo-500 to-indigo-700" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white dark:bg-zinc-900 rounded-lg p-4 text-center border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`h-2 w-full rounded-full bg-gradient-to-r ${tech.color} mb-2`}></div>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Get in Touch</h3>
            <p className="text-center mb-8 text-purple-100">
              Have questions or want to collaborate? Reach out to us!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+595994132806"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl transition-all hover:scale-105 border border-white/20"
              >
                <svg
                  className="w-6 h-6"
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
                <span className="font-medium">+595 994 132 806</span>
              </a>
              <a
                href="mailto:ia@marketlabs.pro"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl transition-all hover:scale-105 border border-white/20"
              >
                <svg
                  className="w-6 h-6"
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
                <span className="font-medium">ia@marketlabs.pro</span>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center text-zinc-500 dark:text-zinc-400">
            <p>Built with ❤️ for developers who want to level up their skills</p>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} VIBE CODING WITH RAFA. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
