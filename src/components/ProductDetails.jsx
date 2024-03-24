import { formatProductName } from '../helpers/products'
import { Route, Routes, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UseApp } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'


import ProductDetailsCard from "./ProductDetailsCard"

function ProductDetails() {

    const { name } = useParams()
    const { products } = UseApp()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const productFound = products.find(product => {
          return formatProductName(product.name) === formatProductName(name)
        })
        if (!productFound) {
            navigate('/')
        }
        setProduct(productFound)
    }, [])

  return (
    <ProductDetailsCard product={product}/>
  )
}

export default ProductDetails