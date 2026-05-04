import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getPostBySlug } from "@/data/posts";
import { getCategoryWidgets } from "@/data/widgets";

export const metadata: Metadata = {
    title: "Reel Roads: Room 217 and the Hotel That Dreamed Up The Shining | EZtravelZ",
    description: "A cinematic pilgrimage to the Stanley Hotel in Estes Park — the building where Stephen King's nightmare became America's most famous horror novel.",
    alternates: {
        canonical: "https://eztravelz.com/cinematic-travel/reel-roads-room-217-the-shining",
    },
    openGraph: {
        type: "article",
        url: "https://eztravelz.com/cinematic-travel/reel-roads-room-217-the-shining",
        siteName: "EZtravelZ",
        title: "Reel Roads: Room 217 and the Hotel That Dreamed Up The Shining | EZtravelZ",
        description: "A cinematic pilgrimage to the Stanley Hotel — where Stephen King's nightmare became a novel.",
        images: [{ url: "https://eztravelz.com/images/Stanley Hotel 2.png", width: 1200, height: 630, alt: "The Stanley Hotel in winter" }],
    },
};

export default function ReelRoadsShiningPage() {
    const post = getPostBySlug("reel-roads-room-217-the-shining");
    if (!post) return null;

    return (
        <div className="min-h-screen flex flex-col relative bg-[#fff0d4]">
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow">
                    <section className="relative text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
                        <Image src={post.image} alt={post.alt} fill className="object-cover object-center" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <span className="inline-block text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 bg-[#2c4875]">{post.category}</span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg hero-title text-[#fff0d4]">{post.title}</h1>
                            <time className="text-white/70 text-sm">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <div className="lg:w-2/3">
                                <div className="backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 bg-[#37507a] text-white border-2 border-slate-700 shadow-[0_0_30px_rgba(44,72,117,0.25)]">
                                    {post.content()}
                                </div>
                                <div className="mt-10 text-center lg:text-left">
                                    <Link href="/cinematic-travel" className="inline-flex items-center gap-2 font-semibold transition-colors text-[#37507a] hover:text-[#5271a3]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                                        Back to Cinematic Travel
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets(post.categorySlug, post.slug)} />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
