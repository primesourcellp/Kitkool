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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-full max-w-full">
      <body className={`${inter.className} bg-[#1E1E1E] text-[#FFFFFF] overflow-x-hidden w-full max-w-full`}>
        {/* Particle animation – full viewport, all pages */}
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full min-h-screen min-w-full">
          <Particles
            particleCount={500}
            particleSpread={10}
            particleBaseSize={44}
            sizeRandomness={0.5}
            speed={0.08}
            particleColors={["#ffffff", "#2ED3E6", "#1FA6B8"]}
            alphaParticles
            moveParticlesOnHover={false}
            className="absolute inset-0 w-full h-full min-h-full min-w-full"
          />
        </div>
        <div className="relative z-10 w-full max-w-full overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
