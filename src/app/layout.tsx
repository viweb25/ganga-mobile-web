import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { CHENNAI_BRANCHES_SCHEMA } from "@/constants/branches";
import "./globals.css";

// 1. Optimize Fonts for Performance (Prevents Layout Shift)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// 2. SEO Metadata: This is what appears first in Google Search
export const metadata: Metadata = {
  title: {
    default: "Corefix® | Elite Apple & Laptop Repair Hub Chennai",
    template: "%s | Corefix® Chennai"
  },
  description: "Chennai's #1 Industrial Lab for iPhone, MacBook, and Premium Smartphone repairs. 1-Hour screen replacement, original spares, and live repair tracking.",
  keywords: ["iPhone repair Chennai", "MacBook service center Adyar", "iPad screen fix Chennai", "Mobile service Anna Nagar", "Corefix Chennai"],
  authors: [{ name: "Corefix Lab" }],
  creator: "Corefix India",
  metadataBase: new URL("https://corefix.in"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://corefix.in",
    title: "Corefix® | Precision Tech Repairs Chennai",
    description: "Industrial grade mobile & laptop repairs with live tracking.",
    siteName: "Corefix Chennai",
    images: [{
      url: "/og-image.jpg", // Create this image for high-quality social sharing
      width: 1200,
      height: 630,
      alt: "Corefix Lab Chennai"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corefix® Chennai",
    description: "Elite Apple & Laptop Repair Hub.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed", // Violet-600 to match your brand
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* 3. Injecting the Chennai Location Schema for Google Search Maps */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(CHENNAI_BRANCHES_SCHEMA) }}
        />
      </head>
      <body className="antialiased font-sans selection:bg-violet-100 selection:text-violet-700 bg-white text-slate-950">
        <Header />
        
        {/* main should have a min-h-screen to push footer down */}
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}