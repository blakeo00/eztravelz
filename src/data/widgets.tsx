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
                        title="Ghost Hunters' Tool Kit Product Bundle"
                        description="Essential paranormal investigation starter kit for ghost hunting adventures"
                        imageUrl="https://m.media-amazon.com/images/I/71PBtmJcB0L._SL1500_.jpg"
                        affiliateLink="https://amzn.to/4b7wZfi"
                        price="$33.37"
                        rating={3.4}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-ghost-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="P-SB7 Spirit Box, Latest Version, Ghost Hunting EVP"
                        description="New and improved P-SB7 Spirit Box Rev 8 with Bluetooth, connect to a speaker for even better audio. No more cords!"
                        imageUrl="https://m.media-amazon.com/images/I/81uAyAe7YKL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/4u9UwF3"
                        price="$94.90"
                        rating={4.3}
                        isPrime={true}
                    />
                </div>,
            ];
        case "sports-travel":
            return [
                <div key="amazon-sports-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="LEGO FIFA World Cup Official Trophy Building Set - 43020"
                        description="Display-worthy collectible with World Cup 2026 minifigure, perfect for soccer fans"
                        imageUrl="https://m.media-amazon.com/images/I/81C3y4Yjr4L._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/4sr515s"
                        price="$199.99"
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-sports-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="adidas FIFA World Cup 26™ Trionda Soccer Ball"
                        description="Official match ball design for the 2026 FIFA World Cup"
                        imageUrl="https://m.media-amazon.com/images/I/71BirAZbzXL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/3N3GOTu"
                        price="$34.98"
                        rating={4.6}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-sports-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Official FIFA World Cup 2026 Edition - 30oz Insulated Tumbler"
                        description="Premium stainless steel double-wall tumbler with handle & straw"
                        imageUrl="https://m.media-amazon.com/images/I/615jXTMnH3L._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/4l9TxR6"
                        price="$39.99"
                        rating={3.5}
                        isPrime={true}
                    />
                </div>,
            ];
        case "pet-travel":
            return [
                <div key="amazon-pet-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Sherpa Original Deluxe Pet Carrier, Airline Approved"
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
                        title="Portable Dog Water Bottle, Leak-Proof Travel Bowl"
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
                        title="Dog Car Seat Cover, Waterproof Hammock for Back Seat"
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
                        title="Coolife Luggage 3 Piece Set Suitcase Spinner Hardshell Lightweight TSA Lock"
                        description="3 piece luggage set (20/24/28 inch), stores one into another. 100% ABS, lightweight yet extremely durable."
                        imageUrl="https://m.media-amazon.com/images/I/81bk7xetwqL._AC_SL1200_.jpg"
                        affiliateLink="https://amzn.to/4rg2BW1"
                        price="$169.99"
                        rating={4.6}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-food-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Statik SmartCharge 5-in-1 Travel Power Bank with Wall Plug & Built in USB C Cables"
                        description="10000mAh international travel charger & European portable charger, compatible with iPhone, iPad & Samsung"
                        imageUrl="https://m.media-amazon.com/images/I/71Ick+fxhGL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/4b7lZPh"
                        price="$55.99"
                        rating={4.2}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-food-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Cabeau Evolution S3, Airplane Travel Pillow for Long Flights"
                        description="Supportive memory foam with seat straps to secure your head and neck, provides 360° support"
                        imageUrl="https://m.media-amazon.com/images/I/51193RXQ1SL._AC_SL1080_.jpg"
                        affiliateLink="https://amzn.to/4lcQIyU"
                        price="$39.99"
                        rating={4.2}
                        isPrime={true}
                    />
                </div>,
            ];
        case "wine-destinations":
            return [
                <div key="amazon-wine-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Wine Folly Magnum Edition, Master Guide to Wine"
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
                        title="Wine Aerator Pourer, Premium Decanter Spout"
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
                        title="Portable Wine Carrier, 2 Bottle Insulated Tote"
                        description="Padded travel bag with corkscrew, perfect for vineyard hopping"
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
                        title="Cannes Cinema Paperback – July 1, 2011"
                        description="by Serge Toubiana (Author), Gilles Traverso (Author)"
                        imageUrl="https://m.media-amazon.com/images/I/71H7qj0Tq9L._SL1400_.jpg"
                        affiliateLink="https://amzn.to/4ue1toA"
                        price="$52.83"
                        rating={4.7}
                        isPrime={false}
                    />
                </div>,
                <div key="amazon-film-imdb" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Official IMDb Top 100 Movies Scratch Off Poster, Premium Bucket List, Made in USA"
                        description="Scratch off your favorite films as you watch them. A must-have for any movie lover."
                        imageUrl="https://m.media-amazon.com/images/I/81MLQ-+4DqL._AC_SL1422_.jpg"
                        affiliateLink="https://amzn.to/4cuVA08"
                        price="$21.99"
                        rating={4.7}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-film-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Urban Accents Movie Night Popcorn Gift Set"
                        description="Includes 3 Gourmet Popcorn Kernel Varieties & 5 Flavorful Seasonings – Perfect Snack Gift Box for Parties, Holidays, or Movie Lovers"
                        imageUrl="https://m.media-amazon.com/images/I/818hCAEz0tL._SL1500_.jpg"
                        affiliateLink="https://amzn.to/4raA44f"
                        price="$21.95"
                        rating={4.6}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-film-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Movie Location Travel Map, Scratch Off Film Poster"
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
