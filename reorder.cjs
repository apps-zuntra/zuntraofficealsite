const fs = require('fs');
let content = fs.readFileSync('d:/games/zuntraoffical-main/src/pages/builds/BuildPage.jsx', 'utf8');

const sections = [
    '{/* Custom Products Section */}',
    '{/* Why Zuntra Section */}',
    '{/* How We Work Section */}',
    '{/* Stats & Architecture Section */}',
    '{/* Workflow Grid Section */}',
    '{/* Emerging Technology Grid Section */}',
    '{/* Use Cases Accordion Section */}',
    '{/* FAQ Section */}',
];

let parts = [];
let last_idx = 0;

for (let s of sections) {
    let idx = content.indexOf(s);
    if (idx !== -1) {
        parts.push(content.substring(last_idx, idx));
        last_idx = idx;
    }
}
parts.push(content.substring(last_idx));

// parts[0] is everything up to Custom Products
// parts[1] is Custom Products
// parts[2] is Why Zuntra
// parts[3] is How We Work
// parts[4] is Stats & Architecture
// parts[5] is Workflow Grid
// parts[6] is Emerging Tech
// parts[7] is Use Cases
// parts[8] is FAQ and below

let new_content = parts[0] + parts[5] + parts[7] + parts[2] + parts[1] + parts[3] + parts[4] + parts[6] + parts[8];

new_content = new_content.replace('<span className="eyebrow">WHY ZUNTRA</span>', '<span className="eyebrow blue">{build.whyZuntraEyebrow || "WHY ZUNTRA"}</span>');

fs.writeFileSync('d:/games/zuntraoffical-main/src/pages/builds/BuildPage.jsx', new_content);
