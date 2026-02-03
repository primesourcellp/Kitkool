"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Rocket, Target, Shield } from "lucide-react";
import StarBorder from "@/components/StarBorder";

const services = [
  {
    title: "Website Launch",
    subtitle: "14-Day Delivery",
    description: "A meticulously crafted digital presence designed to elevate your brand and convert with intention.",
    price: "From $2,500",
    image: "/img1.png",
    includes: [
      "Strategic, conversion-led design",
      "Mobile-first, SEO-ready architecture",
      "Precision lead-capture implementation",
      "Clean, scalable build",
      "Two curated refinement rounds",
    ],
    icon: Rocket,
    highlight: "Brands that want to launch strong—without compromise.",
  },
  {
    title: "Lead Generation Systems",
    description: "An end-to-end acquisition engine built to attract qualified prospects and turn attention into revenue.",
    price: "From $3,500",
    image: "/img2.png",
    includes: [
      "High-performance landing experiences",
      "Advanced form & event tracking",
      "Seamless CRM integration",
      "Conversion optimization frameworks",
      "Performance analytics & insights",
    ],
    icon: Target,
    highlight: "Growth-focused teams ready to scale demand.",
    popular: true,
  },
  {
    title: "Website Care & Optimization",
    description: "White-glove maintenance ensuring your digital presence remains fast, secure, and flawless.",
    price: "$299 / month",
    image: "/img3.png",
    includes: [
      "Ongoing updates and refinements",
      "Performance and uptime monitoring",
      "Security audits and safeguards",
      "Priority support and assistance",
    ],
    icon: Shield,
    highlight: "Brands that value reliability, continuity, and peace of mind.",
  },
];

const deliverables = [
  "Strategy call + conversion roadmap",
  "Copy structure + content guidance",
  "Modern UI design + clean layout",
  "Speed + SEO technical setup",
  "Analytics, events + tracking",
  "Launch support + QA checklist",
];

const processSteps = [
  {
    title: "Discovery",
    description: "We learn your business, goals, and audience, then map the conversion path.",
    icon: Target,
  },
  {
    title: "Build",
    description: "We design and develop the site or funnel with clear messaging and strong CTAs.",
    icon: Rocket,
  },
  {
    title: "Launch + Optimize",
    description: "We launch, monitor, and improve based on real data.",
    icon: Shield,
  },
];

const faqs = [
  {
    question: "Do you offer custom pricing?",
    answer: "Yes. Final pricing is based on scope after the free audit.",
  },
  {
    question: "Can you work with my existing website?",
    answer: "Absolutely. We can redesign, optimize, or build a new version based on your goals.",
  },
  {
    question: "How do we get started?",
    answer: "Start with a free website audit and we’ll recommend the best plan.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, offset: 100 });
  }, []);

  return (
    <main className="min-h-screen bg-transparent pt-24 w-full overflow-x-hidden relative">
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
      {/* Hero */}
      <section className="py-16 sm:py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
              Services built for real growth
            </h1>
            <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto">
              Launch fast, capture leads, and keep improving with a clear, proven process.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center bg-[#2ED3E6] text-[#1E1E1E] px-6 py-3 rounded-lg font-semibold hover:bg-[#1FA6B8] transition-colors"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#FFFFFF] hover:text-[#2ED3E6] font-semibold transition-colors"
              >
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages – Primesource-style: content left, image right (alternating) */}
      <section className="py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">Service Packages</h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const hasSubtitle = "subtitle" in service && service.subtitle;
              const imageOnRight = index === 0 || index === 2;
              const contentOrder = imageOnRight ? "lg:order-1" : "lg:order-2";
              const imageOrder = imageOnRight ? "lg:order-2" : "lg:order-1";
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Content column – like Primesource left column */}
                  <div className={`flex flex-col justify-center ${contentOrder}`}>
                    {service.popular && (
                      <div className="inline-flex w-fit bg-[#2ED3E6] text-[#1E1E1E] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-5">
                      <div 
                        className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center flex-shrink-0"
                        style={{
                          border: "1px solid transparent",
                          borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                        }}
                      >
                        <Icon className="w-6 h-6 text-[#2ED3E6]" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF]">
                        {service.title}
                        {hasSubtitle && (
                          <span className="text-[#2ED3E6] font-normal"> — {service.subtitle}</span>
                        )}
                      </h3>
                    </div>
                    <p className="text-[#FFFFFF]/75 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-xs font-semibold text-[#FFFFFF]/60 uppercase tracking-wider mb-3">Included:</p>
                    <ul className="space-y-3 mb-6">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[#FFFFFF]/90 text-sm md:text-base">
                          <CheckCircle2 className="w-5 h-5 text-[#2ED3E6] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-[#FFFFFF]/70 mb-2">
                      <span className="text-[#FFFFFF]/60">Best for:</span> {service.highlight}
                    </p>
                    <p className="text-xs font-semibold text-[#FFFFFF]/60 uppercase tracking-wider mb-1">Investment:</p>
                    <p className="text-2xl font-bold text-[#2ED3E6] mb-6">{service.price}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#2ED3E6] hover:text-[#FFFFFF] font-semibold transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Image column – same border as Engagement & Pricing (StarBorder) */}
                  <div className={imageOrder}>
                    <StarBorder
                      as="div"
                      className="rounded-2xl overflow-hidden"
                      innerClassName="rounded-2xl overflow-hidden border-0 p-0 bg-transparent"
                      rotateBorder
                    >
                      <div className="relative aspect-[4/3] lg:aspect-[4/3] lg:min-h-[380px]">
                        <Image
                          src={"image" in service && service.image ? service.image : "/Make Money with AI — No Coding Needed!.jpeg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </StarBorder>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Engagement & Pricing */}
          <div className="mt-12 text-center">
            <StarBorder
              as="div"
              className="rounded-2xl max-w-3xl mx-auto"
              innerClassName="bg-[#252525] rounded-2xl p-6 md:p-8 border-0"
              rotateBorder
            >
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">Engagement & Pricing</h3>
              <p className="text-[#FFFFFF]/75 leading-relaxed">
                Most engagements fall between <span className="text-[#2ED3E6] font-semibold">$2,500 – $5,000</span>, depending on scope and complexity.
                Final investment is confirmed following a complimentary audit and strategy call.
              </p>
            </StarBorder>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StarBorder
            as="div"
            className="rounded-3xl"
            innerClassName="bg-[#252525] rounded-3xl p-8 md:p-10 border-0"
            rotateBorder
          >
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-3">
                  What every project includes
                </h2>
                <p className="text-[#FFFFFF]/70">
                  Clear strategy, fast execution, and a launch-ready website built to convert.
                </p>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                {deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[#1E1E1E] border border-[#1FA6B8]/10 rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2ED3E6] mt-0.5" />
                    <span className="text-sm text-[#FFFFFF]/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </StarBorder>
        </div>
      </section>

      {/* Process */}
      <section className="py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">How we deliver results</h2>
            <p className="text-[#FFFFFF]/70 mt-2">A simple, proven system from strategy to launch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <StarBorder
                  key={step.title}
                  as="div"
                  className="rounded-2xl"
                  innerClassName="bg-[#252525] rounded-2xl p-6 border-0 text-left"
                  rotateBorder
                >
                  <div 
                    className="w-11 h-11 rounded-xl bg-[#1E1E1E] flex items-center justify-center mb-4"
                    style={{
                      border: "1px solid transparent",
                      borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                    }}
                  >
                    <Icon className="w-5 h-5 text-[#2ED3E6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#FFFFFF]/70">{step.description}</p>
                </StarBorder>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">Questions, answered</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <StarBorder
                key={faq.question}
                as="div"
                className="rounded-2xl"
                innerClassName="bg-[#252525] rounded-2xl p-6 border-0 text-left"
                rotateBorder
              >
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">{faq.question}</h3>
                <p className="text-sm text-[#FFFFFF]/70">{faq.answer}</p>
              </StarBorder>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <StarBorder
            as="div"
            className="rounded-3xl"
            innerClassName="bg-[#252525] rounded-3xl p-10 border-0"
            rotateBorder
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
              Not sure which service fits?
            </h2>
            <p className="text-[#FFFFFF]/70 mb-6">
              Start with a free website audit and we’ll recommend the best path.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center bg-[#2ED3E6] text-[#1E1E1E] px-6 py-3 rounded-lg font-semibold hover:bg-[#1FA6B8] transition-colors"
            >
              Get a Free Audit
            </Link>
          </StarBorder>
        </div>
      </section>
    </main>
  );
}
