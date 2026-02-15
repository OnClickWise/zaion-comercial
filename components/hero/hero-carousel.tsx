"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
  "/images/banner1.png",
  "/images/banner4.png",
  "/images/banner5.png",
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="relative">

      {/* Carousel */}
      <div className="overflow-hidden rounded-3xl shadow-2xl" ref={emblaRef}>
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
                lg:h-[700px]
              "
            >
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}

        </div>
      </div>

      {/* Botão esquerda */}
      <button
        onClick={scrollPrev}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          bg-white/80 hover:bg-white
          text-[#0B1F3B]
          w-10 h-10
          rounded-full
          flex items-center justify-center
          shadow-md
          transition
        "
      >
        <ChevronLeft size={22} />
      </button>

      {/* Botão direita */}
      <button
        onClick={scrollNext}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          bg-white/80 hover:bg-white
          text-[#0B1F3B]
          w-10 h-10
          rounded-full
          flex items-center justify-center
          shadow-md
          transition
        "
      >
        <ChevronRight size={22} />
      </button>

    </div>
  )
}
