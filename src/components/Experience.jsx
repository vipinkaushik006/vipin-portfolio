import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section>

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold">
          Professional Journey
        </h2>

        <p className="text-slate-400 mt-4">
          My experience across Analytics, DevOps and Software Development
        </p>

      </div>

      {/* Timeline */}

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}

        <div
          className="
            hidden md:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-slate-800
            -translate-x-1/2
          "
        />

        {experience.map((item, index) => {

          const isLeft = index % 2 === 0;

          return (

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
                relative
                mb-12
              "
            >

              {/* Timeline Dot */}

              <div
                className="
                  hidden md:flex
                  absolute
                  left-1/2
                  top-8
                  -translate-x-1/2
                  w-5
                  h-5
                  rounded-full
                  bg-cyan-400
                  border-4
                  border-[#050816]
                  z-10
                "
              />

              <div
                className={`
                  md:w-[48%]

                  ${
                    isLeft
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }
                `}
              >

                <div
                  className="
                    bg-slate-900/70
                    backdrop-blur-lg
                    border
                    border-slate-800
                    rounded-3xl
                    p-6
                    hover:border-cyan-500
                    transition-all
                    duration-300
                  "
                >

                  {/* Title */}

                  <div className="flex items-center gap-3">

                    <Briefcase
                      size={22}
                      className="text-cyan-400"
                    />

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                  </div>

                  {/* Company */}

                  <p className="text-cyan-400 mt-4 font-medium">
                    {item.company}
                  </p>

                  {/* Duration */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-slate-400
                      mt-4
                    "
                  >
                    <Calendar size={16} />

                    {item.duration}
                  </div>

                  {/* Location */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-slate-400
                      mt-2
                    "
                  >
                    <MapPin size={16} />

                    {item.location}
                  </div>

                  {/* Highlights */}

                  <ul className="mt-6 space-y-3">

                    {item.highlights.map(
                      (highlight, idx) => (
                        <li
                          key={idx}
                          className="
                            flex
                            items-start
                            gap-3
                            text-slate-300
                          "
                        >

                          <span
                            className="
                              mt-2
                              w-2
                              h-2
                              rounded-full
                              bg-cyan-400
                              shrink-0
                            "
                          />

                          {highlight}

                        </li>
                      )
                    )}

                  </ul>

                </div>

              </div>

            </motion.div>

          );
        })}

      </div>

      {/* Career Focus Card */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          mt-16
          rounded-3xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-8
          text-center
        "
      >

        <h3 className="text-2xl font-bold text-cyan-400">
          Career Objective
        </h3>

        <p className="max-w-3xl mx-auto mt-4 text-slate-300 leading-relaxed">
          Seeking opportunities in Data Analytics,
          Business Intelligence and Data Visualization
          where I can apply analytical thinking,
          Python, SQL and Power BI skills to solve
          real-world business problems and create
          measurable impact through data-driven decisions.
        </p>

      </motion.div>

    </section>
  );
}