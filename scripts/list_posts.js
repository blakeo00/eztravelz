const fs = require('fs');
const content = fs.readFileSync('src/data/posts.tsx', 'utf8');
const lines = content.split('\n');
let slug = '';
for(let line of lines) {
  if (line.includes('slug:')) slug = line.split('slug:')[1].replace(/["',]/g, '').trim();
  if (line.includes('title:')) console.log(slug + ' | ' + line.split('title:')[1].replace(/["',]/g, '').trim());
}
