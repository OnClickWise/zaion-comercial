import ContactForm from '@/components/ContactForm'

const ContatoPage = () => {
  return (
    <main className="relative w-full bg-[#0B1F3B] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C6A75E]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#1E3A8A]/30 rounded-full blur-3xl" />

      {/* Hero da página */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Vamos conversar sobre o seu projeto
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Estamos prontos para desenvolver soluções digitais inteligentes,
          estratégicas e orientadas para resultados.
        </p>
      </section>

      {/* Formulário */}
      <section className="relative bg-white text-[#0B1F3B] rounded-t-[40px] pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

    </main>
  )
}

export default ContatoPage
