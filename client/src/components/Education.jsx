import React from "react";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";

const educationData = [
  {
    logo: e1,
    institution: "Centennial College",
    course: "Software Engineering",
    year: "2024–25",
    location: "Toronto"
  },
  {
    logo: e2,
    institution: "FIAP",
    course: "MBA Cyber Security",
    year: "2020–21",
    location: "São Paulo"
  },
  {
    logo: e3,
    institution: "Cruzeiro do Sul",
    course: "System Analysis",
    year: "2012–15",
    location: "São Paulo"
  },
];

export default function Education() {
  return (
    <section className="education-section text-white px-6 py-20 text-center bg-[#0a0f1e]">
      <h1 className="text-4xl font-bold mb-12">🎓 Education</h1>
      <div className="flex flex-col items-center">
        {educationData.map((edu, i) => (
          <div key={i} className="education-card">
            <img src={edu.logo} alt={edu.institution} />
            <div className="text-left space-y-1">
              <h3 className="text-cyan-400 font-semibold text-lg">{edu.institution}</h3>
              <p className="text-sm text-gray-300">{edu.course}</p>
              <p className="text-sm text-gray-400">
                {edu.year} — {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
