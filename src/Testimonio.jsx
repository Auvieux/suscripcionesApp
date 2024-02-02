

import './hojas-de-estilo/Testimonio.css'

export const Testimonio = ({imagen, nombre, pais, cargo, empresa, testimonio}) => {
  console.log()
  return (
    <>
        <div className="contenedor-testimonio">
            <img 
              className='imagen-testimonio' 
              src={imagen}
            />
            <div className="contenedor-texto-testimonio">
                <p className='nombre'>
                  <strong>{nombre}</strong> in {pais}
                </p>
                <p className='cargo'>
                  {cargo} at <strong>{empresa}</strong>
                </p>
                <p className='text'>"{testimonio}"</p>
            </div>          
        </div>
    </>
  )
}


