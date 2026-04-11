const fs = require('fs');
const files = [
    "src/components/DansLeNoirArticle.tsx",
    "src/components/CannesGuide.tsx",
    "src/components/FilmFestivalsGuide.tsx",
    "src/components/WillametteValleyGuide.tsx",
    "src/components/BendBreweriesGuide.tsx",
    "src/components/DogBeachArticle.tsx",
    "src/app/culinary-quests/page.tsx",
    "src/app/wine-destinations/page.tsx",
    "src/app/sports-travel/page.tsx",
    "src/app/cinematic-travel/page.tsx"
];

for (const f of files) {
    if (!fs.existsSync(f)) continue;
    let content = fs.readFileSync(f, 'utf8');
    
    // Replace main backgrounds
    content = content.replace(/bg-\[\#ffffff\]/g, 'bg-[#37507a]');
    
    // Replace text color
    content = content.replace(/text-\[\#37507a\]/g, 'text-white');
    
    // Fix buttons that were blue and are now clashing
    content = content.replace(/bg-\[\#37507a\] hover:bg-\[\#2c3f61\] text-white/g, 'bg-[#fff0d4] hover:bg-white text-[#37507a]');
    
    // Fix borders
    content = content.replace(/border-\[\#37507a\]\/20/g, 'border-white/20');
    
    // Fix specific shadow
    content = content.replace(/rgba\(55, 80, 122, 0\.15\)/g, 'rgba(0, 0, 0, 0.3)');
    
    fs.writeFileSync(f, content);
    console.log("Updated", f);
}
