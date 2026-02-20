"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, Gem, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            name: "End-to-End Customization",
            description: "From product selection to personalized unboxing experiences, every element is matched to your exact enterprise identity.",
            icon: Gem,
        },
        {
            name: "In-House Branding Facility",
            description: "Industry-leading laser engraving, UV printing, and premium embossing handled entirely in-house for uncompromised quality.",
            icon: Factory,
        },
        {
            name: "Nationwide Logistics",
            description: "Robust supply chain network allowing seamless, tracked multi-location drop shipping across PAN India.",
            icon: Truck,
        },
        {
            name: "Dedicated Account Managers",
            description: "A specialized enterprise consultant assigned to oversee your entire gifting program from end to end.",
            icon: HeartHandshake,
        },
        {
            name: "On-Time Delivery Guarantee",
            description: "Proprietary order tracking and fulfillment SLA ensuring zero delays, even for the most massive bulk volume orders.",
            icon: CheckCircle2,
        },
        {
            name: "Uncompromising Quality Control",
            description: "A stringent 4-step quality assurance process, guaranteeing that every gift that leaves our warehouse is flawless.",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className="py-24 bg-zinc-900 relative overflow-hidden text-white">
            {/* Abstract Glowing Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-800 rounded-full blur-[150px] opacity-50" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6"
                    >
                        <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">
                            The Zentova Advantage
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 max-w-4xl mx-auto mb-6 leading-tight"
                    >
                        Engineered for Enterprise Scale & Elegance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto"
                    >
                        We don&apos;t just supply products; we partner with you to build profound brand affinity through flawless gifting solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold mb-4 text-white">
                                {feature.name}
                            </h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
