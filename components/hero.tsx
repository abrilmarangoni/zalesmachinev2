"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SentientSphere } from "./sentient-sphere"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* 3D Sphere Background */}
      <div className="absolute inset-0">
        <SentientSphere />
      </div>

      {/* Typography Overlay */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex flex-col justify-center items-center p-12 md:p-16 lg:p-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-balance">
            WE TURN YOUR COMPANY
            <br />
            INTO A ZALESMACHINE
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="z-20 flex gap-4"
        >
          <motion.button
            data-cursor-hover
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/20 font-mono text-sm tracking-wide uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
          >
            Book a call
          </motion.button>

          <motion.button
            data-cursor-hover
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-mono text-sm tracking-wide uppercase bg-transparent hover:text-white/70 transition-colors duration-300"
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
