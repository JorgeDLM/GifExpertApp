import React from 'react'
import GifGridItem from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({categorias, cantidad, ultimaCategoria, pruebas}) => {


    // Cuando esto se ejecuta lo que hace es que hace que se vuelva a ejecutar el getGifs cada que haya un cambio, esto es porque hay un cambio en este nivel en el componente
    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([])

    // commente esto porque voy a hacer un custom hook, los hooks siempre empiezan con useFuncionAlgo esta en carpeta de hooks
    // useEffect(() => {
    //     getGifs(categorias, cantidad, apiKey).then(img => setImages(img));

    //     // el segundo argumento es un arreglo de dependencias, sirve para parar el que se ejecute mas el getGifs, esta parte es igual al componentDidMount()
    // }, [categorias, cantidad])

    // const state = useFetchGifs()
    // lo imsmo pero desestructurado
    // para darle un nombre especifico a la data se usan : data:images
    const { data:images,loading } = useFetchGifs(categorias, cantidad)
    

    // si esto lo pongo aqui se ejecuta cuando carga
    // getGifs()
    // lo pase arriba a useEffect para que no se ejecute el codigo cada vez que haya un cambio en el componente
    return (
            <>
            {pruebas && <h2>{images.length}</h2>}
                <div style={{textAlign: 'center', marginBottom: '4px', fontSize: '25px', fontWeight: 'bolder'}}>{categorias}</div>
                {loading && <p className="animate__flash">
                    Cargando...
                </p> }
                    <div className="card-grid">
                        {/* <button onClick={() => setCount(count +1)}>Set count +1</button> */}
                        {images.reverse().map(image =>
                            <GifGridItem
                            ultimaCategoria={ultimaCategoria}
                            categorias={categorias}
                            lastItem={[categorias[1]] && true}
                            key={image.id}
                            // esto es como yo lo hacia
                            // images={image}
                            // id={id} etc...
                            // esto es como debe de ser:
                            // mando un spread de la informacion de image como props, cada prop de las imagenes se manda como prop independiente
                            {...image}
                            />
                        )}
                    </div>
            </>
    )
}
