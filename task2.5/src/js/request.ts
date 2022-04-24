const apiKey = "932ff99daebcbcc5210bf937f07069a4"

const requestWeatherData = async (city:string) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    const fetchedResult = await fetch(url)
    return await fetchedResult.json()
}

const getWeatherData = async () => {
    const searchBar: HTMLInputElement = document.querySelector(".search-bar")
    const targetCity: string = searchBar.value
    return await requestWeatherData(targetCity)
}

export {getWeatherData}