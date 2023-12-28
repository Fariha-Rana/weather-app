

function AstroComponent({astro}) {
  return (
   <section className="whitespace-nowrap" >
     <h1 className="text-4xl font-sans text-white text-center mb-4">🔭Astro</h1>
    <div className="grid min-[300px]:grid-cols-2  min-[300px]:gap-4 text-white text-sm grid-cols-1 gap-2">
    <div className="p-4 flex">
      <p className="text-md font-semibold px-1">🌄Sunrise</p>
      <p className="text-sm">{astro.sunrise}</p>
    </div>
    <div className="p-4 flex">
      <p className="text-md font-semibold px-1">🌅Sunset</p>
      <p className="text-sm">{astro.sunset}</p>
    </div>
    <div className="p-4 flex">
      <p className="text-md font-semibold px-1">🌕Moonrise</p>
      <p className="text-sm">{astro.moonrise}</p>
    </div>
    <div className="p-4 flex">
      <p className="text-md font-semibold px-1">🌘Moonset</p>
      <p className="text-sm">{astro.moonset}</p>
    </div>
  </div>
   </section>
  )
}

export default AstroComponent