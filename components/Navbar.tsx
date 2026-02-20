"use client";

import { motion } from "framer-motion";
import { Menu, X, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Categories", href: "#categories" },
        { name: "Process", href: "#process" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-white shadow-lg group-hover:shadow-zinc-500/30 transition-shadow">
                        <Gift className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
                        Zentova<span className="font-sans text-lg font-light text-zinc-500 ml-1">Gifting</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-zinc-900 after:transition-all hover:after:w-full pb-1"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                    >
                        Download Catalogue
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-900/20 active:scale-95"
                    >
                        Request Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-white border-b border-gray-100 px-6 py-4 absolute top-full left-0 right-0 shadow-lg"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-zinc-700 py-2 border-b border-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="mt-4 bg-zinc-900 text-center text-white px-6 py-3 rounded-xl text-base font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Request Quote
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
