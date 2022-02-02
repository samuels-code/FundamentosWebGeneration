/* O JavaScript e uma linguagem Case Sensitive, ou seja, ela reconhece letras minúsculas e maiúsculas.

como acessar um elemento

por tag: getElementByTagName()
por ID: getElementByID()
por nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() */

let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let mapa = document.querySelector("#mapa")


nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
  let txtNome = document.querySelector("#txtNome")
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido"
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = "Nome válido"
    txtNome.style.color = 'green'
    nomeOk = true
  }

}

function validaEmail(){
  let txtEmail = document.querySelector("#txtEmail")

  if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
    txtEmail.innerHTML = "E-mail inválido, por favor inserir um válido."
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = "E-mail válido."
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector("#txtAssunto")

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto extenso demais. Digite no máximo 150 caracteres.'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar (){
  if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert("Formulário enviado com sucesso!")
  } else {
    alert("Por favor preencha o formulário corretamente antes de enviar.")
  }
}

function mapaZoom (){
  mapa.style.width = "800px"
  mapa.style.height = "600px"
}

function mapaNormal(){
  mapa.style.width = "500px"
  mapa.style.height = "350px"
}
