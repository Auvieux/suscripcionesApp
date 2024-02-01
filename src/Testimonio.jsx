

import './hojas-de-estilo/Testimonio.css'

export const Testimonio = ({imagen, nombre, pais, cargo, empresa, testimonio}) => {
  console.log()
  return (
    <>
        <div className="contenedor-testimonio">
            <img 
              className='imagen-testimonio' 
              src={imagen}
              style={{ border: '1px solid red' }} 
            />
            <div className="contenedor-texto-testimonio">
                <p className='nombre'>{nombre} in {pais}</p>
                <p className='cargo'>{cargo} at {empresa}</p>
                <p className='text'>"{testimonio}"</p>
            </div>          
        </div>
    </>
  )
}


