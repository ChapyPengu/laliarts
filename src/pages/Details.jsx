import { useState, useEffect } from 'react'
import { Route, Routes, useParams, Outlet } from 'react-router-dom'
import { UseApp } from '../context/AppContext'
import ProductDetails from '../components/ProductDetails'
import { formatProductName } from '../helpers/products'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return <button className='arrow-carrousel arrow-right' onClick={() => onClick()}>
      <i className="fa-solid fa-chevron-right text-white"></i>
    </button>
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return <button className='arrow-carrousel arrow-left' onClick={() => onClick()}>
      <i className="fa-solid fa-chevron-left text-white"></i>
    </button>
};

function Details() {

    const { products } = UseApp()

  return (
    <div className='flex flex-col gap-24'>
      <div>
        <ProductDetails/>
      </div>
      <Carousel customLeftArrow={<CustomLeftArrow/>} customRightArrow={<CustomRightArrow />} responsive={responsive}>
        {
          products.map((p, i) => {
            return <div key={i} className='mx-2'>
              <ProductCard product={p}/>
            </div>
          })
        }
      </Carousel>
    </div>
  )
}

export default Details