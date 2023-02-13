import nosotros from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"

export function meta() {
  return {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música y más...'
    }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: nosotros,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={nosotros} alt='imagen sobre nosotros' />
        <div>
          <p>
            Nullam volutpat diam et accumsan placerat. Ut lacinia tellus sed libero ullamcorper pulvinar. 
            Suspendisse nec diam pellentesque, euismod diam vel, accumsan mauris. Donec pulvinar nunc vitae mauris dapibus, non bibendum purus lacinia. 
            Morbi pellentesque est et ipsum vulputate maximus. Cras hendrerit sem metus, sed dictum mauris venenatis ac. Fusce id felis accumsan magna dapibus dignissim non id magna. Suspendisse ullamcorper pellentesque dolor, id cursus dui eleifend vel. Quisque augue leo, pulvinar nec mollis nec, luctus non ipsum. Maecenas nisl neque, sodales id dolor nec, sodales dapibus massa. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            Nullam volutpat diam et accumsan placerat. Ut lacinia tellus sed libero ullamcorper pulvinar. 
            Suspendisse nec diam pellentesque, euismod diam vel, accumsan mauris. Donec pulvinar nunc vitae mauris dapibus, non bibendum purus lacinia. 
            Morbi pellentesque est et ipsum vulputate maximus. Cras hendrerit sem metus, sed dictum mauris venenatis ac. Fusce id felis accumsan magna dapibus dignissim non id magna. Suspendisse ullamcorper pellentesque dolor, id cursus dui eleifend vel. Quisque augue leo, pulvinar nec mollis nec, luctus non ipsum. Maecenas nisl neque, sodales id dolor nec, sodales dapibus massa. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>          
        </div>
      </div>
    </main>
  )
}

export default Nosotros