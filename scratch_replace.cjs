const fs = require('fs');

const content = fs.readFileSync('src/components/VenturesShowcase.jsx', 'utf8');

const pattern = /<div className="vs-cards-grid-wrapper">\s*<div className="vs-cards-grid">\s*<div className="vs-feature-card">\s*<div className="vs-card-header">\s*<h4>(.*?)<\/h4>\s*<p>(.*?)<\/p>\s*<\/div>\s*<div className="vs-card-image-box">\s*<img src=\{(.*?)\}\s+alt="(.*?)"\s+className="vs-card-img"\s*\/>\s*<\/div>\s*<\/div>\s*<div className="vs-feature-card">\s*<div className="vs-card-header">\s*<h4>(.*?)<\/h4>\s*<p>(.*?)<\/p>\s*<\/div>\s*<div className="vs-card-image-box">\s*<img src=\{(.*?)\}\s+alt="(.*?)"\s+className="vs-card-img"\s*\/>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/gs;

const newContent = content.replace(pattern, (match, title1, desc1, img1Src, img1Alt, title2, desc2, img2Src, img2Alt) => {
    return `<div className="vs-feature-content-wrapper">
              <div className="vs-feature-grid">
                <div className="vs-text-col vs-text-left">
                  <h4>${title1}</h4>
                  <p>${desc1}</p>
                </div>
                <div className="vs-text-col vs-text-right">
                  <h4>${title2}</h4>
                  <p>${desc2}</p>
                </div>
                <div className="vs-img-col">
                  <img src={${img1Src}} alt="${img1Alt}" className="vs-feature-img-full" />
                </div>
                <div className="vs-img-col">
                  <img src={${img2Src}} alt="${img2Alt}" className="vs-feature-img-full" />
                </div>
              </div>
            </div>`;
});

fs.writeFileSync('src/components/VenturesShowcase.jsx', newContent, 'utf8');
console.log('Done');
