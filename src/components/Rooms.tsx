import { useState } from "react";
import { motion } from "framer-motion";
import DeluxeSuite from "../assets/deluxe.jpg";
import StandardRoom from "../assets/standard.jpg";
import TwoBed3 from "../assets/two-bed-3.jpg";
import TwoBed4 from "../assets/two-bed-4.jpg";
import BudgetRoom from "../assets/budget.jpg";
import FamilyRoom from "../assets/family.jpg";
import ThreeBed3 from "../assets/three-bed-3.jpg";
import ThreeBed4 from "../assets/three-bed-4.jpg";
import Beach1 from "../assets/beach-front-1.jpg";
import Beach2 from "../assets/beach-front-2.jpg";
import Beach3 from "../assets/beach-front-3.jpg";
import Beach4 from "../assets/beach-front-4.jpg";
import Beach5 from "../assets/beach-front-5.jpg";
import Beach6 from "../assets/beach-front-6.jpg";
import Beach7 from "../assets/beach-front-7.jpg";

interface Room {
    id: number;
    title: string;
    price: string;
    location: string;
    note?: string;
    images: string[];
}

const rooms: Room[] = [
    {
        id: 1,
        title: "Fully Furnished 2 Bedroom Apartment",
        price: "$200",
        location: "Nyali, Mombasa, Kenya",
        images: [DeluxeSuite, StandardRoom, TwoBed3, TwoBed4],
    },
    {
        id: 2,
        title: "Fully Furnished 3 Bedroom Apartment",
        price: "$360",
        location: "Nyali, Mombasa, Kenya",
        images: [BudgetRoom, FamilyRoom, ThreeBed3, ThreeBed4],
    },
    {
        id: 3,
        title: "Elegantly Furnished 3 Bedroom Beachfront Apartment",
        price: "$360",
        note: "DSQ @ $50 Extra",
        location: "Nyali, Mombasa, Kenya",
        images: [Beach1, Beach2, Beach3, Beach4, Beach5, Beach6, Beach7],
    },
];

function RoomCard({ room, i }: { room: Room; i: number }) {
    const [index, setIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIndex((prev) => (prev + 1) % room.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
    };

    return (
        <motion.div
            className="room-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
        >
            <div className="img-wrapper" style={{ position: "relative" }}>
                <img src={room.images[index]} alt={`${room.title} view ${index + 1}`} />
                
                {room.images.length > 1 && (
                    <>
                        <button className="slider-btn prev" onClick={prevImage} aria-label="Previous image">
                            &#10094;
                        </button>
                        <button className="slider-btn next" onClick={nextImage} aria-label="Next image">
                            &#10095;
                        </button>
                        
                        <div className="slider-dots">
                            {room.images.map((_, dotIdx) => (
                                <span
                                    key={dotIdx}
                                    className={`slider-dot ${dotIdx === index ? "active" : ""}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIndex(dotIdx);
                                    }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            
            <div className="room-card-content">
                <h3>{room.title}</h3>
                <p className="room-location">📍 {room.location}</p>
                <div className="price-container">
                    <p className="room-price">
                        {room.price} <span className="per-night">/ night</span>
                    </p>
                    {room.note && <span className="room-note">{room.note}</span>}
                </div>
                
                <a
                    href={`https://wa.me/254713044664?text=${encodeURIComponent(
                        `Hello, I would like to book a stay at the ${room.title} in Nyali Mombasa.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="room-book-btn"
                >
                    Book via WhatsApp
                </a>
            </div>
        </motion.div>
    );
}

export default function Rooms() {
    return (
        <section id="rooms" className="rooms-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Serviced Apartments
                </motion.h2>

                <div className="room-grid">
                    {rooms.map((room, i) => (
                        <RoomCard key={room.id} room={room} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}