"use client"

import Image from "next/image"

const team = [
  {
    name: "Ricardo Almeida",
    role: "Presidente Executivo",
    image: "/images/team/team-1.jpg",
    bio: "Lidera a estratégia global do grupo com foco em crescimento sustentável e inovação corporativa.",
  },
  {
    name: "Ana Martins",
    role: "Diretora de Operações",
    image: "/images/team/team-2.jpg",
    bio: "Responsável pela eficiência operacional e integração das unidades de negócio.",
  },
  {
    name: "Pedro Santos",
    role: "Diretor Financeiro",
    image: "/images/team/team-3.jpg",
    bio: "Gestão financeira estratégica com forte orientação para sustentabilidade e expansão.",
  },
  {
    name: "Sofia Ramos",
    role: "Diretora Estratégica",
    image: "/images/team/team-4.jpg",
    bio: "Coordena inovação, planeamento estratégico e desenvolvimento corporativo.",
  },
]

export default function TeamSection() {
  return (
    <section className="py-28 bg-[#C6A75E]">
      <div className="container mx-auto px-6">

        {/* Card Central */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B]">
              Equipa Executiva
            </h2>
            <p className="text-gray-600">
              Liderança experiente com visão estratégica para impulsionar
              crescimento sustentável e excelência operacional.
            </p>
          </div>

          {/* Grid 2x2 */}
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex gap-6 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Foto */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#0B1F3B]">
                    {member.name}
                  </h3>

                  <p className="text-sm font-medium text-[#C6A75E]">
                    {member.role}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
