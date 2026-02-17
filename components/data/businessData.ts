export type ServiceCategory = {
  category: string
  items: string[]
}

export type Business = {
  title: string
  intro: string
  services: ServiceCategory[]
}
export type BusinessSlug = keyof typeof businessData

export const businessData: Record<string, Business> = {
  saude: {
    title: "Saúde",
    intro:
      "Gestão estratégica, financeira e tecnológica para instituições de saúde, com foco em eficiência, conformidade e inovação.",
    services: [
      {
        category: "Gestão Financeira e Contabilística",
        items: [
          "Organização contabilística de clínicas e hospitais",
          "Controle de receitas médicas e convênios",
          "Elaboração de relatórios financeiros estratégicos",
          "Planeamento financeiro para expansão de unidades de saúde",
        ],
      },
      {
        category: "Fiscalidade e Conformidade",
        items: [
          "Enquadramento fiscal adequado ao setor da saúde",
          "Declaração e cálculo de impostos",
          "Regularização fiscal e apoio institucional",
        ],
      },
      {
        category: "Tecnologia e Inovação",
        items: [
          "Implementação de sistemas de gestão hospitalar",
          "Digitalização de processos clínicos e administrativos",
          "Aplicação de IA para análise de dados médicos",
        ],
      },
    ],
  },

  hotelaria: {
    title: "Hotelaria",
    intro:
      "Gestão moderna e estratégica de empreendimentos turísticos com foco em rentabilidade, organização e experiência do cliente.",
    services: [
      {
        category: "Gestão Financeira Hoteleira",
        items: [
          "Controle financeiro de hotéis e pousadas",
          "Gestão de receitas e ocupação",
          "Análise de rentabilidade por serviço",
        ],
      },
      {
        category: "Fiscalidade e Regularização",
        items: [
          "Enquadramento fiscal para empreendimentos turísticos",
          "Declaração e regularização tributária",
          "Representação junto às entidades competentes",
        ],
      },
      {
        category: "Tecnologia e Gestão Digital",
        items: [
          "Implementação de sistemas de reservas",
          "Automação de processos administrativos",
          "Análise de dados para melhoria da experiência do cliente",
        ],
      },
    ],
  },

  tecnologia: {
    title: "Tecnologia",
    intro:
      "Soluções tecnológicas estratégicas orientadas para transformação digital, automação inteligente e crescimento sustentável.",
    services: [
      {
        category: "Transformação Digital",
        items: [
          "Diagnóstico tecnológico empresarial",
          "Digitalização de processos internos",
          "Implementação de soluções de automação",
        ],
      },
      {
        category: "Inteligência Artificial",
        items: [
          "Aplicação de IA na estratégia empresarial",
          "Automação inteligente de processos",
          "Análise preditiva orientada a dados",
        ],
      },
      {
        category: "Estratégia e Escalabilidade",
        items: [
          "Modelagem de negócios digitais",
          "Estudos de viabilidade para produtos tecnológicos",
          "Planeamento estratégico orientado a dados",
        ],
      },
    ],
  },

  agro: {
    title: "Agro",
    intro:
      "Gestão agroindustrial moderna com foco em sustentabilidade, produtividade e crescimento estruturado.",
    services: [
      {
        category: "Gestão Financeira Rural",
        items: [
          "Contabilidade rural e agroindustrial",
          "Controle de custos de produção agrícola",
          "Análise de rentabilidade por cultura",
        ],
      },
      {
        category: "Fiscalidade no Agronegócio",
        items: [
          "Enquadramento fiscal rural",
          "Declaração de impostos do setor agrícola",
          "Regularização fiscal e apoio institucional",
        ],
      },
      {
        category: "Tecnologia no Campo",
        items: [
          "Sistemas de gestão agrícola",
          "Digitalização de processos produtivos",
          "Planeamento estratégico para modernização",
        ],
      },
    ],
  },

  "servicos-tecnicos": {
    title: "Serviços Técnicos",
    intro:
      "Serviços especializados de suporte técnico, manutenção e gestão operacional com foco em eficiência e controle.",
    services: [
      {
        category: "Gestão Operacional",
        items: [
          "Controle financeiro por projeto",
          "Apuramento de resultados operacionais",
          "Planeamento estratégico para empresas técnicas",
        ],
      },
      {
        category: "Regularização e Fiscalidade",
        items: [
          "Gestão tributária do setor técnico",
          "Apoio na regularização institucional",
          "Representação junto às autoridades competentes",
        ],
      },
      {
        category: "Tecnologia Aplicada",
        items: [
          "Digitalização de processos operacionais",
          "Implementação de sistemas de controle",
          "Automação de rotinas técnicas",
        ],
      },
    ],
  },

  "comercio-logistica": {
    title: "Comércio & Logística",
    intro:
      "Gestão comercial e logística estruturada para empresas que buscam eficiência operacional e expansão estratégica.",
    services: [
      {
        category: "Gestão Financeira Comercial",
        items: [
          "Organização contabilística empresarial",
          "Controle de estoque e fluxo financeiro",
          "Apuramento de resultados por unidade",
        ],
      },
      {
        category: "Operações Logísticas",
        items: [
          "Análise de custos de transporte",
          "Planeamento estratégico de distribuição",
          "Estruturação financeira de operações logísticas",
        ],
      },
      {
        category: "Tecnologia e Automação",
        items: [
          "Sistemas de gestão de estoque",
          "Automação de processos logísticos",
          "Otimização de rotas com análise de dados",
        ],
      },
    ],
  },
}
