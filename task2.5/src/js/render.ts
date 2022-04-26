import {processWeatherData, WeatherResponseObject, SingleDayWeatherInfo} from "./data";

const renderObtainWeatherData = async ():Promise<void> => {
    const data = await processWeatherData()
    await render(data)
}

const renderSearchBar = async ():Promise<HTMLFormElement> => {
    const searchBar = document.createElement("form")
    searchBar.id = "search-form"
    searchBar.addEventListener("submit", event => {
        event.preventDefault()
        renderObtainWeatherData()
    })
    searchBar.innerHTML = `<input class="search-bar" type="search" placeholder="enter city...">`
    return searchBar
}

const renderSearchedCity = (location:string):HTMLParagraphElement => {
    const searchedCity = document.createElement("p")
    searchedCity.innerHTML = `Selected: <span class="selected-city">${location}</span>`
    return searchedCity
}

const renderSearchBlock = async (location:string = "enter city name"):Promise<HTMLDivElement> => {
    const searchBlock = document.createElement("div")
    searchBlock.className = "search-block"
    searchBlock.insertAdjacentElement("beforeend", await renderSearchBar())
    searchBlock.insertAdjacentElement("beforeend", renderSearchedCity(location))
    return searchBlock
}

const renderCurrentInfo = (tilesData:SingleDayWeatherInfo):HTMLDivElement => {
    const tile = document.createElement("div")
    tile.className = "tile"
    tile.innerHTML = `
            <div>
              <p class="temperature">${tilesData.currentData.temperature}&degC</p>
              <p class="feels-like-temperature">feels like ${tilesData.currentData.feels_likeTemperature}&degC</p>
            </div>
            <div>
              <p class="description">${tilesData.currentData.description}</p>
              <p class="city">${tilesData.currentData.location}</p>
            </div>
            <div>
              <img src="${tilesData.currentData.icon}" alt=${tilesData.currentData.description}>
            </div>`
    return tile
}

const renderDailyInfo = (tilesData:SingleDayWeatherInfo):HTMLDivElement => {
    const tile = document.createElement("div")
    tile.className = "tile"
    tile.innerHTML = `
            <p class="day">${tilesData.dailyData.day}</p>
            <img src="${tilesData.dailyData.icon}" alt=${tilesData.currentData.description}>
            <p class="description">${tilesData.dailyData.description}</p>
            <div>
              <p class="temperature">${tilesData.dailyData.maxTemperature}&degC</p>
              <p class="feels-like-temperature">${tilesData.dailyData.minTemperature}&degC</p>
            </div>`
    return tile
}

const renderWeatherDisplay = (tilesData:WeatherResponseObject):HTMLDivElement => {
    const displayBlock = document.createElement("div")
    displayBlock.className = "weather-display"
    tilesData.weatherData.forEach((tile:any) => {
        (tilesData.weatherData.indexOf(tile) === 0) && displayBlock.insertAdjacentElement("beforeend", renderCurrentInfo(tile));
        displayBlock.insertAdjacentElement("beforeend", renderDailyInfo(tile))
    })
    return displayBlock
}

const renderWeatherWidget = async (weatherData:WeatherResponseObject = null):Promise<HTMLDivElement> => {
    const weatherWidget = document.createElement("div")
    weatherWidget.className = "weather-widget";
    (document.querySelector(".weather-widget") && (document.querySelector(".weather-widget").remove()))
    if(weatherData) {
        weatherWidget.insertAdjacentElement("beforeend", await renderSearchBlock(weatherData.weatherData[0].currentData.location))
        weatherWidget.insertAdjacentElement("beforeend", renderWeatherDisplay(weatherData))
    }
    else {
        weatherWidget.insertAdjacentElement("beforeend", await renderSearchBlock())
    }
    return weatherWidget
}

const render = async (dataObject:WeatherResponseObject = null):Promise<void> => {
    document.querySelector(".wrapper").insertAdjacentElement("afterbegin", await renderWeatherWidget(dataObject))
}

export {render}