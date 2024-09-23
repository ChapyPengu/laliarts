import { createContext, useContext, useState } from 'react'
import productsList from '../data/products'

const AppContext = createContext()

export function UseApp() {
    const context = useContext(AppContext)
    if (!context) throw new Error('Context is not define')
    return context
}

export function AppContextProvider({ children }) {
    const [products, setProducts] = useState(productsList)
    const [nose, setNose] = useState(false)

  return (
    <AppContext.Provider value={{
        products,
        setProducts,
        nose,
        setNose
    }}>
        { children }
    </AppContext.Provider>
  )
}
