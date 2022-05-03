interface countryInfo {
    name:string,
    population:number
    region:string
    capital:string
    flag: string,
}

const getCountriesInfo = ():Promise<countryInfo[]> => {
    return fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(response => {return response})
}

const getCountryInfo = (country:string):Promise<countryInfo[]> => {
    return fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json()).then(response => {return response})
}

const parseCountryInfo = async (country:any):Promise<countryInfo> => {
    const countryInfo = await country
    return {
        name: countryInfo.name.common,
        population: countryInfo.population,
        region: countryInfo.region,
        capital: countryInfo.capital,
        flag: countryInfo.flags.svg,
    }
}

export {countryInfo, parseCountryInfo, getCountriesInfo, getCountryInfo}