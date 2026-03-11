import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. STATIC PARAM GENERATION (Required for 'output: export')
// This tells Next.js which folders to create at build time.
export async function generateStaticParams() {
  return [
    { slug: "adyar" },
    { slug: "t-nagar" },
    { slug: "velachery" },
    { slug: "anna-nagar" },
  ];
}

// 2. DYNAMIC METADATA GENERATION
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const branchName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${branchName} | Best Mobile Repair in Chennai | COREFIX`,
    description: `Visit COREFIX ${branchName} for premium iPhone, Samsung, and iCloud repairs. Chennai's top-rated mobile service with 4 branches. Lifetime warranty on all screen replacements.`,
    alternates: {
      canonical: `https://corefix.in/branch/${slug}`,
    },
    openGraph: {
      title: `COREFIX ${branchName} - Express Mobile Restoration`,
      description: `Premium repairs at our ${branchName} hub. Next-day service available.`,
      images: [`/og/branch-${slug}.jpg`],
    },
  };
}

// 3. THE DEFAULT EXPORT
export default async function BranchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  // We await params here just to ensure the layout is ready for the slug context
  await params;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}