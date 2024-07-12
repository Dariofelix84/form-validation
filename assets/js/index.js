const form = document.querySelector(".form")

const usernameLabel = document.querySelector("#username-label")
const usernameInput = document.querySelector("#username")

const emailLabel = document.querySelector("#email-label")
const email = document.querySelector("#email")

const passwordLabel = document.querySelector("#password-label")
const password = document.querySelector("#password")

const repeatPasswordLabel = document.querySelector("#repeat-password-label")
const repeatPassword = document.querySelector("#repeat-password")

const checkbox = document.querySelector("#terms-and-conditions-checkbox")

function inserirElementoDepois(elemento1, elemento2) {
  elemento2.parentNode.insertBefore(elemento1, elemento2.nextSibling)
}

function inserirMensagemDeErro(mensagem, campo) {
  const span = document.createElement("span")

  span.innerHTML = mensagem
  span.style.color = "red"
  span.style.fontSize = "12px"

  span.classList.add(campo.id + "-error") // username-error

  inserirElementoDepois(span, campo)
}

function removerMensagemDeErro(id) {
  const mensagemDeErro = document.querySelector("." + id + "-error")

  if (mensagemDeErro) {
    mensagemDeErro.remove()
  }
}

function removerClassesDeErroDoCampo(input, label) {
  input.classList.remove("form-input-error")
  input.classList.add("form-input")
  label.classList.remove("form-input-label-error")
  label.classList.add("form-input-label")
}

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const usernameInputSemEspacos = usernameInput.value.trim()
  const passwordSemEspacos = password.value.trim()
  const repeatPasswordSemEspacos = repeatPassword.value.trim()
 
  let camposTemErros = false

  if (usernameInputSemEspacos.length === 0) {
    usernameInput.classList.remove("form-input")
    usernameInput.classList.add("form-input-error")

    usernameLabel.classList.remove("form-input-label")
    usernameLabel.classList.add("form-input-label-error")

    usernameInput.value = ""

    camposTemErros = true

    inserirMensagemDeErro("Campo inválido", usernameInput)
  }

  if (passwordSemEspacos.length === 0){
    password.classList.remove("form-input")
    password.classList.add("form-input-error")

    passwordLabel.classList.remove("form-input-label")
    passwordLabel.classList.add("form-input-label-error")

    password.value = ""

    camposTemErros = true

    inserirMensagemDeErro("Campo inválido", password)
  }

  if (repeatPasswordSemEspacos.length === 0){
    repeatPassword.classList.remove("form-input")
    repeatPassword.classList.add("form-input-error")

    repeatPasswordLabel.classList.remove("form-input-label")
    repeatPasswordLabel.classList.add("form-input-label-error")

    repeatPassword.value = ""

    camposTemErros = true

    inserirMensagemDeErro("Campo inválido", repeatPassword)
  }

  if (repeatPasswordSemEspacos !== passwordSemEspacos) {
    repeatPassword.classList.remove("form-input")
    repeatPassword.classList.add("form-input-error")

    repeatPasswordLabel.classList.remove("form-input-label")
    repeatPasswordLabel.classList.add("form-input-label-error")

    repeatPassword.value = ""

    camposTemErros = true

    inserirMensagemDeErro('O campo "Repetir senha" precisa ser igual ao campo "Senha"', repeatPassword)
  }

  if (camposTemErros === false) {
    usernameInput.value = ""
    email.value = ""
    password.value = ""
    repeatPassword.value = ""
  }

})

usernameInput.addEventListener("keyup", function(event) {
  removerClassesDeErroDoCampo(usernameInput, usernameLabel)

  removerMensagemDeErro("username")
})

password.addEventListener("keyup", function(event) {
  removerClassesDeErroDoCampo(password, passwordLabel)

  removerMensagemDeErro("password")
})

repeatPassword.addEventListener("keyup", function(event) {
  removerClassesDeErroDoCampo(repeatPassword, repeatPasswordLabel)

  removerMensagemDeErro("repeat-password")
})
