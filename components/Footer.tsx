"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ChevronUp } from "lucide-react";
import { SiX, SiFacebook, SiPinterest, SiInstagram } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Website Audit", href: "/audit" },
  { label: "Book a Call", href: "/contact" },
];

const socialLinks = [
  { href: "#", icon: SiX, label: "X (Twitter)" },
  { href: "#", icon: SiFacebook, label: "Facebook" },
  { href: "#", icon: SiPinterest, label: "Pinterest" },
  { href: "#", icon: SiInstagram, label: "Instagram" },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 bg-[#1a1a1a] border-t border-[rgb(255,255,255)] py-14 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Left: Brand + description + social */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/KitKool_Group_Logo_Final-2048x888.png"
                alt="KITKOOL GROUP"
                className="h-15 w-auto object-contain"
              />
            </Link>
            <p className="text-[#FFFFFF]/80 text-sm md:text-base leading-relaxed max-w-sm mb-6">
              Conversion-focused websites and lead systems that help small businesses grow fast.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#252525] border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-[#FFFFFF]/80 hover:text-[#2ED3E6] hover:border-[#2ED3E6]/50 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#FFFFFF] mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-[#FFFFFF]/80 hover:text-[#2ED3E6] transition-colors text-sm md:text-base"
                  >
                    <ArrowRight className="w-4 h-4 text-[#2ED3E6] flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-[#FFFFFF] mb-5">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:support@kitkool.com"
                className="flex items-center gap-3 text-[#FFFFFF]/80 hover:text-[#2ED3E6] transition-colors text-sm md:text-base"
              >
                <span className="w-9 h-9 rounded-full bg-[#252525] border border-[#1FA6B8]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#2ED3E6]" />
                </span>
                support@kitkool.com
              </a>
              <a
                href="tel:+18329211674"
                className="flex items-center gap-3 text-[#FFFFFF]/80 hover:text-[#2ED3E6] transition-colors text-sm md:text-base"
              >
                <span className="w-9 h-9 rounded-full bg-[#252525] border border-[#1FA6B8]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#2ED3E6]" />
                </span>
                (832) 921-1674
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgb(255,255,255)] pt-8 mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#FFFFFF]/80">
            <p className="order-2 sm:order-1 text-center sm:text-left">
              © {new Date().getFullYear()} Kitkool Group. All rights reserved.
            </p>
            <p className="order-1 sm:order-2 text-center">
              <a
                href="https://www.primesourcellp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFFFF]/80 hover:text-[#2ED3E6] transition-colors"
              >
                Developed by Primesourcellp
              </a>
            </p>
            <div className="order-3 flex items-center gap-4 text-center sm:text-right">
              <Link href="/privacy" className="text-[#FFFFFF]/80 hover:text-[#2ED3E6] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#FFFFFF]/80 hover:text-[#2ED3E6] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top – glowing cyan border */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#FFFFFF] border-2 border-[#2ED3E6] shadow-[0_0_20px_rgba(46,211,230,0.4)] hover:shadow-[0_0_28px_rgba(46,211,230,0.6)] transition-all duration-300"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
