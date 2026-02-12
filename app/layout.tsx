import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitkool - Websites That Turn Visitors Into Customers",
  description: "We build conversion-focused websites and lead systems for small businesses. Get more calls, forms, and customers.",
  icons: {
    icon: [
      { url: "/K .png", sizes: "16x16", type: "image/png" },
      { url: "/K .png", sizes: "32x32", type: "image/png" },
      { url: "/K .png", sizes: "96x96", type: "image/png" },
      { url: "/K .png", sizes: "192x192", type: "image/png" },
      { url: "/K .png", sizes: "256x256", type: "image/png" },
      { url: "/K .png", sizes: "384x384", type: "image/png" },
      { url: "/K .png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/K .png",
    apple: [
      { url: "/K .png", sizes: "180x180", type: "image/png" },
      { url: "/K .png", sizes: "256x256", type: "image/png" },
      { url: "/K .png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full max-w-full">
      <body className={`${inter.className} bg-[#1E1E1E] text-[#FFFFFF] w-full max-w-full`}>
        {/* Particle animation – full viewport, all pages */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleCount={500}
            particleSpread={10}
            particleBaseSize={44}
            sizeRandomness={0.5}
            speed={0.08}
            particleColors={["#ffffff", "#2ED3E6", "#1FA6B8"]}
            alphaParticles
            moveParticlesOnHover={false}
            className="fixed inset-0 w-full"
          />
        </div>
        <div className="relative z-10 w-full max-w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
