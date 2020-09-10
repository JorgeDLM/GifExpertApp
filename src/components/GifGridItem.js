import React from 'react'
// para importar propTypes rapido: imp tab
import PropTypes from 'prop-types'

export const GifGridItem = ({title, url, id, ultimaCategoria, categorias}) => {
    return (
        <div className={"card"}>
            <img style={{}} src={url} alt={title}/>
            <p style={{fontWeight: 'bold'}}>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

GifGridItem.defaultValue = {
    title: 'Hola'
}


export default GifGridItem