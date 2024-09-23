import { useState } from 'react'
import { UseApp } from '../context/AppContext'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter'

function Home() {

    const { products } = UseApp()
    const [redenderProducts, setRenderProducts] = useState(products)

  return (
    <>
      <Header/>
      <div className='h-24'></div>
      <div className='h-12'></div>
      <div className='flex flex-col xl:flex-row gap-6'>
        <div>
          <Filter products={products} setProducts={setRenderProducts}/>
        </div>
        <div className='w-full grid-products px-4 sm:px-0'>
          {
            redenderProducts.map((product, index) => <ProductCard key={index} product={product} showStock={true}/>)
          }
        </div>
      </div>
      
    </>
  )
}

export default Home