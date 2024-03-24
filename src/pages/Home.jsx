import { useEffect, useState } from 'react'
import { UseApp } from '../context/AppContext'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { orderAsc, orderDesc } from '../helpers/products'

function Home() {

    const { products, setProducts } = UseApp()
    const [redenderProducts, setRenderProducts] = useState(products)
    const [rangeValue, setRangeValue] = useState(getMaxPrice())
    const [orderValue, setOrderValue] = useState('default')

    function getMaxPrice() {
      let max = 0
      for (const p of products) {
        if (p.price >= max) {
          max = p.price
        }
      }
      return max
    }

    function getMinPrice() {
      let min = getMaxPrice()
      for (const p of products) {
        if (p.price <= min) {
          min = p.price
        }
      }
      return min
    }

    function onFilterProducts() {
      const filterProducts = products.filter(p => p.price <= rangeValue)
      setRenderProducts(filterProducts)
      setRenderProducts(filterProducts)
      if (orderValue === 'default') {
        setRenderProducts(filterProducts)
      } else if (orderValue === 'asc') {
        setRenderProducts(orderAsc(filterProducts))
      } else if (orderValue === 'desc') {
        setRenderProducts(orderDesc(filterProducts))
      }
    }

    useEffect(() => {
    }, [])

  return (
    <>
      <Header/>
      <div className='h-24'></div>
      <div className='flex items-center justify-center sm:justify-start'>
        <div className='flex flex-col justify-center items-center sm:flex-row gap-4 sm:items-end sm:justify-start w-full px-4 sm:px-0'>
          <div className='flex flex-col gap-2'>
            <p>Precio Maximo: ${ rangeValue }</p>
            <input className='w-48 outline-none cursor-pointer' onChange={(e) => { setRangeValue(e.target.value) }} type="range" min={getMinPrice()} max={getMaxPrice()} step={500} defaultValue={getMaxPrice()} />
          </div>
          <select className='outline-none border border-gray-300 font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setOrderValue(e.target.value)}>
            <option value="default">Por defecto</option>
            <option value="asc">Acendente</option>
            <option value="desc">Desendente</option>
          </select>
          <button onClick={onFilterProducts} className='btn font-semibold bg-primary text-white px-4 py-1 rounded-md shadow-md outline-none hover:bg-secondary'>Aplicar</button>
        </div>
      </div>
      <div className='h-12'></div>
      <div className='w-full grid-products px-4 sm:px-0'>
        {
          redenderProducts.map((product, index) => <ProductCard key={index} product={product} showStock={true}/>)
        }
      </div>
    </>
  )
}

export default Home