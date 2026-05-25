"use client";

import Image from "next/image";

type ProjectProps = {
  project: {
    image: string;
    title: string;
    description: string;
    liveDemo: string;
    code: string;
  };
};

export default function ProjectCard({
  project,
}: ProjectProps) {

  return (
    <div className="projects-item padd-15">

      <div className="projects-item-inner shadow-dark">

        {/* ================= PROJECT IMAGE ================= */}
        <div className="projects-img">

          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
          />

        </div>

        {/* ================= OVERLAY ================= */}
        <div className="overlay">

          <h1>{project.title}</h1>

          <p>{project.description}</p>

        </div>

      </div>

      {/* ================= BUTTONS ================= */}
      <div className="projects-buttons">

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-1">
            Live Demo
          </button>
        </a>

        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-2">
            Code {"</>"}
          </button>
        </a>

      </div>

    </div>
  );
}