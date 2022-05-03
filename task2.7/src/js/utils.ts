const removeAllChildElements = (element:Element):void => {
    while(element.hasChildNodes()){
        element.lastChild.remove()
    }
}

const toggleDarkMode = ():void => {
    const elements = document.querySelectorAll(".wrapper")
    elements.forEach(element => {
        if(element.classList.contains("dark-theme")) {
            element.classList.replace("dark-theme","light-theme")
        }
        else {
            element.classList.replace("light-theme","dark-theme")
        }
    })
}

export {removeAllChildElements, toggleDarkMode}