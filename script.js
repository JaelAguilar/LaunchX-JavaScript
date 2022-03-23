let pokeImage
const imageFront = document.getElementById("pokeImage")
const nameInput = document.getElementById("pokeName").value.toLowerCase()
const fetchPokemon = (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    fetch(url)
        .then(response => {
            console.log(typeof response.status)
            if (response.status != 200) {
                changeImage("img/Error.gif")
            }
            else {
                return res.json()
            }
        })
        .then(data => {
            if (data) {
                pokeImage = data.sprites.front_default
                changeImage(pokeImage)
            }
            
        })
}

function changeImage(url) {
    imageFront.src = url
}
