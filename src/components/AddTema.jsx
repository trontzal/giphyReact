import { useState } from "react"

export const AddTema = ({onAddTema}) => {

    const [inputValue, setInputValue] = useState("")

    const onCambio = ({target}) => {
        setInputValue(target.value)
    }

    const onEnviar = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1){
            return;
        }

        onAddTema(inputValue)
        setInputValue("")
    }

  return (

    <form onSubmit={(e) => { onEnviar(e) }}>
        <input type="text" placeholder="Añadir tema" value= {inputValue} onChange={(e) => {onCambio(e)}}/> 
    </form>
        
  )
}
