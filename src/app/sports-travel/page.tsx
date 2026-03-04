import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TicketWidget from "@/components/TicketWidget";
import SidebarWidgets from "@/components/SidebarWidgets";
import { getCategoryWidgets } from "@/data/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sports Travel & Events — EZtravelZ",
    description: "Your ultimate guide to combining your passion for sports with unforgettable travel experiences. Need tickets? We've got you covered.",
};

export default function SportsTravelPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pb-20">
                {/* Hero section */}
                <section className="bg-brand-600 text-white py-20 px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Sports Travel & Events
                    </h1>
                    <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
                        Follow your favorite teams across the globe and turn every game day into an unforgettable adventure.
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Main Content Area */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-4 md:p-8">
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-6 border-b pb-4">Search For Tickets</h3>
                                <div className="w-full relative min-h-[600px]">
                                    {/* Existing Ticket Widget Container */}
                                    <TicketWidget
                                        id="ticket-network-widget-search"
                                        src="https://tpwgts.com/content?promo_id=8505&campaign_id=72&powered_by=true&footer_color=%23ffffff&search_text=Search%20by%20artist%2C%20team%2C%20event%2C%20etc...&icon_color=%230077ff&title_color=%23ffffff&title=Need%20tickets%3F&bg_color=%23112266&shmarker=417314.417314&trs=215716"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar Area */}
                        <div className="lg:w-1/3">
                            <SidebarWidgets widgets={getCategoryWidgets('sports-travel')} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
