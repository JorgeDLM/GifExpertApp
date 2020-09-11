import React from 'react'

import { GifGrid } from "../../components/GifGrid"
import { shallow } from "enzyme"
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('pruebas en <GifGrid/>', () => {
    
    // const cantidad = 10
    const gifs = [{
        id: 'ABC',
        url: 'https://localhost/cualquier-imagen.jpg',
        title: 'abc'
    },
    {
        id: 'ABC2',
        url: 'https://localhost/cualquier-imagen.jpg',
        title: 'abc'
    }]
    
    // let wrapper = shallow(<GifGrid categorias="juan" cantidad={cantidad} />)
    // beforeEach(() => {
        //     wrapper = shallow(<GifGrid categorias="juan" cantidad={cantidad} />)
        // })
        
    test('Debe de renderizarse el Snapshot correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid categorias="juan"  /> )
       
        expect( wrapper ).toMatchSnapshot()
        
    })
    
    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        // voy a crear un mock para fingir que ya llego la data -> esta rriba jest.mock('ruta a hook')
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid categorias="juan"  />)
       
        // expect( wrapper ).toMatchSnapshot()

        // el p en este caso contiene el cargando (como no esta cargando entonces false):
        expect( wrapper.find('p').exists() ).toBe(false)

        // como se crea un GifGridItem por gifs, entonces:
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )


    })
    
})
