import React from "react";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";

const educationData = [
  { logo: e1, institution: "Centennial College", course: "Software Engineering", year: "2024–25", location: "Toronto" },
  { logo: e2, institution: "FIAP", course: "MBA Cyber Security", year: "2020–21", location: "São Paulo" },
  { logo: e3, institution: "Cruzeiro do Sul", course: "System Analysis", year: "2012–15", location: "São Paulo" },
];

export default function Education() {
  return (
    <section className="education-section text-white px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-10">Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationData.map((edu, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={edu.logo} alt={edu.institution} className="w-20 h-auto mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="text-cyan-400 font-medium">{edu.course}</p>
            <p className="text-sm">{edu.year} - {edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
