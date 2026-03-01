import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "EZTravelz — Travel Made Easy. Choose Your Adventure.",
    description:
        "Your hub for niche travel: pet-friendly trips, haunted tours, wine destinations, sports travel, cinematic adventures, and culinary quests.",
};

/**
 * Root Layout
 * Wraps every page with global font, styles, and HTML structure.
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body
                className="font-sans antialiased text-slate-900 min-h-screen"
                style={{
                    backgroundImage: "url('/images/sky-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {children}
            </body>
        </html>
    );
}
