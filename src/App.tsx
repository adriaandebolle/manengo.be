import { motion } from "framer-motion";
import Logo3D from "./comps/Logo3D";
import "./App.css";

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
          Manengo bv, Assestraat 11, 1790 Affligem, BE0770921653
        </p>
        <div className="home-links">
          <a
            href="https://synt.be"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link"
          >
            synt.be
          </a>
          <span> | </span>
          <a
            href="https://contourlab.io"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link"
          >
            contourlab.io
          </a>
          <span> | </span>
          <a
            href="https://unblnd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link"
          >
            unblnd.com
          </a>
          <span> | </span>
          <a
            href="https://relotrust.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link"
          >
            relotrust.com
          </a>
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
