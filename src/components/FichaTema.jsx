import { useEffect, useState } from "react"
import {getGifs} from "../services/GetGifs"
import { ImagenCard } from "./ImagenCard"

export const FichaTema = ({tema}) => {

  const [isLoading, setIsLoading] = useState([])

  const [imagenes, setImagenes] = useState([])

  const getLosGifs = async () => {
    const losGifs = await getGifs(tema);
    setImagenes(losGifs);


  }

  useEffect(  () =>{
      getLosGifs()
  },[])
  


  return (
    <>
    <h2>{tema}</h2>

    <div className="card-grid">
      {
        imagenes.map( ({id, title, imageUrl}) => (
          <ImagenCard key={id} imageUrl = {imageUrl} titulo={title}/>
        ))
      }
    </div>
    
    </>
    
  )
}
