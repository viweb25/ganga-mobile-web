"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 1. Defined Brand Logos (Matches your local paths)
const BRANDS = [
  { name: "Apple", src: "/assets/images/appleicon.png", niche: "iPhone Repair" },
  { name: "Samsung", src: "/assets/images/samsung (2).png", niche: "Galaxy Service" },
  { name: "OnePlus", src: "/assets/images/oneplus (2).png", niche: "Screen Replacement" },
  { name: "Google", src: "/assets/images/pixel.png", niche: "Pixel Specialist" },
  { name: "Xiaomi", src: "/assets/images/xiaomi.png", niche: "Mi Service" },
  { name: "Nothing", src: "/assets/images/nothing.png", niche: "Phone (1) & (2) Repair" },
  { name: "Realme", src: "/assets/images/realme (2).png", niche: "Fast Fix" },
];

export default function BrandSlider() {
  // SEO DATA for Google Search (Schema.org)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile Phone Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ganga Mobiles Chennai",
      "areaServed": "Chennai, Tamil Nadu"
    },
    "description": "Authorized-grade repairs for Apple, Samsung, OnePlus, and Google Pixel in Chennai."
  };

  return (
    <div className="relative border-y border-slate-100 bg-white py-12 overflow-hidden">
      {/* Hidden SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Label - Technical & Sharp */}
      <div className="container mx-auto px-6 mb-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-3 bg-slate-950 text-white px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] mb-4 shadow-xl shadow-slate-200">
          <span className="flex h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
          Certified Spare Registry • Chennai HQ
        </div>
        <h2 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center">
          Official components for all major tech ecosystems
        </h2>
      </div>
      
      {/* The Moving Ticker */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, // Slower is more "Premium" and readable
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {/* Tripled list for seamless looping */}
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="flex items-center gap-12">
              
              {/* BRAND CARD */}
              <div className="relative h-12 w-32  hover:opacity-100 transition-all duration-500">
                <Image
                  src={brand.src}
                  alt={`${brand.name} ${brand.niche} Chennai Ganga Mobiles`}
                  fill
                  sizes="160px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Minimal Dot Separator */}
              <div className="h-1 w-1 bg-slate-200 rounded-full" />
            </div>
          ))}
        </motion.div>

        {/* SEO Hidden H3 for Keyword Crawling */}
        <h3 className="sr-only">
          Top Mobile Brands Repaired in Chennai: iPhone, Samsung, OnePlus, Google Pixel, Xiaomi.
        </h3>
      </div>

      {/* Side Fades - Clean Transparent transitions */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
}