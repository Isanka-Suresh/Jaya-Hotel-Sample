"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    variant?: "light" | "dark" | "gradient";
}

/**
 * GlassCard - Glassmorphism card component with hover effects
 * Supports light, dark, and gradient variants
 */
export default function GlassCard({
    children,
    className = "",
    hover = true,
    variant = "light",
}: GlassCardProps) {
    const variants = {
        light: "bg-white/70 backdrop-blur-md border border-white/40 shadow-lg",
        dark: "bg-ocean-deep/70 backdrop-blur-md border border-white/10 text-white shadow-xl",
        gradient:
            "bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/30 shadow-xl",
    };

    return (
        <motion.div
            className={`rounded-2xl p-6 ${variants[variant]} ${className}`}
            whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
