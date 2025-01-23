import { useState } from "react"
import { AddTema } from "./components/AddTema"
import { FichaTema } from "./components/FichaTema"


export const GaleriaImagenesApp = () => {

    const [temas, setTemas] = useState([])

    const onAddTema = (newTema) => {
     
      setTemas([...temas, newTema])

    }

  return (
    <>
    
        <h1>Galeria de imagenes</h1>
        
        <AddTema onAddTema = {onAddTema} />
 {/*
        <ol>
          {temas.map((tema) => {
            return <li key={tema}>{tema}</li>
          })}
        </ol> */}
      {temas.map((tema) =>{
        return <FichaTema key={tema} titulo={tema}/>
      })}
         
      
       

    </>
    
  )

}
