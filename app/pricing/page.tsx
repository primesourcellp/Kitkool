"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, FileCheck, Sparkles, Shield, Rocket, Target } from "lucide-react";
import StarBorder from "@/components/StarBorder";

const servicePackages = [
  {
    title: "Website Launch",
    description: "High-converting site built fast, built right.",
    price: "Starting at $2,500",
    timeline: "Typical timeline: 10-14 days",
    includes: ["Messaging + positioning", "Conversion-first layout", "Mobile + SEO ready", "Lead capture + analytics"],
    icon: Rocket,
    highlight: "Best for new or outdated websites",
  },
  {
    title: "Lead Generation System",
    description: "Full funnel setup to drive and convert leads.",
    price: "Starting at $3,500",
    timeline: "Typical timeline: 2-3 weeks",
    includes: ["Landing pages + offers", "Forms + tracking", "CRM + automation", "Conversion optimization"],
    icon: Target,
    highlight: "Most popular for growth-focused teams",
    popular: true,
  },
  {
    title: "Monthly Website Care",
    description: "Keep your site fast, secure, and improving.",
    price: "$299/month",
    timeline: "Month-to-month, cancel anytime",
    includes: ["Updates + fixes", "Performance checks", "Security + backups", "Priority support"],
    icon: Shield,
    highlight: "Best for teams who want ongoing support",
  },
];

const pricingFactors = [
  "Tailored product strategy and technical architecture",
  "Premium UI/UX design aligned with your brand",
  "Advanced integrations (APIs, payments, AI, automation)",
  "Performance, security, and scalability",
  "Delivery timelines and post-launch support",
];

const auditIncludes = [
  "A strategic project blueprint",
  "A transparent, itemized investment estimate",
  "Clearly defined milestones and delivery timelines",
];

const valuePromise = [
  "Custom-engineered solutions—never off-the-shelf",
  "Clean, scalable, enterprise-ready code",
  "A business-first, outcome-driven approach",
  "Dedicated support beyond launch",
];

export default function PricingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, offset: 100 });
  }, []);

  return (
    <main className="min-h-screen bg-transparent pt-10 w-full overflow-x-hidden relative">
      {/* Mobile KITKOOL background text */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-visible md:hidden" aria-hidden>
        <div
          className="absolute left-1/2 bottom-1/2 origin-center"
          style={{ transform: "translate(-50%, 50%) rotate(-45deg)", whiteSpace: "nowrap" }}
        >
          <span className="text-[clamp(8rem,35vw,12rem)] font-bold tracking-[0.02em] text-[#FFFFFF]/[0.06] select-none">
            KITKOOL
          </span>
        </div>
      </div>
      {/* Hero – left headline, right copy */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent z-10 overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto z-10 pt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-[#b8bcc4] tracking-[0.2em] uppercase mb-8 mt-10 text-center"
          >
            — Pricing
          </motion.p>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-left"
            >
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#FFFFFF]"
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
                Investment that <span className="text-[#2ED3E6] drop-shadow-[0_0_20px_rgba(46,211,230,0.4)]">delivers outcomes</span>—not just code.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left lg:pl-4"
            >
              <p className="text-lg md:text-xl text-[#FFFFFF]/75 leading-relaxed">
                Most clients invest between <span className="text-[#2ED3E6] font-semibold">$2,500 – $5,000</span> depending on scope. We offer bespoke digital solutions for businesses that value quality and long-term impact. Final pricing confirmed after your free audit.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col items-center gap-3 mt-12 lg:mt-16"
          >
            <Link
              href="/audit"
              className="bg-[#1FA6B8] text-[#FFFFFF] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#2ED3E6] transition-all duration-300"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-[#FFFFFF]/80 hover:text-[#2ED3E6] underline underline-offset-4 inline-flex items-center gap-2"
            >
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Packages – three pricing cards */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">Service Packages</h2>
              <p className="text-[#FFFFFF]/70 mt-2">
                Most projects fall between <span className="text-[#2ED3E6] font-semibold">$2,500 – $5,000</span>.
              </p>
            </div>
            <span className="text-sm text-[#FFFFFF]/60">Final pricing after the free audit.</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicePackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full"
                >
                  {"popular" in pkg && pkg.popular && (
                    <div className="absolute -top-3 left-6 z-10 bg-[#2ED3E6] text-[#1E1E1E] px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <StarBorder
                    as="div"
                    className="rounded-2xl h-full"
                    innerClassName="bg-[#252525] rounded-2xl p-6 border-0 h-full"
                    rotateBorder
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-11 h-11 rounded-xl bg-[#1E1E1E] flex items-center justify-center"
                        style={{
                          border: "1px solid transparent",
                          borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                        }}
                      >
                        <Icon className="w-5 h-5 text-[#2ED3E6]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#FFFFFF]">{pkg.title}</h3>
                        <p className="text-sm text-[#FFFFFF]/60">{pkg.timeline}</p>
                      </div>
                    </div>
                    <p className="text-[#FFFFFF]/70 mb-4">{pkg.description}</p>
                    <p className="text-2xl font-bold text-[#2ED3E6] mb-4">{pkg.price}</p>
                    <p className="text-sm text-[#FFFFFF]/60 mb-3">{pkg.highlight}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#FFFFFF]/85 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#2ED3E6] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#2ED3E6] hover:text-[#FFFFFF] font-semibold transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </StarBorder>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How pricing is determined – image + list */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">How pricing is determined</h2>
            <p className="text-[#FFFFFF]/70 max-w-2xl mx-auto">
              Our pricing reflects the depth of expertise and attention we bring to every project.
            </p>
          </div>
          <StarBorder
            as="div"
            className="rounded-3xl overflow-hidden"
            innerClassName="bg-[#252525] rounded-3xl overflow-hidden border-0 p-0"
            rotateBorder
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 lg:order-1">
                <ul className="space-y-4">
                  {pricingFactors.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#FFFFFF]/90">
                      <CheckCircle2 className="w-5 h-5 text-[#2ED3E6] mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] order-1 lg:order-2">
                <Image
                  src="/Make Money with AI — No Coding Needed!.jpeg"
                  alt="How we scope and price projects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#252525] via-[#252525]/60 to-transparent lg:from-[#252525]/90 lg:via-[#252525]/50 lg:to-transparent" />
              </div>
            </div>
          </StarBorder>
        </div>
      </section>

      {/* Complimentary audit – card with icon */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <StarBorder
            as="div"
            className="rounded-3xl"
            innerClassName="bg-[#252525] rounded-3xl p-8 md:p-10 border-0"
            rotateBorder
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div 
                className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center"
                style={{
                  border: "1px solid transparent",
                  borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                }}
              >
                <FileCheck className="w-7 h-7 text-[#2ED3E6]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-3">Complimentary Project Audit</h2>
                <p className="text-[#FFFFFF]/80 leading-relaxed mb-5">
                  Every engagement begins with a complimentary audit and discovery session. We fully understand your vision and provide:
                </p>
                <ul className="space-y-2">
                  {auditIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#FFFFFF]/90">
                      <CheckCircle2 className="w-5 h-5 text-[#2ED3E6] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StarBorder>
        </div>
      </section>

      {/* Value promise – 2x2 grid */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">Our Value Promise</h2>
            <p className="text-[#FFFFFF]/70">
              Final investment is confirmed only after the free audit—alignment, clarity, and confidence from day one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {valuePromise.map((item, i) => {
              const Icon = [Sparkles, Shield, Sparkles, Shield][i];
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <StarBorder
                    as="div"
                    className="rounded-2xl"
                    innerClassName="bg-[#252525] rounded-2xl p-6 border-0 flex items-start gap-4"
                    rotateBorder
                  >
                    <div 
                      className="w-10 h-10 rounded-xl bg-[#1E1E1E] flex items-center justify-center flex-shrink-0"
                      style={{
                        border: "1px solid transparent",
                        borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                      }}
                    >
                      <Icon className="w-5 h-5 text-[#2ED3E6]" />
                    </div>
                    <span className="text-[#FFFFFF]/90 text-sm md:text-base pt-1">{item}</span>
                  </StarBorder>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <StarBorder
            as="div"
            className="rounded-3xl"
            innerClassName="bg-[#252525] rounded-3xl p-10 md:p-12 border-0 text-center"
            rotateBorder
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-3">
              Ready for exact pricing?
            </h2>
            <p className="text-[#FFFFFF]/70 mb-8 max-w-xl mx-auto">
              Book a free audit and we’ll send you a tailored scope, timeline, and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center bg-[#2ED3E6] text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold hover:bg-[#1FA6B8] transition-colors w-full sm:w-auto"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-[#FFFFFF] border border-[#2ED3E6]/50 px-8 py-4 rounded-lg font-semibold hover:bg-[#2ED3E6]/10 transition-colors w-full sm:w-auto"
              >
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </StarBorder>
        </div>
      </section>
    </main>
  );
}
