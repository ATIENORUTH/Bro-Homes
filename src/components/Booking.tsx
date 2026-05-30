import { useState } from "react";
import { motion } from "framer-motion";

export default function Booking() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        room: "",
        checkIn: "",
        checkOut: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const isValid =
        form.name &&
        form.phone &&
        form.room &&
        form.checkIn &&
        form.checkOut;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!isValid) return;

        setLoading(true);

        setTimeout(() => {
            const message = `
🏡 BRO HOMES BOOKING REQUEST

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🏠 Room: ${form.room}
📅 Check-in: ${form.checkIn}
📅 Check-out: ${form.checkOut}
      `;

            const whatsappNumber = "254700000000"; // 🔁 replace

            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
            )}`;

            window.open(url, "_blank");

            setLoading(false);
            setSuccess(true);

            setForm({
                name: "",
                phone: "",
                room: "",
                checkIn: "",
                checkOut: "",
            });

            setTimeout(() => setSuccess(false), 3000);
        }, 800);
    }

    return (
        <motion.section
            className="booking"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2>Book Your Stay</h2>

            {success && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: "green", marginBottom: "10px" }}
                >
                    ✔ Booking sent successfully!
                </motion.div>
            )}

            <motion.form
                onSubmit={handleSubmit}
                className="booking-form"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.input
                    whileFocus={{ scale: 1.03 }}
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <motion.input
                    whileFocus={{ scale: 1.03 }}
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                />

                <motion.select
                    whileFocus={{ scale: 1.03 }}
                    name="room"
                    value={form.room}
                    onChange={handleChange}
                >
                    <option value="">Select Room</option>
                    <option>Deluxe Room</option>
                    <option>Standard Room</option>
                    <option>Budget Room</option>
                </motion.select>

                <motion.input
                    whileFocus={{ scale: 1.03 }}
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleChange}
                />

                <motion.input
                    whileFocus={{ scale: 1.03 }}
                    type="date"
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleChange}
                />

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="btn"
                    disabled={!isValid || loading}
                    style={{
                        opacity: !isValid || loading ? 0.6 : 1,
                        cursor: !isValid || loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Sending..." : "Send Booking via WhatsApp"}
                </motion.button>
            </motion.form>
        </motion.section>
    );
}