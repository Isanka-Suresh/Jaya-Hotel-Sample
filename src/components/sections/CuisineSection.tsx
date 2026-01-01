"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChefHat, Flame, Leaf } from "@phosphor-icons/react/dist/ssr";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { cuisineItems } from "@/data/content";

/**
 * CuisineSection - Sri Lankan cuisine showcase with Phosphor icons
 */
export default function CuisineSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <SectionWrapper id="cuisine" bgColor="cream">
            <div ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-ocean-light text-ocean-deep text-sm font-semibold rounded-full mb-4">
                        Culinary Excellence
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                        Sri Lankan Cuisine
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Embark on a gastronomic journey through the rich flavors of Sri Lanka,
                        where ancient recipes meet modern culinary artistry
                    </p>
                </motion.div>

                {/* Cultural Story Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative rounded-3xl overflow-hidden mb-12 lg:mb-16"
                >
                    <div className="relative h-[300px] md:h-[400px]">
                        <Image
                            src="/images/fish.jpg"
                            alt="Sri Lankan traditional cooking"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/90 via-ocean-deep/60 to-transparent" />
                    </div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="p-8 md:p-12 lg:p-16 max-w-2xl">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                A Legacy of Flavors
                            </h3>
                            <p className="text-white/90 text-lg leading-relaxed mb-6">
                                Our chefs draw inspiration from centuries-old Sri Lankan traditions,
                                using locally sourced spices and the freshest catch from our coastal waters.
                                Each dish tells a story of our island&apos;s rich heritage.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm flex items-center gap-2">
                                    <Flame weight="fill" className="w-4 h-4" />
                                    Authentic Spices
                                </span>
                                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.5 8.5a1 1 0 112 0 1 1 0 01-2 0zm3 4a1 1 0 112 0 1 1 0 01-2 0zm-4.5 1a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z" />
                                    </svg>
                                    Fresh Seafood
                                </span>
                                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm flex items-center gap-2">
                                    <Leaf weight="fill" className="w-4 h-4" />
                                    Organic Ingredients
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Cuisine Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {cuisineItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                {/* Image */}
                                <div className="relative h-[200px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    {/* Type Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-ocean-deep text-sm font-medium rounded-full">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-ocean-deep mb-2 group-hover:text-sunset transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Chef's Note */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-md">
                        <div className="w-12 h-12 bg-sunset rounded-full flex items-center justify-center text-white">
                            <ChefHat weight="fill" className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-ocean-deep">Chef&apos;s Table Experience</p>
                            <p className="text-gray-500 text-sm">Reserve a personalized culinary journey</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-4 px-5 py-2 bg-ocean-deep text-white rounded-full text-sm font-semibold hover:bg-sunset transition-colors"
                        >
                            Reserve
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
