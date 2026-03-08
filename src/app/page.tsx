import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import NicheGrid from "@/components/NicheGrid";
import FeaturedArticles from "@/components/FeaturedArticles";
import FlightSearchWidget from "@/components/FlightSearchWidget";
import Footer from "@/components/Footer";

/**
 * Homepage — The Hub
 * Assembles all major sections of the EZtravelZ landing page.
 */
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroCarousel />
                <NicheGrid />
                <FlightSearchWidget />
                <FeaturedArticles />
            </main>
            <Footer />
        </>
    );
}
