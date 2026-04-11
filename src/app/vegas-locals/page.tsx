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
        <div className="min-h-screen font-sans flex flex-col relative bg-[#fff0d4]">
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Header />
                <main className="flex-grow pb-20">
                    <section className="relative text-white py-32 px-4 min-h-[400px] flex flex-col justify-center items-center text-center overflow-hidden bg-black">
                        <Image
                            src="/images/Vegas 2.png"
                            alt="Las Vegas Night"
                            fill
                            className="object-cover opacity-90"
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
                                    className="bg-[#37507a] rounded-3xl shadow-2xl border-2 border-white/10 backdrop-blur-sm p-8 sm:p-12 text-white"
                                    style={{ boxShadow: '0 0 30px rgba(55,80,122,0.4)' }}
                                >
                                    <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-[#fff0d4] prose-p:text-white prose-strong:text-white prose-th:text-white prose-td:text-white prose-li:text-white prose-a:text-[#e9a43a] hover:prose-a:text-[#c47d1a] prose-a:underline">
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
