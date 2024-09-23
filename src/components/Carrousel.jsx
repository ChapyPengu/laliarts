import ProductCard from './ProductCard'

function Carrousel({ products }) {

  return (
    <div className='flex gap-4 w-full xl:w-[1280px] h-96 mx-auto overflow-hidden'>
      {
        products.map((product, index) => {
          return <div className='shrink-0 basis-full xl:basis-[302px] h-[100px]'>
            <ProductCard key={index} product={product}/>
          </div>
        })
      }
    </div>
  )
}

export default Carrousel