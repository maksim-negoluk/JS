import "../styles/structure.scss"
import "../styles/register.scss"

let formInfo = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

let getFormFields = form => {
    form.name = document.querySelector(".name-field").value;
    form.email = document.querySelector(".email-field").value;
    form.password = document.querySelector(".password-field").value;
    form.passwordConfirmation = document.querySelector(".password-confirmation-field").value;
}

// let getFormFields = formSelector => {
//     let array = [];
//     let form = document.querySelectorAll(formSelector)
//     console.log('form:', form[0])
//     form = form[0]
//     form.forEach(field => {
//         console.log('forEach:', field)
//         array.push(field.value)
//     })
//     console.log('array:', array)
//     return array
// }

let storeDataInLocalStorage = obj => {
    getFormFields(obj)
    Object.keys(obj).forEach(key => {
        window.localStorage.setItem(key, obj[key])
        console.log(window.localStorage.getItem(key))
    })
}

document.getElementById("registration-form").addEventListener("submit", function(event){
    event.preventDefault()
    storeDataInLocalStorage(formInfo)
});