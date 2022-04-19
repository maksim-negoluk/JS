import {renderErrorMessage} from "./render";

const Validator = (formSelector:string) => {
    return {
        form: document.querySelector(formSelector),
        inputs: document.querySelector(formSelector).querySelectorAll("input"),
        errorsArray: new Array(0),

        validate():void {
            this.form.addEventListener("submit", (event:any) => {
                this.inputs.forEach((input:HTMLInputElement) => {
                    this.removeError(input)
                    this.checkErrors(input)
                })
                this.checkFormValidity(this.errorsArray) ? removeEventListener("submit", this.form) : event.preventDefault()
                this.errorsArray = []
            })
        },

        checkFormValidity(errorsArray:string[]):boolean {
            return (errorsArray.length === 0)
        },

        checkErrors(input:HTMLInputElement) {
            if(input.id === "firstName") {
                !this.isNotEmpty(input) && this.showError("please, provide first name", input)
            }
            if(input.id === "lastName") {
                !this.isNotEmpty(input) && this.showError("please, provide last name", input)
            }
            if(input.id === "email") {
                !this.isEmail(input) && this.showError("invalid email format", input)
            }
            if(input.id === "date") {
                !this.isDate(input) && this.showError("invalid date format", input)
            }
            if(input.id === "password") {
                !this.isNotEmpty(input) && this.showError("password can`t be empty", input)
                !this.isSamePassword(input, this.form.querySelector("#passwordConfirmation")) && this.showError("password does not match", input)
            }
        },

        removeError(inputElement:HTMLInputElement):any {
            while(inputElement.nextElementSibling){
                inputElement.nextElementSibling.remove()
            }
        },

        showError(message:string, element:HTMLInputElement):void {
            this.errorsArray.push(message)
            renderErrorMessage(message, element)
        },

        isNotEmpty(inputField:HTMLInputElement):boolean {
            return (inputField.value.length > 0)
        },

        isEmail(inputField:HTMLInputElement):boolean {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return emailRegex.test(inputField.value)
        },

        isDate(inputField:HTMLInputElement):boolean {
            const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
            return dateRegex.test(inputField.value)
        },

        isSamePassword(password:HTMLInputElement, passwordConfirmation:HTMLInputElement):boolean {
            return password.value === passwordConfirmation.value
        }
    }
}

export {Validator}