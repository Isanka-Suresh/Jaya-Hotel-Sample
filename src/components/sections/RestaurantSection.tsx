"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Coffee, Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import SectionWrapper from "@/components/ui/SectionWrapper";

/**
 * RestaurantSection - Hotel restaurant showcase with improved visibility
 */
export default function RestaurantSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const menuHighlights = [
        {
            category: "Breakfast",
            time: "7:00 AM - 10:30 AM",
            items: ["Sri Lankan Hoppers", "English Breakfast", "Tropical Fruits", "Fresh Juices"],
            icon: <Coffee weight="duotone" className="w-6 h-6" />,
        },
        {
            category: "Lunch",
            time: "12:00 PM - 3:00 PM",
            items: ["Grilled Seafood", "Rice & Curry", "Light Salads", "Wood-fired Pizza"],
            icon: <Sun weight="duotone" className="w-6 h-6" />,
        },
        {
            category: "Dinner",
            time: "6:30 PM - 10:30 PM",
            items: ["Tasting Menu", "Lobster Specials", "Wine Pairing", "Dessert Selection"],
            icon: <Moon weight="duotone" className="w-6 h-6" />,
        },
    ];

    const diningSpaces = [
        {
            name: "Ocean Terrace",
            description: "Dine with your feet in the sand as waves serenade your meal",
            icon: "🌊",
        },
        {
            name: "Garden Pavilion",
            description: "Surrounded by tropical blooms and gentle evening breezes",
            icon: "🌺",
        },
        {
            name: "Sunset Deck",
            description: "Witness spectacular golden hour views over the Indian Ocean",
            icon: "🌅",
        },
        {
            name: "Private Cabana",
            description: "Intimate dining for special celebrations and romantic evenings",
            icon: "🏖️",
        },
    ];

    return (
        <SectionWrapper id="restaurant" bgColor="white">
            <div ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-sunset/20 text-sunset text-sm font-semibold rounded-full mb-4">
                        Fine Dining
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                        The Wave Restaurant
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Where culinary artistry meets ocean views—an unforgettable dining destination
                    </p>
                </motion.div>

                {/* Main Restaurant Showcase */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left - Large Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="aspect-[4/5] relative">
                            <Image
                                src="/images/Sea Food-1.jpg"
                                alt="The Wave Restaurant interior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean-deep/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Award-Winning Cuisine</h3>
                                <p className="text-white/80">
                                    Recognized as one of Southern Sri Lanka&apos;s finest dining experiences
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-ocean-deep mb-6">
                            From Ocean to Table
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            The Wave Restaurant celebrates the bounty of the sea with dishes that honor
                            local fishing traditions. Our open kitchen allows you to witness the artistry
                            as our chefs transform the freshest ingredients into culinary masterpieces.
                        </p>

                        {/* Menu Highlights - Improved Colors & Visibility */}
                        <div className="space-y-4 mb-8">
                            {menuHighlights.map((menu, index) => (
                                <motion.div
                                    key={menu.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="bg-white border-2 border-ocean-light rounded-xl p-5 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-ocean-deep text-white rounded-lg flex items-center justify-center">
                                                {menu.icon}
                                            </div>
                                            <h4 className="font-bold text-ocean-deep text-lg">{menu.category}</h4>
                                        </div>
                                        <span className="text-sm font-medium text-ocean-mid">{menu.time}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {menu.items.map((item) => (
                                            <span
                                                key={item}
                                                className="text-sm text-ocean-deep bg-ocean-light px-3 py-1.5 rounded-full font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary self-start"
                        >
                            Reserve a Table
                        </motion.button>
                    </motion.div>
                </div>

                {/* Dining Spaces */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-ocean-deep text-center mb-8">
                        Choose Your Setting
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {diningSpaces.map((space, index) => (
                            <motion.div
                                key={space.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                className="group bg-gradient-to-br from-ocean-light to-cream rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4">{space.icon}</div>
                                <h4 className="font-semibold text-ocean-deep mb-2 group-hover:text-sunset transition-colors">
                                    {space.name}
                                </h4>
                                <p className="text-gray-600 text-sm">{space.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
