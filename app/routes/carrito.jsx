
import { useOutletContext } from "@remix-run/react"
import { useEffect, useState } from "react"
import { ClientOnly } from "remix-utils"
import styles from "~/styles/carrito.css"

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return {
    title: 'GuitarLA - Carrito de compras',
    description: 'Venta de guitarras, música, blog, carrito de compras, tienda'
  }
}

const Carrito = () => {

  const [total, setTotal] = useState(0)
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, actual) => total + (actual.cantidad * actual.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])

  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>

          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>

              {carrito?.length === 0 ? 'Carrito vacío' : (
                carrito?.map(item => (
                  <div key={item.id} className='producto'>
                    <div>
                      <img src={item.imagen} alt='imagen de la guitarra' />
                    </div>
                    <div>
                      <p className="nombre">{item.nombre}</p>
                      <p>Cantidad:</p>

                      <select 
                        className="select" 
                        name="cantidad" 
                        id="cantidad" 
                        value={item.cantidad}
                        onChange={e => actualizarCantidad({
                          cantidad: +e.target.value,
                          id: item.id
                        })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <p className="precio">$ <span>{item.precio}</span></p>
                      <p className="subtotal">Subtotal: $ <span>{item.precio * item.cantidad}</span></p>
                    </div>

                    <button type="button" className="btn-eliminar" onClick={() => eliminarGuitarra(item.id)}>X</button>                
                  </div>
                ))
              )}
            </div>

            <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: $ {total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  )
}

export default Carrito