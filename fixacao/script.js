const input = document.getElementById(`meu-input`)

const lista = document.getElementById(`lista`)

const insereItem = (event) => {

    const itenCinco = document.createElement(`li`)
    
    itenCinco.innerHTML = input.value

    lista.insertAdjacentElement(`beforeend`, itenCinco)

    input.value = ``
    
}

