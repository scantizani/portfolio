// src/MainRouter.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// agora sim, caminho relativo CORRETO para dentro de components/
const Home      = lazy(() => import("./components/Home.jsx"));
const About     = lazy(() => import("./components/About.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Project  = lazy(() => import("./components/Project.jsx"));
const Services  = lazy(() => import("./components/Services.jsx"));
const Contact   = lazy(() => import("./components/Contact.jsx"));
const NotFound  = lazy(() => import("./components/NotFound.jsx"));

export default function MainRouter() {
  return (
    <Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
      <Routes>
        <Route path="/"          element={<Home     />} />
        <Route path="/about"     element={<About    />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/projects"  element={<Project />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/contact"   element={<Contact  />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
