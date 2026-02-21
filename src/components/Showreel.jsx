import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import './Showreel.css';

const projects = [
    { id: 1, title: 'Neon Campaign', type: 'AI Ad', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 2, title: 'Aero Dynamics', type: 'Video Editing', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 3, title: 'Cyber UI', type: 'Full-Stack Web App', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 4, title: 'Quantum Shift', type: 'AI Ad', video: 'https://www.w3schools.com/html/mov_bbb.mp4' }
];

const Showreel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section id="works" ref={targetRef} className="showreel-section">
            <div className="showreel-sticky-container">
                <div className="title-section showreel-title">
                    <motion.h2>Selected <span className="gradient-text">Works</span></motion.h2>
                    <p>A cinematic showcase of recent projects.</p>
                </div>

                <div className="showreel-scroll-area container">
                    <motion.div style={{ x }} className="showreel-track">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="showreel-item glass-panel"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) video.play();
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) {
                                        video.pause();
                                    }
                                }}
                            >
                                <video loop muted playsInline className="showreel-video">
                                    <source src={project.video} type="video/mp4" />
                                </video>
                                <div className="showreel-overlay"></div>
                                <div className="showreel-content">
                                    <div className="play-button">
                                        <Play fill="white" size={24} />
                                    </div>
                                    <div className="showreel-text">
                                        <h3>{project.title}</h3>
                                        <p>{project.type}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Showreel;
