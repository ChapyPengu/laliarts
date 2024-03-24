
function ProductDetailsCard({ product }) {

    const {
        name,
        price,
        description,
        stock,
        ancho,
        alto,
        image
    } = product

  return (
    <div className="flex flex-col xl:flex-row w-full xl:w-[1080px] mx-auto shadow-lg bg-white">
        <div>
            <img className="w-[24rem] h-[18rem] object-cover" src={image} alt='hola' />
        </div>
        <div className="px-4 py-6">
            <ul className="flex flex-col gap-3 text-center">
                <li className="text-sm font-semibold uppercase">{ name }</li>
                <li className="text-base">${ price }</li>
                <li className="text-xs">{ description }</li>
                <li className="text-sm border border-zinc-800 rounded" >Unidades Disponibles: { stock }</li>
            </ul>
        </div>
    </div>   
  )
}

export default ProductDetailsCard