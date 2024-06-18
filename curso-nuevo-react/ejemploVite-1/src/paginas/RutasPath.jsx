import { useParams } from "react-router-dom"

const RutasPath = () => {

    const {id, slug} = useParams();
  return (
    <>
      <h2>Ejemplo parametros</h2>

      <ul>
        <li>ID: {id}</li>
        <li>Slug: {slug}</li>
      </ul>
    </>
  )
}

export default RutasPath
