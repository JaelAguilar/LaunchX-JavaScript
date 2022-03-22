let pokeImage
let imageFront=document.getElementById("pokeImage")
const fetchPokemon = () => {
    url = `https://pokeapi.co/api/v2/pokemon/ditto`
    fetch(url)
        .then(response => {return response.json()})
        .then(data => {
            pokeImage = data.sprites.front_shiny
            console.log(pokeImage)
            imageFront.src=pokeImage
        })
}

fetchPokemon()