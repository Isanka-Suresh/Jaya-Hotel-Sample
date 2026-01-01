/**
 * Jaya Hotel - Main Page
 * 
 * Single-page hotel portfolio website featuring:
 * - 10 distinct sections with smooth scroll navigation
 * - Framer Motion animations throughout
 * - Responsive design for all devices
 * - Premium luxury hotel aesthetic
 */

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RoomsSection from "@/components/sections/RoomsSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CuisineSection from "@/components/sections/CuisineSection";
import RestaurantSection from "@/components/sections/RestaurantSection";
import AttractionsSection from "@/components/sections/AttractionsSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero - Full screen welcome with beach imagery */}
      <HeroSection />

      {/* About - Hotel story and Sri Lankan hospitality */}
      <AboutSection />

      {/* Rooms - Bento-style room showcase with carousels */}
      <RoomsSection />

      {/* Gallery - Masonry image gallery with lightbox */}
      <GallerySection />

      {/* Testimonials - Guest reviews carousel */}
      <TestimonialsSection />

      {/* Cuisine - Sri Lankan food culture and dishes */}
      <CuisineSection />

      {/* Restaurant - The Wave Restaurant showcase */}
      <RestaurantSection />

      {/* Attractions - Nearby places to visit */}
      <AttractionsSection />

      {/* Packages - Glassmorphic pricing cards */}
      <PackagesSection />

      {/* Contact - Location, map, and contact info */}
      <ContactSection />
    </>
  );
}
