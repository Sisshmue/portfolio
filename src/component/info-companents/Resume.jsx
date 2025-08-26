import React from "react";

function Resume() {
  const education = [
    {
      degree: "Bachelor of Engineering in Software",
      school: "Mae Fah Luang University",
      location: "Chiang Rai, Thailand",
      year: "2022-2027",
      gpa: "3.93/4.0",
    },
  ];

  const experiences = [
    {
      title: "Junior Mobile Developer",
      company: "Revelio",
      location: "Myanmar",
      duration: "Feb 2025 - 2025",
      responsibilities: [
        "Built and maintained Mobile applications using Flutter",
        "Implemented new responsive UI components and features, and improved user experience",
        "Integrated third-party APIs for the authentication and data management",
        "Participated in agile development processes and sprint planning",
      ],
    },

    {
      title: "Freelance Mobile Developer",
      company: "SabaiJob Organization",
      location: "Thailand",
      duration: "Dec 2024 - 2025",
      responsibilities: [
        "Lead development of dynamic interfaces using Flutter",
        "Integrate APIs from the backend for dynamic data",
        "Collaborate with product teams and backend teams to implement new features",
        "Optimize application performance by testing and debugging",
      ],
    },
  ];

  return (
    <div>
      {/* Education Section */}
      <section className="education">
        <h2 className="heading" style={{ color: "white" }}>
          Education
        </h2>
        <div className="edu-point">
          {education.map((edu, index) => (
            <div key={index} className="edu-flex">
              <div className="degree-year">
                <h3 style={{ color: "white" }}>{edu.degree}</h3>
                <span style={{ color: "white" }}>{edu.year}</span>
              </div>
              <p style={{ color: "white" }}>{edu.school}</p>
              <div style={{ color: "white" }}>
                <span>{edu.location}</span>
                <span>GPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="experience">
        <h2 className="heading" style={{ color: "white" }}>
          Professional Experience
        </h2>

        <div className="pro-point">
          {experiences.map((exp, index) => (
            <div key={index} className="pro-flex">
              <div className="title-duration">
                <h3 className="" style={{ color: "white" }}>
                  {exp.title}
                </h3>
                <span className="" style={{ color: "white" }}>
                  {exp.duration}
                </span>
              </div>
              <p style={{ color: "white", fontStyle: "italic" }}>
                {exp.company}
              </p>
              <p style={{ color: "white" }}>{exp.location}</p>
              <ul>
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="li-flex">
                    <span style={{ color: "white" }}>▪</span>
                    <span style={{ color: "white" }}>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <br />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
