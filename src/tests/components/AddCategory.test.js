// imr tab => import React from 'react'
import React from 'react'
// esto se pone para ver los shortcuts (toBe, toMatch,etc):
import '@testing-library/jest-dom'
import AddCategory from "../../components/AddCategory"
import { shallow } from "enzyme"
import { GifGrid } from '../../components/GifGrid'

describe('<AddCategory/>', () => {
    const categorias = 'Rick n Morty'
    
    // esta funcion vacia se puede reemplazar con una funcion de jest:
    // const funcion = () => {}
    const funcion = jest.fn()
    // los componentes let los defino doble para quye me ponga la ayuda jest
    let wrapper = shallow( <AddCategory categorias={categorias} setCategorias={funcion} pruebas/> )
    let input = wrapper.find('input').at(0)

    // wrapper de gifs que no use del todo:
    let gifs = shallow(<GifGrid categorias={categorias} cantidad={1} pruebas/>)
    
    beforeEach( () => {
        // esto se ocupa para limpiar todas las simulaciones
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory categorias={categorias} setCategorias={funcion} pruebas/> )
        gifs = shallow(<GifGrid categorias={categorias} cantidad={1} pruebas/>)
        input = wrapper.find('input').at(0)
    })
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de cambiar el inputValue con el handleChange', () => {
        const valorPrueba = 'Rick n Morty'
        
        // lo siguiente se hace para definir el evento de e ('algo', {evento}):
        // como el evento es e.target.value entonces seria un objeto dentro de un objeto con un valor, se define asi:
        input.simulate('change', { target: { value: valorPrueba } })
        const inputValue = wrapper.find('h2').at(0).text().trim()
        
        expect( inputValue ).toBe( valorPrueba )
    })
    
    test('onClick debe mostrar gifs', () => {
        const valorPrueba = 'rick n morty'
        input.simulate('change', { target: { value: valorPrueba } })
        wrapper.find('button').at(0).simulate('click')
        // queria buscar gifs en otro componente4 pero por alguna razon no se muestran, creo que es porque inicializa en 0 y empieza a incrementar conforme va encontrando gifs
        // const hayGifs = gifs.find('h2').at(0).text().trim()
        // console.log(hayGifs)
        
        expect( funcion ).toHaveBeenCalled()
        
    })
    
    test('onClick no debe mostrar gifs si no hay texto', () => {
        const valorPrueba = ' '
        input.simulate('change', { target: { value: valorPrueba } })

        wrapper.find('button').at(0).simulate('click')
        
        expect( funcion ).not.toHaveBeenCalled()
        
    })
    
    test('onEnter en el input (handleSumit) debe mostrar gifs', () => {
        // el preventDefault lo ejecuto con (){}
        wrapper.find('form').at(0).simulate('submit', { preventDefault(){} })
        // lo que busco es que nunca se haya ejecutado la funcion en AddCategory porque no hay categoria
        // asi se pone la negacion
        expect( funcion ).not.toHaveBeenCalled()
    })
    
    test('debe de llamar el handleAgregar y limpiar el input', () => {
        const valorPrueba = 'rick n morty'
        input.simulate('change', { target: { value: valorPrueba } })
        wrapper.find('button').at(0).simulate('click') 

        // vuelvo a llamar el h2 para ver el valor postClick
        const valorFinalInput = wrapper.find('h2').at(0).text().trim()

        // espero que la funcion se haya ejecutado una vez simulate(click)
        expect( funcion ).toHaveBeenCalledTimes(1)
        expect(valorFinalInput).toBe('')
        // tambien puedo encontrar el valor del input asi:
        expect(wrapper.find('input').prop('value')).toBe('')
        
        // espero que la funcion se haya ejecutado con una funcion en setCategorias
        expect( funcion ).toHaveBeenCalledWith( expect.any(Function) )
        
    })
    
    
    
    
})
