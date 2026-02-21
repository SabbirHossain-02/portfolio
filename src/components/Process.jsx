import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Code2, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
    { icon: <Target className="process-icon" size={32} />, title: "1. Strategy & Discovery", desc: "Understanding your brand, target audience, and project goals before a single pixel is moved." },
    { icon: <Lightbulb className="process-icon" size={32} />, title: "2. Creative Concept", desc: "Generating AI-driven visual concepts or architectural blueprints for your app." },
    { icon: <Code2 className="process-icon" size={32} />, title: "3. Execution", desc: "Meticulous video editing or full-stack coding to bring the vision to life." },
    { icon: <Rocket className="process-icon" size={32} />, title: "4. Delivery & Scale", desc: "Final revisions, launch strategy, and optimization for maximum conversion." }
];

const Process = () => {
    return (
        <section id="process" className="section container">
            <div className="title-section">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our <span className="gradient-text">Process</span>
                </motion.h2>
                <p>From idea to digital masterpiece in 4 steps.</p>
            </div>

            <div className="process-timeline">
                {steps.map((step, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        key={index}
                        className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="process-content glass-panel">
                            <div className="process-icon-wrapper">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Process;
