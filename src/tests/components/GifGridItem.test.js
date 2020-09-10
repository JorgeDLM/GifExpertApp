import React from 'react'
import GifGridItem from "../../components/GifGridItem"
// asegurarme que se importe de enzyme
import { shallow } from "enzyme"

describe('GifGridItem', () => {
    const title = 'Rick and Morty'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem url={ url } title={ title }  />)

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( title )
    })

    test('debe tener la imagen con url y title', () => {
        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe( url )
    })
    
    
})
