// src/components/Layout.jsx
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
