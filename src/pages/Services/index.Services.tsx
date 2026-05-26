"use client";

import { servicesData } from "@/data/servicesData";

export default function Services() {

  return (

    <div className="container">

      {/* ================= SECTION TITLE ================= */}

      <div className="row">

        <div className="section-title">

          <h2>Services</h2>

        </div>

      </div>

      {/* ================= SERVICES ITEMS ================= */}

      <div className="row">

        {
          servicesData.map((service, index) => (

            <div
              className="services-item padd-15"
              key={index}
            >

              <div className="services-item-inner">

                {/* ================= ICON ================= */}

                <div className="icon">

                  <i className={service.icon}></i>

                </div>

                {/* ================= TITLE ================= */}

                <h4>

                  {service.title}

                </h4>

                {/* ================= DESCRIPTION ================= */}

                <p>

                  {service.description}

                </p>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}