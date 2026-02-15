"use client"

import HeroCarousel from "./hero-carousel"

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#1E3A8A]
        dark:bg-[#0B1F3B]
      "
    >
      {/* padding lateral */}
      <div className="px-4 md:px-8 lg:px-12 py-6">
        <HeroCarousel />
      </div>
    </section>
  )
}
