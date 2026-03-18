const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath, replacements) => {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
    }
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
};

const petTravelPagePath = path.join(__dirname, 'src/app/pet-travel/page.tsx');
const dogBeachArticlePath = path.join(__dirname, 'src/components/DogBeachArticle.tsx');

// Replace colors in pet travel page
replaceInFile(petTravelPagePath, [
    { regex: /text-slate-900/g, replacement: 'text-[#1B2E22]' },
    { regex: /text-slate-800/g, replacement: 'text-[#1B2E22]' },
]);

// Replace colors in Dog Beach Article
replaceInFile(dogBeachArticlePath, [
    { regex: /text-slate-900/g, replacement: 'text-[#1B2E22]' },
    { regex: /text-slate-800/g, replacement: 'text-[#1B2E22]' },
    { regex: /text-slate-700/g, replacement: 'text-[#132018]' }, // slightly darker/same for hover
    { regex: /prose-a:text-\[\#1B2E22\]/g, replacement: 'prose-a:text-blue-600' }, // fix up after first replace
    { regex: /hover:prose-a:text-slate-600/g, replacement: 'hover:prose-a:text-blue-800' },
    // Also update any inline links like 'text-slate-900 hover:text-slate-600 underline'
    { regex: /text-\[\#1B2E22\] hover:text-slate-600 underline/g, replacement: 'text-blue-600 hover:text-blue-800 underline' }
]);
