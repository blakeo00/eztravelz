import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Articles & Guides — EZtravelZ",
    description: "Browse all EZtravelZ travel articles and destination guides. Covering haunted tours, culinary quests, sports travel, pet travel, wine destinations, and more.",
    alternates: {
        canonical: "https://eztravelz.com/blog",
    },
    openGraph: {
        type: "website",
        url: "https://eztravelz.com/blog",
        siteName: "EZtravelZ",
        title: "All Articles & Guides — EZtravelZ",
        description: "Browse all EZtravelZ travel articles and destination guides — haunted tours, culinary quests, sports travel, pet travel, wine destinations, and more.",
        images: [
            {
                url: "https://eztravelz.com/images/EZtravelz OG.png",
                width: 1200,
                height: 630,
                alt: "EZtravelZ Blog — Travel Stories & Guides",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "All Articles & Guides — EZtravelZ",
        description: "Browse all EZtravelZ travel articles and destination guides for every kind of traveler.",
        images: ["https://eztravelz.com/images/EZtravelz OG.png"],
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
