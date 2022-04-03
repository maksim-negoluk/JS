interface inputOptions {
    type: string,
    name: string
    placeholder: string
}

const Options:inputOptions[] = [
    {
        type: "text",
        name: "first name",
        placeholder: "enter your first name"
    },
    {
        type: "text",
        name: "last name",
        placeholder: "enter your last name"
    },
    {
        type: "email",
        name: "email",
        placeholder: "enter your email"
    },
    {
        type: "text",
        name: "date",
        placeholder: "enter date"
    },
    {
        type: "password",
        name: "password",
        placeholder: "enter password"
    },
    {
        type: "password",
        name: "confirm password",
        placeholder: "confirm password"
    },
]

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

const Validator = () => {
    return {
        Validate(condition:boolean) {
            if(condition){
                //do something
            }
            else {
                this.showError()
            }
        },
        showError(errorMassage:string) {
            console.log(errorMassage)
        },
        isEmail(inputField:HTMLInputElement) {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return inputField.value.match(emailRegex)
        },
        isDate(inputField:HTMLInputElement) {
            const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
            return inputField.value.match(dateRegex)
        }
    }
}

export {inputOptions, Options, returnInput}