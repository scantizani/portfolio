import React from "react";
import { Link } from "react-router-dom";
import 'devicon/devicon.min.css';
import { FaLinkedin, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero bg-gray-800 text-white py-20">
        <div className="hero-content text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-6">
            Hello, I'm Silvana Rondina, a Cyber Security Analyst & Software Engineering Student, passionate about technology and innovation.
          </p>
          <div className="cta-buttons">
            <Link to="/about" className="btn-primary bg-blue-500 text-white px-6 py-2 rounded-md mr-4 hover:bg-blue-700">
              Learn More
            </Link>
            <Link to="/contact" className="btn-secondary bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-6 bg-white text-gray-800">
        <div className="highlight-card p-6 rounded-lg shadow-md bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p>Over 10 years of experience in Cyber Security, specializing in network security and risk management.</p>
        </div>
        <div className="highlight-card p-6 rounded-lg shadow-md bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p>Currently studying Software Engineering at Centennial College, Canada.</p>
        </div>
        <div className="highlight-card p-6 rounded-lg shadow-md bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p>Check out my latest web development and cybersecurity projects.</p>
        </div>
      </section>

      {/* Tech Stack & Skills Section */}
      <section className="tech-stack py-16 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-6">Tech Stack & Skills</h2>
        <p className="mb-6">Technologies and programming languages I am proficient in:</p>
        <div className="flex justify-center items-center gap-8 flex-wrap mt-6 text-5xl">
          <FaReact className="text-cyan-400 hover:scale-110 transition duration-300" />
          <FaNodeJs className="text-green-600 hover:scale-110 transition duration-300" />
          <FaPython className="text-yellow-400 hover:scale-110 transition duration-300" />
          <DiJava className="text-orange-500 hover:scale-110 transition duration-300" />
          <SiMongodb className="text-green-700 hover:scale-110 transition duration-300" />
        </div>
      </section>

      {/* Connect with Me Section */}
      <section className="connect py-16 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-6">Connect with Me</h2>
        <p className="mb-6">Find me on LinkedIn for professional networking:</p>
        <div className="linkedin-icon">
          <a href="https://www.linkedin.com/in/silvana-rondina-cyber-security/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="mx-auto text-blue-500 hover:scale-110 transition duration-300" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
