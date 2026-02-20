"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Globe, Building2 } from "lucide-react";

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number, suffix: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            if (end === 0) return;
            const totalFrames = duration * 60;
            const interval = (duration * 1000) / totalFrames;
            const increment = end / totalFrames;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [value, duration, isInView]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

const stats = [
    { id: 1, name: "Years Experience", numericValue: 10, suffix: "+", stringValue: null, icon: Award },
    { id: 2, name: "Gifts Delivered", numericValue: 1, suffix: "M+", stringValue: null, icon: Users },
    { id: 3, name: "Corporate Clients", numericValue: 500, suffix: "+", stringValue: null, icon: Building2 },
    { id: 4, name: "Fulfillment Network", numericValue: 0, suffix: "", stringValue: "PAN India", icon: Globe },
];

export default function Trust() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Abstract Design Elements */}
            <div className="absolute top-0 right-[-10%] w-[30%] h-full bg-slate-50 border-l border-amber-100/50 transform -skew-x-[20deg]" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center md:text-left mb-16 max-w-2xl mx-auto md:mx-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4"
                    >
                        A decade of delivering excellence.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-zinc-600 font-light"
                    >
                        Trusted by the top enterprises across India to scale their gifting seamlessly.
                    </motion.p>
                </div>

                <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative group p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-gray-100 text-center lg:text-left"
                        >
                            <dt>
                                <div className="mx-auto lg:mx-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-700 shadow-xl shadow-zinc-900/10 mb-6 group-hover:scale-110 transition-transform">
                                    <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <p className="text-base font-light leading-7 text-zinc-500 uppercase tracking-widest">{stat.name}</p>
                            </dt>
                            <dd className="mt-2 flex items-baseline justify-center lg:justify-start gap-x-2">
                                <span className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                                    {stat.stringValue ? stat.stringValue : <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />}
                                </span>
                            </dd>
                        </motion.div>
                    ))}
                </dl>
            </div>

            {/* Decorative Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </section>
    );
}
