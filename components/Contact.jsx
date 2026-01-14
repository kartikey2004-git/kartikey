"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState (null);



  const LIMITS = {
    name: 60,
    email: 100,
    message: 1000,
  };

  const handleChange = (
    e
  ) => {
    const { name, value } = e.target;
    const limit = LIMITS[name] ?? Infinity;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "email"
          ? value.slice(0, limit).trim().toLowerCase()
          : value.slice(0, limit).trimStart(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (err) {
      console.error("Contact submit error:", err);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SOCIAL ================= */

  const socialLinks = [
    {
      icon: Mail,
      link: "mailto:kartikeybhatnagar247@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      link: "https://github.com/kartikey2004-git",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      link: "https://x.com/Bh20291Kartikey",
      label: "Twitter",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/k4rtik.exe",
      label: "Instagram",
    },
  ];

  /* ================= UI ================= */

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 lg:px-16 py-16 bg-black/60"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-xl sm:text-3xl font-semibold text-white mb-8">
          Let&apos;s Connect
        </h1>

        <p className="text-gray-300 text-base mb-8">
          Got an interesting project? Need someone who ships code that
          doesn&apos;t break? Drop a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* ================= LEFT ================= */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in touch</h3>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <a
                href="mailto:kartikeybhatnagar247@gmail.com"
                className="text-gray-300 hover:text-white transition flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                kartikeybhatnagar247@gmail.com
              </a>
            </div>

            <h3 className="text-white font-semibold mb-4">Find me online</h3>

            <TooltipProvider delayDuration={100}>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>{social.label}</TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>

            <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="text-white font-semibold">Status:</span>{" "}
                Available for hire
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Usually reply within 24 hours.
              </p>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div>
            <h3 className="text-white font-semibold mb-4">Send a Message</h3>

            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-md px-4 py-2 text-white font-medium transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="w-4 h-4" />}
              </button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-400">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-400">
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
