import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        // Shrink and make more opaque when scrolled past 50px
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Hide navbar on scroll down, show on scroll up
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-150%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        >
            <div className="navbar-container">
                <a href="#home" className="logo-container">
                    <div className="text-logo cinematic-logo">
                        SABBIR <span className="logo-divider">|</span> HOSEN
                    </div>
                </a>

                <ul className="nav-links">
                    <li><a href="#expertise"><span>Expertise</span></a></li>
                    <li><a href="#works"><span>Works</span></a></li>
                    <li><a href="#process"><span>Process</span></a></li>
                    <li><a href="#gallery"><span>Portfolio</span></a></li>
                    <li><a href="#contact"><span>Contact</span></a></li>
                </ul>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu size={28} color="white" />
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ clipPath: 'circle(0% at 90% 10%)' }}
                        animate={{ clipPath: 'circle(150% at 90% 10%)' }}
                        exit={{ clipPath: 'circle(0% at 90% 10%)' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            className="mobile-menu-close"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} color="white" />
                        </button>

                        <div className="mobile-nav-links">
                            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                            <a href="#expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
                            <a href="#works" onClick={() => setMobileMenuOpen(false)}>Works</a>
                            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
                            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
