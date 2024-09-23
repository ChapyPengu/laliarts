import { useState, useEffect } from 'react'
import { getMinPrice, getMaxPrice, orderAsc, orderDesc } from '../helpers/products'

function Filter({ products, setProducts }) {


    const [hidden, setHidden] = useState(true)
    const [rangeValue, setRangeValue] = useState(getMaxPrice(products))
    const [orderValue, setOrderValue] = useState('default')

    function onFilterProducts() {
      const filterProducts = products.filter(p => p.price <= rangeValue)
      setProducts(filterProducts)
      setProducts(filterProducts)
      if (orderValue === 'default') {
        setProducts(filterProducts)
      } else if (orderValue === 'asc') {
        setProducts(orderAsc(filterProducts))
      } else if (orderValue === 'desc') {
        setProducts(orderDesc(filterProducts))
      }
    }

  return (
    <div className='font-madmi w-full xl:w-[220px] text-xs font-light'>
      <div className={`flex justify-end w-full px-4 ${hidden ? '' : 'hidden'}`}>
        <button className='flex items-center justify-center gap-1 xl:hidden bg-primary font-berk text-base text-white px-2 py-1 rounded-sm shadow-sm' onClick={() => setHidden(!hidden)}>
          Filtrar
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className='hidden xl:flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
              <p>Precio Maximo: { `$ ${rangeValue}` }</p>
              <input className='w-full outline-none cursor-pointer' onChange={(e) => { setRangeValue(e.target.value) }} type="range" min={getMinPrice(products)} max={getMaxPrice(products)} step={500} defaultValue={getMaxPrice(products)} />
          </div>
          <select className='outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto px-1 py-2 rounded-md' onChange={(e) => setOrderValue(e.target.value)}>
              <option value="default">Por defecto</option>
              <option value="asc">Acendente</option>
              <option value="desc">Desendente</option>
          </select>
          <button onClick={onFilterProducts} className='btn text-white bg-primary px-4 py-1 rounded-md shadow-md outline-none hover:bg-secondary'>Aplicar</button>
      </div>

      <div className={`z-full shadow-2xl flex flex-col items-center justify-center gap-6 bg-white absolute w-full h-1/2 p-6 ${hidden ? 'hidden' : ''}`}>
          <div className='flex flex-col gap-2 w-full'>
              <p>Precio Maximo: { `$ ${rangeValue}` }</p>
              <input className='w-full outline-none cursor-pointer' onChange={(e) => { setRangeValue(e.target.value) }} type="range" min={getMinPrice(products)} max={getMaxPrice(products)} step={500} defaultValue={getMaxPrice(products)} />
          </div>
          <select className='outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-2 rounded-md' onChange={(e) => setOrderValue(e.target.value)}>
              <option value="default">Por defecto</option>
              <option value="asc">Acendente</option>
              <option value="desc">Desendente</option>
          </select>
          <button onClick={onFilterProducts} className='btn w-full text-white bg-primary px-4 py-1 rounded-md shadow-md outline-none hover:bg-secondary'>Aplicar</button>
          <button onClick={() => setHidden(!hidden)} className='absolute cursor-pointer top-0 right-0 p-4'>
            <i className="fa-solid fa-xmark text-red-600 text-xl"></i>
          </button>
      </div>
      <div className={!hidden ? 'shadow-app' : ''}></div>
    </div>
  )
}

export default Filter