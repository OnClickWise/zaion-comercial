import Image from "next/image"
import TeamSection from "../team/TeamSection"
import PagConst from "../pagconst"

export default function GovernancePage() {
  return (
    <main>

  <PagConst
  title="Governança Corporativa"
  text="Transparência, ética e responsabilidade são pilares fundamentais
      da nossa atuação."
  />

      {/* SOBRE GOVERNANÇA */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-6">

        {/* IMAGEM */}
        <div className="relative group w-full md:w-1/2 max-w-xl">
          <Image
            src="/images/predios.png"
            alt="Governança"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0B1F3B]/80 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <p className="text-white text-center px-6 font-extrabold text-3xl">
              Compromisso com integridade, conformidade e geração de valor sustentável.
            </p>
          </div>
        </div>

        {/* TEXTO */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-[#0B1F3B] mb-6">
            Estrutura e Responsabilidade
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A Zaion Comercial adota práticas sólidas de governança corporativa,
            assegurando transparência, ética e responsabilidade na condução
            de seus negócios.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Nossa estrutura organizacional é composta por diretoria executiva
            e lideranças estratégicas responsáveis pela tomada de decisões,
            sempre alinhadas às melhores práticas de mercado.
          </p>
        </div>

      </section>

      {/* PILARES */}
      <section className="bg-gray-100 py-20 px-6 pb-12 ">
        <h2 className="text-3xl font-bold text-center text-[#0B1F3B] mb-12 rounded-lg">
          Nossos Pilares de Governança
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#C6A75E] mb-4">
              Código de Ética
            </h3>
            <p className="text-gray-600">
              Diretrizes que orientam a conduta de colaboradores e parceiros.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#C6A75E] mb-4">
              Compliance
            </h3>
            <p className="text-gray-600">
              Políticas internas que garantem conformidade legal e regulatória.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition rounded-lg ">
            <h3 className="text-xl font-semibold text-[#C6A75E] mb-4">
              Canal de Denúncias
            </h3>
            <p className="text-gray-600">
              Mecanismos seguros para reporte de irregularidades.
            </p>
          </div>

        </div>
      </section>

      {/* COMPROMISSO FINAL */}
      <section className="bg-[#0B1F3B] text-white py-20 px-6 text-center rounded-lg">
        <h2 className="text-3xl font-bold text-[#C6A75E] mb-6 pb-4">
          Compromisso com Transparência
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Nosso compromisso é gerar valor sustentável para clientes,
          colaboradores e parceiros, mantendo elevados padrões
          de governança corporativa.
        </p>
      </section>

    <section className="py-20 px-6">
        <TeamSection />
</section>
    </main>
  )
}
