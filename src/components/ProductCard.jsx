import React from 'react'
import { Link } from 'react-router-dom'
import { formatProductName } from '../helpers/products'

function ProductCard({ product, showStock }) {
    const {
        name,
        price,
        image,
        stock,
        description
    } = product

    const stockClass = stock > 0 ? 'bg-green-50 border-green-400 text-green-400' : 'bg-red-50 border-red-400 text-red-400'
    const stockText = <p className={`text-center w-full font-light text-[0.6rem] border block mx-auto px-2 py-0.5 rounded ${stockClass}`}>{ stock > 0 ? 'Stock' : 'Sin Stock' }</p>

  return (
    <Link to={`/details/${formatProductName(name)}`}>
        <div className='w-full rounded-sm hover:shadow-md bg-white'>
            <div className=''>
                <img className='w-full h-[160px] object-cover' src={image} alt={name} />
            </div>
            <div className='flex flex-col gap-2  px-4 py-4'>
                <h2 className='text-[0.6rem] text-xs h-min overflow-hidden font-semibold uppercase'>{ name }</h2>
                <p className='text-xs'>${ price }</p>
                <p className='line-clamp-1 text-zinc-600 font-light mb-2 text-[0.7rem] overflow-hidden text-ellipsis'>{ description }</p>
                {
                    showStock ? stockText : null
                }  
            </div>
        </div>
    </Link>   
  )
}

export default ProductCard