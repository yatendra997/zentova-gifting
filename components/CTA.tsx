"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-zinc-900 border-t border-zinc-800">
            {/* Abstract Mesh Background Embedded */}
            <div className="absolute inset-0 z-0">
                <svg
                    className="absolute w-full h-full opacity-[0.15]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grad)" />
                </svg>
                <div className="absolute inset-0 bg-[#18181b]/80" />
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl rounded-full" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-8">
                            Partner With Us
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                            Make Every Corporate Gesture <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                                Memorable.
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Connect with our enterprise gifting consultants to design a custom catalogue tailored exclusively for your workforce and VIP clients.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-zinc-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-amber-50 hover:text-amber-700 transition-all hover:shadow-xl hover:shadow-white/10 active:scale-95 group">
                                Request Bulk Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white/20 px-10 py-5 rounded-full text-lg font-medium hover:bg-white/5 hover:border-white/40 transition-all active:scale-95 group">
                                <Phone className="w-5 h-5 text-amber-500 group-hover:rotate-12 transition-transform" />
                                Talk to a Consultant
                            </button>
                        </div>

                        <p className="mt-8 text-sm text-zinc-500 font-light">
                            Join 500+ enterprises who trust Zentova Gifting. Guaranteed response within 2 hours.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
