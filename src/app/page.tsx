"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

import Home from "@/pages/Home/Home";
import Profile from "@/pages/Profile/Profile";
import TechStack from "@/pages/TechStack/TechStack";
import Services from "@/pages/Services/Services";
import Projects from "@/pages/Projects/Projects";
import Connect from "@/pages/Connect/Connect";

export default function Main() {

  const [activeSection, setActiveSection] = useState("Home");
  const [prevSection, setPrevSection] = useState<string | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const handleNavigate = (section: string) => {
    if (section === activeSection) return;

    setPrevSection(activeSection);
    setActiveSection(section);
    setFirstLoad(false);
  };

  const sectionClass = (name: string, extra: string) => {
    if (name === activeSection) {
      return `${extra} section active`;
    }

    if (name === prevSection && !firstLoad) {
      return `${extra} section back-section`;
    }

    return `${extra} section`;
  };

  return (
    <div className="main-container">

      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <ThemeSwitcher />

      <section className={sectionClass("Home", "home")} id="Home">
        <Home />
      </section>

      <section className={sectionClass("Profile", "profile")} id="Profile">
        <Profile />
      </section>

      <section className={sectionClass("TechStack", "techstack")} id="TechStack">
        <TechStack />
      </section>

      <section className={sectionClass("Services", "services")} id="Services">
        <Services />
      </section>

      <section className={sectionClass("Projects", "projects")} id="Projects">
        <Projects />
      </section>

      <section className={sectionClass("Connect", "connect")} id="Connect">
        <Connect />
      </section>

    </div>
  );
}