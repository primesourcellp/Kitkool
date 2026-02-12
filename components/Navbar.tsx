"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Website Audit", href: "/audit" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden backdrop-blur-md"
      style={{
        background: "linear-gradient(90deg, rgba(30,30,30,0.98) 0%, rgba(30,30,30,0.95) 50%, rgba(31,166,184,0.06) 100%)",
        borderBottom: "1px solid transparent",
        borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.4), rgba(220,220,220,0.7), rgba(192,192,192,0.4), transparent) 1",
        boxShadow: "-12px 6px 32px -4px rgba(192,192,192,0.22), 12px 6px 32px -4px rgba(220,220,220,0.25), 0 4px 24px rgba(192,192,192,0.15), 0 0 0 1px rgba(192, 192, 192, 0.3)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
            <img
              src="/KitKool_Group_Logo_Final-2048x888.png"
              alt="KITKOOL GROUP"
              className="h-20 w-auto min-w-[140px] object-contain"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-3">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`px-5 py-2.5 font-semibold rounded-lg border border-transparent transition-all duration-300 hover:border-[#2ED3E6]/50 hover:bg-[#1FA6B8]/20 hover:text-[#2ED3E6] hover:shadow-[0_0_20px_rgba(46,211,230,0.25)] ${
                      active ? "text-[#2ED3E6]" : "text-[#FFFFFF]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="hidden md:block">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`inline-flex items-center justify-center px-6 py-2.5 font-semibold rounded-lg border text-[#FFFFFF] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1FA6B8] hover:to-[#2ED3E6] hover:border-[#2ED3E6] hover:text-[#FFFFFF] ${
                  isActive("/contact")
                    ? "border-[#2ED3E6] bg-[#1FA6B8]/25"
                    : "border-[#2ED3E6]/50 bg-[#1E1E1E]"
                }`}
              >
                Book a Call
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[#FFFFFF] hover:text-[#2ED3E6] hover:bg-[#1FA6B8]/20 transition-colors"
            style={{
              border: "1px solid transparent",
              borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
            }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-[#1FA6B8]/20 bg-[#1E1E1E]"
          >
            <ul className="px-4 py-4 space-y-2">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-5 py-3.5 hover:text-[#2ED3E6] hover:bg-[#1FA6B8]/20 border border-transparent hover:border-[#2ED3E6]/50 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(46,211,230,0.25)] ${
                        active ? "text-[#2ED3E6]" : "text-[#FFFFFF]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-center px-6 py-3.5 font-semibold rounded-lg border text-[#FFFFFF] transition-all duration-300 hover:bg-[#1FA6B8]/20 hover:border-[#2ED3E6]/50 ${
                    isActive("/contact")
                      ? "border-[#2ED3E6] bg-[#1FA6B8]/25"
                      : "border-[#2ED3E6]/50 bg-[#1E1E1E]"
                  }`}
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
