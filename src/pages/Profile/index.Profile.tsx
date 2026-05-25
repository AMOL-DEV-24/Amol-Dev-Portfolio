/* eslint-disable react/no-unescaped-entities */
"use client";

export default function Profile() {
  return (
    <div className="container">

      {/* ===================== TITLE ===================== */}
      <div className="row">
        <div className="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="row">
        <div className="profile-content padd-15">

          {/* ===================== ABOUT TEXT ===================== */}
          <div className="row">
            <div className="profile-text">

              <h3>
                I'm Amol Pawar and <span>Web Developer</span>
              </h3>

              <p>
                My name is Amol, and I am a Software Engineering graduate
                based in Pune, India. I have one year of professional
                experience in React frontend development, where I worked
                on building responsive and scalable web applications.
                During my time at my previous company, I gained hands-on
                experience with modern frontend technologies, API
                integration, and creating intuitive user interfaces. I am
                particularly interested in writing clean, efficient code
                and continuously improving user experience. Having
                recently left my previous role, I am now looking for an
                opportunity where I can contribute to impactful projects
                while further strengthening my technical and
                problem-solving skills.
              </p>

            </div>
          </div>

          {/* ===================== PERSONAL INFO ===================== */}
          <div className="row">
            <div className="personal-info padd-15">

              <div className="row">

                <div className="info-item padd-15">
                  <p>Birthday : <span>24 April 2000</span></p>
                </div>

                <div className="info-item padd-15">
                  <p>Age : <span>26</span></p>
                </div>

                <div className="info-item padd-15">
                  <p>Website : <span>amol2404.netlify.app</span></p>
                </div>

                <div className="info-item padd-15">
                  <p>Email : <span>amolpawar.dev@gmail.com</span></p>
                </div>

                <div className="info-item padd-15">
                  <p>Degree : <span>BTech</span></p>
                </div>

                <div className="info-item padd-15">
                  <p>PhoneNo : <span>9272358581</span></p>
                </div>

                <div className="info-item padd-15">
                  <p>City : <span>Pandharpur</span></p>
                </div>

              </div>

              {/* ===================== BUTTONS ===================== */}
              <div className="row">
                <div className="buttons padd-15">

                  <a
                    href="/assets/resume/Resume 1/My Resume.pdf"
                    className="btn"
                    download
                  >
                    Download CV
                  </a>

                  <a href="#Connect" className="btn hire-me">
                    Hire Me
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* ===================== EDUCATION + EXPERIENCE ===================== */}
          <div className="row">

            {/* ===================== EDUCATION ===================== */}
            <div className="education padd-15">

              <h3 className="title">Education</h3>

              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">

                    {/* ITEM 1 */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2020 - 2023
                      </h3>
                      <h4 className="timeline-title">
                        Bachelor In Computer Science And Engineering
                      </h4>
                      <p className="timeline-text">
                        I have done my B.Tech in Computer Science and Engineering
                        from Dr. Babasaheb Ambedkar Technological University Lonere,
                        at Fabtech Technical Campus and College of Engineering Sangola
                        with 8.72 CGPA.
                      </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2016 - 2019
                      </h3>
                      <h4 className="timeline-title">
                        Diploma In Computer Technology
                      </h4>
                      <p className="timeline-text">
                        I have completed Diploma in Computer Technology at
                        Karmayogi Polytechnic College Shelve, Pandharpur
                        with First Class (67.68%).
                      </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2015 - 2016
                      </h3>
                      <h4 className="timeline-title">
                        Maharashtra State Board Secondary Education
                      </h4>
                      <p className="timeline-text">
                        I have done my SSC in New English School of Rayat Shikshan
                        from Bhalawani with 68.88% in the year 2016.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* ===================== EXPERIENCE ===================== */}
            <div className="experience padd-15">

              <h3 className="title">Experience</h3>

              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">

                    {/* ITEM 1 */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> Dec 2024 - Nov 2025
                      </h3>
                      <h4 className="timeline-title">
                        Trainee Frontend Developer - Digialpha Pvt. Ltd.
                      </h4>
                      <p className="timeline-text">
                        Worked as a frontend developer trainee, building
                        responsive web interfaces using HTML, CSS, JavaScript,
                        and React. Collaborated with the team to improve UI/UX
                        and optimize performance.
                      </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> Jun 2024 - Dec 2024
                      </h3>
                      <h4 className="timeline-title">
                        MERN Stack Development Course
                      </h4>
                      <p className="timeline-text">
                        Learned full-stack development using MongoDB, Express.js,
                        React, and Node.js. Built projects and worked with REST APIs.
                      </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> Mar 2023 - Sep 2023
                      </h3>
                      <h4 className="timeline-title">
                        Java Full Stack Training - QSpiders Training Institute
                      </h4>
                      <p className="timeline-text">
                        Completed training in Core Java, JDBC, Servlets, JSP,
                        Hibernate, and frontend technologies like HTML, CSS,
                        and JavaScript.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}