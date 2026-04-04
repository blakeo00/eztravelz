import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import NicheGrid from "@/components/NicheGrid";
import FromTheBlog from "@/components/FromTheBlog";
import Footer from "@/components/Footer";
import Script from "next/script";

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

                {/* Viator Affiliate Banner */}
                <div className="flex justify-center py-6 px-4 w-full overflow-hidden">
                    <div
                        data-id="viator-banner"
                        data-partner-id="P00291237"
                        data-url="https://www.viator.com/"
                        data-banner-width="728"
                        data-banner-height="90"
                        data-banner-language="en"
                        data-banner-selection="banner1"
                    ></div>
                    <Script src="https://partners.vtrcdn.com/static/scripts/banners/banners.js" strategy="lazyOnload" />
                </div>

                <FromTheBlog />
            </main>
            <Footer />
        </>
    );
}
