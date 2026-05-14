import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Homepage specific components
import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import SignatureShowcase from "@/components/homepage/SignatureShowcase";
import ChapterGrid from "@/components/homepage/ChapterSection";
import TalkingToursPromo from "@/components/homepage/TalkingToursPromo";
import PlanTheLogistics from "@/components/homepage/PlanTheLogistics";
import WorkWithUs from "@/components/WorkWithUs";

/**
 * Homepage — The Hub
 *
 * Redesigned as a "travel book" — the Signature Travel showcase
 * establishes the advisory service, then each niche category
 * unfolds as a chapter with featured articles.
 */
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <SignatureShowcase />
                <ChapterGrid />
                <TalkingToursPromo />
                <PlanTheLogistics />
                <WorkWithUs />
            </main>
            <Footer />
        </>
    );
}
