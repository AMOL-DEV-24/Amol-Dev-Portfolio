"use client";

import { useState } from "react";

export default function Sidebar() {

  // ===================== STATE =====================
  // Controls mobile sidebar open/close
  const [open, setOpen] = useState(false);

  // ===================== HANDLER =====================
  // Close sidebar when a navigation link is clicked
  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =========================================================
          NAV TOGGLER (MOBILE MENU BUTTON)
          - Shows hamburger icon
          - Toggles sidebar open/close
      ========================================================= */}
      <div
        className={`nav-toggler ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
      </div>

      {/* =========================================================
          SIDEBAR CONTAINER
          - Left fixed navigation menu
          - Contains logo + nav links
      ========================================================= */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        {/* ===================== LOGO ===================== */}
        <div className="logo">
          <a href="#home">
            <span>A</span>mol
          </a>
        </div>

        {/* ===================== NAVIGATION LINKS =====================
            Matches page folder names in src/pages/
            and SCSS files in src/scss/pages/
        ========================================================= */}
        <ul className="nav">

          {/* Home — src/pages/Home/Home.tsx */}
          <li>
            <a href="#home" className="active" onClick={handleNavClick}>
              <i className="fa fa-home"></i> Home
            </a>
          </li>

          {/* Profile — src/pages/Profile/Profile.tsx */}
          <li>
            <a href="#profile" onClick={handleNavClick}>
              <i className="fa fa-user"></i> Profile
            </a>
          </li>

          {/* Tech Stack — src/pages/TechStack/TechStack.tsx */}
          <li>
            <a href="#techstack" onClick={handleNavClick}>
              <i className="fa fa-code"></i> Tech Stack
            </a>
          </li>

          {/* Services — src/pages/Services/Services.tsx */}
          <li>
            <a href="#services" onClick={handleNavClick}>
              <i className="fa fa-list"></i> Services
            </a>
          </li>

          {/* Projects — src/pages/Projects/Projects.tsx */}
          <li>
            <a href="#projects" onClick={handleNavClick}>
              <i className="fa fa-briefcase"></i> Projects
            </a>
          </li>

          {/* Connect — src/pages/Connect/Connect.tsx */}
          <li>
            <a href="#connect" onClick={handleNavClick}>
              <i className="fa fa-comments"></i> Connect
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}