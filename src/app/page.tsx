import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NicheGrid from "@/components/NicheGrid";
import FeaturedArticles from "@/components/FeaturedArticles";
import Footer from "@/components/Footer";

/**
 * Homepage — The Hub
 * Assembles all major sections of the EZTravelz landing page.
 */
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <NicheGrid />
                <FeaturedArticles />
            </main>
            <Footer />
        </>
    );
}
