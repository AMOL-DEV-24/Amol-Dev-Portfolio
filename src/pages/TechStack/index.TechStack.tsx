"use client";

const techStackData = [
  {
    icon: "fa fa-database",
    title: "SQL",
    description: "Strong knowledge of database queries and management.",
  },
  {
    icon: "fa fa-coffee",
    title: "Core Java",
    description: "Object-oriented programming and backend logic.",
  },
  {
    icon: "fa fa-code",
    title: "J2EE",
    description: "Enterprise-level Java applications.",
  },
  {
    icon: "fa fa-html5",
    title: "HTML",
    description: "Semantic and SEO-friendly markup.",
  },
  {
    icon: "fa fa-css3-alt",
    title: "CSS",
    description: "Responsive and modern UI design.",
  },
  {
    icon: "fa fa-js",
    title: "JavaScript",
    description: "Dynamic web functionality and DOM handling.",
  },
  {
    icon: "fa fa-bootstrap",
    title: "Bootstrap",
    description: "Fast responsive UI development.",
  },
  {
    icon: "fa fa-code",
    title: "jQuery",
    description: "Simplified JavaScript DOM operations.",
  },
  {
    icon: "fa fa-react",
    title: "React JS",
    description: "Component-based frontend development.",
  },
  {
    icon: "fa fa-wind",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework.",
  },
  {
    icon: "fa fa-layer-group",
    title: "Material UI",
    description: "Modern React UI components.",
  },
  {
    icon: "fa fa-sync",
    title: "Redux",
    description: "State management for React apps.",
  },
  {
    icon: "fa fa-forward",
    title: "Next JS",
    description: "Server-side rendering and performance.",
  },
  {
    icon: "fa fa-node",
    title: "Node JS",
    description: "Backend JavaScript runtime.",
  },
  {
    icon: "fa fa-database",
    title: "MongoDB",
    description: "NoSQL database management.",
  },
  {
    icon: "fa fa-plug",
    title: "API Integration",
    description: "Connecting frontend with backend services.",
  },
];

export default function TechStack() {
  return (
    <div className="container">
      {/* SECTION TITLE */}
      <div className="row">
        <div className="section-title">
          <h2>My Tech Stack</h2>
        </div>
      </div>

      {/* TECH STACK ITEMS */}
      <div className="row">
        {techStackData.map((tech, index) => (
          <div className="techstack-item padd-15" key={index}>
            <div className="techstack-item-inner">
              <div className="icon">
                <i className={tech.icon}></i>
              </div>

              <h4>{tech.title}</h4>

              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}