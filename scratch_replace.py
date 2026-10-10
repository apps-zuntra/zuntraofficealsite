import re

with open('src/components/VenturesShowcase.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    return f'''<div className="vs-feature-content-wrapper">
              <div className="vs-feature-grid">
                <div className="vs-text-col vs-text-left">
                  <h4>{match.group(1)}</h4>
                  <p>{match.group(2)}</p>
                </div>
                <div className="vs-text-col vs-text-right">
                  <h4>{match.group(5)}</h4>
                  <p>{match.group(6)}</p>
                </div>
                <div className="vs-img-col">
                  <img src={{{match.group(3)}}} alt="{match.group(4)}" className="vs-feature-img-full" />
                </div>
                <div className="vs-img-col">
                  <img src={{{match.group(7)}}} alt="{match.group(8)}" className="vs-feature-img-full" />
                </div>
              </div>
            </div>'''

pattern = r'<div className="vs-cards-grid-wrapper">\s*<div className="vs-cards-grid">\s*<div className="vs-feature-card">\s*<div className="vs-card-header">\s*<h4>(.*?)</h4>\s*<p>(.*?)</p>\s*</div>\s*<div className="vs-card-image-box">\s*<img src=\{(.*?)\} alt="(.*?)" className="vs-card-img" />\s*</div>\s*</div>\s*<div className="vs-feature-card">\s*<div className="vs-card-header">\s*<h4>(.*?)</h4>\s*<p>(.*?)</p>\s*</div>\s*<div className="vs-card-image-box">\s*<img src=\{(.*?)\} alt="(.*?)" className="vs-card-img" />\s*</div>\s*</div>\s*</div>\s*</div>'

new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open('src/components/VenturesShowcase.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done')
