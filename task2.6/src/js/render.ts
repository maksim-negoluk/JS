import {getCookieString, convertCookieStringToDataObject, CookieData, clearCookies, redactCookie, removeAllChildElements} from "./utils";

const checkmarkIcon = require("../img/check.png")
const deleteIcon = require("../img/delete.png")

const render = ():void => {
    const wrapper = document.querySelector(".wrapper")
    wrapper.insertAdjacentElement("afterbegin", renderTodoList())
}

const renderTodoList = ():HTMLDivElement => {
    const todoList = document.createElement("div")
    todoList.className = "todo"
    todoList.insertAdjacentElement("beforeend", renderTitle())
    todoList.insertAdjacentElement("beforeend", renderInputBlock())
    todoList.insertAdjacentElement("beforeend", renderTodoItemsBlock(convertCookieStringToDataObject(document.cookie)))
    todoList.insertAdjacentElement("beforeend", renderClearItemsButton())
    return todoList
}

const renderTitle = ():HTMLParagraphElement => {
    const title = document.createElement("p")
    title.className = "title"
    title.innerHTML = `Grocery Bud`
    return title
}

const renderInputBlock = ():HTMLDivElement => {
    const addBlock = document.createElement("div")
    addBlock.className = "add-block"
    const input = renderInput()
    addBlock.insertAdjacentElement("beforeend", input)
    addBlock.insertAdjacentElement("beforeend", renderSubmitButton(input))
    return addBlock
}

const renderInput = ():HTMLInputElement => {
    const input:HTMLInputElement = document.createElement("input")
    input.type = "text"
    input.id = "add-todo-bar"
    input.placeholder = "e.g. eggs"
    return input
}

const renderSubmitButton = (associatedInput:HTMLInputElement):HTMLLabelElement => {
    const button:HTMLLabelElement = document.createElement("label")
    button.htmlFor = associatedInput.id
    button.className = "add-todo-button"
    button.innerHTML = "add"
    button.addEventListener("click", () => {
        const cookieString = getCookieString(1, associatedInput.value)
        document.cookie = cookieString
        const cookieData = convertCookieStringToDataObject(cookieString)
        const todoItem = renderTodoItem(cookieData.cookieId[0], cookieData.cookieValues[0])
        associatedInput.value = ""
        document.querySelector(".todo-items-block").insertAdjacentElement("afterbegin", todoItem)
    })
    return button
}

const renderTodoItemsBlock = (cookieData:CookieData):HTMLDivElement => {
    const todoItemsBlock = document.createElement("div")
    todoItemsBlock.className = "todo-items-block";
    if(cookieData.cookieValues != null) {
        for(let i = 0; i < cookieData.cookieValues.length; i++)
            todoItemsBlock.insertAdjacentElement("afterbegin", renderTodoItem(cookieData.cookieId[i], cookieData.cookieValues[i])
            )
    }
    return todoItemsBlock
}

const renderTodoItem = (taskId:string, taskText:string):HTMLDivElement => {
    const todoItem = document.createElement("div")
    todoItem.className = "todo-item"
    todoItem.innerHTML = `${taskText}`
    todoItem.insertAdjacentElement("beforeend", renderDeleteButton(taskId))
    todoItem.insertAdjacentElement("beforeend", renderCheckmarkButton())
    return todoItem
}

const renderDeleteButton = (taskId:string):HTMLImageElement => {
    const deleteButton:HTMLImageElement = document.createElement("img")
    deleteButton.src = deleteIcon
    deleteButton.alt = "delete"
    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.remove()
        console.log(redactCookie(`${taskId}`, ``, "Thu, 01 Jan 1970 00:00:00 UTC"))
    })
    return deleteButton
}

const renderCheckmarkButton = ():HTMLImageElement => {
    const checkmarkButton:HTMLImageElement = document.createElement("img")
    checkmarkButton.src = checkmarkIcon
    checkmarkButton.alt = "checkmark"
    checkmarkButton.addEventListener("click", () => {
        const defaultTextColor = "#2b3f46"
        if(checkmarkButton.parentElement.style.color !== "green") {
            checkmarkButton.parentElement.style.color = "green"
            checkmarkButton.parentElement.style.textDecoration = "line-through"
        }
        else {
            checkmarkButton.parentElement.style.color = `${defaultTextColor}`
            checkmarkButton.parentElement.style.textDecoration = "none"
        }
    })
    return checkmarkButton
}

const renderClearItemsButton = ():HTMLButtonElement => {
    const clearItemsButton = document.createElement("button")
    clearItemsButton.className = "clear-items"
    clearItemsButton.innerHTML = `Clear Items`
    clearItemsButton.addEventListener("click", () => {
        removeAllChildElements(".todo-items-block")
        clearCookies()
    })
    return clearItemsButton
}

export {render}