"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Matrix-style Background Grid */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Glowing Orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-green-400 opacity-20 blur-[180px] z-0 top-[-100px] left-[50%] -translate-x-1/2"></div>

      <motion.header
        className="z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-green-400 drop-shadow-md">
          <TypeAnimation
            sequence={[
              "Secure Systems Engineer.",
              1500,
              "Automation Enthusiast.",
              1500,
              "Infosec Engineer.",
              1500,
              "QA Analyst.",
              1500,
              "Full-Stack Artisan.",
              1500,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Building secure, automated, and resilient digital systems with
          precision and creativity.
        </motion.p>

        <motion.nav
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black rounded-full font-semibold transition-all duration-300"
          >
            Let’s Connect
          </a>
        </motion.nav>
      </motion.header>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.6, y: [10, 0, 10] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about">
          <ChevronDown className="w-8 h-8 text-green-400" />
        </a>
      </motion.div>
    </section>
  );
}
