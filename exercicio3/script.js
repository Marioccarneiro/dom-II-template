// Atenção: segurando SHIFT

const input = document.getElementsByTagName('input')[0]

const paragrafo = document.getElementsByTagName('p')[0]

// Checar CAPS

const checarCaps = (event) => {

    if(event.shiftKey){
        paragrafo.innerHTML = `Atenção segurando o shift`
    } else {
        paragrafo.innerHTML = ``
    }
}