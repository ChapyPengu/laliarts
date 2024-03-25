import { useEffect } from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { formatProductPrice } from "../helpers/products";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
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
    return <button className='arrow-carrousel arrow-right' onClick={() => {console.log(currentSlide); onClick()} }>
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

function ProductDetailsCard({ product }) {

    const {
        name,
        price,
        description,
        stock,
        image,
        color,
        style,
        enamel,
        extra
    } = product

    useEffect(() => {
        
    })

    function getImgages() {
        if (extra === '') {
            return [image]
        }
        if (extra) {
            return extra.split(',').concat([image])
        }
        return []
    }

  return (
    <div className="flex flex-col xl:flex-row max-w-max xl:w-[1080px] mx-auto xl:gap-8 bg-zinc-200 p-6 rounded-lg">
        <Carousel infinite className="w-full sm:w-[24rem] h-[18rem]" customLeftArrow={<CustomLeftArrow/>} customRightArrow={<CustomRightArrow/>} responsive={responsive}>
            {
                getImgages().map((path, i) => {
                    return <img key={i} className="rounded shadow-xl w-[24rem] h-[18rem] object-cover" src={path} alt={name} />
                })
            }
        </Carousel>
        <div className="w-full h-auto sm:w-[20rem] px-4 py-6 bg-white font-madmi">
            <ul className="flex flex-col gap-3">
                <li className="text-sm font-extrabold font-madmi uppercase">{ name }</li>
                <li className="text-lg text-zinc-600">{ `$${formatProductPrice(price)}` }</li>
                <li className="w-full mx-auto text-xs">{ description }</li>
                <li className="w-full mx-auto text-xs">
                  <div className="flex flex-col gap-1">
                    <p className="w-full mx-auto text-xs">Estilo: { style }</p>
                    <p className="w-full mx-auto text-xs">Colores: { color }</p>
                    <p className="w-full mx-auto text-xs">Esmalte: <b>{ enamel }</b></p>
                    <p className="w-full mx-auto text-xs">Unidades Disponibles: <b>{ stock }</b></p>
                  </div>
                </li>
                <li>
                    <div className="flex gap-2 mt-4">
                        {
                            getImgages().map((path, i) => {
                                return <div className="rounded bg-hover-img hover:shadow-2xl">
                                  <img key={i} className="rounded shadow-xl w-[4rem] h-[4rem] object-cover cursor-pointer" src={path} alt={name} />
                                </div> 
                            })
                        }
                    </div>
                </li>
            </ul>
        </div>
    </div>   
  )
}

export default ProductDetailsCard