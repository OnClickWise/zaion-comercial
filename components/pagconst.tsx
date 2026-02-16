interface PagConstProps{
    title: string;
    text: string;
}
    


export default function PagConst({title, text}: PagConstProps) {
    
return(
 <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#0B1F3B] text-white py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    <h1 className="text-4xl md:text-5xl font-bold text-[#C6A75E] mb-6">
      {title}
    </h1>

    <div className="w-24 h-1 bg-[#C6A75E] mx-auto mb-6"></div>

    <p className="max-w-3xl mx-auto text-lg text-gray-300">
      {text}
    </p>

  </div>
</section>
)

}