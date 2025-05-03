"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Agentic Automation",
    skills: [
      "Python, TensorFlow, LangChain",
      "OpenAI, Hugging Face, Huggin",
      "Zapier, Make, Power Automate, n8n",
      "LLM Integrations, LangChain",
      "Agentic Automation",
    ],
  },
  {
    title: "Full-Stack Engineering",
    skills: [
      "Node.js, React, Angular",
      "Java (Spring Boot), Go",
      "REST APIs, Auth (OAuth2/JWT)",
      "Redis, RabbitMQ",
      "UI/UX Design, Responsive Interfaces",
    ],
  },
  {
    title: "Secure Systems Development",
    skills: [
      "API Security",
      "Blue Team: Logging, Monitoring, Incident Response",
      "Sentinel, MS Defender, Splunk, OpenVAS, Linux Infrastructure",
      "Vulnerability Management, Risk Assessment",
    ],
  },
  {
    title: "Mobile App Engineeringe",
    skills: [
      "Kotlin (Jetpack Compose, Coroutines, Hilt)",
      "Flutter, React Native",
      "App Security, Performance Optimization",
      "Android Automation & Testing tools",
    ],
  },
  {
    title: " Automation & Quality Assurance",
    skills: [
      "Manual Testing, Automated E2E Testing",
      "Playwright, Cypress, Selenium",
      "API Testing (Postman, Insomnia)",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Docker & Containerization",
      "GitHub Actions",
      "Linux (Debian/Arch)",
      "Jira, Agile: Scrum & Kanban",
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0e0e0e] text-white py-20 px-6 md:px-20"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold text-green-400 drop-shadow mb-12">
          About Me
        </h2>
        <p className="text-center text-lg text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
          I’m a Technical Solutions Specialist with core expertise in software
          development, systems automation, QA engineering, and technical
          support. I craft secure, scalable solutions with strong foundations in
          infosec, mobile engineering, and AI-driven automation—tailored for
          performance, resilience, and future-readiness.
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl text-green-400 mb-4 font-semibold border-l-4 border-green-600 pl-3">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-[#1a1a1a] rounded-xl p-3 border border-green-800 shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    <BadgeCheck className="text-green-400 w-5 h-5" />
                    <span className="text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
