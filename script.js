const imageFront = document.getElementById("pokeImage")
const nameInput = document.getElementById("pokeName")
const weightStat=document.getElementById("weight")
console.log(document.getElementById("pokeName"))


const fetchPokemon = () => {
    let information = {}
    let pokemon= nameInput.value.toLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(url)
        .then(response => {
            if (response.status != 200) {
                changeImage("img/Error.gif")
            }
            else {
                return response.json()
            }
        })
        .then(data => {
            if (data) {
                information.image = data.sprites.front_default
                information.weight=data.weight
                changeData(information)
            }
            
        })
}

function changeData(information) {
    changeImage(information.image)
    weightStat.textContent+=information.weight
}

function changeImage(url) {
    imageFront.src = url
}
