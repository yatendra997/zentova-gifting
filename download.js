const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
console.log('Dir is:', dir);

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('Created dir');
}

const images = [
    { name: "employee-welcome-kits.jpg", url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop" },
    { name: "festive-hampers.jpg", url: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1200&auto=format&fit=crop" },
    { name: "event-merchandise.jpg", url: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=1200&auto=format&fit=crop" },
    { name: "executive-luxury-gifts.jpg", url: "https://images.unsplash.com/photo-1590845947376-2638caa89309?q=80&w=1200&auto=format&fit=crop" },
    { name: "gallery-1.jpg", url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200&auto=format&fit=crop" },
    { name: "gallery-2.jpg", url: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=1200&auto=format&fit=crop" },
    { name: "gallery-3.jpg", url: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&auto=format&fit=crop" },
    { name: "gallery-4.jpg", url: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?q=80&w=1200&auto=format&fit=crop" },
    { name: "gallery-5.jpg", url: "https://images.unsplash.com/photo-1558230587-f82ac242ffde?q=80&w=1200&auto=format&fit=crop" },
    { name: "gallery-6.jpg", url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop" },
    { name: "testimonials-bg.jpg", url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2640&auto=format&fit=crop" },
    { name: "hero-corporate.jpg", url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop" }
];

async function run() {
    for (const img of images) {
        console.log(`Downloading ${img.name}...`);
        try {
            const response = await fetch(img.url);
            if (!response.ok) throw new Error('Response not OK: ' + response.status);
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(path.join(dir, img.name), buffer);
            console.log(`Saved ${img.name} (${buffer.length} bytes)`);
        } catch (e) {
            console.error(`Failed to download ${img.name}`, e);
        }
    }
    console.log("Done");
}

run();
