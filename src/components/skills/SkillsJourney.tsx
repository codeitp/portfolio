"use client";

import { motion } from "framer-motion";
import { Brain, Code, ShieldCheck, Smartphone, Zap } from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Full-Stack + API Engineering",
    icon: <Code className="w-5 h-5 text-green-400" />,
    description:
      "Started building modern full-stack systems with strong API architecture. Gained proficiency in secure, scalable backend and frontend ecosystems using Java, Node.js, Go, and React.",
  },
  {
    year: "2021",
    title: "Mobile Engineering & AppSec",
    icon: <Smartphone className="w-5 h-5 text-green-400" />,
    description:
      "Built secure mobile apps using Kotlin (Jetpack Compose), Flutter, and React Native with focus on app performance and safety.",
  },
  {
    year: "2023",
    title: "Secure Systems & Infrastructure",
    icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
    description:
      "Evolved into systems security engineering. Designed hardened infrastructure, managed system integrity, and delivered secure-by-default platforms.",
  },
  {
    year: "2024",
    title: "Quality Assurance & Automation",
    icon: <Brain className="w-5 h-5 text-green-400" />,
    description:
      "Built foundational QA capabilities. Worked across manual and automated testing pipelines using Cypress, Playwright, and API testing to ensure delivery quality.",
  },

  {
    year: "2025 →",
    title: "AI-Powered Agentic Automation",
    icon: <Zap className="w-5 h-5 text-green-400" />,
    description:
       "Leveraged AI tools and LLMs to automate workflows and security pipelines, integrating agentic orchestration and no-code platforms to boost solution efficiency.",
  },
];

export default function SkillsJourney() {
  return (
    <section
      id="journey"
      className="min-h-screen bg-[#0f0f0f] text-white py-20 px-6 md:px-20"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold text-green-400 drop-shadow mb-14">
          My Journey
        </h2>

        <div className="relative border-l border-green-700 pl-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-1 w-6 h-6 bg-[#0f0f0f] border-2 border-green-400 rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              <div className="ml-4">
                <h3 className="text-xl md:text-2xl font-semibold text-green-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{item.year}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
