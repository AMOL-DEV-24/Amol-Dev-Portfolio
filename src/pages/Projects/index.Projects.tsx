"use client";

import ProjectCard from "@/pages/Projects/components/index.ProjectCards";

import projectsData from "@/data/projectsData";

type Props = {
  onViewAll: () => void;
};

export default function Projects({ onViewAll }: Props) {

  return (
    <div className="container">

      {/* ================= SECTION TITLE ================= */}
      <div className="row">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
      </div>

      {/* ================= HEADING ================= */}
      <div className="row">
        <div className="projects-heading padd-15">
          <h2>My Latest Projects :</h2>
        </div>
      </div>

      {/* ================= PROJECT ITEMS ================= */}
      <div className="row">

        {projectsData.slice(0, 6).map((project, index) => (

          <ProjectCard
            key={index}
            project={project}
          />

        ))}

      </div>

      {/* ================= VIEW ALL BUTTON ================= */}
      <div className="projects-all">

        <button
          className="view-all"
          onClick={onViewAll}
        >
          View All
        </button>

      </div>

    </div>
  );
}