import {getWeatherData} from "./request";
import {kelvinToCelsius} from "./utils";

const processWeatherData = async () => {
    const generalWeatherData = await getWeatherData()
    const currentWeatherData = generalWeatherData.list[0]
    const dailyWeatherData = generalWeatherData.list.filter((element:any) => {
        return generalWeatherData.list.indexOf(element) % 8 == 0
    })
    return {
            weatherData: dailyWeatherData.map((element:any) => {
                return {
                    currentData: {
                        city: generalWeatherData.city.name,
                        country: generalWeatherData.city.country,
                        feels_likeTemperature: Math.round(kelvinToCelsius(currentWeatherData.main.feels_like)),
                        temperature: Math.round(kelvinToCelsius(currentWeatherData.main.temp)),
                        description: currentWeatherData.weather[0].description,
                        icon: `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`
                    },
                    dailyData: {
                        day: new Date(element.dt_txt).toString().split(" ")[0],
                        minTemperature: Math.round(kelvinToCelsius(element.main.temp_min)),
                        maxTemperature: Math.round(kelvinToCelsius(element.main.temp_max)),
                        description: element.weather[0].description,
                        icon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
                    }
                }
            })
    }
}

export {processWeatherData}