"use client"

import HeroCarousel from "./hero-carousel"

export default function Hero() {
  return (
    <section
      className="
        w-full
        bg-[#1E3A8A]
        dark:bg-gradient-to-r dark:from-blue-950 dark:to-[#1E3A8A]
        text-white
      "
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[520px] py-20">
          
          {/* Coluna Esquerda */}
          <div className="flex flex-col justify-center space-y-6">
            
            {/* Breadcrumb */}
            <div className="text-sm text-white/80">
              Home <span className="mx-2">/</span> O Grupo
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ZAION Comércio e Serviços
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Grupo empresarial com atuação estratégica em múltiplos sectores.
            </p>
          </div>

          {/* Coluna Direita */}
          <div className="flex items-center justify-center">
            <HeroCarousel />
          </div>

        </div>
      </div>
    </section>
  )
}
