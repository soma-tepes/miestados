import axios from 'axios'
import { useEffect, useState } from 'react'
const link = 'https://randomuser.me/api/?results='
const useMio = () => {
  let [user, setUser] = useState([])
  let [boton, setBoton] = useState()


  let fun = () => {

    axios.get(`${link}${boton}`)
      .then((response) => setUser(response.data.results))
      .catch(err => console.log(err))

  }
   
 
  const btn = (e) => {
    e.preventDefault();
    setBoton(e.target.textNew.value)

  }
  
  useEffect(() => {
    fun()
  }
    , [boton])
/* if(btn > 4){return btn }
else { "No hay datos"} */


  return { user ,btn }
}

export default useMio