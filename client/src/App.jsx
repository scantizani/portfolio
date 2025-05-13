import { Routes, Route } from "react-router-dom";
import Services from "./Services";
import Project from "./Project";
import Education from "./Education";
import ProjectTest from "./ProjectTest";
// adicione About, Contact etc. se quiser

export default function App() {
  return (
    <main className="p-4">
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/testproject" element={<ProjectTest />} />
      </Routes>
    </main>
  );
}
