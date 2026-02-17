import BusinessItem from "./business-item"

const units = [
  {
    title: "Tecnologia",
    description:
      "Soluções tecnológicas inovadoras focadas em transformação digital, infraestrutura e desenvolvimento estratégico.",
    icon: "cpu",
    image: "/images/business/tech.png",
  },
  {
    title: "Comércio & Logística",
    description:
      "Operações integradas de comércio e distribuição com eficiência e alcance estratégico.",
    icon: "truck",
    image: "/images/business/logis.jpg",
  },
  {
    title: "Hotelaria",
    description:
      "Gestão e desenvolvimento de empreendimentos hoteleiros com foco em excelência.",
    icon: "hotel",
    image: "/images/business/hotel.png",
  },
  {
    title: "Saúde",
    description:
      "Investimentos e serviços no sector da saúde com foco em inovação.",
    icon: "health",
    image: "/images/business/medi.jpg",
  },
  {
    title: "Agro",
    description:
      "Produção e gestão agroindustrial com sustentabilidade.",
    icon: "leaf",
    image: "/images/business/agr.jpg",
  },
  {
    title: "Serviços Técnicos",
    description:
      "Serviços especializados de suporte técnico e manutenção.",
    icon: "wrench",
    image: "/images/business/serv.jpg",
  },
]

export default function BusinessSection() {
  return (
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
  )
}
