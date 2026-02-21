import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WelcomePopup.css';

const WelcomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedVault');
        if (!hasVisited) {
            // Slight delay so the user doesn't see a flash before the effect starts
            setTimeout(() => setIsVisible(true), 100);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && location.trim()) {
            localStorage.setItem('hasVisitedVault', 'true');
            localStorage.setItem('visitorName', name);
            localStorage.setItem('visitorLocation', location);
            setIsSubmitted(true);
            setTimeout(() => setIsVisible(false), 1500); // Wait for door opening animation
        }
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {!isSubmitted ? (
                <motion.div
                    className="vault-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // The overlay fades out eventually after doors open
                    transition={{ duration: 0.5 }}
                >
                    <div className="vault-door left-door"></div>
                    <div className="vault-door right-door"></div>

                    <motion.div
                        className="vault-content"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2>Access <span className="gradient-text">The Vault</span></h2>
                        <form onSubmit={handleSubmit} className="vault-form">
                            <input
                                type="text"
                                placeholder="ENTER NAME"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="vault-input"
                                autoFocus
                            />
                            <input
                                type="text"
                                placeholder="ENTER LOCATION"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                                className="vault-input"
                            />
                            <button type="submit" className="vault-submit">UNSEAL</button>
                        </form>
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div
                    className="vault-overlay opening"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 1 } }}
                >
                    {/* The doors split apart when opening class is added */}
                    <div className="vault-door left-door opening-left"></div>
                    <div className="vault-door right-door opening-right"></div>

                    <motion.div
                        className="welcome-message"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>WELCOME, <span className="gradient-text">{name.toUpperCase()}</span></h1>
                        <p>FROM {location.toUpperCase()}</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomePopup;
