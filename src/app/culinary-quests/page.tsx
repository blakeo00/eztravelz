import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { posts } from "@/data/posts";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Culinary Quests — EZtravelZ",
    description: "Travel for the food. From Texas BBQ road trips to street food crawls and dining in the dark, explore the world one bite at a time with EZtravelZ.",
    alternates: {
        canonical: "https://eztravelz.com/culinary-quests",
    },
    openGraph: {
        type: "website",
        url: "https://eztravelz.com/culinary-quests",
        siteName: "EZtravelZ",
        title: "Culinary Quests — EZtravelZ",
        description: "Travel for the food. From Texas BBQ road trips to street food crawls and dining in the dark, explore the world one bite at a time.",
        images: [
            {
                url: "https://eztravelz.com/images/Culinary.png",
                width: 1200,
                height: 630,
                alt: "Culinary travel experiences around the world",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Culinary Quests — EZtravelZ",
        description: "Travel for the food. BBQ road trips, street food crawls, and immersive dining experiences around the world.",
        images: ["https://eztravelz.com/images/Culinary.png"],
    },
};

export default function CulinaryQuestsPage() {
    const parisPost = posts.find(p => p.slug === "paris-unusual-dining-experiences");

    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            {/* Background */}
            <div className="fixed inset-0 z-0 bg-[#fff0d4]"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    {/* Hero section */}
                    <section className="relative text-white py-20 px-4 min-h-[300px] flex flex-col justify-center items-center text-center border-b-2 border-black overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 opacity-75 bg-center bg-cover"
                            style={{ backgroundImage: "url('/images/Dinner.png')" }}
                        ></div>
                        <div className="absolute inset-0 z-10 bg-black/40"></div>

                        <div className="relative z-20 w-full">
                            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
                                Culinary Quests
                            </h1>
                            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
                                Some trips are planned around the sights. The best ones are planned around the food. These are the journeys worth traveling hungry.
                            </p>
                        </div>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <article
                                    className="bg-[#37507a] rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 p-8 md:p-12 backdrop-blur-sm"
                                    style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)" }}
                                >
                                    {parisPost ? parisPost.content() : null}
                                </article>
                            </div>

                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets("culinary-quests")} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
