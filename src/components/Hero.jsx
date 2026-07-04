import { motion } from "framer-motion";
import { Download, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 rounded-full text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Opportunities
          </div>
          <img
            src={personal.profileImage}
            alt={personal.name}
            width={176}
            height={176}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="
    w-44
    h-44
    rounded-full
    object-cover
    border-4
    border-cyan-400
    shadow-lg
    hover:scale-105
    transition
    duration-300
    mb-8
  "
          />

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            {personal.name}
          </h1>

          <h2 className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl mt-6 font-semibold">
            {personal.role}
          </h2>

          <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-xl">
            {personal.tagline}
          </p>

          <div className="flex items-center gap-2 text-slate-500 mt-6">
            <MapPin size={18} />

            {personal.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-black"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-700 hover:border-cyan-400 transition px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Social Links */}

         <div className="flex gap-4 mt-8">
  <a
    href={social.github}
    target="_blank"
    rel="noreferrer"
    className="p-3 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black transition duration-300"
  >
    <FaGithub size={22} />
  </a>

  <a
    href={social.linkedin}
    target="_blank"
    rel="noreferrer"
    className="p-3 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black transition duration-300"
  >
    <FaLinkedin size={22} />
  </a>
</div>
        </motion.div>

        {/* Right Side Dashboard */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">
            {/* Window Header */}

            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />

              <div className="w-3 h-3 rounded-full bg-yellow-500" />

              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-5">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-500 text-sm">Current Focus</p>

                <h3 className="text-xl font-semibold text-cyan-400 mt-2">
                  Data Analytics
                </h3>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-500 text-sm">Core Stack</p>

                <h3 className="mt-2">Python • SQL • Power BI</h3>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-500 text-sm">Specialization</p>

                <h3 className="mt-2">EDA • Dashboarding • BI</h3>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-500 text-sm">Status</p>

                <h3 className="mt-2 text-green-400">Learning & Building</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
