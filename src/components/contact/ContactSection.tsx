"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const toastId = toast.loading("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent 🚀", { id: toastId });
        form.reset();
      } else {
        toast.error("Failed to send message.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0d0d0d] text-white py-20 px-6 md:px-20 relative"
    >
      {/* Matrix-style background overlay */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold text-green-400 drop-shadow mb-10">
          Let’s Connect
        </h2>
        <p className="text-center text-lg text-gray-400 mb-14 max-w-2xl mx-auto">
          Got a project, question, or just want to say hello? Drop a message
          below and let’s build something legendary.
        </p>

        <form
          className="space-y-6 bg-[#141414] p-8 rounded-xl shadow-lg border border-green-800"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-green-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="bg-black border border-green-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Patroba Oteko"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-green-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="bg-black border border-green-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="patrobaoteko@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-green-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-black border border-green-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Let's build secure systems and hack the matrix together."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
