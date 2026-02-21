import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    // Replace this with your actual Cloudinary Video URL
    const dummyVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

    return (
        <section id="home" className="hero-section">
            <div className="video-overlay"></div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src={dummyVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="hero-content container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="hero-headline"
                >
                    Transforming Ideas into <br />
                    <span className="gradient-text">Digital Masterpieces</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="hero-subheadline"
                >
                    Elevating brands with AI-Powered Ads, Next-Gen Video Editing & Full-Stack Development
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="hero-cta glass-panel"
                >
                    Book a Project
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
