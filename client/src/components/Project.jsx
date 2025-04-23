import React from "react";

const project = [
  {
    img: "project1.jpg",
    title: "Cyber Security Audit",
    desc: "Audited the security system of a global company."
  },
  {
    img: "project2.jpg",
    title: "React Portfolio Website",
    desc: "Built this portfolio with React & Vite."
  },
  {
    img: "project3.jpg",
    title: "E‑commerce Security Enhancement",
    desc: "Implemented security measures for an online store."
  },
];

export default function Projects() {
  return (
    <>
      <Layout />
      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <img src={require(`../assets/${p.img}`)} alt={p.title} />
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
