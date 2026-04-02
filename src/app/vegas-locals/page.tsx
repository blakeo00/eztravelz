import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import { sphereLasVegasContent } from "@/data/posts";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";

export const metadata: Metadata = {
    title: "Vegas Locals Guide — EZtravelZ",
    description: "What happens in Vegas isn't always on the Strip.",
};

export default function VegasLocalsPage() {
    return (
        <div className="min-h-screen font-sans flex flex-col relative">
            <div className="fixed inset-0 z-0 bg-[#89D4FF]"></div>
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    <section className="relative text-white py-32 px-4 min-h-[400px] flex flex-col justify-center items-center text-center overflow-hidden">
                        <Image
                            src="/images/Night.png"
                            alt="Las Vegas Night"
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-20 w-full mt-10">
                            <h1 
                                className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg text-[#fdffb6]"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Vegas Baby
                            </h1>
                            <p 
                                className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md text-white"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Discover Las Vegas through the eyes of the Vegas Locals. They Know!
                            </p>
                        </div>
                    </section>

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Main Content Area */}
                            <div className="lg:w-2/3">
                                <div
                                    className="rounded-3xl p-8 sm:p-12 text-slate-900"
                                    style={{
                                        border: '5px solid transparent',
                                        backgroundImage: 'linear-gradient(#fdffb6, #fdffb6), linear-gradient(135deg, #00e5ff, #ff00ff, #00e5ff, #ff00ff, #00e5ff)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                        boxShadow: '0 0 8px #00e5ff, 0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.25), inset 0 0 12px rgba(0, 229, 255, 0.08)',
                                    }}
                                >
                                    <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#7d12ff] hover:prose-a:text-[#4b0b99]">
                                        {sphereLasVegasContent()}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Sidebar Area */}
                            <div className="lg:w-1/3">
                                <SidebarWidgets widgets={getCategoryWidgets('vegas-locals')} />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
