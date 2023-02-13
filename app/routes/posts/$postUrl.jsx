import { getPost } from "../../models/posts.server"
import styles from '~/styles/blog.css'
import { useLoaderData } from "@remix-run/react"

export async function loader({params}){
  const { postUrl } = params
  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado'
    })
  }
  return post
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta({data}) {
  if(!data){
    return {
      title: 'GuitarLA - Post no encontrado',
      description: `Posts, blog de guitarras, post no encontrado`
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Posts, blog de guitarras, post ${data.data[0].attributes.nombre}`
  }
}

const PostUrl = () => {
  const post = useLoaderData()

  const { titulo, contenido, imagen, publishedAt, url} = post.data[0].attributes
  
  return (
    <main className="contenedor post">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="texto">{contenido}</p>
      </div>
    </main>
  )
}

export default PostUrl