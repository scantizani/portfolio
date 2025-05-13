// src/components/About.jsx
import React from "react";
import SilvanaImage from "../assets/profile.jpg";
import Resume from "../assets/resume/resume.pdf";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-6 drop-shadow-md">About Me</h2>

      {/* Imagem com tamanho fixo de 400px */}
      <img
        src={SilvanaImage}
        alt="Silvana Rondina"
        style={{
          width: "400px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0,255,255,0.4)",
        }}
      />

      <p className="max-w-2xl text-gray-300 leading-relaxed mb-4">
        I am a Cyber Security Specialist with over ten years of experience, specializing in 
        risk assessment, compliance, and IT governance.
      </p>
      <p className="max-w-2xl text-gray-300 leading-relaxed mb-4">
        I have worked with frameworks like{" "}
        <span className="font-semibold text-white">NIST, ITIL, and ISO 27001</span>, helping organizations 
        improve security and data governance.
      </p>
      <p className="max-w-2xl text-gray-300 leading-relaxed mb-6">
        Currently, I am studying{" "}
        <span className="font-semibold text-white">
          Software Engineering at Centennial College
        </span>{" "}
        and expanding my knowledge in cybersecurity and software development.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300"
      >
        📄 Download Resume
      </a>
    </section>
  );
}
