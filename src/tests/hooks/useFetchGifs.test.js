import React from 'react'

import { shallow } from "enzyme"
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('pruebas en hook useFetchGifs', () => {
    
    const categorias = ['rick', 'panzacola']
    const cantidad = 3
    // const images = {
    //     id: '1',
    //     url: 'https://localhost.com/foto.jpg',
    //     title: 'foto'
    // }
    
    test('Debe retornar el estado inicial', async() => {
        // esto se importa de la libreria q instalamos para probar hooks
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs())
        const { data, loading } = result.current
        // por alguna razon el await lo pongo aqui abajo, esto hace que el siguiente test funcione sino lo que pasa es que se ejecuta el fetch y el setstate y da error
        await waitForNextUpdate()

        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )

    })

    test('debe retornar un arreglo de imagenes y el Loading en false', async() => {
        // el waitForNextUpdate lo que hace es que la promesa nos va a indicar cuando suceda un cambio en el estado, que es lo que buscamos en el setState dentro del useEffect:
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( categorias, cantidad ))
        await waitForNextUpdate()
        const { data, loading } = result.current

        expect( data.length ).toBe( cantidad )
        expect( loading ).toBe( false )
    })
    
    
})
