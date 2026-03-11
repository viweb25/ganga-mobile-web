import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const branchName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${branchName} | Best Mobile Repair in Chennai | COREFIX`,
    description: `Visit COREFIX ${branchName} for premium iPhone, Samsung, and iCloud repairs. Chennai's top-rated mobile service with 4 branches. Lifetime warranty on all screen replacements.`,
    alternates: {
      canonical: `https://corefix.in/branch/${params.slug}`,
    },
    openGraph: {
      title: `COREFIX ${branchName} - Express Mobile Restoration`,
      description: `Premium repairs at our ${branchName} hub. Next-day service available.`,
      images: [`/og/branch-${params.slug}.jpg`],
    },
  };
}