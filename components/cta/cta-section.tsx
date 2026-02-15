"use client"

import { ArrowRight } from "lucide-react"

export default function CTAFormSection() {
  return (
    <section className="relative w-full bg-[#0B1F3B] py-24 overflow-hidden">
      
      {/* Glow institucional sutil */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#C6A75E]/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Lado Esquerdo — Mensagem */}
          <div className="space-y-6 text-white">
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Precisa de suporte especializado?
            </h2>

            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              Conte com uma equipa experiente pronta para apoiar o crescimento
              do seu negócio ou o sucesso do seu percurso académico.
            </p>

            <div className="text-[#C6A75E] font-medium text-base">
              Fale agora com a nossa equipa e receba orientação personalizada.
            </div>

          </div>

          {/* Lado Direito — Formulário */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            
            <h3 className="text-xl font-semibold text-[#0B1F3B] mb-6">
              Fale com a nossa equipa
            </h3>

            <form className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Primeiro nome"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
                />
                <input
                  type="text"
                  placeholder="Último nome"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
                />
              </div>

              <input
                type="email"
                placeholder="Email profissional"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
              />

              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
              />

              <button
                type="submit"
                className="
                  group
                  w-full
                  bg-[#C6A75E]
                  text-[#0B1F3B]
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  duration-300
                  hover:brightness-95
                  hover:scale-[1.02]
                "
              >
                Enviar Mensagem
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}
