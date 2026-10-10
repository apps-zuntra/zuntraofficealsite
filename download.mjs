import fs from 'fs';
import path from 'path';

async function download() {
  const url = "https://pro.reactbits.dev/api/registry/starter/depth-card-tw.json";
  const token = process.env.REACTBITS_LICENSE_KEY;
  if (!token) {
    console.error("No REACTBITS_LICENSE_KEY found.");
    process.exit(1);
  }
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    console.error("Failed to fetch:", res.status, await res.text());
    process.exit(1);
  }
  const data = await res.json();
  const componentContent = data.files[0].content;
  
  const dir = path.join(process.cwd(), "src", "components", "ui");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(dir, "depth-card.tsx"), componentContent);
  console.log("Downloaded successfully.");
}

download();
