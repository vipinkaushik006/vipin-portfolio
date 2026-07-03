import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function Contact() {
  const { personal, social } = portfolioData;
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ejyalq",
        "template_rksmoem",
        formRef.current,
        "Q0V1Xym4vtOTxveB7"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };


  return (
    <section>

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold">
          Let's Connect
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Interested in Data Analytics, Business Intelligence
          or Software Development opportunities?
          Let's discuss and build something impactful.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div
            className="
              bg-slate-900/70
              border
              border-slate-800
              rounded-3xl
              p-8
              h-full
            "
          >

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-500/10
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                  "
                >
                  <Mail size={22} />
                </div>

                <div>

                  <p className="text-slate-500">
                    Email
                  </p>

                  <p>{personal.email}</p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-500/10
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                  "
                >
                  <Phone size={22} />
                </div>

                <div>

                  <p className="text-slate-500">
                    Phone
                  </p>

                  <p>{personal.phone}</p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-500/10
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                  "
                >
                  <MapPin size={22} />
                </div>

                <div>

                  <p className="text-slate-500">
                    Location
                  </p>

                  <p>{personal.location}</p>

                </div>

              </div>

            </div>

            {/* Social Buttons */}

            <div className="flex gap-4 mt-10">

              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-5
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
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-slate-800
                  hover:bg-slate-700
                  transition
                "
              >
                <FaLinkedin size={18} />

                LinkedIn
              </a>

            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <form ref={formRef} onSubmit={sendEmail}
            className="
              bg-slate-900/70
              border
              border-slate-800
              rounded-3xl
              p-8
            "
          >

            <h3 className="text-2xl font-bold mb-8">
              Send Message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-cyan-500
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-cyan-500
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  resize-none
                  focus:border-cyan-500
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  font-semibold
                  py-3
                  rounded-xl
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Send size={18} />

                Send Message
              </button>

            </div>

          </form>

        </motion.div>

      </div>

      {/* Footer CTA */}

      <div
        className="
          mt-16
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-r
          from-cyan-500/10
          to-blue-500/10
          p-8
          text-center
        "
      >

        <h3 className="text-2xl font-bold text-cyan-400">
          Open To Opportunities
        </h3>

        <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
          Looking for Data Analyst, Business Intelligence,
          Data Visualization and Entry-Level Analytics roles.
          Let's turn data into meaningful decisions.
        </p>

      </div>

    </section>
  );
}