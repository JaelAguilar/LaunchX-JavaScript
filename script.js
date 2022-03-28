const imageFront = document.getElementById("pokeImage")
const nameInput = document.getElementById("pokeName")
const weightStat = document.getElementById("weight")
const nameStat = document.getElementById("name")
const typeStat = document.getElementById("types")
const heightStat= document.getElementById("height")
const speciesStat = document.getElementById("species")
const abilitiesStat =document.getElementById("abilities")
const infoBlock = document.getElementById("info-displayed")
const temporalInfoBlock = document.getElementById("temporal-info")


const fetchPokemon = () => {
    let pokemon= nameInput.value.toLowerCase()
    loading()
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {
          if (response.status != 200) {
            notFound()
          } else {
            return response.clone().json()
          }
        }).then((data) => {
      if (data) {
        changeData(data)
        }
    })
}

function changeData(information) {
    deleteTags(abilitiesStat)
    console.log(information.abilities,information.species)
    changeImage(information.sprites.front_default)
    weightStat.innerHTML = `<b>Weight: </b>${information.weight} hg`
    nameStat.innerHTML = information.name
    console.log(information.types[0].type.name)
    typeStat.innerHTML = `<b>Type: </b>${information.types[0].type.name}`
    information.abilities.forEach(ability => {
        console.log(ability.ability.name)
        createTag(abilitiesStat, ability.ability.name)
    });
    heightStat.innerHTML = `<b>Height: </b>${information.height} dm`
    speciesStat.innerHTML=`<b>Species: </b>${information.species.name}`
    infoBlock.classList.add("active")
    temporalInfoBlock.classList.remove("active")
}

function changeImage(url) {
    imageFront.src = url
}

function createTag(block, content) {
    let tag = document.createElement("span")
    tag.classList.add("tag")
    tag.innerText=content
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color+=Math.floor(Math.random()*10);
    }
    tag.style.backgroundColor = color
    block.appendChild(tag)
}

function deleteTags(block) {
    let tags = [...block.getElementsByClassName("tag")]
    tags.forEach(tag => { tag.remove() })
}

function loading() {
    temporalInfoBlock.textContent = "Loading..."
    temporalInfoBlock.classList.add("active")
    infoBlock.classList.remove("active")
    nameStat.textContent="Loading..."
    changeImage("img/loading.gif")
}

function notFound() {
    changeImage("img/Error.gif")
    infoBlock.classList.remove("active")
    nameStat.textContent = "Please try again!"
    temporalInfoBlock.textContent="It seems your Pokemon could not be found, please try again with another name or ID"
}