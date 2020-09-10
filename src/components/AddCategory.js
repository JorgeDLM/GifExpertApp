import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({categorias, setCategorias, pruebas}) =>{

    // Hooks:
    const [inputValue, setInputValue] = useState('')
    const [mostrarAlerta, setMostrarAlerta] = useState({input:true})
    const [categoriaRepetida, setCategoriaRepetida] = useState({categoria: true})

    // Funciones
    const convertirMayusculas = (e) => e.charAt(0) === ' ' ? e.charAt(1).toUpperCase() + e.toLowerCase().slice(1) : e.charAt(0).toUpperCase() + e.toLowerCase().slice(1)

    const handleAgregar = () => {
        // funciona sin que ponga categorias => pero como en las pruebas tengo q verifique q es funcion lo pongo asi:
        setCategorias( categorias => [convertirMayusculas(inputValue), ...categorias]);
        setInputValue('')
    }

    const sinCambio = inputValue !== '' && inputValue !== ' '
    
    // para saber si hay repetidas
    const contieneTextoRepetido = categorias.indexOf(inputValue) === -1
    // para sabir si hay repetido y aun no hay cambios ene l iput
    const sinCambioTextoRepetido = sinCambio && contieneTextoRepetido

    // input en ENTER se activa:
    const handleSubmit = (e) => {
        // esto lo que hace es evitar el funcionamiento por defecto del form:
        e.preventDefault();
        
        // pruebas && console.log('submit activado', inputValue)
        // utilizando el form al picar enter en el input se activa el submit y me evito este codigo:
        // e => (e.keyCode === 13)
    }

    
    const handleChange = (e) => {
        // manejandoDobleEspacio
        setInputValue(e.target.value.replace(/ +(?= )/g,''))
        // pruebas && console.log( 'handleChange llamado')
    }
    
    const agregarCategoria = () => {
        (sinCambioTextoRepetido) && handleAgregar(); 
        (sinCambioTextoRepetido) && setMostrarAlerta(false); 
        (sinCambio && !contieneTextoRepetido) && setCategoriaRepetida(false); 
        (sinCambio && contieneTextoRepetido) && setCategoriaRepetida(true);
        // pruebas && console.log('Se agregaron gifs')
    }

    // styles
    const boton = {backgroundColor: 'white', borderRadius: '10px', paddingBottom: '2px', marginLeft: '5px'}
    const alerta = {fontSize: '12px', paddingTop: '3px',}

    return(
        <>
            {pruebas && <h2>{inputValue}</h2>}
            <form onSubmit={handleSubmit}>
                <input 
                    maxLength={20} 
                    type="text"
                    placeholder="Buscar GIF's" 
                    value={convertirMayusculas(inputValue)} 
                    // ya no es necesario porque esta el form onEnter:
                    // onKeyDown={e => (e.keyCode === 13) && agregarCategoria()} 
                    onChange={handleChange} 
                />
                <button onClick={agregarCategoria}  style={{...boton}}>Agregar</button>
            </form>

           {(!mostrarAlerta && categoriaRepetida) && 
                <div style={{...alerta, color: 'green'}}>
                    Gifs de {categorias[categorias.length -1 ]} agregados con exito!
                </div>
           }

            {!(categoriaRepetida) && 
                <div style={{...alerta, color: 'red'}}>Gifs repetidos.</div>
            }
        </>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}


export default AddCategory;