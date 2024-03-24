import { useState, useEffect } from 'react'
import { getMinPrice, getMaxPrice, orderAsc, orderDesc } from '../helpers/products'

function Filter({ products, setProducts }) {


    const [hidden, setHidden] = useState(false)
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
    <div className='flex items-center justify-center sm:justify-start font-madmi'>
      <button onClick={() => setHidden(!hidden)} className='sm:hidden outline-none font-berk text-white bg-primary px-4 py-2 shadow-lg mr-12 hover:bg-secondary'>Filtrar</button>
        <div className={`hidden sm:flex flex-col justify-center items-center sm:flex-row gap-4 sm:items-end sm:justify-start w-full px-4 sm:px-0 ${hidden ? 'hidden' : 'flex'}`}>
            <div className='flex flex-col gap-2'>
                <p>Precio Maximo: { `$ ${rangeValue}` }</p>
                <input className='w-48 outline-none cursor-pointer' onChange={(e) => { setRangeValue(e.target.value) }} type="range" min={getMinPrice(products)} max={getMaxPrice(products)} step={500} defaultValue={getMaxPrice(products)} />
            </div>
            <select className='outline-none border border-gray-300 font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setOrderValue(e.target.value)}>
                <option value="default">Por defecto</option>
                <option value="asc">Acendente</option>
                <option value="desc">Desendente</option>
            </select>
            <button onClick={onFilterProducts} className='btn font-semibold bg-primary text-white px-4 py-1 rounded-md shadow-md outline-none hover:bg-secondary'>Aplicar</button>
        </div>
    </div>
  )
}

export default Filter