"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, Empresa Parceira",
    image: "/images/testimonials/testimonial-1.jpg",
    content:
      "A ZAION demonstrou visão estratégica e excelência operacional em todos os projectos que desenvolvemos em conjunto.",
  },
  {
    name: "Mariana Costa",
    role: "Diretora Executiva",
    image: "/images/testimonials/testimonial-2.jpg",
    content:
      "Profissionalismo, inovação e compromisso. Uma parceria sólida que gera resultados consistentes.",
  },
  {
    name: "João Ferreira",
    role: "Investidor",
    image: "/images/testimonials/testimonial-3.jpg",
    content:
      "O grupo apresenta uma estrutura empresarial robusta e visão clara de crescimento sustentável.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#F5F7FA]">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Lado Esquerdo */}
          <div className="space-y-8">

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] leading-tight">
              Testemunhos & Confiança
            </h2>

            <p className="text-gray-600 text-lg">
              A reputação do Grupo ZAION é construída através de resultados
              consistentes, parcerias estratégicas e excelência operacional.
            </p>

            <div className="space-y-4">
              {[
                "Parcerias empresariais sólidas",
                "Excelência operacional comprovada",
                "Compromisso com crescimento sustentável",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#C6A75E]" size={20} />
                  <span className="text-[#0B1F3B] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Lado Direito - Grid Assimétrico */}
          <div className="relative grid sm:grid-cols-2 gap-6">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  duration-300
                  ${index === 1 ? "mt-10" : ""}
                `}
              >
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  “{item.content}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#0B1F3B]">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

