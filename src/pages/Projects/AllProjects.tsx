"use client";

import ProjectCard from "@/pages/Projects/components/index.ProjectCards";

import projectsData from "@/data/projectsData";

type Props = {
  onBack: () => void;
};

export default function AllProjects({ onBack }: Props) {

  return (
    <div className="container">

      {/* ================= SECTION TITLE ================= */}
      <div className="row">
        <div className="section-title">
          <h2>All Projects</h2>
        </div>
      </div>

      {/* ================= HEADING ================= */}
      <div className="row">
        <div className="projects-heading padd-15">
          <h2>My Complete Projects :</h2>
        </div>
      </div>

      {/* ================= ALL PROJECTS ================= */}
      <div className="row">

        {projectsData.map((project, index) => (

          <ProjectCard
            key={index}
            project={project}
          />

        ))}

      </div>

      {/* ================= MAIN MENU BUTTON ================= */}
      <div className="projects-all">

        <button
          className="view-all"
          onClick={onBack}
        >
          Main Menu
        </button>

      </div>

    </div>
  );
}