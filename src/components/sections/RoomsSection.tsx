"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { rooms } from "@/data/content";

/**
 * RoomsSection - Grid layout showcasing 6 hotel rooms and suites
 */
export default function RoomsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <SectionWrapper id="rooms" bgColor="cream">
            <div ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-ocean-light text-ocean-deep text-sm font-semibold rounded-full mb-4">
                        Accommodations
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                        Rooms & Suites
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Each room is a sanctuary designed for comfort, with ocean views that
                        transform every moment into a memory.
                    </p>
                </motion.div>

                {/* Balanced Grid Layout - 2 rows of 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-[240px] overflow-hidden">
                                    <Image
                                        src={room.images[0]}
                                        alt={room.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Popular Badge for Beachfront Suite */}
                                    {room.id === 2 && (
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-sunset text-white text-sm font-semibold rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5 lg:p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold text-ocean-deep group-hover:text-sunset transition-colors">
                                            {room.name}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {room.description}
                                    </p>

                                    {/* Amenities */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {room.amenities.slice(0, 3).map((amenity) => (
                                            <span
                                                key={amenity}
                                                className="px-2 py-1 bg-ocean-light text-ocean-deep text-xs rounded-full"
                                            >
                                                {amenity}
                                            </span>
                                        ))}
                                        {room.amenities.length > 3 && (
                                            <span className="px-2 py-1 text-gray-500 text-xs">
                                                +{room.amenities.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div>
                                            <span className="text-sunset font-bold text-lg">{room.price}</span>
                                            <span className="text-gray-500 text-sm ml-2 block md:inline">
                                                {room.size}
                                            </span>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-10 h-10 bg-ocean-deep text-white rounded-full flex items-center justify-center hover:bg-sunset transition-colors"
                                            aria-label={`View ${room.name} details`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
