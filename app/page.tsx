"use client";

import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  SiAmazonwebservices,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { 
  ArrowRight, 
  Check, 
  X, 
  Quote,
  MessageSquare,
  AlertCircle,
  TrendingDown,
  Clock,
  UserX,
  EyeOff,
  CheckCircle2, 
  XCircle, 
  Zap, 
  Target, 
  TrendingUp,
  Shield,
  ShieldCheck,
  DollarSign,
  Users,
  Phone,
  FileText,
  Rocket,
  Calendar,
  Search,
  Lightbulb
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import StarBorder from "@/components/StarBorder";
import LogoLoopModule from "@/components/LogoLoop";
import type { ComponentType } from "react";
const LogoLoop = LogoLoopModule as unknown as ComponentType<Record<string, unknown>>;

export default function Home() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const textReveal = reduceMotion
    ? {
        initial: { opacity: 0, y: 16 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }
    : {
        initial: { opacity: 0, y: 100, scale: 0.8, rotateX: -90 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8,
          },
        },
      };

  const highlightReveal = reduceMotion
    ? {
        initial: { opacity: 0, scale: 0.98 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
        },
      }
    : {
        initial: { opacity: 0, scale: 0.5, rotateY: -180 },
        animate: {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0.3,
            duration: 1,
          },
        },
      };

  const glowPulse = {
    animate: {
      textShadow: [
        "0 0 20px rgba(46, 211, 230, 0.5), 0 0 40px rgba(46, 211, 230, 0.3), 0 0 60px rgba(46, 211, 230, 0.2)",
        "0 0 30px rgba(46, 211, 230, 0.8), 0 0 60px rgba(46, 211, 230, 0.6), 0 0 90px rgba(46, 211, 230, 0.4)",
        "0 0 20px rgba(46, 211, 230, 0.5), 0 0 40px rgba(46, 211, 230, 0.3), 0 0 60px rgba(46, 211, 230, 0.2)",
      ],
      scale: [1, 1.02, 1],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const problems = [
    {
      icon: AlertCircle,
      title: "Website looks good but doesn't generate leads",
      description: "Your site is beautiful, but visitors aren't converting into customers.",
    },
    {
      icon: TrendingDown,
      title: "Agency work didn't improve results",
      description: "You invested in an agency, but your lead numbers stayed the same.",
    },
    {
      icon: Clock,
      title: "Developers are slow or unreliable",
      description: "Updates take forever, and you're left waiting for fixes.",
    },
    {
      icon: UserX,
      title: "Leads fall through the cracks",
      description: "Potential customers reach out, but nothing happens next.",
    },
    {
      icon: EyeOff,
      title: "No clarity on what's broken",
      description: "You know something's wrong, but you don't know what or how to fix it.",
    },
  ];

  const focusAreas = [
    { icon: MessageSquare, title: "Clear Messaging", desc: "Compelling copy that speaks to your ideal customers" },
    { icon: Target, title: "Conversion-Focused Design", desc: "Every element designed to drive action" },
    { icon: Zap, title: "Simple Lead Capture", desc: "Easy-to-use forms and contact systems" },
    { icon: Rocket, title: "Speed & Reliability", desc: "Fast-loading sites that work every time" },
  ];

  const steps = [
    { number: "1", title: "Book a free website audit", desc: "Schedule a call and we'll review your current website and identify opportunities.", icon: Calendar },
    { number: "2", title: "We review your site", desc: "Our team analyzes your site's performance, design, and conversion potential.", icon: Search },
    { number: "3", title: "We recommend the right solution", desc: "Get a customized plan that addresses your specific needs and goals.", icon: Lightbulb },
    { number: "4", title: "We build, launch, and optimize", desc: "We execute the plan, launch your new site, and continuously optimize for results.", icon: Rocket },
  ];

  const ctaHeadline = "Ready to turn your website into a lead-generating machine?";
  const ctaChars = Array.from(ctaHeadline);

  const techLogos = useMemo(
    () => [
      { node: <SiReact /> },
      { node: <SiNextdotjs />},
      { node: <SiTypescript /> },
      { node: <SiTailwindcss /> },
      { node: <SiNodedotjs /> },
      { node: <SiDocker /> },
      { node: <SiPrisma />},
      { node: <SiSupabase /> },
      { node: <SiStripe />},
      { node: <SiVercel /> },
      { node: <SiGithub /> },
      { node: <SiShadcnui />},
      { node: <SiOpenjdk /> },
      { node: <SiPython /> },
      { node: <SiDotnet /> },
      { node: <SiAmazonwebservices /> },
      { node: <SiOpenai /> }
    ],
    []
  );

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
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent z-10 overflow-hidden">
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
              We <span className="text-[#2ED3E6]">build websites</span> that turn visitors into paying customers for small businesses.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#FFFFFF]/70 mb-10 leading-relaxed"
            >
              Not just design. Not endless revisions. We create conversion-focused websites and lead systems so your business gets more calls, forms, and customers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <Link
                href="/audit"
                className="bg-[#1FA6B8] text-[#FFFFFF] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#2ED3E6] transition-all duration-300"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm font-semibold text-[#FFFFFF]/80 hover:text-[#2ED3E6] underline underline-offset-4"
              >
                See how it works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-transparent z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div data-aos="fade-up">
            <StarBorder
              as="div"
              className="rounded-3xl"
              innerClassName="bg-[#252525] rounded-3xl shadow-xl overflow-hidden border-0 text-left p-0"
              rotateBorder
            >
            <div className="grid lg:grid-cols-2">
              {/* Left: heading, subtext, two-column lists, CTA */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-3">
                  Who This Is For
                </h2>
                <p className="text-lg text-[#FFFFFF]/70 mb-8">
                  We work best with businesses that are ready to grow
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">We work best with:</h3>
                    <ul className="space-y-2">
                      {[
                        "Small & mid-size service businesses",
                        "Founder or owner-led companies",
                        "Businesses that want more leads from their website",
                        "Teams ready to invest $2,500+",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#2ED3E6] mt-0.5 flex-shrink-0" />
                          <span className="text-[#FFFFFF]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">Not a fit if:</h3>
                    <ul className="space-y-2">
                      {[
                        "Treating this as a hobby, not a serious build",
                        "Exploring without intent to move forward",
                        "Stuck in enterprise red tape",
                        "Shopping for the cheapest solution rather than the best one",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-[#FFFFFF]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link
                    href="/audit"
                    className="inline-block bg-[#1FA6B8] text-[#FFFFFF] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#2ED3E6] transition-all duration-300"
                  >
                    Get a Free Audit
                  </Link>
                </div>
              </div>

              {/* Right: decorative shapes */}
              <div className="hidden lg:flex items-center justify-center bg-[#252525] p-8 relative overflow-hidden min-h-[400px]">
                <div className="absolute top-8 right-8 w-16 h-16 bg-[#1FA6B8]/60 rounded-full" />
                <div className="absolute top-20 right-24 w-10 h-10 bg-[#2ED3E6]/60 rounded-full" />
                <div className="absolute bottom-16 right-12 w-28 h-28 bg-[#1FA6B8]/50 rounded-full" />
                <div className="absolute bottom-32 right-40 w-14 h-14 bg-[#2ED3E6]/40 rounded-full" />
                <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#2ED3E6]/50 rounded-full" />
                <div className="absolute bottom-24 left-12 w-12 h-12 bg-[#1FA6B8]/40 rounded-full" />
                <div className="absolute top-16 left-16 w-8 h-8 bg-[#2ED3E6]/40 rounded-full" />
                <div className="absolute top-1/4 right-20 w-10 h-32 bg-[#1FA6B8]/50 rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-10 h-28 bg-[#2ED3E6]/40 rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-8 h-24 bg-[#2ED3E6]/30 rounded-full" />
                <div className="absolute bottom-12 left-1/3 w-12 h-36 bg-[#1FA6B8]/40 rounded-full" />
                <div className="absolute top-12 right-1/3 w-8 h-20 bg-[#2ED3E6]/30 rounded-full" />
              </div>
            </div>
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* What Clients Say */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-[#FFFFFF]/80 max-w-2xl mx-auto">
              Trusted by small & mid-size service businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div data-aos="fade-up" data-aos-delay={0}>
              <StarBorder
                as="div"
                className="rounded-2xl"
                innerClassName="bg-[#252525] rounded-2xl p-6 md:p-8 border-0 text-left overflow-hidden"
                rotateBorder
              >
                <Quote className="w-10 h-10 text-[#FFFFFF]/60 mb-4" />
                <p className="text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-6">
                  &ldquo;Kitkool helped us double leads in 30 days. The conversion-focused approach made all the difference.&rdquo;
                </p>
                <p className="font-semibold text-[#FFFFFF]">Sarah Johnson</p>
                <p className="text-sm text-[#FFFFFF]/80">Owner, Local Service Co.</p>
              </StarBorder>
            </motion.div>
            <motion.div data-aos="fade-up" data-aos-delay={100}>
              <StarBorder
                as="div"
                className="rounded-2xl"
                innerClassName="bg-[#252525] rounded-2xl p-6 md:p-8 border-0 text-left overflow-hidden"
                rotateBorder
              >
                <Quote className="w-10 h-10 text-[#FFFFFF]/60 mb-4" />
                <p className="text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-6">
                  &ldquo;Fast, professional, and results-driven. Our website now generates consistent leads every week.&rdquo;
                </p>
                <p className="font-semibold text-[#FFFFFF]">Mike Chen</p>
                <p className="text-sm text-[#FFFFFF]/80">Founder, Tech Solutions LLC</p>
              </StarBorder>
            </motion.div>
          </div>

          <motion.div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          >
            <StarBorder
              as="div"
              className="rounded-xl"
              innerClassName="bg-[#252525]/80 rounded-xl py-6 px-4 border-0 text-center overflow-hidden"
              rotateBorder
            >
              <p className="text-3xl md:text-4xl font-bold text-[#2ED3E6] mb-1">30+</p>
              <p className="text-[#FFFFFF]/80 font-medium">Websites Built</p>
            </StarBorder>
            <StarBorder
              as="div"
              className="rounded-xl"
              innerClassName="bg-[#252525]/80 rounded-xl py-6 px-4 border-0 text-center overflow-hidden"
              rotateBorder
            >
              <p className="text-3xl md:text-4xl font-bold text-[#2ED3E6] mb-1">40%</p>
              <p className="text-[#FFFFFF]/80 font-medium">More Form Submissions</p>
            </StarBorder>
            <StarBorder
              as="div"
              className="rounded-xl"
              innerClassName="bg-[#252525]/80 rounded-xl py-6 px-4 border-0 text-center overflow-hidden"
              rotateBorder
            >
              <p className="text-3xl md:text-4xl font-bold text-[#2ED3E6] mb-1">30%</p>
              <p className="text-[#FFFFFF]/80 font-medium">Increase in Calls</p>
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
              Problems We Solve
            </h2>
            <p className="text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Common challenges we help businesses overcome
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <StarBorder
                    as="div"
                    className="rounded-2xl"
                    innerClassName="bg-[#252525] rounded-2xl p-6 border-0 text-left overflow-hidden"
                    rotateBorder
                  >
                    <div 
                      className="bg-[#1E1E1E] w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        border: "1px solid transparent",
                        borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                      }}
                    >
                      <Icon className="w-6 h-6 text-[#2ED3E6]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-[#FFFFFF]/80 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </StarBorder>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Generation Foundation */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-transparent z-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div data-aos="fade-up">
            <StarBorder
              as="div"
              className="rounded-3xl"
              innerClassName="bg-[#252525] rounded-3xl shadow-2xl overflow-hidden border-0"
              rotateBorder
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: image, label, title, description, CTA */}
                <div className="p-4 md:p-5 lg:p-6">
                  <div className="relative rounded-xl bg-[#1E1E1E] border border-[#1FA6B8]/10 mb-3 overflow-hidden">
                    <div className="relative w-full aspect-[2/1]">
                      <img
                        src="/Make Money with AI — No Coding Needed!.jpeg"
                        alt="Lead generation"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1E1E] border border-[#1FA6B8]/20 mb-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2ED3E6]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]/80 tracking-wide uppercase">
                      Lead Generation Foundation
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-1.5 leading-tight">
                    Turn Your Website Into a Lead-Generating Asset
                  </h2>
                  <p className="text-xs md:text-sm text-[#FFFFFF]/80 mb-2 leading-relaxed">
                    Kitkool helps small businesses transform their websites with clear messaging, conversion-focused design, and simple lead capture.
                  </p>
                  <Link
                    href="/audit"
                    className="inline-flex items-center justify-center bg-[#1FA6B8] text-[#FFFFFF] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2ED3E6] transition-all duration-300"
                  >
                    Get a Free Audit
                  </Link>
                </div>

                {/* Right: Step 1–4 with icon, title, description */}
                <div className="p-4 md:p-5 lg:p-6 bg-[#252525] border-t lg:border-t-0 lg:border-l border-[#1FA6B8]/10">
                  <div className="space-y-8">
                    {focusAreas.map((area, index) => {
                      const Icon = area.icon;
                      return (
                        <div key={index} className="relative">
                          <div className="flex items-start gap-3">
                            <div 
                              className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#1E1E1E] flex-shrink-0"
                              style={{
                                border: "1px solid transparent",
                                borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                              }}
                            >
                              <Icon className="w-4 h-4 text-[#2ED3E6]" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-[#FFFFFF]/60 mb-0.5 uppercase tracking-wider">
                                Step {index + 1}
                              </p>
                              <h3 className="text-lg font-bold text-[#FFFFFF] mb-0.5 leading-snug">
                                {area.title}
                              </h3>
                              <p className="text-sm text-[#FFFFFF]/70 leading-snug">
                                {area.desc}
                              </p>
                            </div>
                          </div>
                          {index !== focusAreas.length - 1 && (
                            <div className="mt-2 h-px bg-[#1FA6B8]/10" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent z-10"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left column: label, title, subtitle, CTA, Risk Reversal card */}
            <motion.div data-aos="fade-up" className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252525] border border-[#1FA6B8]/20 shadow-sm mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2ED3E6]" />
                <span className="text-xs font-semibold text-[#FFFFFF]/80 tracking-wide uppercase">
                  How It Works
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-3 leading-tight">
                How It Works
              </h2>
              <p className="text-base md:text-lg text-[#FFFFFF]/80 leading-relaxed mb-6">
                A simple, proven process to transform your website.
              </p>

              <Link
                href="/audit"
                className="inline-flex items-center justify-center bg-[#FFFFFF] text-[#1E1E1E] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#2ED3E6] hover:text-[#1E1E1E] transition-all duration-300 mb-8"
              >
                Start with a Free Audit
              </Link>

              <StarBorder
                as="div"
                className="rounded-2xl"
                innerClassName="bg-[#252525] rounded-2xl p-6 border-0 shadow-lg"
                rotateBorder
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#1E1E1E] border border-[#1FA6B8]/10 rounded-full p-3">
                    <ShieldCheck className="w-8 h-8 text-[#2ED3E6]" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-3">
                  Risk Reversal Guarantee
                </h3>
                <p className="text-sm md:text-base text-[#FFFFFF]/80 leading-relaxed">
                  If you&apos;re not happy with the initial design direction, you don&apos;t move
                  forward.
                  <br />
                  <span className="font-semibold text-[#FFFFFF]">
                    No risk. No commitment. Just results.
                  </span>
                </p>
              </StarBorder>
            </motion.div>

            {/* Right column: four step cards with number circle + icon + title + description */}
            <div className="lg:col-span-8 space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <StarBorder
                      as="div"
                      className="rounded-2xl"
                      innerClassName="bg-[#252525] rounded-2xl p-6 md:p-7 border-0 shadow-xl overflow-hidden"
                      rotateBorder
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#1E1E1E] flex-shrink-0"
                          style={{
                            border: "1px solid transparent",
                            borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                          }}
                        >
                          <span className="text-base font-bold text-[#FFFFFF]">
                            {step.number}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div 
                              className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#1E1E1E]"
                              style={{
                                border: "1px solid transparent",
                                borderImage: "linear-gradient(90deg, transparent, rgba(192,192,192,0.7), rgba(240,240,240,0.9), rgba(192,192,192,0.7), transparent) 1",
                              }}
                            >
                              <Icon className="w-5 h-5 text-[#2ED3E6]" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-[#FFFFFF] leading-snug">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm md:text-base text-[#FFFFFF]/70 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </StarBorder>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started + Real Results (combined) */}
      <section className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-transparent z-10 border-t border-[#1FA6B8]/20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* CTA block - matches hero-style CTA in image */}
          <motion.div data-aos="fade-up" className="text-center mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 leading-tight max-w-4xl mx-auto">
              Ready to turn your website into a lead-generating machine?
            </h2>
            <p className="text-lg md:text-xl text-[#FFFFFF]/80 mb-8 max-w-2xl mx-auto">
              Get started with a free website audit and discover how we can help your business grow.
            </p>
            <Link
              href="/audit"
              className="group inline-flex items-center justify-center gap-3 bg-[#FFFFFF] text-[#1E1E1E] px-10 py-5 rounded-lg text-lg font-semibold hover:bg-[#2ED3E6] hover:text-[#1E1E1E] transition-all duration-300 shadow-xl"
            >
              Get a Free Website Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-12 w-full max-w-7xl mx-auto">
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={56}
                gap={60}
                pauseOnHover
                fadeOut
                fadeOutColor="#1E1E1E"
                scaleOnHover
                ariaLabel="Technology partners"
                className="opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
