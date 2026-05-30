import { motion } from "framer-motion";

export default function Hero() {
    return (
        <header className="hero">
            <motion.div
                className="hero-overlay container"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    BRO HOMES LTD
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Stay comfortably. Live affordably. Across Kenya.
                </motion.p>

                <motion.a
                    href="#rooms"
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Explore Rooms
                </motion.a>
            </motion.div>
        </header>
    );
}