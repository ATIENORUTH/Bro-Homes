import { motion } from "framer-motion";

function NavbarLogoSVG() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "10px", color: "gold" }}
    >
      <path
        d="M 50 12 L 85 40 H 73 L 50 21 L 27 40 H 15 Z"
        fill="currentColor"
      />
      <rect x="44" y="28" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="28" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="44" y1="34" x2="56" y2="34" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 27 46 V 74 H 33 V 46 Z" fill="currentColor" />
      <path d="M 67 46 V 74 H 73 V 46 Z" fill="currentColor" />
      <path d="M 33 46 L 50 68 L 67 46 L 61 46 L 50 60 L 39 46 Z" fill="currentColor" />
      <path d="M 30 56 H 70 V 59 H 30 Z" fill="currentColor" />
      <rect x="25" y="76" width="50" height="6" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="navbar"
        >
            <div className="container nav-content">
                <h2 className="logo" style={{ display: "flex", alignItems: "center" }}>
                    <NavbarLogoSVG />
                    <span>BROS HOMES</span>
                </h2>

                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#rooms">Rooms</a>
                    <a href="#contacts">Contact</a>
                </div>
            </div>
        </motion.nav>
    );
}