import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs', () => {
    const cantidad = 8
    const apiKey = '6ndyzTJHSlDiGxgJKJkO1spzFSyEFRD6'
                                                        // debe ser asincrona
    test('getGifs debe de entregar ${cantidad} de fotos', async() => {

        const gifs = await getGifs('Rick and Morty', cantidad, apiKey)

        expect(gifs.length).toBe(8)
    })
    test('getGifs debe tener algo en la busqueda', async() => {

        const gifs = await getGifs('', cantidad, apiKey)

        expect(gifs.length).toBe(0)
    })
    
})
