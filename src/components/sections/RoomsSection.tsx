"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { rooms } from "@/data/content";
import { CaretLeft, CaretRight, Bed, Drop, SwimmingPool, Users, Star, ArrowRight } from "@phosphor-icons/react";

/**
 * RoomsSection - Premium carousel-based room showcase with glassmorphism design
 * Features:
 * - Hero carousel for featured rooms
 * - Glassmorphism cards with floating price badges
 * - Touch-friendly swipe navigation
 * - Accordion details on mobile
 */
export default function RoomsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeSlide, setActiveSlide] = useState(0);
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Get featured rooms for carousel
    const featuredRooms = rooms.filter((room) => room.featured);
    const allRooms = rooms;

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % featuredRooms.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [featuredRooms.length]);

    // Touch handlers for swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setActiveSlide((prev) => (prev + 1) % featuredRooms.length);
        }
        if (isRightSwipe) {
            setActiveSlide((prev) => (prev - 1 + featuredRooms.length) % featuredRooms.length);
        }
    };

    const nextSlide = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % featuredRooms.length);
    }, [featuredRooms.length]);

    const prevSlide = useCallback(() => {
        setActiveSlide((prev) => (prev - 1 + featuredRooms.length) % featuredRooms.length);
    }, [featuredRooms.length]);

    const getAmenityIcon = (amenity: string) => {
        if (amenity.toLowerCase().includes("bed")) return <Bed size={14} />;
        if (amenity.toLowerCase().includes("pool")) return <SwimmingPool size={14} />;
        if (amenity.toLowerCase().includes("shower") || amenity.toLowerCase().includes("bath")) return <Drop size={14} />;
        if (amenity.toLowerCase().includes("family") || amenity.toLowerCase().includes("bedroom")) return <Users size={14} />;
        return <Star size={14} />;
    };

    return (
        <section
            id="rooms"
            ref={ref}
            className="rooms-section-bg section-padding"
        >
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-header-premium"
                >
                    <span className="tag">✦ Luxury Accommodations</span>
                    <h2>Rooms & Suites</h2>
                    <p>
                        Discover our collection of exquisitely designed rooms and suites,
                        each offering unparalleled comfort with stunning ocean views.
                    </p>
                </motion.div>

                {/* Featured Rooms Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="room-carousel mb-12 lg:mb-16"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="room-carousel-slide"
                        >
                            <Image
                                src={featuredRooms[activeSlide].images[0]}
                                alt={featuredRooms[activeSlide].name}
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                            <div className="room-carousel-content">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="featured-badge" style={{ position: 'relative', top: 0, left: 0 }}>
                                            ★ Featured
                                        </span>
                                        <span className="text-white/70 text-sm">{featuredRooms[activeSlide].size}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                                        {featuredRooms[activeSlide].name}
                                    </h3>
                                    <p className="text-white/80 max-w-xl mb-4 text-base md:text-lg">
                                        {featuredRooms[activeSlide].description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl md:text-4xl font-bold text-sunset">
                                                {featuredRooms[activeSlide].price}
                                            </span>
                                            <span className="text-white/60">
                                                /{featuredRooms[activeSlide].priceLabel}
                                            </span>
                                        </div>
                                        <button className="view-details-btn">
                                            View Details
                                            <ArrowRight size={18} weight="bold" />
                                        </button>
                                        <button className="book-now-btn">
                                            Book Now
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="carousel-arrow prev"
                        aria-label="Previous slide"
                    >
                        <CaretLeft size={24} weight="bold" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="carousel-arrow next"
                        aria-label="Next slide"
                    >
                        <CaretRight size={24} weight="bold" />
                    </button>

                    {/* Carousel Dots */}
                    <div className="carousel-dots">
                        {featuredRooms.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile Swipe Indicator */}
                    <div className="swipe-indicator">
                        <CaretLeft size={16} />
                        <span>Swipe to explore</span>
                        <CaretRight size={16} />
                    </div>
                </motion.div>

                {/* All Rooms Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                        Explore All Accommodations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allRooms.map((room, index) => (
                            <motion.div
                                key={room.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="room-card-glass"
                            >
                                {/* Image Container */}
                                <div className="room-image-container">
                                    <Image
                                        src={room.images[0]}
                                        alt={room.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Price Badge */}
                                    <div className="price-badge">
                                        {room.price}
                                        <span> /{room.priceLabel}</span>
                                    </div>
                                    {/* Featured Badge */}
                                    {room.featured && (
                                        <div className="featured-badge">★ Featured</div>
                                    )}
                                </div>

                                {/* Room Info */}
                                <div className="room-info">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3>{room.name}</h3>
                                        <span className="text-sm text-white/60">{room.size}</span>
                                    </div>
                                    <p className="line-clamp-2">{room.description}</p>

                                    {/* Amenities */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {room.amenities.slice(0, 3).map((amenity) => (
                                            <span key={amenity} className="amenity-tag">
                                                {getAmenityIcon(amenity)}
                                                {amenity}
                                            </span>
                                        ))}
                                        {room.amenities.length > 3 && (
                                            <span className="amenity-tag">+{room.amenities.length - 3}</span>
                                        )}
                                    </div>

                                    {/* Accordion Details - Toggle on Click */}
                                    <div className={`room-accordion ${expandedCard === room.id ? 'open' : ''}`}>
                                        <div className="pt-4 border-t border-white/10">
                                            <h4 className="text-sm font-semibold mb-2 text-white/90">All Amenities</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {room.amenities.map((amenity) => (
                                                    <span key={amenity} className="amenity-tag">
                                                        {getAmenityIcon(amenity)}
                                                        {amenity}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <button
                                            onClick={() => setExpandedCard(expandedCard === room.id ? null : room.id)}
                                            className="view-details-btn flex-1 justify-center"
                                        >
                                            {expandedCard === room.id ? 'Less' : 'Details'}
                                            <ArrowRight
                                                size={16}
                                                weight="bold"
                                                style={{
                                                    transform: expandedCard === room.id ? 'rotate(-90deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </button>
                                        <button className="book-now-btn flex-1 justify-center">
                                            Book
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
