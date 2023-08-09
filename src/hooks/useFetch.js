import { useState, useEffect } from 'react';


export const useFetch = () => {
  
  const [informacion, setInformacion] = useState({})

  useEffect(() => {
    /* 

      fetch('https://rickandmortyapi.com/api/character')
        .then( response => response.json())
        .then( data => {
          setInformacion(data)
        })


    */

        


    const apiRick = async() => {
      const api = await fetch('https://rickandmortyapi.com/api/character')
      const data = await api.json()

      setInformacion(data)
      
    }


    apiRick()


  }, [])


  return(
    informacion
  )
};
