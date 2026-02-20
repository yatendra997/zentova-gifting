"use client";

import { motion } from "framer-motion";

export default function Gallery() {
    const images = [
        "/Hero.jpg",
        "/pexels-nurseryart-360624.jpg",
        "/pexels-rdne-6518909.jpg",
        "/pexels-rdne-7581000.jpg",
        "/Hero.jpg",
        "/pexels-nurseryart-360624.jpg",
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
                    >
                        Premium Showcase
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mx-auto"
                    >
                        A glimpse into the artistry, branding finesse, and premium presentation we bring to every corporate order.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-2xl group aspect-square"
                        >
                            <img
                                src={src}
                                alt={`Corporate Gifting Gallery Image ${index + 1}`}
                                className="object-cover w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
