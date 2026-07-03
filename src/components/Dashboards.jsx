import { motion } from "framer-motion";
import { BarChart3, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Dashboards() {
  const { dashboards } = portfolioData;

  return (
    <section>
      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Analytics Dashboard Gallery
        </h2>

        <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
          Interactive business intelligence dashboards built using Power BI, DAX
          and Data Modeling techniques.
        </p>
      </div>

      {/* Featured Banner */}

      <div
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
        <div className="flex items-center gap-4">
          <BarChart3 size={40} className="text-cyan-400" />

          <div>
            <h3 className="text-2xl font-bold">Power BI Portfolio</h3>

            <p className="text-slate-400 mt-2">
              6 production-grade dashboards focused on business intelligence,
              analytics and reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {dashboards.map((dashboard, index) => (
          <motion.div
            key={dashboard.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              group
              bg-slate-900/70
              backdrop-blur-lg
              border
              border-slate-800
              rounded-3xl
              overflow-hidden
              hover:border-cyan-500
              transition-all
              duration-300
            "
          >
            {/* Dashboard Image */}

            <div
              className="
                h-60
                overflow-hidden
                relative
              "
            >
              <img
                src={dashboard.image}
                alt={dashboard.title}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Dashboard Content */}

            <div className="p-6">
              <h3
                className="
                  text-xl
                  font-bold
                  group-hover:text-cyan-400
                  transition
                "
              >
                {dashboard.title}
              </h3>

              <p className="text-slate-400 mt-3">
                Business intelligence dashboard built using Power BI and DAX.
              </p>

              <a
                href={dashboard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
    mt-5
    flex
    items-center
    gap-2
    text-cyan-400
    hover:text-cyan-300
    transition
  "
              >
                View Dashboard
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics Skills Banner */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          mt-16
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/70
          p-8
        "
      >
        <h3 className="text-2xl font-bold text-cyan-400">
          Dashboard Development Expertise
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div>
            <h4 className="font-semibold">Data Modeling</h4>

            <p className="text-slate-400 mt-2">Star Schema Design</p>
          </div>

          <div>
            <h4 className="font-semibold">DAX</h4>

            <p className="text-slate-400 mt-2">KPIs & Measures</p>
          </div>

          <div>
            <h4 className="font-semibold">Visualization</h4>

            <p className="text-slate-400 mt-2">Interactive Reports</p>
          </div>

          <div>
            <h4 className="font-semibold">Analytics</h4>

            <p className="text-slate-400 mt-2">Business Insights</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
