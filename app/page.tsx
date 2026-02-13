"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// Phone Mockup Component with Auto-Scroll
function PhoneMockup({
  images,
  glowColor,
}: {
  images: string[];
  glowColor: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative mx-auto w-[300px] h-[600px]">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-slate-900 rounded-[3rem] shadow-2xl border-8 border-slate-800 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10" />

        {/* Screen with sliding screenshots */}
        <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-black">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${glowColor} rounded-[3rem] blur-3xl opacity-20 -z-10`}
      />
    </div>
  );
}
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradients - GREEN */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-green-400 font-mono mb-4"
            >
              Hi, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Michael Soares
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl text-slate-300 font-semibold mb-6"
            >
              I build & ship mobile apps.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
            >
              Full-stack mobile developer specializing in React Native and
              Python. I've launched apps to the App Store and I'm available for
              contract work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-green-500/50"
              >
                <span className="flex items-center gap-2">
                  Hire Me
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#work"
                className="px-8 py-4 border-2 border-slate-700 hover:border-green-500 rounded-lg font-semibold text-lg transition-all"
              >
                See My Work
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-sm">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "2", label: "Apps Shipped", icon: "🚀" },
              { number: "$75", label: "Per Hour", icon: "💰" },
              { number: "20-30", label: "Hrs/Week", icon: "⏱️" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Work Section */}
      <div id="work" className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Recent Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 mb-24" />
        </motion.div>

        {/* ParkWatt */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded-full text-sm font-semibold mb-6"
              >
                ✓ LIVE ON APP STORE
              </motion.div>

              <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ParkWatt
              </h3>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Peer-to-peer EV charging marketplace connecting homeowners with
                EV drivers. Built the entire stack from scratch and launched to
                production.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Firebase", "SmartCar", "Stripe"].map(
                      (tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm font-mono hover:border-green-500 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    {[
                      "Real-time location-based search",
                      "Stripe payment integration",
                      "Push notifications & messaging",
                      "User authentication & profiles",
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <svg
                          className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Phone Mockup with Auto-Scroll */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <PhoneMockup
                images={[
                  "/images/parkwatt-1.png",
                  "/images/parkwatt-2.png",
                  "/images/parkwatt-3.png",
                ]}
                glowColor="from-green-500 to-emerald-500"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Outerly */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Phone Mockup - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <PhoneMockup
                images={[
                  "/images/outerly-1.png",
                  "/images/outerly-2.png",
                  "/images/outerly-3.png",
                ]}
                glowColor="from-teal-500 to-green-500"
              />
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 rounded-full text-sm font-semibold mb-6"
              >
                ⚡ IN DEVELOPMENT
              </motion.div>

              <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                Outerly
              </h3>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Adventure social platform with AI-powered matching. Connect with
                outdoor enthusiasts on trails using location-based discovery and
                fitness tracking.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React Native",
                      "Python",
                      "FastAPI",
                      "AI/ML",
                      "HealthKit",
                      "Location Services",
                    ].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm font-mono hover:border-green-500 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    {[
                      "AI-powered user matching algorithm",
                      "Real-time trail check-ins & sharing",
                      "Apple HealthKit integration",
                      "Location-based friend discovery",
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <svg
                          className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">What I Do</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 mb-16" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Mobile Apps",
                desc: "React Native apps for iOS and Android. From MVP to App Store launch.",
              },
              {
                icon: "⚡",
                title: "Backend APIs",
                desc: "Python/FastAPI backends with PostgreSQL. Fast, scalable, production-ready.",
              },
              {
                icon: "🔧",
                title: "Bug Fixes & Features",
                desc: "Jump into existing code. Debug, fix, ship. Fast turnaround.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-green-500 transition-all cursor-pointer"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-16 text-center overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-2xl mb-10 text-green-100">
              Available 20-30 hours/week at $75/hour
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:YOUR_EMAIL@example.com"
              className="inline-block px-12 py-5 bg-white text-green-600 hover:bg-slate-100 rounded-xl font-bold text-xl transition-all shadow-2xl"
            >
              Get In Touch →
            </motion.a>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-500 text-lg">
            Based in Bozeman, Montana • Available for remote work
          </p>
        </div>
      </div>
    </div>
  );
}
