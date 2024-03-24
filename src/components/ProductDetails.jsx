import { formatProductName } from '../helpers/products'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UseApp } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import ProductDetailsCard from "./ProductDetailsCard"

function ProductDetails() {

    const { name } = useParams()
    const { products, nose } = UseApp()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
      if (!name) {
        navigate('/')
        return () => {}
      }
      const productFound = products.find(product => {
        return formatProductName(product.name) === formatProductName(name)
      })
      if (!productFound) {
          navigate('/')
      }
      setProduct(productFound)
    }, [nose])

  return <ProductDetailsCard product={product}/>
}

export default ProductDetails