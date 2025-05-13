import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    img: project1,
    title: "Cyber Security Audit",
    desc: "Audited the security system of a global company.",
    result: "Reduced critical vulnerabilities by 40% and improved security policies."
  },
  {
    img: project2,
    title: "React Portfolio Website",
    desc: "Developed my personal portfolio using React and Vite.",
    result: "Created a fully responsive and interactive website."
  },
  {
    img: project3,
    title: "E-commerce Security Enhancement",
    desc: "Implemented security measures for an online store.",
    result: ""
  },
];

export default function Project() {
  return (
    <section className="px-4 py-20 bg-black text-white text-left">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="space-y-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 flex items-center gap-6 rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <img
              src={p.img}
              alt={p.title}
              className="w-16 h-16 object-contain rounded-md bg-white p-1"
            />

            <div>
              <h3 className="text-lg font-semibold text-cyan-400">{p.title}</h3>
              <p className="text-gray-200">{p.desc}</p>
              {p.result && (
                <p className="text-sm text-gray-400 mt-1">
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
