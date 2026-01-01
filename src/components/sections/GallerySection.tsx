"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { galleryImages } from "@/data/content";

/**
 * GallerySection - Proper bento-box grid layout with lightbox functionality
 */
export default function GallerySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <SectionWrapper id="gallery" bgColor="white">
            <div ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-ocean-light text-ocean-deep text-sm font-semibold rounded-full mb-4">
                        Visual Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                        Ocean Views & Gallery
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Discover the beauty that awaits you—from stunning sunsets to our elegant spaces
                    </p>
                </motion.div>

                {/* Bento Box Grid - Fixed Layout */}
                <div className="grid grid-cols-4 grid-rows-3 gap-4 lg:gap-6 h-[600px] lg:h-[700px]">
                    {/* Large item - top left (2x2) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(0)}
                    >
                        <Image
                            src={galleryImages[0].src}
                            alt={galleryImages[0].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-ocean-deep text-sm font-medium rounded-full">
                                {galleryImages[0].category}
                            </span>
                        </div>
                    </motion.div>

                    {/* Medium item - top right (2x1) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(1)}
                    >
                        <Image
                            src={galleryImages[1].src}
                            alt={galleryImages[1].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-ocean-deep text-sm font-medium rounded-full">
                                {galleryImages[1].category}
                            </span>
                        </div>
                    </motion.div>

                    {/* Small items - middle right (1x1 each) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(2)}
                    >
                        <Image
                            src={galleryImages[2].src}
                            alt={galleryImages[2].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(3)}
                    >
                        <Image
                            src={galleryImages[3].src}
                            alt={galleryImages[3].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Bottom row items (1x1 each) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(4)}
                    >
                        <Image
                            src={galleryImages[4].src}
                            alt={galleryImages[4].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(5)}
                    >
                        <Image
                            src={galleryImages[5].src}
                            alt={galleryImages[5].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Large item bottom right (2x1) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl cursor-pointer group"
                        onClick={() => setSelectedImage(6)}
                    >
                        <Image
                            src={galleryImages[6].src}
                            alt={galleryImages[6].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-ocean-deep text-sm font-medium rounded-full">
                                {galleryImages[6].category}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Arrows */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-5xl max-h-[80vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </motion.div>

                        {/* Caption */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                            <p className="text-white text-lg font-medium">{galleryImages[selectedImage].alt}</p>
                            <p className="text-white/70 text-sm mt-1">
                                {selectedImage + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
}
