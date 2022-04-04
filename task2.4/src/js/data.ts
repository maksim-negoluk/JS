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
        type: "text",
        name: "email",
        placeholder: "enter your email"
    },
    {
        type: "text",
        name: "date",
        placeholder: `enter date (format: ${new Date().toLocaleDateString('en-US')})`
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

interface formInputs {
    [firstName:string]:HTMLInputElement
    lastName:HTMLInputElement
    email:HTMLInputElement
    date:HTMLInputElement
    password:HTMLInputElement
    passwordConfirmation:HTMLInputElement
}

export {inputOptions, Options, formInputs}