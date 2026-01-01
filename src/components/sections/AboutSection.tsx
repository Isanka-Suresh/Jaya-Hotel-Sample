"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

/**
 * AboutSection - Story of Jaya Hotel with Sri Lankan hospitality narrative
 */
export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Tropical Paradise",
            description: "Nestled on pristine golden beaches with crystal-clear waters",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Warm Hospitality",
            description: "Experience genuine Sri Lankan warmth and exceptional service",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ),
            title: "Cultural Heritage",
            description: "Immerse in rich traditions and authentic local experiences",
        },
    ];

    return (
        <SectionWrapper id="about" bgColor="white">
            <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <div className="aspect-[4/5]">
                            <Image
                                src="/images/bg-1.jpg"
                                alt="Jaya Hotel luxury accommodation"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute -bottom-8 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-6 max-w-[240px]"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-sunset to-coral rounded-full flex items-center justify-center">
                                <span className="text-white text-xl font-bold">15+</span>
                            </div>
                            <div>
                                <p className="text-ocean-deep font-bold text-lg">Years</p>
                                <p className="text-gray-500 text-sm">of Excellence</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Creating unforgettable memories for guests worldwide
                        </p>
                    </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-1.5 bg-ocean-light text-ocean-deep text-sm font-semibold rounded-full mb-4">
                        Our Story
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-6">
                        Where Tradition Meets
                        <span className="gradient-text block">Modern Luxury</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Perched on the sun-kissed shores of Southern Sri Lanka, Jaya Hotel is more than
                        a destination—it&apos;s an experience that awakens your senses. Our story began with
                        a dream to create a sanctuary where the rhythm of the ocean meets the warmth of
                        Sri Lankan hospitality.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        Every detail at Jaya Hotel reflects our commitment to authentic luxury—from the
                        handcrafted furnishings that honor local artisans to the flavors of our cuisine
                        that celebrate centuries-old recipes. Here, the ocean breeze carries whispers of
                        ancient traditions, while modern comforts ensure your stay is nothing short of extraordinary.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 bg-ocean-light rounded-xl flex items-center justify-center text-ocean-deep flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-ocean-deep mb-1">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                        onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Discover Our Rooms
                    </motion.button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
