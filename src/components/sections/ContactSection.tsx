"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { hotelInfo } from "@/data/content";
import {
    MapPin,
    Phone,
    WhatsappLogo,
    EnvelopeSimple,
    ArrowRight,
    FacebookLogo,
    InstagramLogo,
    TwitterLogo,
    Clock,
} from "@phosphor-icons/react";

/**
 * ContactSection - Enhanced contact info, map, and social links
 * With premium styling and improved mobile responsiveness
 */
export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactMethods = [
        {
            icon: <MapPin weight="duotone" className="w-6 h-6" />,
            title: "Location",
            content: hotelInfo.address,
            action: "Get Directions",
            link: "https://maps.google.com",
        },
        {
            icon: <Phone weight="duotone" className="w-6 h-6" />,
            title: "Phone",
            content: hotelInfo.phone,
            action: "Call Now",
            link: `tel:${hotelInfo.phone}`,
        },
        {
            icon: <WhatsappLogo weight="duotone" className="w-6 h-6" />,
            title: "WhatsApp",
            content: hotelInfo.whatsapp,
            action: "Chat Now",
            link: `https://wa.me/${hotelInfo.whatsapp.replace(/\+|\s/g, "")}`,
        },
        {
            icon: <EnvelopeSimple weight="duotone" className="w-6 h-6" />,
            title: "Email",
            content: hotelInfo.email,
            action: "Send Email",
            link: `mailto:${hotelInfo.email}`,
        },
    ];

    return (
        <section id="contact" className="contact-section-bg section-padding">
            {/* Decorative circles */}
            <div className="contact-decorative-circle contact-decorative-circle-1" />
            <div className="contact-decorative-circle contact-decorative-circle-2" />
            <div className="contact-decorative-circle contact-decorative-circle-3" />

            <div ref={ref} className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 lg:mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-ocean-light text-ocean-deep text-sm font-semibold rounded-full mb-4">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                        Contact & Location
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
                        We&apos;re here to help you plan the perfect stay. Reach out to us anytime.
                    </p>
                </motion.div>

                {/* Main Grid - Map first on mobile, side by side on desktop */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Contact Cards Grid */}
                        <div className="contact-grid">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.title}
                                    href={method.link}
                                    target={method.link.startsWith("http") ? "_blank" : undefined}
                                    rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                    className="contact-card group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="contact-icon">
                                            {method.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-ocean-deep text-sm md:text-base">
                                                {method.title}
                                            </h3>
                                            <p className="text-gray-600 text-xs md:text-sm mt-0.5 truncate">
                                                {method.content}
                                            </p>
                                            <span className="contact-action">
                                                {method.action}
                                                <ArrowRight weight="bold" className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Media - Compact Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="social-links-container mt-6"
                        >
                            <div>
                                <h3 className="font-semibold text-ocean-deep text-sm md:text-base">
                                    Follow Our Journey
                                </h3>
                                <p className="text-gray-500 text-xs mt-0.5">
                                    Stay connected with us
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={hotelInfo.socialMedia.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Facebook"
                                >
                                    <FacebookLogo weight="fill" className="w-5 h-5" />
                                </a>
                                <a
                                    href={hotelInfo.socialMedia.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Instagram"
                                >
                                    <InstagramLogo weight="fill" className="w-5 h-5" />
                                </a>
                                <a
                                    href={hotelInfo.socialMedia.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Twitter"
                                >
                                    <TwitterLogo weight="fill" className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Map (shown first on mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="map-container h-full min-h-[320px] lg:min-h-[480px]">
                            {/* Google Maps Embed - Mirissa, Sri Lanka */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.57847875067!2d80.44238!3d5.9483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f716e6e9e8b%3A0x7e0d1d8b90d7d5!2sMirissa%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1703797200000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "320px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Jaya Hotel Location"
                                className="lg:min-h-[480px]"
                            />

                            {/* Info Card Overlay */}
                            <div className="map-overlay">
                                <div className="map-overlay-card">
                                    <h3 className="font-bold text-ocean-deep text-base mb-1">
                                        Jaya Hotel
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">
                                        Coastal Road, Mirissa
                                    </p>
                                    <div className="flex items-center gap-2 text-sunset text-sm font-medium">
                                        <Clock weight="fill" className="w-4 h-4" />
                                        <span>Open 24/7 for reservations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
