"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Cpu,
  Truck,
  Hotel,
  HeartPulse,
  Leaf,
  Wrench,
} from "lucide-react"

interface BusinessItemProps {
  title: string
  description: string
  icon: string
  image: string
  slug: string
  reverse?: boolean
}

export default function BusinessItem({
  title,
  description,
  icon,
  image,
  slug,
  reverse = false,
}: BusinessItemProps) {
  const iconMap = {
    cpu: Cpu,
    truck: Truck,
    hotel: Hotel,
    health: HeartPulse,
    leaf: Leaf,
    wrench: Wrench,
  }

  const Icon = iconMap[icon as keyof typeof iconMap]

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Imagem */}
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="space-y-6">
        
        {/* Cabeçalho */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {Icon && <Icon size={26} />}
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold">
            {title}
          </h3>
        </div>

        {/* Descrição */}
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          {description}
        </p>

        {/* Botão */}
        <Link
          href={`/unidades/${slug}`}
          className="inline-block mt-4 px-6 py-3 rounded-xl bg-primary text-white font-medium transition hover:opacity-90 hover:scale-[1.02]"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  )
}
