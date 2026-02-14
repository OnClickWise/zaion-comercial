"use client"

import Link from "next/link"
import Logo from "./ui/logo"

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3B] dark:bg-[#111827] text-white pt-20 pb-8">
      
      <div className="container mx-auto px-6">

        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo + Descrição */}
          <div className="space-y-6">
            <Logo/>

            <p className="text-white/70 leading-relaxed">
              Grupo empresarial com atuação estratégica em múltiplos sectores,
              promovendo inovação, crescimento sustentável e excelência
              operacional.
            </p>
          </div>

          {/* Unidades */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">
              Unidades
            </h4>

            <ul className="space-y-3 text-white/70">
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Tecnologia</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Comércio & Logística</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Hotelaria</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Saúde</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Agro</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Serviços Técnicos</Link></li>
            </ul>
          </div>

          {/* Institucional */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">
              Institucional
            </h4>

            <ul className="space-y-3 text-white/70">
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Sobre o Grupo</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Missão & Visão</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Parceiros</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Carreiras</Link></li>
              <li><Link href="#" className="hover:text-[#C6A75E] transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Contactos */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">
              Contactos
            </h4>

            <ul className="space-y-3 text-white/70">
              <li>+244 900 000 000</li>
              <li>geral@zaion.co.ao</li>
              <li>Luanda, Angola</li>
            </ul>
          </div>

        </div>

        {/* Linha Separadora */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">

          <p>
            © 2026 ZAION Comércio e Serviços. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#C6A75E] transition">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-[#C6A75E] transition">
              Termos & Condições
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
