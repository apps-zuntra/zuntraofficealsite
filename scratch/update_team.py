import re

jsx_path = r'e:\deva\sept23\zuntraoffical\src\pages\about\Team.jsx'
with open(jsx_path, 'r', encoding='utf-8') as f:
    jsx_content = f.read()

def replace_leader(m):
    article_tag = m.group(1)
    img_tag = m.group(2)
    name = m.group(3)
    role = m.group(4)
    
    return f"""{article_tag}
              <div className="tm-leader__frame">
                {img_tag}
              </div>
              
              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{{{ textTransform: 'uppercase' }}}}>{name}</h3>
                <p className="tm-leader__role">
                  {role}
                </p>
              </div>
            </article>"""

pattern = re.compile(r'(<article className="tm-leader[^"]*">\s*)<div className="tm-leader__frame">\s*(<img[^>]+>)\s*</div>\s*<h3 className="tm-leader__name"[^>]*>(.*?)</h3>\s*<p className="tm-leader__role">\s*(.*?)\s*</p>\s*</article>', re.DOTALL)

new_jsx = pattern.sub(replace_leader, jsx_content)
with open(jsx_path, 'w', encoding='utf-8') as f:
    f.write(new_jsx)
print('JSX updated.')

css_path = r'e:\deva\sept23\zuntraoffical\src\pages\about\Team.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

new_css = """
/* --- Team Member Card Animation --- */
.tm-leader {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: var(--surface, #fff);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: 0.5s;
}

.tm-leader__frame {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  z-index: 2;
  transition: transform 0.5s ease;
  overflow: hidden;
  border: none !important;
}

.tm-leader__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.tm-leader:hover .tm-leader__frame {
  transform: translateY(-80px);
}

.tm-leader:hover .tm-leader__frame img {
  opacity: 0.8;
}

.tm-leader__social {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tm-leader__social li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  color: #333;
  transition: 0.4s;
  transform: translateY(100px);
  opacity: 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.tm-leader:hover .tm-leader__social li a {
  transform: translateY(0);
  opacity: 1;
}

.tm-leader__social li a:hover {
  background: #0077b5;
  color: #fff;
}

.tm-leader__details {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  background: var(--surface, #fff);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.tm-leader__name {
  margin: 0 !important;
  font-size: 16px !important;
}

.tm-leader__role {
  margin: 4px 0 0 !important;
  font-size: 11px !important;
}
"""
with open(css_path, 'a', encoding='utf-8') as f:
    f.write(new_css)
print('CSS updated.')
