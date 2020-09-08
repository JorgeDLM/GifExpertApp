import React from 'react'

export const GifGridItem = ({title, url, id, ultimaCategoria, categorias}) => {
    return (
        <div className={"card"}>
             <img style={{}} src={url} alt={title}/>
                    <p style={{fontWeight: 'bold'}}>{title}</p>
        </div>
    )
}


export default GifGridItem