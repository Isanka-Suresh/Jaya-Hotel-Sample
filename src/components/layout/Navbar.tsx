"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, hotelInfo } from "@/data/content";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            const sections = navLinks.map((link) => link.href.replace("#", ""));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#hero");
                    }}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <div
                        className={`text-2xl md:text-3xl font-bold tracking-tight ${isScrolled ? "text-ocean-deep" : "text-white"
                            }`}
                    >
                        <span className="font-light">Jaya</span>
                        <span className="font-semibold">Hotel</span>
                    </div>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                    ? isScrolled
                                        ? "bg-ocean-deep text-white"
                                        : "bg-white/20 text-white"
                                    : isScrolled
                                        ? "text-gray-700 hover:text-ocean-deep hover:bg-gray-100"
                                        : "text-white/90 hover:text-white hover:bg-white/10"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Book Now Button - Desktop */}
                <motion.a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#contact");
                    }}
                    className={`hidden lg:block px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${isScrolled
                            ? "bg-gradient-to-r from-sunset to-coral text-white shadow-lg hover:shadow-xl"
                            : "glass text-white hover:bg-white/30"
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Book Now
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-ocean-deep" : "text-white"
                        }`}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all ${activeSection === link.href.replace("#", "")
                                            ? "bg-ocean-deep text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("#contact");
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="mt-2 px-4 py-3 bg-gradient-to-r from-sunset to-coral text-white rounded-lg font-semibold text-center"
                            >
                                Book Now
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
