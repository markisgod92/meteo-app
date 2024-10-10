import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const API_KEY = import.meta.env.VITE_API_KEY
    const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&aqi=yes&lang=it&q=`
    const astronomyURL = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&lang=it&q=`

    const fetchData = async (location) => {
        setLoading(true)

        try {
            const [forecastResponse, astronomyResponse] = await Promise.all([
                fetch(forecastURL + location),
                fetch(astronomyURL + location)
            ])

            const forecastData = await forecastResponse.json()
            const astronomyData = await astronomyResponse.json()

            const combinedData = {
                location: forecastData.location,
                localtime: forecastData.location.localtime,
                isDay: forecastData.current.is_day,
                current: forecastData.current,
                airQuality: forecastData.current.air_quality,
                today: forecastData.forecast.forecastday[0].hour,
                astronomy: astronomyData.astronomy.astro
            }

            console.log(combinedData)
            setData(combinedData)
        } catch (error) {
            console.error('Fetching error', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <DataContext.Provider
            value={{ data, fetchData, isLoading }}
        >
            { children }
        </DataContext.Provider>
    )
}