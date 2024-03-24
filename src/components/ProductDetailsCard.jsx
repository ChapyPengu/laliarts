
function ProductDetailsCard({ product }) {

    const {
        name,
        price,
        description,
        stock,
        image
    } = product

  return (
    <div className="flex flex-col xl:flex-row w-full xl:w-[1080px] mx-auto xl:gap-8 bg-zinc-200 p-6 rounded-lg">
        <div className="">
            <img className="rounded-sm shadow-xl w-[24rem] h-[18rem] object-cover" src={image} alt='hola' />
        </div>
        <div className="w-[24rem] px-4 py-6 bg-white">
            <ul className="flex flex-col gap-3 text-center">
                <li className="text-sm font-extrabold font-madmi uppercase">{ name }</li>
                <li className="text-lg text-zinc-900">{ `$${price}` }</li>
                <li className="w-[18rem] mx-auto text-xs">{ description }</li>
            </ul>
        </div>
    </div>   
  )
}

export default ProductDetailsCard