import {inputOptions} from "./data";
import {formInputs} from "./data"

const getFormInputs = ():formInputs => {
    return {
        firstName: document.querySelector(`input[name="first name"]`),
        lastName: document.querySelector(`input[name="last name"]`),
        email: document.querySelector(`input[name="email"]`),
        date: document.querySelector(`input[name="date"]`),
        password: document.querySelector(`input[name="password"]`),
        passwordConfirmation: document.querySelector(`input[name="confirm password"]`)
    }
}

const textInput = (options:inputOptions) => {
    return {
        options: {
            type: "text",
            name: options.name,
            placeholder: options.placeholder,
        },
        template: `<input type=${options.type} name="${options.name}" placeholder="${options.placeholder}"/>`,
    }
}

const emailInput = (options:inputOptions) => {
    return {
        options: {
            type: "email",
            name: options.name,
            placeholder: options.placeholder,
        },
        template: `<input type=${options.type} name="${options.name}" placeholder="${options.placeholder}"/>`,
    }
}

const dateInput = (options:inputOptions) => {
    return {
        options: {
            type: "date",
            name: options.name,
            placeholder: options.placeholder,
        },
        template: `<input type=${options.type} name="${options.name}" placeholder="${options.placeholder}"/>`,
    }
}

const passwordInput = (options:inputOptions) => {
    return {
        options: {
            type: "password",
            name: options.name,
            placeholder: options.placeholder,
        },
        template: `<input type=${options.type} name="${options.name}" placeholder="${options.placeholder}"/>`,
    }
}

const returnInput = (options:inputOptions) => {
    if(options.type === "text"){
        return textInput(options)
    }
    if(options.type === "email"){
        return emailInput(options)
    }
    if(options.type === "date"){
        return dateInput(options)
    }
    if(options.type === "password"){
        return passwordInput(options)
    }
}

export {returnInput, getFormInputs}