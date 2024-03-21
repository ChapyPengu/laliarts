import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Page404() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])

  return (
    <>
    </>
  )
}

export default Page404