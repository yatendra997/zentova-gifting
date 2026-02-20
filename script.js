const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
fs.mkdirSync(dir, { recursive: true });

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

async function download(url, filePath) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                return download(res.headers.location, filePath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error('Failed to download: ' + res.statusCode));
            }
            const file = fs.createWriteStream(filePath);
            res.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log("Starting download...");
    for (const img of images) {
        console.log(`Downloading ${img.name}...`);
        try {
            await download(img.url, path.join(dir, img.name));
            console.log(`Saved ${img.name}`);
        } catch (e) {
            console.log(`Error ${img.name}: ` + e.message);
        }
    }
    console.log("Done successfully.");
}

run();
