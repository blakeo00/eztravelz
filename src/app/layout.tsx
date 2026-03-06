import type { Metadata } from "next";
import { Inter, Creepster, Bebas_Neue, Cinzel } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const creepster = Creepster({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-creepster",
});

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas",
});

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
});

export const metadata: Metadata = {
    title: "EZtravelZ — Travel Made Easy. Choose Your Adventure.",
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
        <html lang="en" className={`${inter.variable} ${creepster.variable} ${bebasNeue.variable} ${cinzel.variable}`}>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet" />
            </head>
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
                <Script
                    id="stay22-affiliate"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function (s, t, a, y, twenty, two) {
                                s.Stay22 = s.Stay22 || {};
                                s.Stay22.params = { lmaID: '69a52c19d34b72cb6db518dc' };
                                twenty = t.createElement(a);
                                two = t.getElementsByTagName(a)[0];
                                twenty.async = 1;
                                twenty.src = y;
                                two.parentNode.insertBefore(twenty, two);
                            })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');
                        `,
                    }}
                />
            </body>
        </html>
    );
}
