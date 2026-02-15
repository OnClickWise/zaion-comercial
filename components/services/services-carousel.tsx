"use client"

import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

const banners = [
  "/images/banner1.png",
  "/images/banner4.png",
  "/images/banner5.png",
]

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
  })

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">

        {banners.map((banner, index) => (
          <div
            key={index}
            className="
              relative
              flex-[0_0_100%]
              w-full
              h-[420px]
              md:h-[550px]
              lg:h-[720px]
            "
          >
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* Overlay leve */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

      </div>
    </div>
  )
}
