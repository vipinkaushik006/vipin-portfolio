import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Stats() {
  return (
    <section className="py-20">

      {/* Section Heading */}

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Analytics Overview
        </h2>

        <p className="text-slate-400 mt-4">
          Data-driven experience, projects and achievements
        </p>

      </div>

      {/* Stats Grid */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {portfolioData.stats.map((stat, index) => (

          <motion.div
            key={index}
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
              rounded-2xl
              p-8
              hover:border-cyan-500
              transition-all
              duration-300
              group
            "
          >

            <h3
              className="
                text-5xl
                font-extrabold
                text-cyan-400
                group-hover:scale-105
                transition
              "
            >
              {stat.value}
            </h3>

            <p
              className="
                mt-4
                text-slate-400
                text-lg
              "
            >
              {stat.label}
            </p>

          </motion.div>

        ))}

      </div>

      {/* Extra Analytics Panel */}

      <div
        className="
          mt-16
          bg-slate-900/70
          border
          border-slate-800
          rounded-3xl
          p-8
        "
      >

        <div className="grid md:grid-cols-3 gap-8">

          <div>

            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Core Domain
            </h3>

            <p className="text-slate-300">
              Data Analytics & Business Intelligence
            </p>

          </div>

          <div>

            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Primary Tools
            </h3>

            <p className="text-slate-300">
              Python • SQL • Power BI • Excel
            </p>

          </div>

          <div>

            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Current Goal
            </h3>

            <p className="text-slate-300">
              Data Analyst Internship / Entry-Level Role
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}