import "../styles/style.scss"
import {renderForm} from "./render";
import {getFormInputs} from "./inputGenerator";
import {Validator} from "./validator";

renderForm()

const form = document.querySelector("form")
const validator = Validator()

form.addEventListener("submit", (event) => {
    const isValid = validator.validateInputs(getFormInputs())
    if(!isValid){
        event.preventDefault()
    }
})