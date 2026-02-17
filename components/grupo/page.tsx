import PagConst from "../pagconst";

export default function GrupoPage(){
    return(
        <>
            <section>
                <PagConst
                    title="Sobre o Grupo"
                    text="Conheça um pouco mais sobre nossa empresa."
                />
            </section>

            <section>
                <div className="pt-12">
                    <h1 className="bg-[#C6A75E] flex pl-4 py-2 rounded-full font-bold text-3xl max-w-32">
                        Missão
                    </h1>

                    <p className="pl-4 p-6 bg-slate-200 rounded-2xl shadow-2xl max-w-3xl text-xl">
                        Prestar serviços de contabilidade, consultoria, produção académica e soluções tecnológicas com rigor técnico, ética profissional e compromisso social, contribuindo de forma sustentável para o fortalecimento das organizações, dos estudantes e do desenvolvimento económico e intelectual.
                    </p>
                </div>
            </section>
            <section>
                <div className="justify-end flex">
                    <h1 className="bg-[#C6A75E] px-6 py-2 rounded-full  font-bold text-3xl inline-block">
                          Visão
                    </h1>
                    </div>
                    <div className="flex justify-end">
                     <p className="pl-4 p-6 bg-slate-200 rounded-2xl shadow-2xl max-w-3xl text-xl">
                       Ser uma empresa de referência no sul de Angola na prestação integrada de serviços contabilísticos, académicos e tecnológicos, reconhecida pela excelência, inovação, credibilidade e impacto positivo na formação de profissionais e no crescimento das instituições públicas e privadas.
                    </p>
                </div>
            </section>
            <section className="py-6">
                <div className="flex justify-center">
                    <h1 className="bg-[#C6A75E] py-2 px-4 rounded-full font-bold text-3xl">
                        Valores
                    </h1>
                </div>
                <div className="flex justify-center pl-4 p-6 bg-slate-200 rounded-2xl shadow-2xl text-xl">
                    <div className="grid">
                    <h1 className="font-black">1. Ética e Transparência</h1>
                        
                    <p className="py-3">Atuamos com honestidade, integridade e respeito às normas legais, académicas e profissionais, assegurando relações baseadas na confiança mútua.</p>

                    </div>

                    <div className="grid pl-4">
                    <h1 className="font-black">2. Excelência Profissional</h1>

                    <p className="py-3">Buscamos permanentemente elevados padrões de qualidade técnica, metodológica e científica em todos os serviços prestados.</p>
                    </div>
                    <div className="grid pl-4">
                    <h1 className="font-black">3. Compromisso com o Desenvolvimento Local</h1>

                    <p className="py-3">Valorizamos o crescimento económico, educativo e tecnológico, contribuindo para a capacitação da juventude e das instituições.</p>
                    </div>

                    <div className="grid pl-4">
                    <h1 className="font-black">4. Responsabilidade Académica e Científica</h1>

                    <p className="py-3">Promovemos a produção intelectual responsável, original e metodologicamente fundamentada, respeitando os princípios da ética académica.</p>
                    </div>

                    <div className="grid pl-4">
                    <h1 className="font-black">5. Inovação e Tecnologia</h1>

                    <p className="py-3">Investimos continuamente em soluções digitais modernas, visando eficiência, segurança e integração dos processos empresariais e educacionais.</p>
                    </div>

                    <div className="grid pl-4">
                    <h1 className="font-black">6. Valorização Humana</h1>

                    <p className="py-3">Reconhecemos o capital humano como o principal património da empresa, promovendo respeito, formação contínua e desenvolvimento profissional.</p>
                    </div>

                    <div className="grid pl-4">
                    <h1 className="font-black">7. Foco no Cliente</h1>

                    <p className="py-3">Atendemos cada cliente de forma personalizada, compreendendo suas necessidades e oferecendo soluções adequadas à sua realidade.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
