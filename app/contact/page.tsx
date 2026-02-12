"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";
import StarBorder from "@/components/StarBorder";

const businessHours = [
  "Monday - Friday 9am to 5pm",
  "Saturday - 9am to 2pm",
  "Sunday - Closed",
];

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, offset: 100 });
  }, []);

  return (
    <main className="bg-transparent pt-10 w-full relative">
      {/* Diagonal KITKOOL background text – bottom-left to top-right */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        {/* Mobile positioning - centered and fully visible */}
        <div
          className="absolute left-1/2 bottom-1/2 origin-center md:hidden"
          style={{ transform: "translate(-50%, 50%) rotate(-45deg)", whiteSpace: "nowrap" }}
        >
          <span className="text-[clamp(8rem,35vw,12rem)] font-bold tracking-[0.02em] text-[#FFFFFF]/[0.06] select-none">
            KITKOOL
          </span>
        </div>
        {/* Desktop positioning */}
        <div
          className="absolute left-0 bottom-0 origin-bottom-left hidden md:block"
          style={{ transform: "rotate(-45deg) translateY(45%) translateX(15%)", whiteSpace: "nowrap" }}
        >
          <span className="text-[clamp(5rem,18vw,16rem)] font-bold tracking-[0.02em] text-[#FFFFFF]/[0.06] select-none">
            KITKOOL
          </span>
        </div>
      </div>

      {/* Two-column: Get in touch (left) + Image (right) */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Get in touch */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                Get in touch
              </h1>
              <p className="text-[#FFFFFF]/75 leading-relaxed mb-4">
                Have a project in mind or want to learn more about our services? We’d love to hear from you. Reach out for IT requirements, web development, or a quick conversation about your goals.
              </p>
              <p className="text-[#FFFFFF]/75 leading-relaxed mb-8">
                Drop us a line and we’ll get back to you as soon as we can.
              </p>

              <div className="space-y-5 mb-8">
                <a
                  href="tel:+18329211674"
                  className="flex items-center gap-3 text-[#FFFFFF]/90 hover:text-[#2ED3E6] transition-colors"
                >
                  <span 
                    className="w-10 h-10 rounded-xl bg-[#252525] flex items-center justify-center flex-shrink-0"
                    style={{
                      border: "1px solid transparent",
                      borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                    }}
                  >
                    <Phone className="w-5 h-5 text-[#2ED3E6]" />
                  </span>
                  <span className="text-lg">(832) 921-1674</span>
                </a>
                <a
                  href="mailto:support@kitkool.com"
                  className="flex items-center gap-3 text-[#FFFFFF]/90 hover:text-[#2ED3E6] transition-colors"
                >
                  <span 
                    className="w-10 h-10 rounded-xl bg-[#252525] flex items-center justify-center flex-shrink-0"
                    style={{
                      border: "1px solid transparent",
                      borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                    }}
                  >
                    <Mail className="w-5 h-5 text-[#2ED3E6]" />
                  </span>
                  <span className="text-lg">support@kitkool.com</span>
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#2ED3E6]" />
                  <h2 className="text-lg font-bold text-[#FFFFFF]">Business Hours</h2>
                </div>
                <ul className="space-y-2">
                  {businessHours.map((line) => (
                    <li key={line} className="flex items-center gap-2 text-[#FFFFFF]/80 text-sm md:text-base">
                      <ArrowRight className="w-4 h-4 text-[#2ED3E6] flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendar.app.google/rzLENBNHjgaVmSQQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "12px 24px", background: "#2e7d32", color: "white", textDecoration: "none", borderRadius: "6px" }}
                >
                  Book a Call
                </a>
              </div>
            </motion.div>

            {/* Right: Large image (hands/phone/communication visual) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <StarBorder
                as="div"
                className="rounded-2xl overflow-hidden"
                innerClassName="rounded-2xl overflow-hidden border-0 p-0 bg-transparent"
                rotateBorder
              >
                <div className="relative aspect-[4/3] lg:aspect-[4/3] lg:min-h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/img4.png"
                    alt="Get in touch - contact Kitkool"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </StarBorder>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
