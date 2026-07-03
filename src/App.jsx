import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Stats = lazy(() => import("./components/Stats"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Dashboards = lazy(() => import("./components/Dashboards"));
const Projects = lazy(() => import("./components/Projects"));
const Terminal = lazy(() => import("./components/Terminal"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Analytics Stats */}
      <section className="max-w-7xl mx-auto px-6">
        <Suspense fallback={null}>
          <Stats />
        </Suspense>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </section>

      {/* Dashboard Gallery */}
      <section
        id="dashboards"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <Suspense fallback={null}>
          <Dashboards />
        </Suspense>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
      </section>

      {/* Interactive Terminal */}
      <section
        id="terminal"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <Suspense fallback={null}>
          <Terminal />
        </Suspense>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        <p>
          © {new Date().getFullYear()} Vipin Kaushik. All Rights Reserved.
        </p>

        <p className="mt-2 text-sm">
          Built with React, Vite & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;