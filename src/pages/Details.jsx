import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UseApp } from '../context/AppContext'
import ProductDetails from '../components/ProductDetails'
import { formatProductName } from '../helpers/products'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Carrousel from '../components/Carrousel'

function Details() {

    const { name } = useParams()
    const { products } = UseApp()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const productsCarrousel = products.slice(0, 6)

    useEffect(() => {
        const productFound = products.find(product => formatProductName(product.name) === formatProductName(name))
        if (!productFound) {
            navigate('/')
        }
        setProduct(productFound)
        console.log(productFound)
    }, [])

  return (
    <div className='flex flex-col gap-24'>
      <div>
        <ProductDetails product={product} />
      </div>
      <Carrousel products={productsCarrousel}/>
    </div>
  )
}

export default Details