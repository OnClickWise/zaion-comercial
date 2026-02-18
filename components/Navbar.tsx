"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"
import Logo from "./ui/logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="
        w-full
        sticky top-0 z-50
        bg-white/95 dark:bg-[#0B1F3B]/95
        backdrop-blur-md
        border-b border-gray-200 dark:border-gray-800
        transition-all
      "
    >
      {/* Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">

            <NavLink href="/grupo">O Grupo</NavLink>
            <NavLink href="/unidades">Unidades</NavLink>
            <NavLink href="/governanca">Governança</NavLink>
            <NavLink href="/contactos">Contactos</NavLink>

            <Link
              href="/contactos"
              className="
                px-5 py-2 rounded-lg font-semibold
                bg-[#C6A75E] text-[#0B1F3B]
                hover:opacity-90
                transition-all duration-300
              "
            >
              Fale Connosco
            </Link>

            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-2 rounded-md
                text-[#0B1F3B] dark:text-white
                hover:bg-gray-100 dark:hover:bg-white/10
                transition
              "
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            px-6 pb-6 pt-2
            bg-white dark:bg-[#0B1F3B]
            border-t border-gray-200 dark:border-gray-800
          "
        >
          <div className="flex flex-col gap-5 font-medium">

            <MobileLink href="/grupo" close={() => setIsOpen(false)}>
              O Grupo
            </MobileLink>

            <MobileLink href="/unidades" close={() => setIsOpen(false)}>
              Unidades
            </MobileLink>

            <MobileLink href="/governanca" close={() => setIsOpen(false)}>
              Governança
            </MobileLink>

            <MobileLink href="/contactos" close={() => setIsOpen(false)}>
              Contactos
            </MobileLink>

            <Link
              href="/contactos"
              onClick={() => setIsOpen(false)}
              className="
                mt-2
                px-5 py-3
                rounded-lg
                text-center
                font-semibold
                bg-[#C6A75E]
                text-[#0B1F3B]
                hover:opacity-90
                transition
              "
            >
              Fale Connosco
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}

/* Desktop Link */
function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="
        text-[#111827] dark:text-gray-200
        hover:text-[#1E3A8A] dark:hover:text-[#C6A75E]
        transition-colors
      "
    >
      {children}
    </Link>
  )
}

/* Mobile Link */
function MobileLink({ href, children, close }: any) {
  return (
    <Link
      href={href}
      onClick={close}
      className="
        text-lg
        text-[#111827] dark:text-gray-200
        hover:text-[#1E3A8A] dark:hover:text-[#C6A75E]
        transition-colors
      "
    >
      {children}
    </Link>
  )
}
