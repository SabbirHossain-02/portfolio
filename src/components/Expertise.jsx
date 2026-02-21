import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Bot, Video, MonitorPlay } from 'lucide-react';
import './Expertise.css';

const services = [
    {
        title: "AI-Powered Ads",
        description: "Data-driven, highly optimized ad campaigns utilizing generative AI to maximize conversion and engagement.",
        icon: <Bot size={48} className="expertise-icon" />,
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        title: "Cinematic Video Editing",
        description: "High-retention video content, meticulously cut and color-graded to tell your brand's unique story.",
        icon: <Video size={48} className="expertise-icon" />,
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        title: "Full-Stack Development",
        description: "Scalable, modern, and animation-rich web applications built from scratch to elevate your online presence.",
        icon: <MonitorPlay size={48} className="expertise-icon" />,
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
];

const Expertise = () => {
    return (
        <section id="expertise" className="section container">
            <div className="title-section">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Core <span className="gradient-text">Expertise</span>
                </motion.h2>
                <p>Delivering high-end solutions across digital landscapes.</p>
            </div>

            <div className="expertise-grid">
                {services.map((service, index) => (
                    <Tilt
                        key={index}
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        scale={1.05}
                        transitionSpeed={400}
                        className="glass-panel expertise-card"
                    >
                        <div className="expertise-card-inner">
                            <div className="expertise-video-container">
                                {/* Cloudinary URL structured dummy video for now on hover */}
                                <video loop muted playsInline autoPlay className="expertise-hover-video">
                                    <source src={service.video} type="video/mp4" />
                                </video>
                                <div className="expertise-video-overlay"></div>
                                <div className="expertise-icon-wrapper">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="expertise-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}
export default Expertise;
