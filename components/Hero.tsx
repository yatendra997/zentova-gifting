"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-8 lg:pt-20 lg:pb-8 overflow-hidden bg-slate-50">
            {/* Background Abstract Mesh Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-amber-100/40 via-rose-100/30 to-transparent blur-3xl rounded-full" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    className="flex-1 text-center lg:text-left pt-12 lg:pt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">Enterprise Gifting Hub</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-zinc-900 leading-[1.1] tracking-tight mb-5"
                    >
                        Elevating Corporate Gifting to an <br className="hidden xl:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500">
                            Art of Excellence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-base md:text-lg lg:text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
                    >
                        We curate ultra-premium, customized promotional merchandise and bespoke gift hampers designed to build lasting relationships with your elite clientele and workforce.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                    >
                        <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-all hover:shadow-xl hover:shadow-zinc-900/20 active:scale-95">
                            Request Bulk Quote
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-zinc-900 border border-gray-200 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95">
                            <Download className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
                            Download Catalogue
                        </button>
                    </motion.div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full relative group perspective-[1000px]"
                >
                    {/* Decorative elements behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-purple-200 rounded-3xl blur-2xl opacity-50" />

                    <div className="relative z-10 w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/10] xl:aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border border-white/40">
                        <img
                            src="/Hero.jpg"
                            alt="Luxury Corporate Gifting Showcase"
                            className="object-cover w-full h-full"
                        />
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />

                        {/* Floating Glass Element */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white shadow-2xl"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-serif text-xl font-bold">Premium Quality</p>
                                    <p className="text-sm font-light text-white/80">Handpicked luxury items</p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-xl">
                                    <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Abstract floating ring */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-12 -right-12 w-32 h-32 border border-amber-300 rounded-full opacity-40 blur-[1px]"
                    />
                </motion.div>

            </div>
        </section>
    );
}
