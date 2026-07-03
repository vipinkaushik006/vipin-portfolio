import { motion } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  FolderKanban,
  Brain,
  Database,
  Globe,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const getIcon = (category) => {
    switch (category) {
      case "Machine Learning":
        return <Brain size={24} />;

      case "Data Analytics":
        return <Database size={24} />;

      case "Business Intelligence":
        return <FolderKanban size={24} />;

      default:
        return <Globe size={24} />;
    }
  };

  return (
    <section>
      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Project Command Center
        </h2>

        <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
          A collection of analytics, machine learning, business intelligence and
          full stack projects.
        </p>
      </div>

      {/* Featured Analytics Banner */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          mb-12
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-r
          from-cyan-500/10
          to-blue-500/10
          p-8
        "
      >
        <h3 className="text-2xl font-bold text-cyan-400">
          Analytics First Approach
        </h3>

        <p className="mt-4 text-slate-300 max-w-4xl">
          My projects focus on extracting insights, building dashboards,
          performing data analysis and creating intelligent systems powered by
          machine learning and business intelligence.
        </p>
      </motion.div>

      {/* Projects Grid */}

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              bg-slate-900/70
              backdrop-blur-lg
              border
              border-slate-800
              rounded-3xl
              p-8
              hover:border-cyan-500
              transition-all
              duration-300
            "
          >
            {/* Top */}

            <div className="flex items-center justify-between">
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-cyan-500/10
                  text-cyan-400
                  flex
                  items-center
                  justify-center
                "
              >
                {getIcon(project.category)}
              </div>

              <span
                className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-green-500/10
                  text-green-400
                "
              >
                {project.status}
              </span>
            </div>

            {/* Title */}

            <h3 className="text-2xl font-bold mt-6">{project.title}</h3>

            {/* Category */}

            <p className="text-cyan-400 mt-2">{project.category}</p>

            {/* Description */}

            <p className="text-slate-400 mt-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}

            <div className="flex gap-4 mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  rounded-xl
                  bg-slate-800
                  hover:bg-slate-700
                  transition
                "
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  rounded-xl
                  bg-cyan-500
                  text-black
                  font-medium
                  hover:bg-cyan-400
                  transition
                "
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <button
                onClick={() => setSelectedProject(project)}
                className="
      flex
      items-center
      gap-2
      px-4
      py-3
      rounded-xl
      border
      border-cyan-500
      text-cyan-400
      hover:bg-cyan-500
      hover:text-black
      transition
    "
              >
                Architecture
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Metrics */}

      <div
        className="
          mt-16
          grid
          md:grid-cols-4
          gap-6
        "
      >
        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            text-center
          "
        >
          <h3 className="text-4xl font-bold text-cyan-400">4+</h3>

          <p className="text-slate-400 mt-2">Major Projects</p>
        </div>

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            text-center
          "
        >
          <h3 className="text-4xl font-bold text-cyan-400">10K+</h3>

          <p className="text-slate-400 mt-2">Data Records</p>
        </div>

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            text-center
          "
        >
          <h3 className="text-4xl font-bold text-cyan-400">6+</h3>

          <p className="text-slate-400 mt-2">Dashboards</p>
        </div>

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            text-center
          "
        >
          <h3 className="text-4xl font-bold text-cyan-400">85%</h3>

          <p className="text-slate-400 mt-2">ML Accuracy</p>
        </div>
      </div>

      {/* Architecture Modal */}

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 p-8 rounded-3xl max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">
              {selectedProject.title}
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {selectedProject.architecture?.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="px-4 py-3 rounded-xl bg-slate-800 border border-cyan-500/20">
                    {step}
                  </div>

                  {index !== selectedProject.architecture.length - 1 && (
                    <span className="text-cyan-400 text-2xl">→</span>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-8 px-5 py-3 rounded-xl bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
