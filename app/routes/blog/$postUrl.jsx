import { getPost } from "../../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import { formatearFecha } from "../../utils/helpers"

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

export function meta({data}) {
  if(!data){
    return {
      title: 'GuitarLA - Post no encontrado',
      description: `Posts, blog de guitarras, post no encontrado`
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Posts, blog de guitarras, post ${data.data[0].attributes.titulo}`
  }
}

const PostUrl = () => {
  const post = useLoaderData()

  const { titulo, contenido, imagen, publishedAt} = post.data[0].attributes
  
  return (
    <main className="post mt-3">
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen del post ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </main>
  )
}

export default PostUrl