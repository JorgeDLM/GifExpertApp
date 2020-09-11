import React from 'react'

import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('GifExpertApp', () => {
    
    
    // let wrapper = shallow( <GifExpertApp /> )
    // beforeEach(() => {
        //     wrapper = shallow( <GifExpertApp /> )
        // })
        
        // test('Tiene que hacer match con snapshot', () => {
            //     expect( wrapper ).toMatchSnapshot()
            // })
            
    test('Tiene que entregar categorias configuradas por usuario', () => {
        
        const defaultCategories = ['tarzan', 'mulan', 'la sirenita']

        const wrapper = shallow( <GifExpertApp defaultCategories={defaultCategories}/> )

    // la cantidad de que se haga el gifGrid depende de la cantidad de categorias q se mandan:
        expect( wrapper.find('GifGrid').length ).toBe( defaultCategories.length )

    })
    
})
