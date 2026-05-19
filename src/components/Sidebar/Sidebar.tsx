"use client";

import { useState } from "react";

interface Props {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    onNavigate(section);
    setOpen(false);
  };

  return (
    <>
      {/* NAV TOGGLER */}
      <div
        className={`nav-toggler ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        {/* LOGO */}
        <div className="logo">
          <a href="#Home" onClick={(e) => handleNavigation(e, "Home")}>
            <span>A</span>mol
          </a>
        </div>

        {/* NAV */}
        <ul className="nav">

          <li>
            <a
              href="#Home"
              className={activeSection === "Home" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Home")}
            >
              <i className="fa fa-home"></i> Home
            </a>
          </li>

          <li>
            <a
              href="#Profile"
              className={activeSection === "Profile" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Profile")}
            >
              <i className="fa fa-user"></i> Profile
            </a>
          </li>

          <li>
            <a
              href="#TechStack"
              className={activeSection === "TechStack" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "TechStack")}
            >
              <i className="fa fa-code"></i> Tech Stack
            </a>
          </li>

          <li>
            <a
              href="#Services"
              className={activeSection === "Services" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Services")}
            >
              <i className="fa fa-list"></i> Services
            </a>
          </li>

          <li>
            <a
              href="#Projects"
              className={activeSection === "Projects" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Projects")}
            >
              <i className="fa fa-briefcase"></i> Projects
            </a>
          </li>

          <li>
            <a
              href="#Connect"
              className={activeSection === "Connect" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Connect")}
            >
              <i className="fa fa-comments"></i> Connect
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}