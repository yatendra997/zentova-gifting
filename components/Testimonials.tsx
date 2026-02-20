"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            content: "Zentova completely transformed our Diwali gifting strategy. The level of personalization and the sheer quality of the hampers were unmatched. Our employees were genuinely thrilled.",
            author: "Priya Sharma",
            role: "VP Human Resources, TechNova Solutions",
        },
        {
            content: "Handling a 5000+ welcome kit dispatch across different cities seemed daunting until we partnered with Zentova. Flawless execution, beautiful packaging, and zero missing items.",
            author: "Arjun Verma",
            role: "Head of Operations, FinEdge India",
        },
        {
            content: "The custom leather compendiums and luxury pens curated for our C-Suite offsite in Goa were exquisite. Zentova brings an extraordinary sense of refinement to corporate merchandise.",
            author: "Samantha D'Souza",
            role: "Director of Marketing, Stellar Enterprises",
        },
    ];

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/Hero.jpg')" }}>
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-md" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
                    >
                        Trusted by Industry Leaders
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-300 font-light max-w-2xl mx-auto"
                    >
                        Discover how we help India&apos;s top enterprises build lasting professional relationships through the art of gifting.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="glass-card p-10 rounded-[2.5rem] relative group border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-500"
                        >
                            <Quote className="w-10 h-10 text-white/30 mb-8 transform group-hover:scale-110 group-hover:text-amber-300 transition-all duration-500" strokeWidth={1} />
                            <p className="text-white text-lg font-light leading-relaxed mb-10 min-h-[120px]">
                                &quot;{test.content}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 border border-white/30 flex items-center justify-center">
                                    <span className="text-white font-serif font-bold text-lg">{test.author[0]}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">{test.author}</h4>
                                    <p className="text-zinc-400 text-sm font-light mt-1">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
