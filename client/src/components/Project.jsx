import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    img: project1,
    title: "Cyber Security Audit",
    desc: "Audited the security system of a global company.",
    result: "Reduced critical vulnerabilities by 40% and improved security policies.",
  },
  {
    img: project2,
    title: "React Portfolio Website",
    desc: "Developed my personal portfolio using React and Vite.",
    result: "Created a fully responsive and interactive website.",
  },
  {
    img: project3,
    title: "E-commerce Security Enhancement",
    desc: "Implemented security measures for an online store.",
    result: "",
  },
];

export default function Project() {
  return (
    <section className="px-6 py-20 bg-[#0a0f1e] text-white">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="flex flex-col items-center">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.img} alt={p.title} />
            <div className="text-left space-y-1">
              <h3 className="text-cyan-400 font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>
              {p.result && (
                <p className="text-sm text-gray-400">
                  <strong>Result:</strong> {p.result}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
