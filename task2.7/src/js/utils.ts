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

const loadingImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            const lazyImage:any = entry.target
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove("loading")
            loadingImageObserver.unobserve(lazyImage)
        }
    })
})

const observeImages = () => {
    const loadingImages:NodeListOf<HTMLImageElement> = document.querySelectorAll(".loading")
    loadingImages.forEach((loadingImage) => {
        loadingImageObserver.observe(loadingImage)
    })
}

export {removeAllChildElements, toggleDarkMode, observeImages}