"use client"

import HeroCarousel from "./hero-carousel"

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#071337]
        dark:bg-[#0B1F3B]
        py-4 md:py-6
      "
    >
      <div className="px-4 md:px-8 lg:px-12">
        <HeroCarousel />
      </div>
    </section>
  )
}
