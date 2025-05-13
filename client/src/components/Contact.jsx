import React, { useState } from "react";
import Layout from "./Layout"; // se já estiver incluso globalmente, pode remover

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent.");
    setTimeout(() => {
      setData({ name: "", email: "", phone: "", message: "" });
      setStatus("");
    }, 3000);
  };

  return (
    <>
      <section className="contact-section">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            placeholder="Your Name"
            value={data.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            placeholder="Your Email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone (Optional):</label>
          <input
            name="phone"
            id="phone"
            placeholder="Your Phone Number"
            value={data.phone}
            onChange={handleChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            value={data.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
        {status && (
          <p className="text-center text-green-400 font-medium mt-4">{status}</p>
        )}
      </section>
    </>
  );
}
