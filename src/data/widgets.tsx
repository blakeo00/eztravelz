import React, { ReactNode } from "react";
import AmazonProductCard from "@/components/AmazonProductCard";

export const getCategoryWidgets = (categorySlug: string): ReactNode[] => {
    switch (categorySlug) {
        case "haunted-tours":
            return [
                <div key="amazon-ghost-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Dunzy 11 Pcs Ghost Hunting Equipment Kit"
                        description="EMF detector, spirit box radio, EVP recorder, UV flashlight"
                        imageUrl="/images/Ghost Hunting.jpg"
                        affiliateLink="https://amzn.to/4l4qdLW"
                        price="$110.99"
                        originalPrice="$125.99"
                        rating={4.0}
                        reviewCount={20}
                        isPrime={true}
                        badge="limited-deal"
                    />
                </div>,
                <div key="amazon-ghost-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="K-II EMF Meter — Deluxe Model for Ghost Hunting"
                        description="The industry-standard EMF detector used by professional paranormal investigators"
                        imageUrl="/images/Ghost Hunting.jpg"
                        affiliateLink="https://amzn.to/4l4qdLW"
                        price="$59.95"
                        rating={4.5}
                        reviewCount={4812}
                        isPrime={true}
                        badge="best-seller"
                    />
                </div>,
                <div key="amazon-ghost-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="SBox Ghost Spirit Box — AM/FM Paranormal Scanner"
                        description="Rapid-sweep radio scanner for real-time spirit communication"
                        imageUrl="/images/Ghost Hunting.jpg"
                        affiliateLink="https://amzn.to/4l4qdLW"
                        price="$49.99"
                        rating={4.2}
                        reviewCount={346}
                        isPrime={true}
                    />
                </div>,
            ];
        case "sports-travel":
            return [
                <div key="amazon-sports-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="ororo Heated Stadium Seat with Back Support"
                        description="Battery-powered heated seat with memory foam and dual heating zones"
                        imageUrl="/images/Stadium seat.jpg"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$199"
                        rating={4.5}
                        reviewCount={2847}
                        isPrime={true}
                        badge="amazons-choice"
                    />
                </div>,
                <div key="amazon-sports-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Stadium Approved Clear Bag — 12x6x12 Crossbody"
                        description="NFL & NCAA-compliant transparent bag for hassle-free entry"
                        imageUrl="/images/Stadium seat.jpg"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$14.99"
                        rating={4.7}
                        reviewCount={8523}
                        isPrime={true}
                        badge="best-seller"
                    />
                </div>,
                <div key="amazon-sports-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Portable Blanket Hoodie — Oversized Wearable Stadium Blanket"
                        description="Stay warm at outdoor games with this fleece-lined wearable blanket"
                        imageUrl="/images/Stadium seat.jpg"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$32.99"
                        rating={4.6}
                        reviewCount={15209}
                        isPrime={true}
                    />
                </div>,
            ];
        case "pet-travel":
            return [
                <div key="amazon-pet-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Sherpa Original Deluxe Pet Carrier — Airline Approved"
                        description="Fits under most airline seats. Mesh ventilation and machine-washable liner"
                        imageUrl="/images/Dog on vacation.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$42.99"
                        rating={4.5}
                        reviewCount={24031}
                        isPrime={true}
                        badge="amazons-choice"
                    />
                </div>,
                <div key="amazon-pet-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Portable Dog Water Bottle — Leak-Proof Travel Bowl"
                        description="One-hand operation water dispenser for hiking and road trips"
                        imageUrl="/images/Dog on vacation.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$12.99"
                        rating={4.6}
                        reviewCount={42108}
                        isPrime={true}
                        badge="best-seller"
                    />
                </div>,
                <div key="amazon-pet-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Dog Car Seat Cover — Waterproof Hammock for Back Seat"
                        description="Scratch-proof, waterproof rear seat protector with side flaps"
                        imageUrl="/images/Dog on vacation.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$35.99"
                        rating={4.4}
                        reviewCount={9876}
                        isPrime={true}
                    />
                </div>,
            ];
        case "culinary-quests":
            return [
                <div key="amazon-food-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="ThermoPro Instant Read Meat Thermometer"
                        description="Digital probe thermometer — essential for BBQ road trips"
                        imageUrl="/images/BBQ.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$13.99"
                        rating={4.6}
                        reviewCount={61234}
                        isPrime={true}
                        badge="best-seller"
                    />
                </div>,
                <div key="amazon-food-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Moleskine Food & Travel Journal"
                        description="Dedicated tasting journal to log every memorable meal on the road"
                        imageUrl="/images/BBQ.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$22.95"
                        rating={4.7}
                        reviewCount={2145}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-food-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Collapsible Cooler Bag — Insulated Travel Lunch Tote"
                        description="Keep leftovers and local finds fresh on the drive home"
                        imageUrl="/images/BBQ.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$19.99"
                        rating={4.5}
                        reviewCount={7823}
                        isPrime={true}
                    />
                </div>,
            ];
        case "wine-destinations":
            return [
                <div key="amazon-wine-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Wine Folly Magnum Edition — Master Guide to Wine"
                        description="The essential illustrated guide to wine regions, grapes, and tasting"
                        imageUrl="/images/Vineyard.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$20.49"
                        rating={4.8}
                        reviewCount={5678}
                        isPrime={true}
                        badge="best-seller"
                    />
                </div>,
                <div key="amazon-wine-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Wine Aerator Pourer — Premium Decanter Spout"
                        description="Instantly aerate any bottle for smoother, fuller flavor at tastings"
                        imageUrl="/images/Vineyard.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$14.97"
                        rating={4.5}
                        reviewCount={34210}
                        isPrime={true}
                        badge="amazons-choice"
                    />
                </div>,
                <div key="amazon-wine-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Portable Wine Carrier — 2 Bottle Insulated Tote"
                        description="Padded travel bag with corkscrew — perfect for vineyard hopping"
                        imageUrl="/images/Vineyard.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$18.99"
                        rating={4.4}
                        reviewCount={1234}
                        isPrime={true}
                    />
                </div>,
            ];
        case "cinematic-travel":
            return [
                <div key="amazon-film-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="1001 Movies You Must See Before You Die"
                        description="The definitive guide to must-see films and the locations they were shot"
                        imageUrl="/images/Movie.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$17.49"
                        rating={4.6}
                        reviewCount={3456}
                        isPrime={true}
                        badge="best-seller"
                    />
                </div>,
                <div key="amazon-film-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="GoPro HERO12 Black — Waterproof Action Camera"
                        description="Capture your set-jetting adventures in stunning 5.3K video"
                        imageUrl="/images/Movie.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$299"
                        rating={4.5}
                        reviewCount={12890}
                        isPrime={true}
                        badge="amazons-choice"
                    />
                </div>,
                <div key="amazon-film-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Movie Location Travel Map — Scratch Off Film Poster"
                        description="Scratch off famous filming locations as you visit them worldwide"
                        imageUrl="/images/Movie.png"
                        affiliateLink="https://amzn.to/4r4CCRp"
                        price="$24.99"
                        rating={4.3}
                        reviewCount={876}
                        isPrime={true}
                    />
                </div>,
            ];
        default:
            return [];
    }
};
