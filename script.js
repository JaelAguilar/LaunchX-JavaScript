const imageFront = document.getElementById("pokeImage")
const nameInput = document.getElementById("pokeName")
const weightStat = document.getElementById("weight")
const nameStat = document.getElementById("name")
const typeStat = document.getElementById("types")
const heightStat= document.getElementById("height")
const speciesStat = document.getElementById("species")
const infoBlock = document.getElementById("info-displayed")


const fetchPokemon = () => {
    let information = {}
    let pokemon= nameInput.value.toLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    changeImage("img/loading.gif")
    fetch(url)
        .then(response => {
            if (response.status != 200) {
                changeImage("img/Error.gif")
                infoBlock.classList.remove("active")
            }
            else {
                return response.json()
            }
        })
        .then(data => {
            if (data) {
                console.log(data)
                changeData(data)

            }
            
        })
}

function changeData(information) {
    changeImage(information.sprites.front_default)
    weightStat.innerHTML = `<b>Weight: </b>${information.weight} hg`
    nameStat.innerHTML = information.name
    /*information.types.forEach(type => {
        typeStat.textContent +=type.type.name+"..."
    });*/
    heightStat.innerHTML = `<b>Height: </b>${information.height} dm`
    infoBlock.classList.add("active")
}

function changeImage(url) {
    imageFront.src = url
}
