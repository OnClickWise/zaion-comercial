import Image from "next/image"

export default function Equipe() {
  return (
    <section className="bg-[#C6A75E] dark:bg-[#0B1F3B] py-20 px-6">
      
      {/* TÍTULO PRINCIPAL */}
      <h2 className="text-4xl font-bold text-center text-[#0B1F3B] dark:text-[#C6A75E] mb-4">
        Conheça Nossa Equipe
      </h2>

      <div className="w-24 h-1 bg-[#0B1F3B] dark:bg-[#C6A75E] mx-auto mb-12"></div>

      {/* SUBTÍTULO */}
      <h3 className="text-2xl text-center font-semibold text-[#0B1F3B] dark:text-white mb-12">
        Diretoria Executiva
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* CARD */}
        <div className="bg-white dark:bg-[#122B4A] rounded-2xl shadow-xl p-8 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-2xl">
          
          <Image
            src="/images/placeholder.png"
            alt="CEO"
            width={120}
            height={120}
            className="rounded-full object-cover mb-6"
          />

          <h4 className="text-lg font-bold text-[#0B1F3B] dark:text-[#C6A75E]">
            Nome do CEO
          </h4>

          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Chief Executive Officer
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white dark:bg-[#122B4A] rounded-2xl shadow-xl p-8 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-2xl">
          
          <Image
            src="/images/placeholder.png"
            alt="CFO"
            width={120}
            height={120}
            className="rounded-full object-cover mb-6"
          />

          <h4 className="text-lg font-bold text-[#0B1F3B] dark:text-[#C6A75E]">
            Nome do CFO
          </h4>

          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Chief Financial Officer
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white dark:bg-[#122B4A] rounded-2xl shadow-xl p-8 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-2xl">
          
          <Image
            src="/images/placeholder.png"
            alt="COO"
            width={120}
            height={120}
            className="rounded-full object-cover mb-6"
          />

          <h4 className="text-lg font-bold text-[#0B1F3B] dark:text-[#C6A75E]">
            Nome do COO
          </h4>

          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Chief Operating Officer
          </p>
        </div>

      </div>

    </section>
  )
}
