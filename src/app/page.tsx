import Sidebar from "@/components/Sidebar/Sidebar";

/* ===================== PAGES IMPORTS ===================== */
// Each section/page of the portfolio is imported here
import Home from "@/pages/Home/Home";
import Profile from "@/pages/Profile/Profile";
import TechStack from "@/pages/TechStack/TechStack";
import Services from "@/pages/Services/Services";
import Projects from "@/pages/Projects/Projects";
import Connect from "@/pages/Connect/Connect";

/* ===================== UI COMPONENTS ===================== */
// Global UI components like theme switcher
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

export default function Main() {
  return (
    <div className="main-container">

      {/* =========================================================
          SIDEBAR SECTION
          - Fixed left navigation
          - Contains links to all sections
          - Always visible on desktop layout
      ========================================================= */}
      <Sidebar />

      {/* Theme switcher (dark mode + color switcher) */}
      <ThemeSwitcher />

      {/* =========================================================
          MAIN CONTENT AREA
          - All page sections are rendered here
          - Works with sidebar navigation (anchor links / routing)
          - Scroll-based layout container
      ========================================================= */}
      <div className="main-content">

        {/* ===================== HOME SECTION ===================== */}
        <section id="home">
          <Home />
        </section>

        {/* ===================== PROFILE SECTION ===================== */}
        <section id="profile">
          <Profile />
        </section>

        {/* ===================== TECH STACK SECTION ===================== */}
        <section id="techstack">
          <TechStack />
        </section>

        {/* ===================== SERVICES SECTION ===================== */}
        <section id="services">
          <Services />
        </section>

        {/* ===================== PROJECTS SECTION ===================== */}
        <section id="projects">
          <Projects />
        </section>

        {/* ===================== CONNECT / CONTACT SECTION ===================== */}
        <section id="connect">
          <Connect />
        </section>

      </div>
    </div>
  );
}