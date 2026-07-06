import { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      name: "Skills",
      href: "#skills",
    },

    {
      name: "Experience",
      href: "#experience",
    },

    {
      name: "Dashboards",
      href: "#dashboards",
    },

    {
      name: "Projects",
      href: "#projects",
    },

    {
      name: "Terminal",
      href: "#terminal",
    },

    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-xl
        bg-[#050816]/80
        border-b
        border-slate-800
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}

        <a
          href="#"
          className="
            flex
            items-center
            gap-3
            font-bold
            text-lg
          "
        >

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-cyan-500/10
              flex
              items-center
              justify-center
              text-cyan-400
            "
          >
            <BarChart3 size={20} />
          </div>

          <div>

            <h1 className="font-bold">
              Vipin Analytics
            </h1>

            <p className="text-xs text-slate-500">
              Command Center
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="
                text-slate-400
                hover:text-cyan-400
                transition
              "
            >
              {item.name}
            </a>

          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              px-5
              py-2.5
              rounded-xl
              font-semibold
              transition
            "
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-white
          "
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div
          className="
            md:hidden
            border-t
            border-slate-800
            bg-[#050816]
          "
        >

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
                "
              >
                {item.name}
              </a>

            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="
                bg-cyan-500
                text-center
                text-black
                py-3
                rounded-xl
                font-semibold
              "
            >
              Resume
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}