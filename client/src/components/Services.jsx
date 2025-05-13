import React from "react";
import { FaShieldAlt, FaCode, FaCloud, FaLock } from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security Consulting",
    description: "Helping businesses strengthen their security posture.",
  },
  {
    icon: <FaCode />,
    title: "Software Development",
    description: "Building secure and efficient applications.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Security",
    description: "Implementing best practices for cloud environments.",
  },
  {
    icon: <FaLock />,
    title: "Penetration Testing",
    description: "Identifying and mitigating vulnerabilities.",
  },
];

export default function Services() {
  return (
    <section className="services-section text-white text-center">
      <h1 className="text-3xl font-bold mb-8">My Services</h1>
      <div className="services-container">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div>{s.icon}</div>
            <div className="text-left">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
