import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Arquivo de estilos para a página Home
import 'devicon/devicon.min.css';  // Importando a CSS do Devicon
import { FaLinkedin } from 'react-icons/fa'; // Para ícone do LinkedIn

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero bg-gray-800 text-white py-20">
        <div className="hero-content text-center">
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
      <section className="highlights grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-6">
        <div className="highlight-card bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-700">
            Over 10 years of experience in Cyber Security, specializing in network security and risk management and governance.
          </p>
        </div>
        <div className="highlight-card bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-gray-700">
            Currently studying Software Engineering at Centennial College, Canada.
          </p>
        </div>
        <div className="highlight-card bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p className="text-gray-700">
            Check out my latest web development and cybersecurity projects.
          </p>
        </div>
      </section>

      {/* Tech Stack & Skills Section */}
      <section className="tech-stack py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Tech Stack & Skills</h2>
        <p className="text-white mb-6">Technologies and programming languages I am proficient in:</p>
        <div className="tech-icons flex justify-center gap-8">
          <i className="devicon-react-original colored" style={{ fontSize: "40px" }}></i>
          <i className="devicon-nodejs-plain colored" style={{ fontSize: "40px" }}></i>
          <i className="devicon-python-plain colored" style={{ fontSize: "40px" }}></i>
          <i className="devicon-java-plain colored" style={{ fontSize: "40px" }}></i>
          <i className="devicon-mongodb-plain colored" style={{ fontSize: "40px" }}></i>
        </div>
      </section>

      {/* Connect with Me Section */}
      <section className="connect py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Connect with Me</h2>
        <p className="text-white mb-6">Find me on LinkedIn for professional networking:</p>
        <div className="linkedin-icon">
          <a href="https://www.linkedin.com/in/silvana-rondina-cyber-security/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} color="#0077b5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
