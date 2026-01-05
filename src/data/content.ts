// Static content data for Jaya Hotel website
// All text content, room details, testimonials, etc.

export const hotelInfo = {
  name: "Jaya Hotel",
  tagline: "Where the Ocean Meets Paradise",
  description: "Experience tropical luxury at its finest on the pristine shores of Southern Sri Lanka",
  address: "123 Coastal Road, Mirissa, Southern Province, Sri Lanka",
  phone: "+94 41 225 0000",
  whatsapp: "+94 77 123 4567",
  email: "reservations@jayahotel.lk",
  socialMedia: {
    facebook: "https://facebook.com/jayahotel",
    instagram: "https://instagram.com/jayahotel",
    twitter: "https://twitter.com/jayahotel",
  },
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Dining", href: "#cuisine" },
  { name: "Restaurant", href: "#restaurant" },
  { name: "Packages", href: "#packages" },
  { name: "Attractions", href: "#attractions" },
  { name: "Contact", href: "#contact" },
];

export const rooms = [
  {
    id: 1,
    name: "Ocean View Deluxe",
    description: "Wake up to breathtaking panoramic ocean views in our spacious deluxe rooms featuring traditional Sri Lankan décor.",
    amenities: ["King Bed", "Ocean View", "Private Balcony", "Rain Shower", "Mini Bar"],
    price: "$180",
    priceLabel: "per night",
    images: ["/images/rooms/ocean_view_deluxe.png"],
    size: "45 sqm",
    featured: false,
  },
  {
    id: 2,
    name: "Beachfront Suite",
    description: "Step directly onto the golden sands from your private suite, designed for the ultimate tropical escape.",
    amenities: ["King Bed", "Beach Access", "Living Area", "Outdoor Shower", "Butler Service"],
    price: "$320",
    priceLabel: "per night",
    images: ["/images/rooms/beachfront_suite.png"],
    size: "75 sqm",
    featured: true,
  },
  {
    id: 3,
    name: "Family Suite",
    description: "Perfect for families, our spacious suite offers interconnected rooms with modern comforts and ocean views.",
    amenities: ["Two Bedrooms", "Ocean View", "Family Lounge", "Kitchenette", "Kids Amenities"],
    price: "$280",
    priceLabel: "per night",
    images: ["/images/rooms/family_suite.png"],
    size: "90 sqm",
    featured: false,
  },
  {
    id: 4,
    name: "Presidential Suite",
    description: "The pinnacle of luxury featuring unparalleled ocean vistas, personalized service, and exquisite design.",
    amenities: ["Master Bedroom", "Infinity Pool", "Private Butler", "Dining Room", "Sunset Terrace"],
    price: "$650",
    priceLabel: "per night",
    images: ["/images/rooms/presidential_suite.png"],
    size: "180 sqm",
    featured: true,
  },
  {
    id: 5,
    name: "Sunset Villa",
    description: "Experience ultimate privacy in our exclusive villa with private pool and stunning sunset views.",
    amenities: ["Private Pool", "Ocean View", "Outdoor Lounge", "Premium Amenities", "Concierge"],
    price: "$420",
    priceLabel: "per night",
    images: ["/images/rooms/sunset_villa.png"],
    size: "120 sqm",
    featured: true,
  },
  {
    id: 6,
    name: "Garden Retreat",
    description: "Nestled among tropical gardens, this serene retreat offers tranquility with authentic Sri Lankan charm.",
    amenities: ["King Bed", "Garden View", "Private Terrace", "Spa Bath", "Meditation Space"],
    price: "$220",
    priceLabel: "per night",
    images: ["/images/rooms/garden_retreat.png"],
    size: "65 sqm",
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah & James Thompson",
    country: "United Kingdom",
    rating: 5,
    text: "Our honeymoon at Jaya Hotel was simply magical. The sunset dinners on the beach, the impeccable service, and the stunning ocean views made it an unforgettable experience.",
    avatar: "ST",
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Singapore",
    rating: 5,
    text: "As a frequent traveler, I've stayed at many luxury resorts, but Jaya Hotel stands out. The authentic Sri Lankan hospitality and the attention to detail are exceptional.",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emma & Louis Bernard",
    country: "France",
    rating: 5,
    text: "The cuisine was extraordinary! The chef's seafood specialties were the best we've ever tasted. We're already planning our return visit.",
    avatar: "EB",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    country: "Japan",
    rating: 5,
    text: "Perfect location for whale watching. The hotel arranged everything seamlessly. Waking up to the sound of waves was incredibly peaceful.",
    avatar: "YT",
  },
];

export const cuisineItems = [
  {
    id: 1,
    name: "Fresh Catch of the Day",
    description: "Locally sourced seafood prepared with traditional Sri Lankan spices and modern techniques",
    image: "/images/fish.jpg",
    type: "Seafood",
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    description: "Succulent lobster in creamy sauce, a house specialty served ocean-side",
    image: "/images/Sea Food-1.jpg",
    type: "Signature Dish",
  },
  {
    id: 3,
    name: "Grilled Prawn Platter",
    description: "Tiger prawns grilled to perfection with garlic butter and aromatic herbs",
    image: "/images/Sea Food-2.jpg",
    type: "Seafood",
  },
  {
    id: 4,
    name: "Sri Lankan Rice & Curry",
    description: "Authentic multi-dish experience with fragrant rice, curries, sambols, and papadams",
    image: "/images/Sea Food-3.jpg",
    type: "Traditional",
  },
];

export const attractions = [
  {
    id: 1,
    name: "Whale Watching in Mirissa",
    description: "Witness majestic blue whales and dolphins in their natural habitat",
    distance: "10 min drive",
    image: "/images/diving.jpg",
    type: "Marine Life",
  },
  {
    id: 2,
    name: "Galle Fort",
    description: "UNESCO World Heritage Site with Dutch colonial architecture and charm",
    distance: "45 min drive",
    image: "/images/bg-1.jpg",
    type: "Heritage",
  },
  {
    id: 3,
    name: "Yala National Park",
    description: "One of the world's best leopard spotting destinations",
    distance: "2 hour drive",
    image: "/images/bg-2.jpg",
    type: "Safari",
  },
  {
    id: 4,
    name: "Weligama Bay",
    description: "Perfect spot for surfing lessons and stilt fishermen photography",
    distance: "15 min drive",
    image: "/images/beach.jpg",
    type: "Beach & Surf",
  },
];

export const packages = [
  {
    id: 1,
    name: "Romantic Escape",
    description: "Celebrate love with candlelit dinners, couple's spa treatments, and sunset cruises",
    price: "From $999",
    duration: "3 Nights",
    features: ["Beachfront Suite", "Couple's Spa", "Private Dinner", "Sunset Cruise", "Champagne"],
    popular: true,
  },
  {
    id: 2,
    name: "Family Adventure",
    description: "Create lasting memories with activities for all ages in tropical paradise",
    price: "From $1,499",
    duration: "5 Nights",
    features: ["Garden Villa", "Kids Club", "Safari Trip", "Cooking Class", "Water Sports"],
    popular: false,
  },
  {
    id: 3,
    name: "Surf & Stay",
    description: "Perfect for wave riders with lessons, board rental, and prime beach location",
    price: "From $599",
    duration: "4 Nights",
    features: ["Ocean View Room", "Surf Lessons", "Board Rental", "Beach Breakfast", "Yoga Sessions"],
    popular: false,
  },
  {
    id: 4,
    name: "Wellness Retreat",
    description: "Rejuvenate body and soul with Ayurvedic treatments and meditation",
    price: "From $1,299",
    duration: "7 Nights",
    features: ["Spa Villa", "Daily Ayurveda", "Meditation", "Healthy Cuisine", "Nature Walks"],
    popular: true,
  },
];

export const galleryImages = [
  { id: 1, src: "/images/beach.jpg", alt: "Pristine beach at sunset", category: "Beach" },
  { id: 2, src: "/images/bg-1.jpg", alt: "Luxury pool overlooking ocean", category: "Hotel" },
  { id: 3, src: "/images/bg-2.jpg", alt: "Tropical garden pathway", category: "Gardens" },
  { id: 4, src: "/images/bg-3.jpg", alt: "Ocean view from suite", category: "Rooms" },
  { id: 5, src: "/images/diving.jpg", alt: "Underwater diving experience", category: "Activities" },
  { id: 6, src: "/images/fish.jpg", alt: "Fresh seafood cuisine", category: "Dining" },
  { id: 7, src: "/images/Sea Food-1.jpg", alt: "Gourmet seafood platter", category: "Dining" },
  { id: 8, src: "/images/Sea Food-2.jpg", alt: "Chef's special presentation", category: "Dining" },
];
