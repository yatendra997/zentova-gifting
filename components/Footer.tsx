"use client";

import { motion } from "framer-motion";
import { Gift, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-300 pt-24 pb-12 border-t border-zinc-900 border-opacity-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-zinc-900 shadow-xl group-hover:shadow-amber-500/30 transition-shadow">
                                <Gift className="w-5 h-5" />
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-tight text-white">
                                Zentova<span className="font-sans text-lg font-light text-zinc-500 ml-1">Gifting</span>
                            </span>
                        </Link>
                        <p className="text-zinc-500 font-light leading-relaxed mb-6">
                            Elevating corporate relationships through custom bespoke merchandise and premium gifting solutions.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors group">
                                <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors group">
                                <Instagram className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors group">
                                <Twitter className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="lg:col-span-1">
                        <h4 className="font-serif text-white font-bold text-lg mb-6 tracking-wide">Enterprise Solutions</h4>
                        <ul className="space-y-4 font-light text-zinc-400">
                            <li><a href="#" className="hover:text-white transition-colors">Employee Onboarding</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Festive Hampers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Executive Luxury</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Event Merchandise</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Bespoke Customization</a></li>
                        </ul>
                    </div>

                    {/* Nav Links */}
                    <div className="lg:col-span-1">
                        <h4 className="font-serif text-white font-bold text-lg mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4 font-light text-zinc-400">
                            <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                            <li><a href="#categories" className="hover:text-white transition-colors">Full Catalogue</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Client Success</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-1">
                        <h4 className="font-serif text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
                        <ul className="space-y-6 font-light text-zinc-400">
                            <li className="flex items-start gap-3 group">
                                <Mail className="w-5 h-5 text-zinc-600 mt-1 group-hover:text-amber-500 transition-colors" />
                                <span>
                                    <span className="block text-white font-medium mb-1">Email Requests</span>
                                    hello@zentovagifting.com
                                </span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Phone className="w-5 h-5 text-zinc-600 mt-1 group-hover:text-amber-500 transition-colors" />
                                <span>
                                    <span className="block text-white font-medium mb-1">Corporate Hotline</span>
                                    +91 (1800) 123-4567
                                </span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-zinc-600 mt-1 group-hover:text-amber-500 transition-colors" />
                                <span className="leading-relaxed">
                                    <span className="block text-white font-medium mb-1">Headquarters</span>
                                    Level 21, Corporate Tower A,<br />Bandra Kurla Complex, Mumbai, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-600 font-light text-sm text-center md:text-left">
                        &copy; {currentYear} Zentova Gifting Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-zinc-600 font-light">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <span className="w-px h-4 bg-zinc-800 my-auto"></span>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <span className="w-px h-4 bg-zinc-800 my-auto"></span>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
