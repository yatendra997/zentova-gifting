import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zentova Gifting | Elevating Corporate Gifting to an Art of Excellence",
  description: "Enterprise Corporate Gifting & Bulk Promotional Merchandise. Make Every Corporate Gesture Memorable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-black selection:text-white bg-slate-50`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
