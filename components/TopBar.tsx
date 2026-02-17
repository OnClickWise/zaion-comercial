"use client"

import { MapPin, Phone, Linkedin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div
      className="
        w-full text-sm transition-colors duration-300
        bg-[#0B1F3B] text-white
        dark:bg-[#111827] dark:text-gray-200
      "
    >
      <div
        className="
          w-full
          px-4 md:px-8 lg:px-12
          py-2
          flex flex-col md:flex-row
          items-center justify-between gap-2
        "
      >
        {/* Left */}
        <div className="hidden md:flex items-center gap-2">
          <MapPin size={16} className="text-[#C6A75E]" />
          <span>
            Av. Principal nº 123, Centro Empresarial, Luanda - Angola
          </span>
        </div>

        {/* Center */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+244900000000"
            className="flex items-center gap-2 hover:text-[#C6A75E] transition-colors"
          >
            <Phone size={16} />
            <span>+244941178851</span>
          </a>

          <a
            href="https://wa.me/+244941178851"
            target="_blank"
            className="hover:text-[#C6A75E] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin size={18} className="hover:text-[#C6A75E]" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram size={18} className="hover:text-[#C6A75E]" />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Facebook size={18} className="hover:text-[#C6A75E]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
