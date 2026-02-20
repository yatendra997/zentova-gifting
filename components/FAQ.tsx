"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What is your Minimum Order Quantity (MOQ)?",
        answer: "Given our focus on enterprise-scale corporate gifting, our standard Minimum Order Quantity (MOQ) typically starts at 100 units for customized lifestyle products and 50 units for ultra-premium executive luxury kits. We recommend consulting our specialists for product-specific MOQs.",
    },
    {
        question: "What are the standard delivery timelines?",
        answer: "Delivery timelines depend on the complexity of customization and order volume. Standard branded merchandise takes 7–14 business days, while bespoke crafted hampers may take 3–4 weeks from prototype approval. We offer guaranteed delivery SLAs for time-sensitive events.",
    },
    {
        question: "What branding options do you offer?",
        answer: "We utilize advanced in-house branding techniques including precision laser engraving, 3D UV printing, gold/silver foil stamping, subtle blind embossing, and high-fidelity screen printing to seamlessly integrate your brand logo without compromising the product&apos;s premium aesthetic.",
    },
    {
        question: "Do you offer PAN India shipping?",
        answer: "Yes, we possess a robust logistics network capable of shipping bulk orders to a central warehouse or dispatching individual kits directly to thousands of recipient addresses simultaneously across all pin codes in India with real-time tracking.",
    },
    {
        question: "Can we fully customize the packaging?",
        answer: "Absolutely. Packaging is as crucial as the gift itself. We offer custom-designed rigid boxes, sustainable jute/cotton bags, premium magnetic closure boxes, and personalized greeting inserts, all reflecting your exact corporate brand identity.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6"
                    >
                        Enterprise Corporate Queries
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg text-zinc-600 font-light"
                    >
                        Insights into our bulk capabilities, branding precision, and nationwide fulfillment.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-slate-50 border-amber-100 shadow-md" : "bg-white hover:border-gray-200 hover:bg-slate-50/50"
                                }`}
                        >
                            <button
                                className="w-full px-6 py-6 md:px-8 text-left flex justify-between items-center group focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-serif text-xl tracking-tight transition-colors duration-300 ${openIndex === index ? "text-amber-700 font-bold" : "text-zinc-800 font-semibold group-hover:text-amber-600"}`}>
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:border-amber-300 group-hover:bg-amber-50">
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 text-amber-600" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-zinc-400 group-hover:text-amber-500" />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 md:px-8 text-zinc-600 font-light leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
