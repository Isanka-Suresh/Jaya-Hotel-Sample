"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
    bgColor?: "white" | "cream" | "ocean-light" | "ocean-deep";
}

/**
 * SectionWrapper - Reusable section container with scroll animations
 * Provides consistent padding, section IDs for navigation, and fade-in effects
 */
export default function SectionWrapper({
    children,
    id,
    className = "",
    bgColor = "white",
}: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const bgColors = {
        white: "bg-white",
        cream: "bg-cream",
        "ocean-light": "bg-ocean-light",
        "ocean-deep": "bg-ocean-deep text-white",
    };

    return (
        <section
            id={id}
            ref={ref}
            className={`section-padding ${bgColors[bgColor]} ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="container mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
}
