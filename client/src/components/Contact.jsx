import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({ name:"", email:"", phone:"", message:"" });
  const [status, setStatus] = useState("");

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent.");
    setTimeout(() => {
      setData({ name:"", email:"", phone:"", message:"" });
      setStatus("");
    }, 3000);
  };

  return (
    <>
      <Layout />
      <section className="contact-section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name"    value={data.name}    onChange={handleChange} placeholder="Name"    required />
          <input name="email"   value={data.email}   onChange={handleChange} placeholder="Email"   required />
          <input name="phone"   value={data.phone}   onChange={handleChange} placeholder="Phone"  />
          <textarea name="message" value={data.message} onChange={handleChange} placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </section>
    </>
  );
}
