"use client";

import { motion } from "framer-motion";
import { Send, PhoneCall, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Dummy submit simulation
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 3000);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/50 overflow-hidden border border-gray-100 flex flex-col lg:flex-row">

                    {/* Contact Information Side */}
                    <div className="lg:w-2/5 bg-zinc-900 text-white p-10 md:p-16 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="font-serif text-3xl font-bold mb-4">Let's Talk Enterprise</h3>
                            <p className="text-zinc-400 font-light mb-12 text-sm leading-relaxed">
                                Share your bulk gifting requirements with us. Our Enterprise Consultant will get back to you within 24 hours with a custom proposal.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-emerald-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Email Us</p>
                                        <p className="text-sm font-medium">corporate@zentovagifting.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <PhoneCall className="w-4 h-4 text-amber-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Call Us</p>
                                        <p className="text-sm font-medium">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-purple-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Headquarters</p>
                                        <p className="text-sm font-medium leading-relaxed">Level 4, Corporate Park<br />Bandra Kurla Complex, Mumbai</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative circle */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    </div>

                    {/* Contact Form Side */}
                    <div className="lg:w-3/5 p-10 md:p-16">
                        <h3 className="font-serif text-3xl font-bold text-zinc-900 mb-2">Request a Quote</h3>
                        <p className="text-zinc-500 font-light mb-8">Fill out the form below and we'll be in touch shortly.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-zinc-700">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        required
                                        placeholder="TechNova Inc."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-700">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="requirements" className="text-sm font-medium text-zinc-700">Gifting Requirements</label>
                                <textarea
                                    id="requirements"
                                    rows={4}
                                    required
                                    placeholder="Please tell us about your occasion, target audience, budget per kit, and tentative volume..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none bg-slate-50 focus:bg-white"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className="w-full sm:w-auto relative group overflow-hidden bg-zinc-900 text-white px-8 py-4 rounded-xl font-medium transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {status === "idle" && (
                                        <>Submit Request <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                    {status === "submitting" && "Sending Request..."}
                                    {status === "success" && "Request Sent Successfully!"}
                                </span>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
