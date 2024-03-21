import ProductCard from './ProductCard'

function Carrousel({ products }) {
  return (
    <div>
        <h2 className='my-4 text-lg'>Productos que te pueden interesar</h2>
        <div className='flex overflow-hidden gap-4'>
            {
                products.map((product, index) => <ProductCard key={index} product={product}/> )
            }
        </div>
    </div>
  )
}

export default Carrousel