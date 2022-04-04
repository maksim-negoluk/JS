import {renderErrorMessage} from "./render";
import {formInputs} from "./data"

const Validator = () => {
    return {
        validate(object:formInputs):string[] {
            this.removeErrors(".errorMessage")
            const errorsArray:string[] = []
            for(let property in object){
                if(property === "firstName") {
                    if(!this.isNotEmpty(object[property])) {
                        errorsArray.push("please, provide first name")
                        this.showError("please, provide first name", object[property].name)
                    }
                }
                if(property === "lastName") {
                    if(!this.isNotEmpty(object[property])) {
                        errorsArray.push("please, provide last name")
                        this.showError("please, provide last name", object[property].name)
                    }
                }
                if(property === "email") {
                    if(!this.isEmail(object[property])) {
                        errorsArray.push("invalid email format")
                        this.showError("invalid email format", object[property].name)
                    }
                }
                if(property === "date") {
                    if(!this.isDate(object[property])) {
                        errorsArray.push("invalid date format")
                        this.showError("invalid date format", object[property].name)
                    }
                }
                if(property === "password") {
                    if(!this.isSamePassword(object[property], object["passwordConfirmation"])) {
                        errorsArray.push("password does not match")
                        this.showError("password does not match", object[property].name)
                    }
                    if(!this.isNotEmpty(object[property])) {
                        errorsArray.push("password can`t be empty")
                        this.showError("password can`t to be empty", object[property].name)
                    }

                }
            }
            return errorsArray
        },
        removeErrors(selector:string):void {
            document.querySelectorAll(selector).forEach(element => {
                element.remove()
            })
        },
        showError(message:string, name:string):void {
            renderErrorMessage(message, name)
        },
        validateInputs(object:formInputs):boolean {
            const errorsArray = this.validate(object)
            return (errorsArray.length === 0)
        },
        isNotEmpty(inputField:HTMLInputElement):boolean {
            return (inputField.value.length > 0)
        },
        isEmail(inputField:HTMLInputElement):boolean {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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