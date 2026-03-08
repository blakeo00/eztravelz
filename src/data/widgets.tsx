import React, { ReactNode } from "react";
import AmazonProductCard from "@/components/AmazonProductCard";

export const getCategoryWidgets = (categorySlug: string, postSlug?: string): ReactNode[] => {
    switch (categorySlug) {
        case "haunted-tours":
            const hauntedWidgets = [
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

            if (postSlug === 'stanley-hotel-where-the-nightmare-became-the-novel') {
                return [
                    <div key="amazon-ghost-stanley-1" className="my-0">
                        <AmazonProductCard
                            compact
                            title="The Big Book of Pennsylvania Ghost Stories (Big Book of Ghost Stories)"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81XJtE1f0AL._SL1500_.jpg"
                            affiliateLink="https://amzn.to/4rWoECm"
                            price="$18.59"
                            rating={4.6}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-ghost-stanley-2" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Professional Ghost Hunting Equipment, Accurate Paranormal Instrument, Sensitive Temperature Detection and Electromagnetic Field, Individual Investigators and Paranormal Explorers"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/71SfVThCSIL._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/4bvdZc4"
                            price="$99.99"
                            rating={5.0}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-ghost-stanley-3" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Crossbody Sling Bag for Women Leather Shoulder Chest Bag Small Fanny Pack for Hiking Travel | Leather, Shoulder, Chest Bag, for Hiking, Travel"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/71HfZtl+giL._AC_SY695_.jpg"
                            affiliateLink="https://amzn.to/3OY5A8g"
                            price="$28.99"
                            rating={4.6}
                            isPrime={true}
                        />
                    </div>,
                ];
            }

            return hauntedWidgets;
        case "sports-travel":
            const sportsWidgets = [
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

            if (postSlug === 'titletown-usa-lambeau-field-nfl-pilgrimage') {
                sportsWidgets[0] = (
                    <div key="amazon-sports-helmet" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Riddell NFL Unisex-Adult Riddell Full Size Replica Speed Helmet"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81e7TBeXXbL._AC_SX679_.jpg"
                            affiliateLink="https://amzn.to/3MRBaUG"
                            price="$169.95"
                            rating={4.6}
                            isPrime={false}
                        />
                    </div>
                );
                sportsWidgets[1] = (
                    <div key="amazon-sports-football" className="my-0">
                        <AmazonProductCard
                            compact
                            title="WILSON NFL Authentic Footballs - The Duke"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/71gWTT486TL._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/4ugvaWi"
                            price="$159.95"
                            rating={4.7}
                            isPrime={true}
                        />
                    </div>
                );
                sportsWidgets[2] = (
                    <div key="amazon-sports-cards" className="my-0">
                        <AmazonProductCard
                            compact
                            title="2024 Panini Donruss Elite NFL Football Trading Cards Blaster Box"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81kb3uM0c4L._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/4bup1hK"
                            price="$47.99"
                            rating={4.7}
                            isPrime={true}
                        />
                    </div>
                );
            }

            return sportsWidgets;
        case "pet-travel":
            const petWidgets = [
                <div key="amazon-pet-1" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Sherpa Original Deluxe Travel Pet Carrier, Airline Approved & Guaranteed On Board - Black, Medium"
                        description="Fits under most airline seats. Mesh ventilation and machine-washable liner"
                        imageUrl="https://m.media-amazon.com/images/I/81gqQnt7waL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/4syy1IA"
                        price="$49.24"
                        rating={4.5}
                        reviewCount={24031}
                        isPrime={true}
                        badge="amazons-choice"
                    />
                </div>,
                <div key="amazon-pet-2" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Cleverpup, Large 7-Piece Bistro Box Dog Food Travel Kit, 12-BPA-Free Cup Kibble Storage, 2 Silicone Bowls, Mat & Scoop"
                        description="Portable Pet Food Kit for Weekends, Overnights, Daycare & Camping, Heather Grey"
                        imageUrl="https://m.media-amazon.com/images/I/81SpnNPTodL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/3N9jHai"
                        price="$82.00"
                        rating={4.8}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-pet-3" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Cat Carrier Soft-Sided & Foldable Travel Litter Box for Cats, Fit 20Lbs Pets"
                        description="17.7' * 11.8 * 11.8 inches Cat Bag for Traveling & Camping, Indoor & Outdoor, Pet Carrier Kit, Blue"
                        imageUrl="https://m.media-amazon.com/images/I/71w9tCbwg1L._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/3P7Dibr"
                        price="$32.99"
                        rating={4.6}
                        isPrime={true}
                    />
                </div>,
            ];

            if (postSlug === 'paws-and-away-pet-traveler-guide') {
                petWidgets.splice(1, 0, (
                    <div key="amazon-pet-kurgo" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Kurgo Tru-Fit Smart Dog Walking Harness"
                            description="Comfortable Fit - Adjustable Harness - Reflective Pet Wear - Quick Strap Release - Daily Walk Accessory"
                            imageUrl="https://m.media-amazon.com/images/I/B1cE2pM4fxS._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/3MSkH2x"
                            price="$26.95"
                            rating={4.3}
                            isPrime={true}
                        />
                    </div>
                ));
                petWidgets.splice(2, 0, (
                    <div key="amazon-pet-seat-cover" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Dog Seat Cover for Back Seat, Hard Bottom Back Seat Extender Holds 500 lbs, Waterproof & Nonslip Car Hammock for Large Pets, Comfortable Travel Seat Protector for SUV and Sedan"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81D-nm4mx1L._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/40VZk3r"
                            price="$79.01"
                            rating={4.6}
                            isPrime={true}
                        />
                    </div>
                ));
            }

            return petWidgets;
        case "culinary-quests":
            const culinaryWidgets = [
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

                <div key="amazon-food-4" className="my-0">
                    <AmazonProductCard
                        compact
                        title="Statik SmartCharge 5-in-1 Travel Power Bank with Wall Plug & Built in USB C Cables, 10000mAh International Travel Charger & European Portable Charger, Compatible with iPhone, iPad & Samsung"
                        description="10000mAh International Travel Charger with built-in USB-C cables and wall plug"
                        imageUrl="https://m.media-amazon.com/images/I/71Ick+fxhGL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/4byq6nN"
                        price="$55.99"
                        rating={4.0}
                        isPrime={true}
                    />
                </div>,
            ];

            if (postSlug === 'smoke-patience-butcher-paper-texas-bbq-road-trip') {
                return [
                    <div key="amazon-bbq-1" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Nomad Portable Charcoal Grill – Ultra-Slim Folding BBQ for Outdoor Cooking, Camping & Travel | 304 Stainless Steel, Heat-Resistant Wood Handles, Quick Setup"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81xtlCiKLEL._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/4cyvxVR"
                            price="$69.99"
                            rating={4.6}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-bbq-2" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Hap Tim Picnic Backpack Bag for 4 Person with Cooler Compartment, Detachable Bottle/Wine Holder, Fleece Blanket, Plates and Cutlery Set Perfect for Outdoor, Sports, Hiking, Camping, BBQs(Coffee)"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81A1cxvsakL._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/4rXlbUf"
                            price="$59.99"
                            rating={4.8}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-bbq-3" className="my-0">
                        <AmazonProductCard
                            compact
                            title="VEVOR Camping Kitchen Table, Folding Outdoor Cooking Table, 3 Adjustable Height, Aluminum Lightweight Portable Cook Station with Storage Organizer, Carry Handle, for BBQ Party Picnic RV Travel, Blue"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81y+m9M-l-L._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/4sx35bB"
                            price="$59.99"
                            rating={4.0}
                            isPrime={true}
                        />
                    </div>,
                ];
            }

            return culinaryWidgets;
        case "wine-destinations":
            const wineWidgets = [
                <div key="amazon-wine-suitcase" className="my-0">
                    <AmazonProductCard
                        compact
                        title="boldworks Wine Suitcase for Airplanes 12 Bottle Wine Luggage for Airplane Travel with TSA Approved Lock and Removable Insert to Carry Liquor Black Color Case"
                        description="12 bottle wine luggage with TSA approved lock and removable insert."
                        imageUrl="https://m.media-amazon.com/images/I/71iT4FikoFL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/40P2FBr"
                        price="$169.99"
                        rating={4.7}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-wine-bag" className="my-0">
                    <AmazonProductCard
                        compact
                        title="ALLCAMP Wine Bag - Insulated Cooler Bag with Wine Glasses, Bottle Opener & Wine Accessories for Wine Lovers - Portable Wine Gift Bag for Travel, Picnics, and Gift Ideas(Black)"
                        description="Insulated wine cooler bag with accessories for travel and picnics."
                        imageUrl="https://m.media-amazon.com/images/I/71S1EVka1pL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/40Lp9mS"
                        price="$23.69"
                        rating={4.7}
                        isPrime={true}
                    />
                </div>,
                <div key="amazon-wine-chiller" className="my-0">
                    <AmazonProductCard
                        compact
                        title="EUHOMY Wine Chiller Electric, Portable Wine Bottle Chiller for 750ml Wine & Champagne, Single Bottle Wine Cooler"
                        description="Portable electric wine bottle chiller for 750ml wine and champagne."
                        imageUrl="https://m.media-amazon.com/images/I/71OrSafO6JL._AC_SL1500_.jpg"
                        affiliateLink="https://amzn.to/4ugtkES"
                        price="$79.94"
                        originalPrice="$99.99"
                        rating={4.2}
                        isPrime={true}
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

            if (postSlug === 'holy-water-and-grape-bricks-prohibition-wine-trail') {
                return [
                    <div key="amazon-wine-prohibition-1" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Wine Box, 2 Bottle Leatherette Top Handle with 4 Wine Accessory Travel Wine Gift Box, Handmade Premium Wine Carrier Case"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/81WyYSBOW0L._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/4sx3FpQ"
                            price="$33.99"
                            rating={4.8}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-wine-prohibition-2" className="my-0">
                        <AmazonProductCard
                            compact
                            title="STANLEY The Reserve Textured Wine Tumbler | 11oz | Splash-Proof Lid | Cold Drinks & Cocktail Cup | Insulated Stainless Steel Wine Glass | Cream Gloss"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/51wdoPVD1lL._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/3OR9waZ"
                            price="$25.00"
                            rating={4.6}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-wine-prohibition-3" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Electric Wine Saver & Preserver Pump with Vacuum Wine Bottle Stopper, Rechargeable, 4 Reusable Wine Bottle Stoppers, Wine Sealer, Keep Wine Fresh for Days"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/811-SrvDCKL._AC_SL1500_.jpg"
                            affiliateLink="https://amzn.to/3OWHF9h"
                            price="$25.99"
                            rating={4.5}
                            isPrime={true}
                        />
                    </div>,
                ];
            }

            return wineWidgets;
        case "cinematic-travel":
            const cinematicWidgets = [
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

            if (postSlug === 'reel-roads-room-217-the-shining') {
                return [
                    <div key="amazon-shining-collection-1" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Stephen King Collection 4 Books Set (Pet Sematary, The Shining, It, Doctor Sleep)"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/61dZYfRv7-L._SL1000_.jpg"
                            affiliateLink="https://amzn.to/4bdB9CD"
                            price="$69.59"
                            rating={4.8}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-shining-collection-2" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Ultimate King of Horror Stephen King Limited Collection: Salem's Lot/ The Shining/ Cat's Eye/ The Green Mile/ Misery/ Children of the Corn/ It: Original 1990/ It: New Version 2017/ Carrie/ The Dark Tower & Sleepwalkers [Blu-ray] Region A"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/61S0+B7tq8L.jpg"
                            affiliateLink="https://amzn.to/4b1MQvO"
                            price="$75.00"
                            rating={4.0}
                            isPrime={true}
                        />
                    </div>,
                    <div key="amazon-shining-collection-3" className="my-0">
                        <AmazonProductCard
                            compact
                            title="Horror Films of the 1980s,( VOL. 1 & 2 ) Paperback –"
                            description=""
                            imageUrl="https://m.media-amazon.com/images/I/611SXMXNFXL._SL1197_.jpg"
                            affiliateLink="https://amzn.to/3NfpdYO"
                            price="$59.95"
                            rating={4.2}
                            isPrime={true}
                        />
                    </div>,
                ];
            }

            return cinematicWidgets;
        default:
            return [];
    }
};
