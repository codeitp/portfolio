"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";

const allProjects = [
  {
    title: "AI Workflow Generator",
    tags: ["AI", "Automation"],
    image: "/images/ai-flow.png",
    link: "#",
    description: "LLM-powered automation builder using LangChain + Zapier",
  },
  {
    title: "Secure File Vault",
    tags: ["Security", "Full-Stack"],
    image: "/images/secure-vault.jpeg",
    link: "#",
    description: "Encrypted file storage system with audit trail",
  },
  {
    title: "Mobile Task Planner",
    tags: ["Mobile", "QA"],
    image: "/images/mobile-planner.jpeg",
    link: "#",
    description: "Jetpack Compose app with offline sync & test automation",
  },
  {
    title: "PenTest Dashboard",
    tags: ["Security"],
    image: "/images/pentest-dashboard.png",
    link: "#",
    description: "Live vuln scanner interface with log analysis and graphs",
  },
  {
    title: "SkillTrade Platform",
    tags: ["Full-Stack"],
    image: "/images/skilltrade.jpeg",
    link: "#",
    description: "Barter-based skill marketplace with chat and reviews",
  },
  {
    title: "Autonomous Agents Toolkit",
    tags: ["AI", "Automation"],
    image: "/images/agents.png",
    link: "#",
    description: "Agentic system with OpenAI, Memory, and vector stores",
  },
];

const categories = [
  "All",
  "AI",
  "Mobile",
  "Security",
  "Full-Stack",
  "Automation",
  "QA",
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    tags: string[];
    image: string;
    link: string;
    description: string;
  } | null>(null);

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      activeFilter === "All" || project.tags.includes(activeFilter);
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="bg-[#0e0e0e] text-white py-20 px-6 md:px-20"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold text-green-400 drop-shadow mb-12">
          Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border ${
                activeFilter === category
                  ? "bg-green-500 text-black font-semibold"
                  : "border-green-600 text-green-300 hover:bg-green-800 hover:text-white"
              } transition-all duration-300`}
              onClick={() => {
                setActiveFilter(category);
                setVisibleCount(3);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-md bg-[#1a1a1a] border border-green-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group bg-[#1a1a1a] border border-green-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() =>
                  setSelectedProject({
                    title: project.title,
                    tags: project.tags,
                    image: project.image,
                    link: project.link,
                    description: project.description,
                  })
                }
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="p-4">
                  <h3 className="text-lg font-bold text-green-400 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green-800 text-green-100 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-10 flex justify-center">
            <button
              className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black rounded-full font-semibold transition-all duration-300"
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              Load More
            </button>
          </div>
        )}

        {/* GitHub / Portfolio Footer */}
        <motion.div
          className="mt-20 text-center border-t border-green-900 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Explore more work on GitHub</p>
          <a
            href="https://github.com/codeitp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            github.com/codeitp
          </a>
        </motion.div>
      </motion.div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#111] max-w-2xl w-full rounded-lg overflow-hidden border border-green-700 p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-green-400 hover:text-green-300 transition"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full rounded-md mb-4 object-cover max-h-64"
              />
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                Visit Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
