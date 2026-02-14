"use client"

import Image from "next/image"

const partners = [
  {
    name: "Parceiro 1",
    logo: "/images/partners/partner-1.png",
  },
  {
    name: "Parceiro 2",
    logo: "/images/partners/partner-2.png",
  },
  {
    name: "Parceiro 3",
    logo: "/images/partners/partner-3.png",
  },
  {
    name: "Parceiro 4",
    logo: "/images/partners/partner-4.png",
  },
  {
    name: "Parceiro 5",
    logo: "/images/partners/partner-5.png",
  },
  {
    name: "Parceiro 6",
    logo: "/images/partners/partner-6.png",
  },
]

export default function PartnersSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1F3B]">
      <div className="container mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] dark:text-white">
            Nossos Parceiros
          </h2>

          <p className="text-muted-foreground dark:text-white/70">
            Colaboramos com organizações estratégicas que partilham a nossa
            visão de inovação, excelência e crescimento sustentável.
          </p>
        </div>

        {/* Grid Logos */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-6 
          gap-10 
          items-center
        ">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center group"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="
                    object-contain
                    grayscale
                    opacity-70
                    transition-all
                    duration-300
                    group-hover:grayscale-0
                    group-hover:opacity-100
                  "
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
