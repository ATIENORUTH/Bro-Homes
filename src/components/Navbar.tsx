import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="navbar"
        >
            <div className="container nav-content">
                <h2 className="logo">BRO HOMES</h2>

                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#rooms">Rooms</a>
                    <a href="#booking">Book</a>
                </div>
            </div>
        </motion.nav>
    );
}