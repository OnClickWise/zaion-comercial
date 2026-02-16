"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phone = "+244941178851" // Coloque o número com DDI + DDD
  const message = "Olá, gostaria de mais informações sobre os serviços."

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-green-500
        hover:bg-green-600
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
      "
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
