const fs = require('fs');
const content = fs.readFileSync('src/data/posts.tsx', 'utf8');
const lines = content.split('\n');
let slug = '';
let out = '';
for(let line of lines) {
  if (line.includes('slug:')) slug = line.split('slug:')[1].replace(/["',]/g, '').trim();
  if (line.includes('title:')) out += slug + ' | ' + line.split('title:')[1].replace(/["',]/g, '').trim() + '\n';
}
fs.writeFileSync('scripts/posts_list_utf8.txt', out, 'utf8');
