
export const ImagenCard = ({imageUrl, titulo}) => {
  return (
    <div className="Imagen-card">
        <img src={imageUrl} alt={titulo} />
        <div>{titulo}</div>
    </div>
    
  )
}
