import { businessData } from "@/components/data/businessData"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function BusinessSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const business =
    businessData[slug as keyof typeof businessData]

  if (!business) {
    notFound()
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl ">
        <div className="bg-[#C6A75E] rounded pl-4">
        <h1 className="text-4xl font-bold mb-6 justify-center flex">
          {business.title}
        </h1>

        <p className="text-lg mb-10 pb-4 justify-center flex">
          {business.intro}
        </p>
        </div>
        {business.services.map((service, index) => (
          <div key={index} className="mb-12 max-w-3xl bg-slate-200 rounded py-4 flex items-center justify-center">
            <h2 className="text-2xl font-semibold pl-4 bg-[#0B1F3B] text-white mb-4">
              {service.category}
            </h2>
            
            <ul className="grid md:grid-cols-2 gap-4">
              {service.items.map((item, i) => (
                <li key={i} className="p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link
          href= "https://wa.me/244900000000"
          className="inline-block mt-10 px-6 py-3 rounded-xl bg-primary text-white"
        >
          Solicitar Proposta
        </Link>

      </div>
    </section>
  )
}
