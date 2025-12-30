import React, { useEffect, useState } from "react";
import "../secnav.css";

const Secnav = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const getOffset = (section) => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1;
    const base = {
      hero: 0,
      portfolio: 1.3,
      certifications: 2.5,
      skills: 4.2,
    };

    let offset = base[section] ?? 0;

    // Compensate for CSS vertical shifts applied only on narrow devices
    if (section === 'certifications' && width >= 380 && width <= 400) {
      const correction = 180 / height; // px -> parallax pages
      offset = Math.max(0, offset - correction);
    }

    return offset;
  };

  return (
    <nav>
      <ul className="navbar-links">
        <li>
          <button
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => onNavigate(getOffset('hero'))}
          >
            Hero
          </button>
        </li>
        <li>
          <button
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={() => onNavigate(getOffset('portfolio'))}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            className={activeSection === "certifications" ? "active" : ""}
            onClick={() => onNavigate(getOffset('certifications'))}
          >
            Certification
          </button>
        </li>
        <li>
          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => onNavigate(getOffset('skills'))}
          >
            Skills
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Secnav;
