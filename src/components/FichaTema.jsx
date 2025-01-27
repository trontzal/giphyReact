import { useEffect, useState } from "react"
import {getGifs} from "../services/GetGifs"

export const FichaTema = ({tema}) => {

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
    
    <h3>{tema}</h3>
    {
      imagenes.map( (imagen) => (
        <p key={imagen.id}>{imagen.title}</p>
        
      ))
    }
    
    </>
    
  )
}
