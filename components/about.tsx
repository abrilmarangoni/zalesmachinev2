"use client"

import { useRef, useEffect, useState } from "react"

const failedEmailText = `Subject: Typical Cold Email, The kind that gets deleted

GENERIC OPENING

"Hi [First Name], I hope this email finds you well..."

VAGUE VALUE PROPOSITION

"We help companies like yours increase efficiency..."

PUSHY CALL-TO-ACTION

"Can we schedule a quick 15-minute call this week?"

NO CREDIBILITY

"Trust me, you'll find this valuable..."`

const successEmailText = `Subject: The kind that actually generates sales

Hi Nico

I saw that you reached 4.2M ARR - congratulations on that milestone!!

Something caught my attention: you're scaling operations with a small recruiting team.

This made me think - if we could help you hire LATAM professionals 2x faster, those 6 roles you're looking for you could close in weeks instead of months.

Does it make sense to explore how we could accelerate that process for you?`

const failedResults = [
  { value: "2%", label: "Response Rate" },
  { value: "0.1%", label: "Conversion" },
  { value: "95%", label: "Deleted" },
]

const successResults = [
  { value: "34%", label: "Response Rate" },
  { value: "12%", label: "Conversion" },
  { value: "8x", label: "Meetings Booked" },
]

export function About() {
  const horizontalSectionRef = useRef<HTMLElement>(null)
  const horizontalTrackRef = useRef<HTMLDivElement>(null)

  const [displayedFailedText, setDisplayedFailedText] = useState("")
  const [displayedSuccessText, setDisplayedSuccessText] = useState("")
  const [showFailedResults, setShowFailedResults] = useState(false)
  const [showSuccessResults, setShowSuccessResults] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (!horizontalSectionRef.current || !horizontalTrackRef.current) return

      const section = horizontalSectionRef.current
      const track = horizontalTrackRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      const scrollDelay = windowHeight * 0.2
      const startScroll = sectionTop + scrollDelay
      const endScroll = sectionTop + sectionHeight - windowHeight

      if (scrollY >= startScroll && scrollY <= endScroll) {
        const progress = (scrollY - startScroll) / (endScroll - startScroll)
        const clampedProgress = Math.max(0, Math.min(1, progress))
        const viewportWidth = window.innerWidth
        const totalSlides = 2
        const maxTranslate = (totalSlides - 1) * viewportWidth
        const translateX = -clampedProgress * maxTranslate

        requestAnimationFrame(() => {
          track.style.transform = `translateX(${translateX}px)`
        })
      } else if (scrollY < startScroll) {
        requestAnimationFrame(() => {
          track.style.transform = `translateX(0px)`
        })
      } else {
        const viewportWidth = window.innerWidth
        const totalSlides = 2
        const maxTranslate = (totalSlides - 1) * viewportWidth
        requestAnimationFrame(() => {
          track.style.transform = `translateX(${-maxTranslate}px)`
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let i = 0
    const speed = 15
    const timer = setInterval(() => {
      if (i < failedEmailText.length) {
        setDisplayedFailedText(failedEmailText.substring(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setShowFailedResults(true)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0
      const speed = 15
      const timer = setInterval(() => {
        if (i < successEmailText.length) {
          setDisplayedSuccessText(successEmailText.substring(0, i + 1))
          i++
        } else {
          clearInterval(timer)
          setShowSuccessResults(true)
        }
      }, speed)
      return () => clearInterval(timer)
    }, 2000)
    return () => clearTimeout(delay)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section ref={horizontalSectionRef} className="relative bg-black" style={{ height: "350vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden z-10">
        <div className="h-full flex items-center">
          <div
            ref={horizontalTrackRef}
            className="flex transition-transform duration-100 ease-out"
            style={{ willChange: "transform" }}
          >
            <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
              <div className="max-w-[1100px] w-full">
                <div className="text-center mb-12">
                  <h1 className="font-sans text-4xl font-thin tracking-tight text-white md:text-[54px] md:leading-[60px]">
                    Why Most Outbounds Fail?
                  </h1>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
                  {/* Failed email */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl bg-[#151515] p-6 shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/5 h-[480px]">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-violet-400/60" />
                          <div className="h-3 w-3 rounded-full bg-violet-400/60" />
                          <div className="h-3 w-3 rounded-full bg-violet-400/60" />
                        </div>
                        <span className="ml-4 text-sm text-white/40 font-mono">Failed Cold Email</span>
                      </div>

                      <div className="font-mono text-sm leading-tight text-white/90">
                        <pre className="whitespace-pre-wrap">
                          {displayedFailedText.split("\n").map((line, index) => {
                            const isAllCaps =
                              line.trim().length > 0 &&
                              line.trim() === line.trim().toUpperCase() &&
                              /^[A-Z\s:\-!?]+$/.test(line.trim())
                            return (
                              <span key={index} className={isAllCaps ? "text-red-500" : ""}>
                                {line}
                                {index < displayedFailedText.split("\n").length - 1 && "\n"}
                              </span>
                            )
                          })}
                        </pre>
                        {showFailedResults && (
                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                            {failedResults.map((result, index) => (
                              <span key={index}>
                                <span className="text-red-500 font-semibold">{result.value}</span>
                                <span className="text-white/70"> {result.label}</span>
                                {index < failedResults.length - 1 && <span className="text-white/40 ml-3">|</span>}
                              </span>
                            ))}
                          </div>
                        )}
                        <span className={`inline-block ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="font-sans text-2xl md:text-3xl leading-none font-thin tracking-tight text-white">
                      The anatomy of failed outreach
                    </h2>
                    <div className="space-y-2">
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — Generic templates that feel robotic
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — Vague value propositions that don't resonate
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — Pushy CTAs that trigger instant delete
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — No social proof or credibility signals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
              <div className="max-w-[1100px] w-full">
                <div className="text-center mb-12">
                  <h1 className="font-sans text-4xl font-thin tracking-tight text-white md:text-[54px] md:leading-[60px]">
                    What a High-Performing Outbound Looks Like
                  </h1>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
                  {/* Success email */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl bg-[#151515] p-6 shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/5 h-[480px]">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-emerald-400/60" />
                          <div className="h-3 w-3 rounded-full bg-emerald-400/60" />
                          <div className="h-3 w-3 rounded-full bg-emerald-400/60" />
                        </div>
                        <span className="ml-4 text-sm text-white/40 font-mono">High-Performing Email</span>
                      </div>

                      <div className="font-mono text-sm leading-tight text-white/90">
                        <pre className="whitespace-pre-wrap">{displayedSuccessText}</pre>
                        {showSuccessResults && (
                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                            {successResults.map((result, index) => (
                              <span key={index}>
                                <span className="text-emerald-500 font-semibold">{result.value}</span>
                                <span className="text-white/70"> {result.label}</span>
                                {index < successResults.length - 1 && <span className="text-white/40 ml-3">|</span>}
                              </span>
                            ))}
                          </div>
                        )}
                        <span className={`inline-block ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="font-sans text-2xl md:text-3xl leading-none font-thin tracking-tight text-white">
                      Personalized variables
                    </h2>
                    <div className="space-y-2">
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — {"{FirstName}"}
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — {"{Lead-level signal or activity}"}
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — {"{1-3 word compliment}"}
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — {"{Specific thing of their company}"}
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — {"{Value proposition mapping}"}
                      </p>
                      <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed font-thin">
                        — {"{Outcome}"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
