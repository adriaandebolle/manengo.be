import React from "react";
import { motion } from "framer-motion";
import Logo3D from "./comps/Logo3D";
import "./App.css";

const projects = [
  { name: "synt.be", url: "https://synt.be" },
  { name: "contourlab.io", url: "https://contourlab.io" },
  { name: "unblnd.com", url: "https://unblnd.com" },
  { name: "relotrust.com", url: "https://relotrust.com" },
];

export default function Home() {
  return (
    <div className="home-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home-content"
      >
        <h1 className="home-title">Adriaan De Bolle</h1>
        <p className="home-subtitle">
          🚀 Founder & Creative Technologist at Manengo bv
        </p>
        <p className="home-subtitle">
          📍 Assestraat 11, 1790 Affligem, BE0770921653
        </p>
        <div className="home-links bg-box">
          {projects.map((project, i) => (
            <React.Fragment key={project.name}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {project.name}
              </motion.a>
              {i < projects.length - 1 && <span> | </span>}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="home-logo-container"
      >
        <Logo3D />
      </motion.div>
    </div>
  );
}
