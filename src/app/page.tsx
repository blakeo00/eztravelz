import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import NicheGrid from "@/components/NicheGrid";
import FromTheBlog from "@/components/FromTheBlog";
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
                <HeroSection />
                <WhoWeAre />
                <NicheGrid />
                <FromTheBlog />
            </main>
            <Footer />
        </>
    );
}
