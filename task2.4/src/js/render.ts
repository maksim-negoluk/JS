const wrapper = document.querySelector(".wrapper")


const generateTextInput = (id:string, tittle:string):HTMLDivElement => {
    const inputBlock = document.createElement("div")
    inputBlock.className = "input-block"
    inputBlock.innerHTML = `<span>${tittle}:</span> 
  <input id=${id} class="input" type="text">`
    return inputBlock
}

const generatePasswordInput = (id:string, tittle:string):HTMLDivElement => {
    const inputBlock = document.createElement("div")
    inputBlock.className = "input-block"
    inputBlock.innerHTML = `<span>${tittle}:</span> 
  <input id=${id} class="input" type="password">`
    return inputBlock
}

const generateFormTop = () => {
    const formTop = document.createElement("div")
    formTop.className = "form-top"
    formTop.innerHTML = `<span class="title">Create Account</span>`
    return formTop
}

const generateInputsBlock = ():HTMLDivElement => {
    const inputsBlock = document.createElement("div")
    inputsBlock.className = "inputs"
    inputsBlock.insertAdjacentElement("beforeend", generateTextInput("firstName","first name"))
    inputsBlock.insertAdjacentElement("beforeend", generateTextInput("lastName","last name"))
    inputsBlock.insertAdjacentElement("beforeend", generateTextInput("email","email"))
    inputsBlock.insertAdjacentElement("beforeend", generateTextInput("date","date"))
    inputsBlock.insertAdjacentElement("beforeend", generatePasswordInput("password","password"))
    inputsBlock.insertAdjacentElement("beforeend", generatePasswordInput("passwordConfirmation","confirm password"))
    return inputsBlock
}

const generateFormBottom = () => {
    const formBottom = document.createElement("div")
    formBottom.className = "form-bottom"
    formBottom.innerHTML = `<button type="submit">create</button>`
    return formBottom
}

const generateErrorMessage = (message:string) => {
    const errorMessage = document.createElement("p")
    errorMessage.className = "errorMessage"
    errorMessage.innerHTML = message
    return errorMessage
}

const renderErrorMessage = (message:string, element:HTMLInputElement) => {
    element.insertAdjacentElement("afterend", generateErrorMessage(message))
}

const renderForm = () => {
    const form = document.createElement("form")
    form.id = "form"
    form.method = "post"
    form.appendChild(generateFormTop())
    form.appendChild(generateInputsBlock())
    form.appendChild(generateFormBottom())
    wrapper.insertAdjacentElement("afterbegin", form)
}

export {renderForm, renderErrorMessage}
