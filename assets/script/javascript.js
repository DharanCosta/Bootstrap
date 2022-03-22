let nome = document.querySelector('#nome')
let nomeok = false
let email = document.querySelector('#email')
let emailok = false
let assunto = document.querySelector('#assunto')
let assuntook = false
let mapa = document.querySelector('#mapa')
let contador = document.querySelector('#contador')
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function validaNome() {
    let txt = document.querySelector('#txtNome')
    txt.style.height='2rem'
    if( nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = '#7f0203'
    }else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'Green'
        nomeok = true
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')
    txt.style.height='1.5rem'
    if( email.value.match(regex)) {
        txt.innerHTML = 'Email válido'
        txt.style.color = 'Green'
        emailok= true;
    }else{
        txt.innerHTML = "Email Inválido"
        txt.style.color = '#7f0203'
        emailok = false
    }

}

function validaAssunto() {
    let txt = document.querySelector('#txtAssunto')
    txt.style.height='1.5rem'

    contador.innerHTML = `${assunto.value.length}/300`

    if( assunto.value.length > 300) {
        txt.innerHTML = "Texto excedeu o limite de 100 caractéres"
        txt.style.color = '#7f0203'
        assuntook = false
    }else{
        txt.style.display='none'
        assuntook = true
    }

}

function enviar(){
    if (nomeok == true && emailok == true && assuntook == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert('Preencha todos os campos do formulário corretamente')
    }
}
