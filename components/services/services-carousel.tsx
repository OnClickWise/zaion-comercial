"use client"

import useEmblaCarousel from "embla-carousel-react"
import ServiceCard from "./service-card"

interface Service {
  title: string
  subtitle: string
  description: string
  image: string
}

export default function ServicesCarousel({
  services,
}: {
  services: Service[]
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              flex-[0_0_100%]
              sm:flex-[0_0_50%]
              lg:flex-[0_0_25%]
            "
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  )
}
