import React, { ReactNode } from "react";
import AmazonProductCard from "@/components/AmazonProductCard";

export const getCategoryWidgets = (categorySlug: string): ReactNode[] => {
    switch (categorySlug) {
        case "haunted-tours":
            return [
                <div key="amazon-ghost" className="bg-white rounded-2xl min-h-[350px] flex items-center justify-center border border-slate-200 shadow-sm transition-all hover:shadow-md overflow-hidden relative">
                    <a href="https://amzn.to/4l4qdLW" target="_blank" rel="sponsored noopener noreferrer" className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center group">
                        <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </div>
                        <span className="block text-xl font-black text-slate-800 mb-2 leading-tight">Ghost Hunting Must-Haves</span>
                        <p className="text-brand-600 font-bold group-hover:text-brand-700">Shop on Amazon &rarr;</p>
                    </a>
                </div>
            ];
        case "sports-travel":
            return [
                <div key="amazon-sports" className="my-0">
                    <AmazonProductCard
                        title="ororo Heated Stadium Seat"
                        description="Survive the frozen tundra. This battery-powered heated seat features memory foam cushioning and dual heating zones to keep your core warm for all four quarters."
                        imageUrl="/images/Stadium seat.jpg"
                        affiliateLink="https://amzn.to/4r4CCRp"
                    />
                </div>
            ];
        case "pet-travel":
            return [];
        case "culinary-quests":
            return [];
        case "wine-destinations":
            return [];
        case "cinematic-travel":
            return [];
        default:
            return [];
    }
};
