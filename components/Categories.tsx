"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        title: "Employee Welcome Kits",
        description: "Leave a lasting first impression with premium onboarding kits tailored to your brand identity.",
        imageSrc: "/Hero.jpg",
    },
    {
        title: "Festive Hampers",
        description: "Celebrate milestones and joyous occasions with gourmet treats and luxury accessories.",
        imageSrc: "/pexels-nurseryart-360624.jpg",
    },
    {
        title: "Event Merchandise",
        description: "High-quality branded apparel and tech gadgets for summits, conferences, and offsites.",
        imageSrc: "/pexels-rdne-6518909.jpg",
    },
    {
        title: "Executive Luxury Gifts",
        description: "Exquisite, handcrafted gifts sourced globally to honor your C-suite and finest partners.",
        imageSrc: "/pexels-rdne-7581000.jpg",
    },
];

export default function Categories() {
    return (
        <section id="categories" className="py-24 bg-zinc-50 relative overflow-hidden">
            {/* Abstract Glowing Orb */}
            <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-l from-rose-100/50 to-transparent blur-[120px] rounded-full" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
                        >
                            Curated Collections for Every Corporate Need
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-zinc-600 font-light"
                        >
                            Explore our diverse range of gifting categories designed to reflect enterprise standards.
                            We blend utility, luxury, and aesthetics perfectly.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button className="flex items-center gap-2 pb-1 border-b-2 border-zinc-900 text-zinc-900 font-medium hover:text-zinc-600 hover:border-zinc-600 transition-colors">
                            View Entire Catalogue <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl hover:shadow-zinc-900/10 transition-all duration-500 h-[24rem] md:h-[28rem]"
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={category.imageSrc}
                                    alt={category.title}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-10 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">{category.title}</h3>
                                <p className="text-white/80 font-light text-sm md:text-base mb-6 max-w-sm line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {category.description}
                                </p>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide border border-white/40 px-5 py-2.5 rounded-full hover:bg-white hover:text-zinc-900 transition-colors cursor-pointer">
                                        Explore Collection <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
