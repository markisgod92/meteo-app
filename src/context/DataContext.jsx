import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
    const [queriedCities, setQueriedCities] = useState([])
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    console.log(queriedCities)
    // ricerca da searchbar imposta queriedCities

    const API_KEY = import.meta.env.VITE_API_KEY
    const searchURL = `http://api.weatherapi.com/v1//search.json?key=${API_KEY}&lang=it&q=`
    const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&lang=it&q=`
    const astronomyURL = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&lang=it&q=`

    const searchCity = async (query) => {
        try {
            const response = await fetch(searchURL + query)
            const data = await response.json()
            setQueriedCities(data)
        } catch (error) {
            console.error('Search city error', error)
        }
    }

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
            value={{ searchCity, data, fetchData, isLoading }}
        >
            { children }
        </DataContext.Provider>
    )
}