import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className='flex justify-between px-4 py-4 bg-primary text-white text-xl font-berk font-semibold shadow-lg fixed w-screen z-50'>
        <div className="w-full xl:w-[1280px] mx-auto flex flex-col gap-2 sm:flex-row sm:gap-0 items-center justify-between">
          <div className=''>
            <Link to='/'>
              <h2 className='cursor-pointer'>Lali Arts</h2>
            </Link>
          </div>
          <div>
              <ul className='flex items-center justify-center gap-4'>
                  <li><p className='hidden sm:inline'>Contacto:</p></li>
                  <li><a target="_blank" href="https://www.instagram.com/lau_recicla/"><i className="fa-brands fa-instagram transition-hover-icon hover:text-[#ff00c8]"></i></a></li>
                  <li><a target="_blank" href="https://wa.link/srt9j8"><i className="fa-brands fa-whatsapp transition-hover-icon hover:text-[#078a00]"></i></a></li>
                  <li><a target="_blank" href="mailto:strmaount@gmail.com"><i className="fa-solid fa-envelope transition-hover-icon hover:text-[#ff0000]"></i></a></li>
              </ul>
          </div>
        </div>
    </nav>
  )
}

export default Nav