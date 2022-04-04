import {Options, inputOptions} from "./data";
import {returnInput} from "./inputGenerator";

const wrapper = document.querySelector(".wrapper")

const generateInput = (array:inputOptions[]) => {
    return array.map((inputOptions) => {
        return `<div class="input-block"><span> ${inputOptions.name} </span> ${returnInput(inputOptions).template}</div>`
    })
}

const generateInputsBlock = ():HTMLDivElement => {
    const inputsBlock = document.createElement("div")
    inputsBlock.className = "inputs"
    const inputs = generateInput(Options)
    inputs.forEach((input) => {
        inputsBlock.insertAdjacentHTML("beforeend", input)
    })
    return inputsBlock
}

const generateFormTop = () => {
    const formTop = document.createElement("div")
    formTop.className = "form-top"
    formTop.innerHTML = `<span class="title">Create Account</span>`
    return formTop
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

const renderErrorMessage = (message:string, name:string) => {
    const inputBlock = document.querySelector(`[name="${name}"]`)
    inputBlock.insertAdjacentElement("afterend", generateErrorMessage(message))
}

const renderForm = () => {
    const form = document.createElement("form")
    form.className = "form"
    form.appendChild(generateFormTop())
    form.appendChild(generateInputsBlock())
    form.appendChild(generateFormBottom())
    wrapper.insertAdjacentElement("afterbegin", form)
}

export {renderForm, renderErrorMessage}
