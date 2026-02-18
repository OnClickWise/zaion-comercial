"use client"

import Image from "next/image"
import {
  Calculator,
  FileCheck,
  GraduationCap,
  Briefcase,
} from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Serviços de Contabilidade",
    description:
      "Gestão contabilística com rigor e transparência, incluindo organização financeira, demonstrações financeiras, controlo de resultados e fecho de contas.",
  },
  {
    icon: FileCheck,
    title: "Serviços de Fiscalidade",
    description:
      "Segurança fiscal e conformidade tributária com cálculo de impostos, declarações fiscais, regularização de dívidas e representação junto da AGT.",
  },
  {
    icon: GraduationCap,
    title: "Consultoria Académica",
    description:
      "Apoio completo na produção científica, revisão académica, metodologia de investigação e preparação para defesa de trabalhos.",
  },
  {
    icon: Briefcase,
    title: "Acompanhamento Estratégico",
    description:
      "Suporte especializado e orientação profissional para ajudar empresas e estudantes a alcançar resultados sólidos e sustentáveis.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0B1F3B]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 space-y-14">

        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1F3B] dark:text-white">
            Nossos Serviços
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-white/70">
            Atuamos estrategicamente em múltiplos sectores, oferecendo soluções
            integradas com foco em inovação, eficiência e impacto sustentável.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Serviços */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="space-y-4">

                  <div
                    className="
                      w-12 h-12 sm:w-14 sm:h-14
                      flex items-center justify-center
                      rounded-full
                      bg-[#C6A75E]/20
                      text-[#C6A75E]
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg text-[#0B1F3B] dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                    {service.description}
                  </p>

                </div>
              )
            })}
          </div>

          {/* Imagem */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/services1.png"
              alt="Serviços ZAION"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
          </div>

        </div>

      </div>
    </section>
  )
}
