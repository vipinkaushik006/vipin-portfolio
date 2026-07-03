import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const skillSections = [
    {
      title: "Data Analytics",
      description:
        "My primary domain focused on extracting insights from data.",
      skills: skills.analytics,
      highlight: true,
    },

    {
      title: "Data Visualization",
      description:
        "Creating dashboards and visual reports for decision making.",
      skills: skills.visualization,
    },

    {
      title: "Machine Learning",
      description:
        "Building intelligent systems and integrating ML models.",
      skills: skills.machineLearning,
    },

    {
      title: "Development",
      description:
        "Full Stack development tools and frameworks.",
      skills: skills.development,
    },

    {
      title: "DevOps",
      description:
        "Deployment automation and infrastructure fundamentals.",
      skills: skills.devops,
    },
  ];

  return (
    <section>

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold">
          Skills Matrix
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A combination of analytics, visualization,
          development and deployment technologies.
        </p>

      </div>

      {/* Main Skills Grid */}

      <div className="grid lg:grid-cols-2 gap-8">

        {skillSections.map((section, index) => (

          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className={`
              rounded-3xl
              border
              backdrop-blur-lg
              p-8
              transition-all
              duration-300

              ${
                section.highlight
                  ? "border-cyan-500 bg-cyan-500/5"
                  : "border-slate-800 bg-slate-900/70"
              }
            `}
          >

            <h3
              className={`
                text-2xl
                font-bold
                ${
                  section.highlight
                    ? "text-cyan-400"
                    : "text-white"
                }
              `}
            >
              {section.title}
            </h3>

            <p className="text-slate-400 mt-3">
              {section.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              {section.skills.map((skill) => (

                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-sm
                    hover:border-cyan-500
                    hover:text-cyan-400
                    transition
                    cursor-default
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

      {/* Analytics Focus Panel */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          mt-16
          rounded-3xl
          border
          border-cyan-500/30
          bg-gradient-to-r
          from-cyan-500/5
          to-blue-500/5
          p-8
        "
      >

        <h3 className="text-2xl font-bold text-cyan-400">
          Analytics Focus
        </h3>

        <p className="text-slate-300 mt-4 leading-relaxed">
          My primary focus is Data Analytics,
          Business Intelligence and Data Visualization.

          I enjoy working with datasets,
          performing exploratory data analysis,
          identifying trends,
          creating Power BI dashboards
          and generating actionable business insights.

          Alongside analytics,
          I leverage Full Stack Development
          and DevOps skills to build complete
          end-to-end solutions.
        </p>

      </motion.div>

    </section>
  );
}