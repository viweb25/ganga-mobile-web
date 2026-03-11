import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. DYNAMIC METADATA GENERATION
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

// 2. THE REQUIRED DEFAULT EXPORT (This fixes your build error)
export default function BranchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* This layout wraps the specific branch page. 
          You can add a branch-specific banner or 
          navigation here if needed in the future.
      */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}