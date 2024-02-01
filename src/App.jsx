// import { useState } from 'react'
import './hojas-de-estilo/App.css'
import { Testimonio } from './Testimonio'

import Emma from './imagenes/testimonio-emma.png';
import Shaw from './imagenes/testimonio-shawn.png'
import Sarah from './imagenes/testimonio-sarah.png' 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          imagen = {Emma}
          nombre = 'Emma Bostian'
          pais = 'Sweden' 
          cargo = 'Software Engineer'
          empresa = 'Spotify'
          testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonio 
          imagen = {Shaw}
          nombre = 'Emma Bostian'
          pais = 'Sweden' 
          cargo = 'Software Engineer'
          empresa = 'Spotify'
          testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonio 
          imagen = {Sarah}
          nombre = 'Emma Bostian'
          pais = 'Sweden' 
          cargo = 'Software Engineer'
          empresa = 'Spotify'
          testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  )
}

export default App
