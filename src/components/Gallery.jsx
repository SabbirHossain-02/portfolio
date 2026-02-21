import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, X } from 'lucide-react';
import './Gallery.css';

const galleryItems = [
    { id: 1, title: 'Neon Campaign', category: 'AI Ad', video: 'https://www.w3schools.com/html/mov_bbb.mp4', size: 'large' },
    { id: 2, title: 'Aero Dynamics', category: 'Video Editing', video: 'https://www.w3schools.com/html/mov_bbb.mp4', size: 'small' },
    { id: 3, title: 'Cyber UI', category: 'Web App', video: 'https://www.w3schools.com/html/mov_bbb.mp4', size: 'medium' },
    { id: 4, title: 'Quantum Shift', category: 'AI Ad', video: 'https://www.w3schools.com/html/mov_bbb.mp4', size: 'medium' },
    { id: 5, title: 'Echo Protocol', category: '3D Render', video: 'https://www.w3schools.com/html/mov_bbb.mp4', size: 'large' },
    { id: 6, title: 'Flux Layout', category: 'UI/UX', video: 'https://www.w3schools.com/html/mov_bbb.mp4', size: 'small' }
];

const Gallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
    const rotateZ = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    return (
        <section id="gallery" ref={containerRef} className="gallery-section section container">
            <div className="title-section">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My <span className="gradient-text">Portfolio</span>
                </motion.h2>
                <p>An immersive showcase of high-end digital craftsmanship.</p>
            </div>

            <motion.div
                className="gallery-masonry"
                style={{ rotateX, rotateZ, transformStyle: "preserve-3d", perspective: "1500px" }}
            >
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`gallery-item glass-panel ${item.size}`}
                        onClick={() => setSelectedVideo(item)}
                    >
                        <video
                            loop
                            muted
                            playsInline
                            className="gallery-video-thumb"
                            onMouseEnter={(e) => e.target.play()}
                            onMouseLeave={(e) => e.target.pause()}
                        >
                            <source src={item.video} type="video/mp4" />
                        </video>
                        <div className="gallery-overlay"></div>
                        <div className="gallery-content">
                            <div className="gallery-play-btn">
                                <Play size={20} fill="white" />
                            </div>
                            <div className="gallery-text">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <button className="lightbox-close" onClick={() => setSelectedVideo(null)}>
                            <X size={32} color="white" />
                        </button>

                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                autoPlay
                                controls
                                className="lightbox-video"
                            >
                                <source src={selectedVideo.video} type="video/mp4" />
                            </video>
                            <div className="lightbox-info">
                                <h2>{selectedVideo.title}</h2>
                                <p>{selectedVideo.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
