import PagConst from "../pagconst";

export default function GrupoPage() {
  return (
    <>
      <section>
        <PagConst
          title="Sobre o Grupo"
          text="Conheça um pouco mais sobre nossa empresa."
        />
      </section>

      {/* MISSÃO */}
      <section className="py-12">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 space-y-6">

          <h2 className="inline-block bg-[#C6A75E] px-5 py-2 rounded-full font-bold text-2xl sm:text-3xl">
            Missão
          </h2>

          <p className="bg-slate-100 p-6 sm:p-8 rounded-2xl shadow-lg max-w-4xl text-base sm:text-lg leading-relaxed">
            Prestar serviços de contabilidade, consultoria, produção académica e soluções tecnológicas com rigor técnico, ética profissional e compromisso social, contribuindo de forma sustentável para o fortalecimento das organizações, dos estudantes e do desenvolvimento económico e intelectual.
          </p>

        </div>
      </section>

      {/* VISÃO */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 space-y-6 lg:text-right lg:ml-auto lg:max-w-4xl">

          <h2 className="inline-block bg-[#C6A75E] px-5 py-2 rounded-full font-bold text-2xl sm:text-3xl">
            Visão
          </h2>

          <p className="bg-slate-100 p-6 sm:p-8 rounded-2xl shadow-lg text-base sm:text-lg leading-relaxed">
            Ser uma empresa de referência no sul de Angola na prestação integrada de serviços contabilísticos, académicos e tecnológicos, reconhecida pela excelência, inovação, credibilidade e impacto positivo na formação de profissionais e no crescimento das instituições públicas e privadas.
          </p>

        </div>
      </section>

      {/* VALORES */}
      <section className="py-16">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 space-y-10">

          <div className="text-center">
            <h2 className="inline-block bg-[#C6A75E] px-6 py-2 rounded-full font-bold text-2xl sm:text-3xl">
              Valores
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "1. Ética e Transparência",
                text: "Atuamos com honestidade, integridade e respeito às normas legais, académicas e profissionais, assegurando relações baseadas na confiança mútua.",
              },
              {
                title: "2. Excelência Profissional",
                text: "Buscamos permanentemente elevados padrões de qualidade técnica, metodológica e científica em todos os serviços prestados.",
              },
              {
                title: "3. Compromisso com o Desenvolvimento Local",
                text: "Valorizamos o crescimento económico, educativo e tecnológico, contribuindo para a capacitação da juventude e das instituições.",
              },
              {
                title: "4. Responsabilidade Académica e Científica",
                text: "Promovemos a produção intelectual responsável, original e metodologicamente fundamentada, respeitando os princípios da ética académica.",
              },
              {
                title: "5. Inovação e Tecnologia",
                text: "Investimos continuamente em soluções digitais modernas, visando eficiência, segurança e integração dos processos empresariais e educacionais.",
              },
              {
                title: "6. Valorização Humana",
                text: "Reconhecemos o capital humano como o principal património da empresa, promovendo respeito, formação contínua e desenvolvimento profissional.",
              },
              {
                title: "7. Foco no Cliente",
                text: "Atendemos cada cliente de forma personalizada, compreendendo suas necessidades e oferecendo soluções adequadas à sua realidade.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
