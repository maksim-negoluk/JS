import {countryInfo, getCountriesInfo, parseCountryInfo, getCountryInfo} from "./data";
import {removeAllChildElements, toggleDarkMode} from "./utils";

const render = async ():Promise<void> => {
    const wrapper = document.querySelector(".wrapper")
    wrapper.classList.add("light-theme")
    const countriesResponse:countryInfo[] = await getCountriesInfo()
    const countries:countryInfo[] = await Promise.all(countriesResponse.map((country:countryInfo):Promise<countryInfo> => {
        return parseCountryInfo(country)
    }))
    await Promise.all(countries.sort((country:any, nextCountry:any):number => {
            return country.name.localeCompare(nextCountry.name)
        })
    )
    wrapper.insertAdjacentElement("beforeend", renderTitleBlock(countries))
    wrapper.insertAdjacentElement("beforeend", await renderMainBlock(countries))
}



const renderTitleBlock = (countries:countryInfo[]):HTMLDivElement => {
    const titleBlock:HTMLDivElement = document.createElement("div")
    titleBlock.className = "title-block"
    titleBlock.insertAdjacentElement("beforeend", renderTitle(countries))
    titleBlock.insertAdjacentElement("beforeend", renderDarkModeToggle())
    return titleBlock
}

const renderTitle = (countries:countryInfo[]):HTMLSpanElement => {
    const title = document.createElement("span")
    title.className = "title"
    title.innerHTML = "Where in the world?"
    title.addEventListener("click", async (event):Promise<void> => {
        await renderCountryList(countries, true)
    })
    return title
}

const renderDarkModeToggle = ():HTMLButtonElement => {
    const toggle = document.createElement("button")
    toggle.className = "dark-mode-toggle"
    toggle.innerHTML = `<div class="moon"></div><span>dark mode</span>`
    toggle.addEventListener("click", (event):void => {
        toggleDarkMode()
    })
    return toggle
}



const renderMainBlock = async (countries:countryInfo[]):Promise<HTMLDivElement> => {
    const mainBlock = document.createElement("div")
    mainBlock.className = "main-block"
    mainBlock.insertAdjacentElement("beforeend", await renderSearchBlock(countries))
    mainBlock.insertAdjacentElement("beforeend", await renderCountryList(countries))
    return mainBlock
}

const renderSearchBlock = async (countries:countryInfo[]):Promise<HTMLDivElement> => {
    const searchBlock = document.createElement("div")
    searchBlock.className = "search-block"
    const regions:string[] = countries.map((country:countryInfo):string => {
        return country.region
    })
    searchBlock.insertAdjacentElement("beforeend", await renderSearchBar())
    searchBlock.insertAdjacentElement("beforeend", renderSelect(countries,[...new Set(regions)]))
    return searchBlock
}

const renderSearchBar = async ():Promise<HTMLFormElement> => {
    const form = document.createElement("form")
    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.className = "search-bar"
    searchBar.placeholder = "Search for a country..."

    form.addEventListener("submit", async (event):Promise<void> => {
        event.preventDefault()
        const errorMessage = document.querySelector(".error-message");
        (errorMessage !== null) && (errorMessage.remove())
        try {
            const countryInfo:countryInfo[] = await getCountryInfo(searchBar.value)
            const parsedCountryInfo:countryInfo[] = await Promise.all(countryInfo.map((country:countryInfo) => {
                return parseCountryInfo(country)
            }))
            await renderCountryList(parsedCountryInfo, true)
        }
        catch (error) {
            form.insertAdjacentElement("beforeend", renderSearchError("invalid country"))
        }
    })

    form.insertAdjacentElement("beforeend", searchBar)
    return form
}

const renderSearchError = (errorMessage:string):HTMLSpanElement => {
    const error = document.createElement("span")
    error.className = "error-message"
    error.innerHTML = `error: ${errorMessage}`
    return error
}

const renderSelect = (countries:countryInfo[], options:string[]):HTMLSelectElement => {
    const select = document.createElement("select")
    select.className = "select-by-region"
    select.insertAdjacentHTML("beforeend", `<option value="default option" selected disabled hidden>filter by region</option>`)
    select.addEventListener("change", async (event):Promise<void> => {
        const countriesInRegion:countryInfo[] = countries.filter((country:countryInfo):boolean => {
            return country.region === select.value
        })
        await renderCountryList(countriesInRegion, true)
    })
    options.forEach(option => {
        select.insertAdjacentHTML("beforeend", `<option value="${option}">${option}</option>`)
    })
    return select
}

const renderCountryList = async (countries:countryInfo[], replace = false):Promise<HTMLDivElement> => {
    const oldCountryList = document.querySelector(".country-list")
    const countriesList = document.createElement("div")
    countriesList.className = "country-list";
    (replace) && (removeAllChildElements(oldCountryList))
    for (const country of countries) {
        (oldCountryList === null) && (countriesList.insertAdjacentElement("beforeend", renderCountry(country)));
        (oldCountryList !== null) && (oldCountryList.insertAdjacentElement("beforeend", renderCountry(country)))
    }
    return countriesList
}

const renderCountry = (country:countryInfo):HTMLDivElement => {
    if(country.capital === undefined) {
        country.capital = "none"
    }
    const countryBlock = document.createElement("div")
    countryBlock.className = "country"
    countryBlock.innerHTML = `
            <img src="${country.flag}" alt="flag">
            <p class="name">${country.name}</p>
            <p class="population"><span>Population:</span>${country.population.toLocaleString("en-US")}</p>
            <p class="region"><span>Region:</span>${country.region}</p>
            <p class="capital"><span>Capital:</span>${country.capital}</p>`
    return countryBlock
}

export {render}