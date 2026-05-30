import { motion } from "framer-motion";
import Deluxe from "../assets/Deluxe suite.jpg";
import Budget from "../assets/budget room.jpg";
import Standard from "../assets/standard room.jpg";

export default function Rooms() {
    return (
        <section id="rooms">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Rooms
                </motion.h2>

                <div className="room-grid">

                    <motion.div
                        className="room-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="img-wrapper">
                            <img src={Deluxe} />
                        </div>
                        <h3>Deluxe Suite</h3>
                        <p>KES 5000 / night</p>
                    </motion.div>

                    <motion.div
                        className="room-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="img-wrapper">
                            <img src={Standard} />
                        </div>
                        <h3>Standard Room</h3>
                        <p>KES 3000 / night</p>
                    </motion.div>

                    <motion.div
                        className="room-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="img-wrapper">
                            <img src={Budget} />
                        </div>
                        <h3>Budget Room</h3>
                        <p>KES 2000 / night</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}