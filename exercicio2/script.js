// Escondendo a Senha

const inputSenha = document.getElementById('password')


function esconderSenha(event){
    //previne o comportamento padrão, recarregar a pagina nesse caso (quando o botão é pressionado)
    event.preventDefault()

    inputSenha.setAttribute('type', 'password')
}

// Alterando a classe do FORM

const formulario = document.getElementsByTagName('form')[0]

formulario.classList.remove('light')

formulario.classList.add('dark')