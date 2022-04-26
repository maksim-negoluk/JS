const checkmarkImage = require("../img/check.png")
const deleteImage = require("../img/delete.png")

const items:string[] = ["milk", "Oil", "Chocolate"]

const renderTitle = () => {
    const title = document.createElement("p")
    title.className = "title"
    title.innerHTML = `Grocery Bud`
    return title
}

const renderAddBlock = () => {
    const addBlock = document.createElement("div")
    addBlock.className = "add-block"
    addBlock.innerHTML = `
    <input type="text" id="add-todo-bar" placeholder="e.g. eggs">
    <label for="add-todo-bar" class="add-todo-button">add</label>
`
    return addBlock
}

const renderTodoItem = (task:string) => {
    const todoItem = document.createElement("div")
    todoItem.className = "todo-item"
    todoItem.innerHTML = `
        ${task}
        <img src="${deleteImage}" alt="delete">
        <img src="${checkmarkImage}" alt="check">`
    return todoItem
}

const renderTodoItemsBlock = (items:string[]) => {
    const todoItemsBlock = document.createElement("div")
    todoItemsBlock.className = "todo-items-block"
    items.forEach(items => {
        todoItemsBlock.insertAdjacentElement("afterbegin", renderTodoItem(items))
    })
    return todoItemsBlock
}

const renderClearItemsButton = () => {
    const clearItemsButton = document.createElement("button")
    clearItemsButton.className = "clear-items"
    clearItemsButton.innerHTML = `Clear Items`
    return clearItemsButton
}

const renderTodoList = ():HTMLDivElement => {
    const todoList = document.createElement("div")
    todoList.className = "todo"
    todoList.insertAdjacentElement("beforeend", renderTitle())
    todoList.insertAdjacentElement("beforeend", renderAddBlock())
    todoList.insertAdjacentElement("beforeend", renderTodoItemsBlock(items))
    todoList.insertAdjacentElement("beforeend", renderClearItemsButton())
    return todoList
}

const render = ():void => {
    const wrapper = document.querySelector(".wrapper")
    wrapper.insertAdjacentElement("afterbegin", renderTodoList())
}

export {render}