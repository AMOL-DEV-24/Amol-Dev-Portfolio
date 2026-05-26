"use client";

import { techStackData } from "@/data/techStackData";

export default function TechStack() {

  return (

    <div className="container">

      {/* ================= SECTION TITLE ================= */}

      <div className="row">

        <div className="section-title">

          <h2>My Tech Stack</h2>

        </div>

      </div>

      {/* ================= TECH STACK ITEMS ================= */}

      <div className="row">

        {
          techStackData.map((tech, index) => (

            <div
              className="techstack-item padd-15"
              key={index}
            >

              <div className="techstack-item-inner">

                {/* ================= ICON ================= */}

                <div className="icon">

                  <i className={tech.icon}></i>

                </div>

                {/* ================= TITLE ================= */}

                <h4>

                  {tech.title}

                </h4>

                {/* ================= DESCRIPTION ================= */}

                <p>

                  {tech.description}

                </p>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}