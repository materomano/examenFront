import React, { useState } from 'react'
import Enviar from './Enviar'
import Card from './Card'


const Formulario = () => {
  const [comida , setComida]= useState('')
  const [postre,setPostre]= useState('')
 const [click, setClick]= useState(false)
 const [error, setError]=useState(false)
 
  const handleSubmit = (event) => {
    event.preventDefault()
    if(comida.length > 3 && postre.length >=6){
        setClick(true)
        setError(false)
    }else{
        setError(true)
    }
    
 
    setClick(true)


  }
  
  console.log(Formulario)
    return (
    <div>
         {!click &&
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection: 'column'}}>

                <label >Comida</label>
                <input type="text" onChange={(event) => setComida(event.target.value.trim())}/>
                 <label >Postre</label>
                <input type="text" onChange={(event) => setPostre(event.target.value) }/>
                <button>Enviar</button>

            </form> }
            { click && <Enviar comida={comida} postre={postre}/>}
            {error && <h6>Por favor chequea que la información sea correcta</h6>}
           <Card/>
    </div>
  )
}

export default Formulario