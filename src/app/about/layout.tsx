import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Who We Are — EZtravelZ",
    description:
        "EZtravelZ is a niche travel magazine built for travelers who want meaning on their trips. Covering pet-friendly travel, haunted tours, culinary quests, wine destinations, sports travel, and more.",
    alternates: {
        canonical: "https://eztravelz.com/about",
    },
    openGraph: {
        type: "website",
        url: "https://eztravelz.com/about",
        siteName: "EZtravelZ",
        title: "Who We Are — EZtravelZ",
        description:
            "EZtravelZ is a passion-driven travel magazine covering eight niche categories — from haunted tours to pet-friendly adventures.",
        images: [
            {
                url: "https://eztravelz.com/images/EZtravelz OG.png",
                width: 1200,
                height: 630,
                alt: "EZtravelZ — Who We Are",
            },
        ],
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
