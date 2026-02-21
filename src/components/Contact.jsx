import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="contact" className="contact-section container section" style={{ perspective: "1000px" }}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="contact-wrapper glass-panel"
            >
                <div className="contact-info">
                    <h2>Ready to elevate your <span className="gradient-text">Brand?</span></h2>
                    <p>Let's discuss how we can transform your ideas into high-converting digital realities.</p>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <input type="text" id="name" required placeholder=" " />
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" required placeholder=" " />
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" rows="4" required placeholder=" "></textarea>
                        <label htmlFor="message">Your Message</label>
                    </div>

                    <button type="submit" className="submit-btn glass-panel">
                        Send Message <Send size={20} />
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
