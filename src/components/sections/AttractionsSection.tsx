"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapTrifold, Clock } from "@phosphor-icons/react/dist/ssr";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { attractions } from "@/data/content";

/**
 * AttractionsSection - Nearby places to visit with Phosphor icons
 */
export default function AttractionsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <SectionWrapper id="attractions" bgColor="ocean-light">
            <div ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-white text-ocean-deep text-sm font-semibold rounded-full mb-4">
                        Explore the Region
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                        Places to Visit
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Southern Sri Lanka is brimming with adventures—from ancient heritage
                        sites to thrilling wildlife encounters
                    </p>
                </motion.div>

                {/* Attractions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {attractions.map((attraction, index) => (
                        <motion.div
                            key={attraction.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                {/* Image */}
                                <div className="relative h-[220px] overflow-hidden">
                                    <Image
                                        src={attraction.image}
                                        alt={attraction.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />

                                    {/* Type Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-sunset text-white text-sm font-medium rounded-full">
                                            {attraction.type}
                                        </span>
                                    </div>

                                    {/* Distance Badge */}
                                    <div className="absolute bottom-4 right-4">
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm text-ocean-deep text-sm font-medium rounded-full">
                                            <Clock weight="bold" className="w-4 h-4" />
                                            {attraction.distance}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-ocean-deep mb-2 group-hover:text-sunset transition-colors">
                                        {attraction.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {attraction.description}
                                    </p>

                                    {/* Action Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-ocean-mid font-semibold text-sm group-hover:text-sunset transition-colors"
                                    >
                                        Plan Visit
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Concierge CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 lg:mt-16"
                >
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-ocean-mid to-ocean-deep rounded-2xl flex items-center justify-center">
                                <MapTrifold weight="duotone" className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-ocean-deep">Personalized Excursions</h3>
                                <p className="text-gray-600">
                                    Our concierge can arrange custom tours tailored to your interests
                                </p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary whitespace-nowrap"
                        >
                            Speak with Concierge
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
