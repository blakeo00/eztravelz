import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Homepage specific components
import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import ContentGrid from "@/components/homepage/ContentGrid";
import TalkingToursPromo from "@/components/homepage/TalkingToursPromo";
import PlanTheLogistics from "@/components/homepage/PlanTheLogistics";
import WorkWithUs from "@/components/WorkWithUs";

/**
 * Homepage — The Hub
 * Assembles all major sections of the EZtravelZ landing page.
 */
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <ContentGrid />
                <TalkingToursPromo />
                <PlanTheLogistics />
                <WorkWithUs />
            </main>
            <Footer />
        </>
    );
}
