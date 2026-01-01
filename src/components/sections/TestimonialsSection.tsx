"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star } from "@phosphor-icons/react/dist/ssr";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/content";

/**
 * TestimonialsSection - Guest reviews carousel with fixed height
 */
export default function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                weight={i < rating ? "fill" : "regular"}
                className={`w-5 h-5 ${i < rating ? "text-sunset" : "text-gray-300"}`}
            />
        ));
    };

    return (
        <SectionWrapper id="testimonials" bgColor="ocean-light">
            <div ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-white text-ocean-deep text-sm font-semibold rounded-full mb-4">
                        Guest Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                        What Our Guests Say
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Real experiences from travelers who found their paradise at Jaya Hotel
                    </p>
                </motion.div>

                {/* Testimonial Carousel with Fixed Height */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Main Card - Fixed Height */}
                    <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden h-[400px] md:h-[350px] flex flex-col">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-8 text-ocean-light">
                            <svg className="w-24 h-24 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {renderStars(testimonials[currentIndex].rating)}
                            </div>

                            {/* Quote - Fixed height container */}
                            <div className="flex-1 overflow-hidden mb-8">
                                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic line-clamp-4">
                                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                                </blockquote>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-14 h-14 bg-gradient-to-br from-ocean-mid to-ocean-deep rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                    {testimonials[currentIndex].avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-ocean-deep text-lg">
                                        {testimonials[currentIndex].name}
                                    </p>
                                    <p className="text-gray-500 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        {testimonials[currentIndex].country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-ocean-deep hover:bg-ocean-deep hover:text-white transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                            ? "bg-ocean-deep w-8"
                                            : "bg-ocean-deep/30 hover:bg-ocean-deep/50"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-ocean-deep hover:bg-ocean-deep hover:text-white transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
