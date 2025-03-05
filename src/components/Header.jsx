import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          DS
        </a>
        <div className="hidden md:flex space-x-8">
          {["about", "skills", "experience", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`transition-colors ${
                  activeSection === section
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "hover:text-blue-400"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden bg-gray-900 absolute w-full left-0 px-6 py-4 transition-all duration-300 ${
          isOpen ? "top-16 opacity-100 visible" : "-top-64 opacity-0 invisible"
        }`}
      >
        {["about", "skills", "experience", "projects", "contact"].map(
          (section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`block py-2 ${
                activeSection === section
                  ? "text-blue-400 font-bold"
                  : "hover:text-blue-400"
              }`}
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          )
        )}
      </div>
    </nav>
  );
}

export default Header;
