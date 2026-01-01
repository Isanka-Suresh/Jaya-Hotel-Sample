import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Load Inter font with multiple weights for typography hierarchy
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// SEO Metadata for Jaya Hotel
export const metadata: Metadata = {
  title: "Jaya Hotel | Luxury Beach Resort in Southern Sri Lanka",
  description:
    "Experience tropical luxury at Jaya Hotel, a premium beach-side resort in Mirissa, Southern Sri Lanka. Ocean views, authentic cuisine, and unforgettable hospitality.",
  keywords: [
    "luxury hotel",
    "beach resort",
    "Sri Lanka",
    "Mirissa",
    "Southern Province",
    "ocean view",
    "tropical vacation",
    "honeymoon",
    "wellness retreat",
  ],
  authors: [{ name: "Jaya Hotel" }],
  openGraph: {
    title: "Jaya Hotel | Where the Ocean Meets Paradise",
    description:
      "Discover tropical luxury on the pristine shores of Southern Sri Lanka. Premium accommodations, authentic cuisine, and breathtaking ocean views.",
    type: "website",
    locale: "en_US",
    siteName: "Jaya Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaya Hotel | Luxury Beach Resort",
    description: "Experience tropical paradise in Southern Sri Lanka",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
