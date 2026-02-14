"use client"

import Image from "next/image"

export default function HeroCarousel() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[600px]
        h-[380px] md:h-[420px] lg:h-[480px]
        rounded-3xl
        overflow-hidden
        shadow-2xl
      "
    >
      <Image
        src="/images/hero-placeholder.jpg"
        alt="Imagem institucional"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm opacity-80">Serviços Estratégicos</p>
        <h3 className="text-xl font-semibold">
          Expansão e Desenvolvimento Empresarial
        </h3>
      </div>
    </div>
  )
}
