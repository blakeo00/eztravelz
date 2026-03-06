"use client";

/**
 * Hero Section
 * Full-viewport intro with headline, sub-copy, and smooth-scrolling CTA.
 * Uses a neutral, inspiring travel background image.
 */
export default function Hero() {
    const scrollToNiches = () => {
        document.getElementById("niches")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* ---- Background Image ---- */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=2074&auto=format&fit=crop')",
                }}
            />
            {/* ---- Overlay Gradient ---- */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />

            {/* ---- Content ---- */}
            <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-24 md:mt-20">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                    Travel Made Easy.
                    <br />
                    <span className="text-brand-100">Choose Your Adventure.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-xl mx-auto leading-relaxed">
                    Stop settling for generic vacations. We curate unique travel
                    experiences tailored to your passions, from pet-friendly stays to
                    haunted history tours.
                </p>
                <button
                    onClick={scrollToNiches}
                    className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    Start Exploring
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* ---- Bottom fade ---- */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
