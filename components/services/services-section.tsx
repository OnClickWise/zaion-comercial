"use client"

import Image from "next/image"
import { Lightbulb, Award, ShieldCheck, Headphones } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Estratégia & Inovação",
    description:
      "Desenvolvemos soluções estratégicas que impulsionam transformação e crescimento sustentável.",
  },
  {
    icon: Award,
    title: "Excelência Operacional",
    description:
      "Processos estruturados para garantir desempenho consistente e resultados de alto nível.",
  },
  {
    icon: ShieldCheck,
    title: "Experiência & Qualidade",
    description:
      "Compromisso com padrões rigorosos de qualidade em todas as unidades do grupo.",
  },
  {
    icon: Headphones,
    title: "Suporte Estratégico",
    description:
      "Acompanhamento contínuo e suporte especializado para parceiros e clientes.",
  },
]

export default function ServicesSection() {
  return (
    <section className="
      py-28 
      bg-white 
      dark:bg-[#0B1F3B]
    ">
      <div className="container mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] dark:text-white">
            Nossos Serviços
          </h2>

          <p className="text-gray-600 dark:text-white/70">
            Atuamos estrategicamente em múltiplos sectores, oferecendo soluções
            integradas com foco em inovação, eficiência e impacto sustentável.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Lado Esquerdo - Serviços */}
          <div className="grid sm:grid-cols-2 gap-10">

            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="space-y-4">

                  <div className="
                    w-14 h-14 
                    flex items-center justify-center
                    rounded-full 
                    bg-[#C6A75E]/20 
                    text-[#C6A75E]
                  ">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-semibold text-lg text-[#0B1F3B] dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                    {service.description}
                  </p>

                </div>
              )
            })}

          </div>

          {/* Lado Direito - Imagem */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/services/services-main.jpg"
              alt="Serviços ZAION"
              fill
              className="object-cover"
            />

            {/* Overlay leve para dark mode */}
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
          </div>

        </div>

      </div>
    </section>
  )
}
