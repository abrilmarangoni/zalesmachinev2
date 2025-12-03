'use client'

import { useState } from 'react'

type SolutionId = 'outbound' | 'content' | 'ai-revops' | 'outcomes' | 'globally'

interface Solution {
  id: SolutionId
  title: string
  description: string
}

interface SolutionConfig {
  id: SolutionId
  titleKey: string
  descriptionKey: string
}

const solutionIds: SolutionConfig[] = [
  {
    id: 'outbound',
    titleKey: 'fullstack.outbound.title',
    descriptionKey: 'fullstack.outbound.description',
  },
  {
    id: 'content',
    titleKey: 'fullstack.content.title',
    descriptionKey: 'fullstack.content.description',
  },
  {
    id: 'ai-revops',
    titleKey: 'fullstack.aiRevOps.title',
    descriptionKey: 'fullstack.aiRevOps.description',
  },
  {
    id: 'outcomes',
    titleKey: 'fullstack.outcomes.title',
    descriptionKey: 'fullstack.outcomes.description',
  },
  {
    id: 'globally',
    titleKey: 'fullstack.globally.title',
    descriptionKey: 'fullstack.globally.description',
  },
]

const translations: Record<string, string> = {
  'fullstack.outbound.title': 'Outbound Machine',
  'fullstack.outbound.description': 'Automated lead generation and outreach system that identifies, qualifies, and engages prospects at scale through personalized email and LinkedIn campaigns.',
  'fullstack.content.title': 'Content Machine',
  'fullstack.content.description': 'AI-powered content creation engine that produces high-quality, personalized content for your outbound campaigns, ensuring every message resonates with your target audience.',
  'fullstack.aiRevOps.title': 'AI RevOps Agents',
  'fullstack.aiRevOps.description': 'Intelligent revenue operations platform that optimizes your entire sales funnel, from lead scoring to pipeline management, using advanced AI algorithms.',
  'fullstack.outcomes.title': 'Outcomes',
  'fullstack.outcomes.description': 'Track performance across every touchpoint. Real-time analytics show you exactly how each component of the system contributes to revenue growth.',
  'fullstack.globally.title': 'Globally Usable',
  'fullstack.globally.description': 'Built to scale across markets, languages, and time zones. Deploy the same system anywhere in the world with localized content and compliance.',
  'fullstack.meetTeam': 'Meet the Team',
  'fullstack.bookCall': 'Book a Call',
}

function t(key: string): string {
  return translations[key] || key
}

export default function FullStackAISolutions() {
  const solutions: Solution[] = solutionIds.map(sol => ({
    id: sol.id,
    title: t(sol.titleKey),
    description: t(sol.descriptionKey),
  }))
  const [hoveredId, setHoveredId] = useState<SolutionId | null>(null)

  // Separar las soluciones: primeras 3 + Outcomes + Globally
  const mainSolutions = solutions.slice(0, 3)
  const outcomesSolution = solutions[3]
  const globallySolution = solutions[4]

  return (
    <section className="relative w-full px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28" style={{ backgroundColor: '#000000' }}>
      {/* Título: Solutions con ZalesMachine debajo */}
      <div className="mb-16 md:mb-20 lg:mb-24 text-center">
        <h2 className="font-sans text-4xl font-extralight bg-gradient-to-r from-[#e0c5f0] to-[#b3d5ff] bg-clip-text text-transparent lg:text-5xl">
          Solutions
        </h2>
        <p className="font-sans mt-4 text-2xl font-extralight text-white/90">
          ZalesMachine
        </p>
      </div>

      {/* Grid 2x2 con 4 cuadrados principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full mb-16 md:mb-20">
        {mainSolutions.map((solution) => (
          <div
            key={solution.id}
            className="group cursor-pointer transition-all duration-300 ease-out"
            onMouseEnter={() => setHoveredId(solution.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`h-full rounded-2xl border p-8 md:p-10 lg:p-12 transition-all duration-300 ease-out ${
                hoveredId === solution.id
                  ? 'border-white/30 bg-white/5 opacity-100 brightness-125 scale-[1.02] shadow-lg shadow-white/10'
                  : 'border-white/20 bg-black/40 opacity-85'
              }`}
            >
              <h3
                className={`font-sans mb-5 md:mb-6 text-2xl md:text-3xl font-extralight transition-colors duration-300 ${
                  hoveredId === solution.id
                    ? 'text-white'
                    : 'text-white/85'
                }`}
              >
                {solution.title}
              </h3>
              <p
                className={`font-sans text-base md:text-lg font-extralight leading-relaxed transition-colors duration-300 ${
                  hoveredId === solution.id
                    ? 'text-white/95'
                    : 'text-white/70'
                }`}
              >
                {solution.description}
              </p>
            </div>
          </div>
        ))}

        {/* Cuadrado de Outcomes */}
        <div
          className="group cursor-pointer transition-all duration-300 ease-out"
          onMouseEnter={() => setHoveredId('outcomes')}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div
            className={`h-full rounded-2xl border p-8 md:p-10 lg:p-12 transition-all duration-300 ease-out ${
              hoveredId === 'outcomes'
                ? 'border-white/30 bg-white/5 opacity-100 brightness-125 scale-[1.02] shadow-lg shadow-white/10'
                : 'border-white/20 bg-black/40 opacity-85'
            }`}
          >
            <h3
              className={`font-sans mb-5 md:mb-6 text-2xl md:text-3xl font-extralight transition-colors duration-300 ${
                hoveredId === 'outcomes'
                  ? 'text-white'
                  : 'text-white/85'
              }`}
            >
              {outcomesSolution.title}
            </h3>
            <p
              className={`font-sans text-base md:text-lg font-extralight leading-relaxed transition-colors duration-300 ${
                hoveredId === 'outcomes'
                  ? 'text-white/95'
                  : 'text-white/70'
              }`}
            >
              {outcomesSolution.description}
            </p>
          </div>
        </div>
      </div>

      {/* Cuadrado de Globally Usable - Full Width */}
      <div className="w-full">
        <div
          className="group cursor-pointer transition-all duration-300 ease-out"
          onMouseEnter={() => setHoveredId('globally')}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div
            className={`rounded-2xl border p-8 md:p-10 lg:p-12 transition-all duration-300 ease-out ${
              hoveredId === 'globally'
                ? 'border-white/30 bg-white/5 opacity-100 brightness-125 scale-[1.02] shadow-lg shadow-white/10'
                : 'border-white/20 bg-black/40 opacity-85'
            }`}
          >
            <h3
              className={`font-sans mb-5 md:mb-6 text-2xl md:text-3xl font-extralight transition-colors duration-300 ${
                hoveredId === 'globally'
                  ? 'text-white'
                  : 'text-white/85'
              }`}
            >
              {globallySolution.title}
            </h3>
            <p
              className={`font-sans text-base md:text-lg font-extralight leading-relaxed transition-colors duration-300 ${
                hoveredId === 'globally'
                  ? 'text-white/95'
                  : 'text-white/70'
              }`}
            >
              {globallySolution.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
