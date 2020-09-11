import React, { useState } from 'react'
// import data from './data/data'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({defaultCategories = []}) =>{
    // en vez de solo tener un arreglo primero y luego declarar el state={verduras,hierbas,frutas etc..} con lo sig: queda declarado el state y la info en un solo paso
    // const [categorias, setCategorias] = useState([]), otra manera => puede inicializar ahora con defaultProps guardadas por el usuario
    const [categorias, setCategorias] = useState(defaultCategories)

    const ultimaCategoria = categorias[0]

    return(
        <>
            <h2>GIF's App:</h2>
            <hr/>
            {/* obtengo con props los items para que se rendericen */}
            <AddCategory categorias={categorias} setCategorias={ setCategorias } />
            {/* <div style={{paddingTop: '10px'}}>
            {/* en el map se reciben dos argumentos lo q se va a mapear y el indice, aunque es preferible en el key poner o el id o el elemento, sino puede dar errores raros
            tambien puede dar error el categoria en este caso si es que hay algun duplicado
                {categorias.map((categoria, i) => <li key={categoria}>{categoria}</li>)}
            </div> 
            */}
            <div style={{paddingTop: '10px'}}>
            {/* el reverse lo puse para que la ultima busqueda salga antes */}
                {categorias.map(categoria => (
                    <GifGrid key={categoria} ultimaCategoria={ultimaCategoria} categorias={categoria} cantidad={10} />
                ))}
            </div> 
        </>
    )
}



export default GifExpertApp;