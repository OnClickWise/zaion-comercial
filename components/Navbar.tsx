"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"
import Logo from "./ui/logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 transition-colors duration-300
                       bg-white dark:bg-[#0B1F3B] shadow-sm">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo/>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">

            <Link
              href="/grupo"
              className="text-[#111827] dark:text-gray-200
                         hover:text-[#1E3A8A] dark:hover:text-[#C6A75E]
                         transition-colors"
            >
              O Grupo
            </Link>

            <Link
              href="/unidades"
              className="text-[#111827] dark:text-gray-200
                         hover:text-[#1E3A8A] dark:hover:text-[#C6A75E]
                         transition-colors"
            >
              Unidades
            </Link>

            <Link
              href="/governanca"
              className="text-[#111827] dark:text-gray-200
                         hover:text-[#1E3A8A] dark:hover:text-[#C6A75E]
                         transition-colors"
            >
              Governança
            </Link>

            <Link
              href="/contactos"
              className="text-[#111827] dark:text-gray-200
                         hover:text-[#1E3A8A] dark:hover:text-[#C6A75E]
                         transition-colors"
            >
              Contactos
            </Link>

            <Link
              href="/contactos"
              className="px-5 py-2 rounded-lg font-semibold
                         bg-[#C6A75E] text-[#0B1F3B]
                         hover:opacity-90
                         transition-all duration-300"
            >
              Fale Connosco
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button
              className="text-[#0B1F3B] dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B1F3B] px-4 pb-6
                        border-t border-gray-200 dark:border-gray-700">

          <div className="flex flex-col gap-4 mt-4 font-medium">

            <Link href="/grupo" onClick={() => setIsOpen(false)}>
              O Grupo
            </Link>

            <Link href="/unidades" onClick={() => setIsOpen(false)}>
              Unidades
            </Link>

            <Link href="/governanca" onClick={() => setIsOpen(false)}>
              Governança
            </Link>

            <Link href="/contactos" onClick={() => setIsOpen(false)}>
              Contactos
            </Link>

            <Link
              href="/contactos"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-3 rounded-lg text-center font-semibold
                         bg-[#C6A75E] text-[#0B1F3B]
                         hover:opacity-90 transition-all"
            >
              Fale Connosco
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}
