"use client"
import { motion } from "framer-motion"
import type React from "react"

import { useState } from "react"
import FullStackAISolutions from "./fullstack-solutions"

const solutions = [
  {
    id: "warm",
    title: "Warm Outbound:",
    description:
      "Prospects interact with your Social Media Content. Based on that, we developed a framework that allows you to scrape all the personal information and run email + LinkedIn campaigns automatically",
  },
  {
    id: "intent-event",
    title: "Intent–Event Outbound:",
    description:
      "Prospects attend or sponsor an event. We have developed a system that allows you to gather all the information related to the event and automate campaigns to reach all the sponsors, speakers, and attendees of the event.",
  },
  {
    id: "cold",
    title: "Cold Outbound:",
    description:
      "Prospects will be reached based on ICP, Buyer Persona, Industry, Company Size, etc. We developed the strategy for how to acquire leads that are relevant to your value proposition, and we set up automated LinkedIn + email campaigns",
  },
]

export function Works() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <section className="relative py-40 px-8 md:px-12 md:py-48 lg:py-56">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32 md:mb-40 lg:mb-48 text-center"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">SOLUTION</p>
        <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight mb-8 mx-auto max-w-4xl">
          We have built the ZalesMachine System — and it actually works.
        </h2>
        <p className="font-sans text-lg md:text-xl font-thin text-muted-foreground mb-12 mx-auto max-w-4xl">
          We created a system that combines an Outbound Machine and a Content Machine, powered by AI and automation — to
          deliver leads on autopilot, predictably and consistently.
        </p>

        <div className="flex justify-center mt-8">
          <motion.a
            href="https://www.youtube.com/watch?v=lnvnm-xrBPs"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/20 font-mono text-sm tracking-wide uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
          >
            Watch Demo Video
          </motion.a>
        </div>
      </motion.div>

      {/* Full-Stack AI Solutions Section */}
      <div className="py-20 md:py-28">
        <FullStackAISolutions />
      </div>

      {/* New Title and Subtitle for the Solutions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-28 md:mb-32 lg:mb-40 text-center"
      >
        <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-4">What we developed</h3>
        <p className="font-sans text-lg md:text-xl font-thin text-muted-foreground max-w-3xl mx-auto">
          Three automated frameworks to scale your outbound
        </p>
      </motion.div>

      <div className="grid gap-32 lg:grid-cols-2 lg:gap-40 max-w-7xl mx-auto">
        {/* Left Column - Solutions */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer transition-all duration-300 ease-out"
              onMouseEnter={() => setHoveredId(solution.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`border-b pb-8 transition-all duration-300 ease-out ${
                  hoveredId === solution.id
                    ? "translate-x-1 border-white/30 opacity-100 brightness-125"
                    : "border-white/20 opacity-85"
                }`}
              >
                <h3
                  className={`font-sans mb-3 text-xl md:text-2xl lg:text-2xl font-thin transition-colors duration-300 ${
                    hoveredId === solution.id ? "text-white" : "text-white/85"
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`font-sans text-sm md:text-base font-thin leading-snug transition-colors duration-300 ${
                    hoveredId === solution.id ? "text-white/95" : "text-white/70"
                  }`}
                >
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column - 3D Graph */}
        <div className="relative flex flex-col items-center justify-center">
          <div
            className="relative h-[500px] w-full max-w-[500px] transition-transform duration-300 ease-out"
            onMouseMove={handleMouseMove}
            style={{
              transform: hoveredId
                ? `rotateX(${mousePosition.y * 2}deg) rotateY(${-mousePosition.x * 2}deg) scale(1.02)`
                : "rotateX(0deg) rotateY(0deg) scale(1)",
            }}
          >
            {/* Base Graph Container */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900 to-black shadow-2xl border border-white/10"
              style={{
                transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Grid Background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Developing Graph Text - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-sans text-lg font-thin text-white/40 italic">Developing Graph...</p>
              </div>

              {/* Connecting Lines */}
              {hoveredId && (
                <svg className="absolute inset-0 h-full w-full opacity-30" style={{ pointerEvents: "none" }}>
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                      <stop offset="100%" stopColor="rgba(147, 51, 234, 0.6)" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="50%"
                    y1="25%"
                    x2="50%"
                    y2="75%"
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-28 md:mt-32 lg:mt-40">
        <motion.button
          data-cursor-hover
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-white/20 font-mono text-sm tracking-wide uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
        >
          Meet the Team
        </motion.button>
        <motion.button
          data-cursor-hover
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 font-mono text-sm tracking-wide uppercase bg-transparent hover:text-white/70 transition-colors duration-300"
        >
          Book a Call →
        </motion.button>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10 mt-32 md:mt-40 lg:mt-48" />
    </section>
  )
}
