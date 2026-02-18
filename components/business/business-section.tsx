import PagConst from "../pagconst"
import BusinessItem from "./business-item"

const units = [
  {
    title: "Tecnologia",
    description:
      "Desenvolvemos soluções tecnológicas focadas em transformação digital, automação e eficiência operacional. Atuamos com visão estratégica, implementando sistemas inteligentes que aumentam a competitividade e impulsionam o crescimento sustentável das empresas.",
    icon: "cpu",
    image: "/images/business/tech.png",
    slug: "tecnologia",
  },
  {
    title: "Comércio & Logística",
    description:
      "Estruturamos operações comerciais e logísticas com foco em eficiência, controlo e redução de custos. Implementamos processos inteligentes que fortalecem a competitividade e aumentam margens de lucro.",
    icon: "truck",
    image: "/images/business/logis.jpg",
    slug: "comercio-logistica",
  },
  {
    title: "Hotelaria",
    description:
      "Oferecemos consultoria estratégica para empreendimentos hoteleiros, com organização financeira, melhoria operacional e foco na experiência do cliente, visando maior rentabilidade e posicionamento de mercado.",
    icon: "hotel",
    image: "/images/business/hotel.png",
    slug: "hotelaria",
  },
  {
    title: "Saúde",
    description:
      "Apoiamos instituições e profissionais da saúde com organização administrativa, controlo financeiro e otimização de processos, promovendo estabilidade, eficiência e qualidade no atendimento.",
    icon: "health",
    image: "/images/business/medi.jpg",
    slug: "saude",
  },
  {
    title: "Agro",
    description:
      "Oferecemos gestão e soluções estratégicas para o setor agroindustrial, com foco em produtividade, sustentabilidade e organização financeira. Trabalhamos para transformar operações rurais em negócios estruturados e rentáveis.",
    icon: "leaf",
    image: "/images/business/agr.jpg",
    slug: "agro",
  },
  {
    title: "Serviços Técnicos",
    description:
      "Prestamos serviços técnicos especializados com qualidade, precisão e conformidade. Atuamos na assessoria, manutenção e suporte operacional, garantindo eficiência e segurança nos processos empresariais.",
    icon: "wrench",
    image: "/images/business/servic.jpg",
    slug: "servicos-tecnicos",
  },
]

export default function BusinessSection() {
  return (
    <>
    <div className="pt-12">
    <PagConst
    title="Unidades"
    text="Saiba mais sobre nossas áreas de atuação"/></div>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 space-y-28">
        {units.map((unit, index) => (
          <BusinessItem
            key={unit.title}
            {...unit}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
    </>
  )
}
