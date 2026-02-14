"use client"

import Image from "next/image"

interface Props {
  title: string
  subtitle: string
  description: string
  image: string
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  image,
}: Props) {
  return (
    <div className="group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      
      {/* Imagem */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1 space-y-3">
        <p className="text-sm text-primary font-medium">
          {subtitle}
        </p>

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
