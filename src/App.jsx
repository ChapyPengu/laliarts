import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Page404 from './pages/404'
import Header from './components/Header'

function App() {

  return (
    <>
      <Nav/>
      <div className="h-24"></div>
      <div className='w-full xl:w-[1280px] mx-auto py-6'>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:name' element={<Details/>}/>
            <Route path='/*' element={<Page404/>}/>
          </Routes>
        </main>
      </div>
      <div className="h-24"></div>
      <Footer/>
    </>
  )
}

export default App
