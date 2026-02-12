"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Users, ListChecks, FileCheck } from "lucide-react";
import StarBorder from "@/components/StarBorder";

const whatWeReview = [
  "Messaging clarity",
  "UX & design",
  "Mobile performance",
  "Lead capture",
  "Conversion blockers",
];

const whatYouGet = [
  "Structured review of your site and funnel",
  "Live walkthrough call with clear findings",
  "Actionable next steps—no obligation to buy",
];

const processSteps = [
  { step: "1", label: "Book audit", desc: "Pick a time that works for you." },
  { step: "2", label: "We review", desc: "We analyze your site and funnel." },
  { step: "3", label: "We walk through findings", desc: "Clear, actionable recommendations." },
  { step: "4", label: "You decide next steps", desc: "No pressure—you choose what’s next." },
];

export default function AuditPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, offset: 100 });
  }, []);

  return (
    <main className="bg-transparent pt-10 w-full relative">
      {/* Mobile KITKOOL background text */}
      <div className="fixed inset-0 z-0 pointer-events-none md:hidden" aria-hidden>
        <div
          className="absolute left-1/2 bottom-1/2 origin-center"
          style={{ transform: "translate(-50%, 50%) rotate(-45deg)", whiteSpace: "nowrap" }}
        >
          <span className="text-[clamp(8rem,35vw,12rem)] font-bold tracking-[0.02em] text-[#FFFFFF]/[0.06] select-none">
            KITKOOL
          </span>
        </div>
      </div>
      {/* Hero – same style as home page */}
      <section className="relative flex items-center justify-center py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent z-10">
        <div className="relative w-full max-w-7xl mx-auto z-10 pt-8">
          <div className="max-w-5xl text-center mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-[#FFFFFF]/60 mb-4 tracking-wide mt-10"
            >
              - FREE WEBSITE AUDIT
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-6 leading-tight"
              style={{
                textShadow: [
                  "2px 2px 0 rgba(255,255,255,0.02)",
                  "4px 4px 0 rgba(255,255,255,0.016)",
                  "6px 6px 0 rgba(255,255,255,0.012)",
                  "8px 8px 0 rgba(255,255,255,0.01)",
                  "10px 10px 0 rgba(255,255,255,0.008)",
                ].join(", "),
              }}
            >
              We <span className="text-[#2ED3E6]">review your website</span> and show you what’s hurting conversions.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#FFFFFF]/70 mb-10 leading-relaxed"
            >
              No pitch, no pressure. We analyze messaging, design, mobile performance, and lead capture—then walk you through clear, actionable findings. You decide the next steps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <Link
                href="/contact"
                className="bg-[#1FA6B8] text-[#FFFFFF] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#2ED3E6] transition-all duration-300"
              >
                Book Your Free Audit
              </Link>
              <Link
                href="/audit#how-it-works"
                className="text-sm font-semibold text-[#FFFFFF]/80 hover:text-[#2ED3E6] underline underline-offset-4 inline-flex items-center gap-2"
              >
                See how it works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Review + Who This Is For */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">Audit Overview</h2>
            <p className="text-[#FFFFFF]/70 max-w-2xl mx-auto">
              We review your website and identify what’s hurting conversions and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StarBorder
                as="div"
                className="rounded-2xl h-full"
                innerClassName="bg-[#252525] rounded-2xl p-8 border-0 h-full"
                rotateBorder
              >
                <div className="flex items-center gap-3 mb-5">
                  <div 
                    className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center"
                    style={{
                      border: "1px solid transparent",
                      borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                    }}
                  >
                    <Search className="w-6 h-6 text-[#2ED3E6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFFF]">What We Review</h3>
                </div>
                <ul className="space-y-3 text-[#FFFFFF]/90">
                  {whatWeReview.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2ED3E6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </StarBorder>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StarBorder
                as="div"
                className="rounded-2xl h-full"
                innerClassName="bg-[#252525] rounded-2xl p-8 border-0 h-full"
                rotateBorder
              >
                <div className="flex items-center gap-3 mb-5">
                  <div 
                    className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center"
                    style={{
                      border: "1px solid transparent",
                      borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                    }}
                  >
                    <Users className="w-6 h-6 text-[#2ED3E6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFFF]">Who This Is For</h3>
                </div>
                <p className="text-[#FFFFFF]/90 mb-3">
                  Small business owners and service businesses ready to get more leads from their website.
                </p>
                <p className="text-[#FFFFFF]/60 text-sm">
                  Not for enterprises or free consulting seekers—we focus on businesses that want to move forward.
                </p>
              </StarBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StarBorder
              as="div"
              className="rounded-2xl"
              innerClassName="bg-[#252525] rounded-2xl p-8 md:p-10 border-0"
              rotateBorder
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center"
                  style={{
                    border: "1px solid transparent",
                    borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                  }}
                >
                  <FileCheck className="w-6 h-6 text-[#2ED3E6]" />
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF]">What You Get</h3>
              </div>
              <ul className="space-y-3 text-[#FFFFFF]/90">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ED3E6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="how-it-works" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">How It Works</h2>
            <p className="text-[#FFFFFF]/70">Simple, transparent, no pressure.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <StarBorder
                  as="div"
                  className="rounded-2xl h-full"
                  innerClassName="bg-[#252525] rounded-2xl p-6 border-0 h-full text-center"
                  rotateBorder
                >
                  <div className="w-10 h-10 rounded-full bg-[#1E1E1E] border border-[#1FA6B8]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#2ED3E6] font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-1">{item.label}</h3>
                  <p className="text-sm text-[#FFFFFF]/70">{item.desc}</p>
                </StarBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <StarBorder
            as="div"
            className="rounded-3xl"
            innerClassName="bg-[#252525] rounded-3xl p-6 md:p-8 border-0 text-center"
            rotateBorder
          >
            <div className="flex justify-center mb-3">
              <div 
                className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center"
                style={{
                  border: "1px solid transparent",
                  borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                }}
              >
                <ListChecks className="w-7 h-7 text-[#2ED3E6]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">
              Ready for your free audit?
            </h2>
            <p className="text-[#FFFFFF]/70 mb-6 max-w-2xl mx-auto">
              Book a time and we’ll review your site, then walk you through what’s working and what’s not.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#1FA6B8] text-[#FFFFFF] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#2ED3E6] transition-all duration-300"
            >
              Book Your Free Website Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </StarBorder>
        </div>
      </section>
    </main>
  );
}
