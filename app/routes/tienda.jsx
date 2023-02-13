import { useLoaderData } from "@remix-run/react"
import Guitarra from "../components/guitarra"
import { getGuitarras } from "../models/guitarras.server"

import styles from "../styles/guitarras.css"

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra colección de guitarras'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">
        Nuestras Guitarras
      </h2>
      <div className="guitarras-grid">
        {guitarras.map(guitarra => (
          <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
        ))}

      </div>
    </main>
  )
}

export default Tienda