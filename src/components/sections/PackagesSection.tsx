"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { packages } from "@/data/content";

/**
 * PackagesSection - Glassmorphic pricing cards with fixed heights
 */
export default function PackagesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="packages" className="relative py-20 lg:py-28 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/bg-3.jpg')" }}
            />
            <div className="absolute inset-0 bg-ocean-deep/85 backdrop-blur-sm" />

            <div ref={ref} className="relative container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-4 backdrop-blur-sm">
                        Special Offers
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Packages & Offers
                    </h2>
                    <p className="max-w-2xl mx-auto text-white/80 text-lg">
                        Curated experiences designed to make your stay extraordinary—choose
                        the perfect package for your dream getaway
                    </p>
                </motion.div>

                {/* Packages Grid - Fixed Heights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group ${pkg.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <span className="px-4 py-1 bg-sunset text-white text-sm font-semibold rounded-full shadow-lg">
                                        Popular Choice
                                    </span>
                                </div>
                            )}

                            {/* Glassmorphic Card with Fixed Height */}
                            <div
                                className={`h-[520px] rounded-3xl p-6 lg:p-8 transition-all duration-300 group-hover:-translate-y-2 flex flex-col ${pkg.popular
                                        ? "bg-white/25 backdrop-blur-md border-2 border-sunset/50 shadow-2xl"
                                        : "glass-card"
                                    }`}
                            >
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                                    <div className="flex items-end justify-center gap-1">
                                        <span className="text-3xl lg:text-4xl font-bold text-white">{pkg.price}</span>
                                    </div>
                                    <p className="text-white/60 text-sm mt-1">{pkg.duration}</p>
                                </div>

                                {/* Features - Flex grow to push button to bottom */}
                                <ul className="space-y-3 mb-6 flex-1">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/90">
                                            <div className="w-5 h-5 bg-sunset rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check weight="bold" className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button - Always at bottom */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-3 rounded-full font-semibold transition-all mt-auto ${pkg.popular
                                            ? "bg-sunset text-white hover:bg-coral shadow-lg"
                                            : "bg-white/20 text-white hover:bg-white hover:text-ocean-deep"
                                        }`}
                                >
                                    Book Package
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center text-white/60 text-sm mt-10"
                >
                    * Seasonal rates apply. Contact us for custom packages and group bookings.
                </motion.p>
            </div>
        </section>
    );
}
