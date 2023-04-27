const lista = document.getElementById('lista')

const itenZero = document.createElement('li')

//colocando texto atraves do innerHTML

itenZero.innerHTML = 'Item 0'

//item cinco
const itenCinco = document.createElement('li')

//colocando texto atraves do createTextNode

const textoItenCinco = document.createTextNode('Item 5')

itenCinco.appendChild(textoItenCinco)

//adicionando os novos itens à lista

lista.insertAdjacentElement('afterbegin', itenZero)

lista.insertAdjacentElement('beforeend', itenCinco)