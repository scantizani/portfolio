import React from "react";
import { FaShieldAlt, FaCode, FaCloud, FaLock } from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt size={28} />,
    title: "Cyber Security Consulting",
    desc: "Helping businesses strengthen their security posture.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Software Development",
    desc: "Building secure and efficient applications.",
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud Security",
    desc: "Implementing best practices for cloud environments.",
  },
  {
    icon: <FaLock size={28} />,
    title: "Penetration Testing",
    desc: "Identifying and mitigating vulnerabilities.",
  },
];

export default function Services() {
  return (
    <section className="services-container text-white px-6 py-20 bg-[#0a0f1e]">
      <h1 className="text-4xl font-bold text-center mb-12">My Services</h1>

      <div className="flex flex-col items-center gap-6">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="icon text-cyan-400">{s.icon}</div>
            <div className="text-left space-y-1">
              <h3 className="text-lg font-semibold text-cyan-400">{s.title}</h3>
              <p className="text-sm text-gray-300">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
