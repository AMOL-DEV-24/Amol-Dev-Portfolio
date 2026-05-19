"use client";

import { useState } from "react";
import { useNavigation } from "@/hooks/useNavigation";

export default function Sidebar() {

  // Sidebar open/close state
  const [open, setOpen] = useState(false);

  // Navigation hook
  const { active, navigate } = useNavigation();

  // Handle navigation click
  const handleNavigation = (section: string) => {
    navigate(section);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Nav Toggler */}
      <div
        className={`nav-toggler ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        {/* Logo */}
        <div className="logo">
          <a href="#Home">
            <span>A</span>mol
          </a>
        </div>

        {/* Navigation */}
        <ul className="nav">

          <li>
            <a
              href="#Home"
              className={active === "Home" ? "active" : ""}
              onClick={() => handleNavigation("Home")}
            >
              <i className="fa fa-home"></i> Home
            </a>
          </li>

          <li>
            <a
              href="#Profile"
              className={active === "Profile" ? "active" : ""}
              onClick={() => handleNavigation("Profile")}
            >
              <i className="fa fa-user"></i> Profile
            </a>
          </li>

          <li>
            <a
              href="#TechStack"
              className={active === "TechStack" ? "active" : ""}
              onClick={() => handleNavigation("TechStack")}
            >
              <i className="fa fa-code"></i> Tech Stack
            </a>
          </li>

          <li>
            <a
              href="#Services"
              className={active === "Services" ? "active" : ""}
              onClick={() => handleNavigation("Services")}
            >
              <i className="fa fa-list"></i> Services
            </a>
          </li>

          <li>
            <a
              href="#Projects"
              className={active === "Projects" ? "active" : ""}
              onClick={() => handleNavigation("Projects")}
            >
              <i className="fa fa-briefcase"></i> Projects
            </a>
          </li>

          <li>
            <a
              href="#Connect"
              className={active === "Connect" ? "active" : ""}
              onClick={() => handleNavigation("Connect")}
            >
              <i className="fa fa-comments"></i> Connect
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}