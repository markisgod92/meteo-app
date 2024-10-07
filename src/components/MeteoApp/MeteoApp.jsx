import { useState } from "react"
import { Button } from "react-bootstrap"
import { Location } from "../location/Location"
import { MeteoData } from "../meteo data/MeteoData"

export const MeteoApp = () => {
    const [weatherData, setWeatherData] = useState({})
    const [isNight, setIsNight] = useState(false)

    const API_KEY = import.meta.env.VITE_API_KEY
    const currentWeatherURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=it`

    const getData = async (location) => {
        try {
            const response = await fetch(currentWeatherURL + '&q=' + location)
            const data = await response.json()
            console.log(data)
            setWeatherData(data)
            setIsNight(data.current.is_day === 0 ? true : false)
        } catch (error) {
            console.error('Fetch error', error)
        }
    }

    return (
        <>
            <Button onClick={() => getData('jesolo')}>fetch</Button>
            {weatherData.location && weatherData.current && (
                <>
                    <Location
                        isDarkMode={isNight}
                        locationData={weatherData.location}
                        conditionData={weatherData.current.condition}
                    />
                    <MeteoData 
                        data={weatherData.current}
                    />
                </>
            )}
        </>
    )
}