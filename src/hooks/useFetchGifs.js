import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( categorias, cantidad ) => {
    // el apikey lo quiero pedir aqui y no en GifGrid: entonces en props no lo mando pero si lo regreso en getGifs
    const apiKey = '6ndyzTJHSlDiGxgJKJkO1spzFSyEFRD6'
    const [state, setState] = useState({
        data: [], 
        loading: true
    })
    // el useEffect: Es el equivalente funcional a componentDidMount, componentDidUpdate, y componentWillUnmount en los componentes de clase.
    useEffect(() => {
        getGifs( categorias, cantidad, apiKey )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
        },[categorias, cantidad, apiKey])
        
    // asi podria activar despues de un timpo un cambio de estado
    // setTimeout(() => {
    //     setState({loading: false})
    // }, 3000);

    return state
}
