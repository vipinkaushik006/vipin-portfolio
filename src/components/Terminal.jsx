import { useState } from "react";
// import { Github, Linkedin, Download } from "lucide-react";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      command: "system",
      output:
        "Welcome to VipinOS v1.0\n"+
        "Analytics Command Center Initialized. Type 'help' to see available commands.",
    },
  ]);

  const executeCommand = () => {
    const cmd = input.trim().toLowerCase();

    if (!cmd) return;

    let output = "";

    switch (cmd) {
      case "help":
        output = `
Available Commands:

about
skills
projects
dashboards
experience
contact
github
linkedin
resume
clear
        `;
        break;

      case "about":
        output = `
${portfolioData.personal.name}

${portfolioData.personal.role}

${portfolioData.personal.bio}
        `;
        break;

      case "skills":
        output = `
Analytics:
${portfolioData.skills.analytics.join(", ")}

Visualization:
${portfolioData.skills.visualization.join(", ")}

Machine Learning:
${portfolioData.skills.machineLearning.join(", ")}
        `;
        break;

      case "projects":
        output = portfolioData.projects
          .map(
            (project, index) =>
              `${index + 1}. ${project.title}`
          )
          .join("\n");
        break;

      case "dashboards":
        output = portfolioData.dashboards
          .map(
            (dashboard, index) =>
              `${index + 1}. ${dashboard.title}`
          )
          .join("\n");
        break;

      case "experience":
        output = portfolioData.experience
          .map(
            (item) =>
              `${item.title} | ${item.company}`
          )
          .join("\n");
        break;

      case "contact":
        output = `
Email: ${portfolioData.personal.email}

Phone: ${portfolioData.personal.phone}

Location: ${portfolioData.personal.location}
        `;
        break;

      case "github":
        window.open(
          portfolioData.social.github,
          "_blank"
        );

        output = "Opening GitHub...";
        break;

      case "linkedin":
        window.open(
          portfolioData.social.linkedin,
          "_blank"
        );

        output = "Opening LinkedIn...";
        break;

      case "resume":
        window.open(
          portfolioData.personal.resume,
          "_blank"
        );

        output = "Opening Resume...";
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = `
Command Not Found

Type "help" to view available commands.
        `;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        output,
      },
    ]);

    setInput("");
  };

  return (
    <section>

      {/* Heading */}

      <div className="text-center mb-12">

        <h2 className="text-4xl md:text-5xl font-bold">
          Interactive Terminal
        </h2>

        <p className="text-slate-400 mt-4">
          Explore my portfolio using terminal commands.
        </p>

      </div>

      {/* Terminal */}

      <div
        className="
          max-w-5xl
          mx-auto
          bg-slate-950
          border
          border-slate-800
          rounded-3xl
          overflow-hidden
          shadow-2xl
        "
      >

        {/* Header */}

        <div
          className="
            flex
            items-center
            gap-2
            px-6
            py-4
            border-b
            border-slate-800
          "
        >

          <div className="w-3 h-3 bg-red-500 rounded-full" />

          <div className="w-3 h-3 bg-yellow-500 rounded-full" />

          <div className="w-3 h-3 bg-green-500 rounded-full" />

          <span className="ml-4 text-slate-400 text-sm">
            vipin@analytics-terminal
          </span>

        </div>

        {/* Content */}

        <div
          className="
            h-[450px]
            overflow-y-auto
            p-6
            font-mono
            text-sm
          "
        >

          {history.map((item, index) => (

            <div
              key={index}
              className="mb-5"
            >

              {item.command !== "system" && (
                <p className="text-cyan-400">
                  {">"} {item.command}
                </p>
              )}

              <pre
                className="
                  whitespace-pre-wrap
                  text-slate-300
                  mt-2
                "
              >
                {item.output}
              </pre>

            </div>

          ))}

        </div>

        {/* Input */}

        <div
          className="
            border-t
            border-slate-800
            p-4
          "
        >

          <div className="flex items-center gap-3">

            <span className="text-cyan-400 font-mono">
              {">"}
            </span>

            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  executeCommand();
                }
              }}
              placeholder="Type a command..."
              className="
                w-full
                bg-transparent
                outline-none
                text-white
                font-mono
              "
            />

          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div
        className="
          mt-8
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >

        <button
          onClick={() =>
            window.open(
              portfolioData.social.github,
              "_blank"
            )
          }
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-slate-900
            hover:bg-slate-800
            transition
          "
        >
          <FaGithub size={18} />
          GitHub
        </button>

        <button
          onClick={() =>
            window.open(
              portfolioData.social.linkedin,
              "_blank"
            )
          }
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-slate-900
            hover:bg-slate-800
            transition
          "
        >
          <FaLinkedin size={18} />
          LinkedIn
        </button>

        <button
          onClick={() =>
            window.open(
              portfolioData.personal.resume,
              "_blank"
            )
          }
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            hover:bg-cyan-400
            transition
          "
        >
          <Download size={18} />
          Resume
        </button>

      </div>

    </section>
  );
}