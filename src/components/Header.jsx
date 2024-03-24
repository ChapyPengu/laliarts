
function Header() {
  return (
    <header className='w-full mx-auto rounded-sm shadow-xl flex flex-col items-center justify-center gap-8 text-white font-madmi bg-header py-12 px-4 sm:px-0'>
        <div className=''>
            <h1 className='text-3xl font-semibold'>¿Quien Soy?</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
            <div className="">
                <img className='w-full sm:w-[360px]' src="logos\logo-laliarts.png" alt="Logo LaliArts"/>
            </div>
            <div className="w-full sm:w-[360px] text-center">
                <p className="text-lg">
                    Buenas! Soy Lali, hago productos ceramicos de forma artesanal. Cuento con stock
                    y realizo los pedido.
                </p>
            </div>
        </div>
    </header>
  )
}

export default Header