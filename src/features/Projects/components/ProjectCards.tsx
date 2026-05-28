"use client";

import Image from "next/image";

type ProjectProps = {
  project: {
    image: string;
    title: string;
    description: string;
    liveDemo: string;
    code: string;
    tech: string[]; // Add tech property to hold the array of technology icons
  };
};

export default function ProjectCards({ project }: ProjectProps) {
  //* props destructuring
  const { image, title, description, liveDemo, code, tech } = project;

  return (
    <div className="projects-item padd-15">
      <div className="projects-item-inner shadow-dark">
        {/* ================= PROJECT IMAGE ================= */}
        <div className="projects-img">
          <Image src={image} alt={title} width={400} height={300} />
        </div>

        {/* ================= OVERLAY ================= */}
        <div className="overlay">
          <h1>{title}</h1>

          <p>{description}</p>

          <div className="tech-icons">
            {tech.map((icon, i) => (
              <span key={i}>
                <i className={icon}></i>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="projects-buttons">
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          <button className="button-1">Live Demo</button>
        </a>

        <a href={code} target="_blank" rel="noopener noreferrer">
          <button className="button-2">Code {"</>"}</button>
        </a>
      </div>
    </div>
  );
}
