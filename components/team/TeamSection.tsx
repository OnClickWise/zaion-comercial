"use client"

import Image from "next/image"

const team = [
  {
    name: "Avis Miguel",
    role: "Presidente Executivo",
    image: "/images/team-1.jpg",
    bio: "Lidera a estratégia global do grupo com foco em crescimento sustentável e inovação corporativa.",
  },
  {
    name: "Ana Martins",
    role: "Diretora de Operações",
    image: "/images/team-2.jpg",
    bio: "Responsável pela eficiência operacional e integração das unidades de negócio.",
  },
  {
    name: "Leovigildo Miguel",
    role: "Diretor Tecnologia",
    image: "/images/team-3.jpeg",
    bio: "Gestão e implementação estratégica com forte orientação para inovação e segurança tecnológica.",
  },
  {
    name: "Sofia Ramos",
    role: "Diretora Estratégica",
    image: "/images/team-4.jpg",
    bio: "Coordena inovação, planeamento estratégico e desenvolvimento corporativo.",
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#C6A75E]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Card Central */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3B]">
              Equipa Executiva
            </h2>

            <p className="text-sm sm:text-base text-gray-600">
              Liderança experiente com visão estratégica para impulsionar
              crescimento sustentável e excelência operacional.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">

            {team.map((member, index) => (
              <div
                key={index}
                className="
                  flex flex-col sm:flex-row
                  gap-4 sm:gap-5
                  bg-gray-50
                  rounded-2xl
                  p-4 sm:p-5 md:p-6
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                {/* Foto */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mx-auto sm:mx-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="font-semibold text-[#0B1F3B] text-base sm:text-lg">
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
