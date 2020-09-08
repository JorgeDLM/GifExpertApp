// la volvi async para que los cargu
export const getGifs = async(categorias, cantidad, apiKey) => {

    // encodeURI lo que hace es que que reemplaza espacios con %20
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categorias) }&limit=${cantidad}&api_key=${apiKey}`
    // la respuesta tiene q cargar el url con await por el async
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            // se pone un ? despues de images lo que hace que si no hay imagen que no se ejecute la sig parte del codigo -> muy util para probar en otros codigos
            url: gif.images?.downsized_medium.url
        }
    })

    return gifs;
}

