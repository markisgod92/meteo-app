import { useState } from "react"
import { Button } from "react-bootstrap"
import { Location } from "../location/Location"
import { MeteoData } from "../meteo data/MeteoData"
import { AstronomyData } from "../astronomy data/AstronomyData"

export const MeteoApp = () => {
    const [weatherData, setWeatherData] = useState({})
    const [astronomyData, setAstronomyData] = useState({})
    const [isNight, setIsNight] = useState(false)

    const API_KEY = import.meta.env.VITE_API_KEY
    const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&lang=it`
    const astronomyURL = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&lang=it`

    const getData = async (location) => {
        try {
            const response = await fetch(forecastURL + '&q=' + location)
            const data = await response.json()
            console.log(data.forecast.forecastday[0].hour)
            setWeatherData(data)
            setIsNight(data.current.is_day === 0 ? true : false)
        } catch (error) {
            console.error('Weather fetch error', error)
        }
    }

    const getAstronomyData = async (location) => {
        try {
            const response = await fetch(astronomyURL + '&q=' + location)
            const data = await response.json()
            setAstronomyData(data)
        } catch (error) {
            console.error('Astronomy fetch error', error)
        }
    }

    return (
        <>
            <Button onClick={() => {
                getData('jesolo')
                getAstronomyData('jesolo')
            }}>
                fetch
            </Button>

            {weatherData.location && weatherData.current && weatherData.forecast && (
                <>
                    <Location
                        isDarkMode={isNight}
                        locationData={weatherData.location}
                        conditionData={weatherData.current.condition}
                    />
                    <MeteoData
                        data={weatherData.current}
                        forecastData={weatherData.forecast.forecastday[0].hour}
                    />
                    
                </>
            )}

            {astronomyData.location && astronomyData.astronomy.astro && <AstronomyData time={astronomyData.location.localtime} data={astronomyData.astronomy.astro}/>}
        </>
    )
}