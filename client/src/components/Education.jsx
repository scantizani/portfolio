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
    <>
      <Layout />
      <section className="education-section">
        <h1>Education</h1>
        {educationData.map((edu, i) => (
          <div key={i} className="education-item">
            <img src={edu.logo} alt={edu.institution} />
            <h3>{edu.institution}</h3>
            <p><strong>{edu.course}</strong> ({edu.year})</p>
            <p>{edu.location}</p>
          </div>
        ))}
      </section>
    </>
  );
}
