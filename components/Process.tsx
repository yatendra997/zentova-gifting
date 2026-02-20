"use client";

import { motion } from "framer-motion";

export default function Process() {
    const steps = [
        {
            title: "Requirement Consultation",
            description: "Our dedicated corporate managers understand your exact requirements, budget, and brand guidelines to propose tailored concepts.",
        },
        {
            title: "Design Mockups",
            description: "Our in-house design unit creates bespoke 3D mockups of the curated gifts with your enterprise branding precisely applied.",
        },
        {
            title: "Sampling & Approval",
            description: "Physical prototypes are shared for your tactile review and strict approval before moving to the mass manufacturing stage.",
        },
        {
            title: "Bulk Production",
            description: "Executing large-batch production through our advanced facility while maintaining uncompromising quality at every step.",
        },
        {
            title: "Quality Inspection",
            description: "A comprehensive multi-point QA process ensures each item in every hamper meets the highest standards of luxury and durability.",
        },
        {
            title: "Nationwide Dispatch",
            description: "Secured, meticulously packaged dispatch across PAN India with live enterprise-grade tracking straight to the end recipient.",
        },
    ];

    return (
        <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6"
                    >
                        The Zentova Workflow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mx-auto"
                    >
                        A streamlined, six-step enterprise protocol ensuring your corporate gifting execution is flawless from conception to unboxing.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Grid Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 -translate-x-1/2" />

                    {steps.map((step, index) => (
                        <div key={step.title} className={`relative flex items-center mb-16 md:mb-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}>
                            {/* Timeline dot */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-amber-100 rounded-full items-center justify-center z-20 shadow-xl">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 animate-pulse" />
                            </div>

                            {/* Number for mobile */}
                            <div className="md:hidden w-12 h-12 rounded-full border border-amber-200 bg-amber-50 flex items-center justify-center font-serif font-bold text-amber-700 text-xl mb-6 shadow-sm">
                                0{index + 1}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-16 text-center md:text-right" : "md:pl-16 text-center md:text-left"}`}
                            >
                                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-gray-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    <span className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3 block">Step 0{index + 1}</span>
                                    <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                                    <p className="text-zinc-600 font-light leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
