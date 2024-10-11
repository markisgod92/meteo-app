import { useContext, useEffect, useState} from "react"
import { Location } from "../location/Location"
import { MeteoData } from "./MeteoData"
import { DataContext } from "../../context/DataContext"
import { SearchBar } from "../searchbar/SearchBar"
import weatherColors from '../../utilities/weathercolors.json'

export const MeteoApp = () => {
    const { data, fetchData, isLoading } = useContext(DataContext)
    const [style, setStyle] = useState({})

    function getWeatherStyle(isDaytime, weatherCondition) {
        const timeOfDay = isDaytime ? 'day' : 'night'
        setStyle(weatherColors[timeOfDay][weatherCondition] || weatherColors[timeOfDay].clear)
    }

    useEffect(() => {
        if (data) getWeatherStyle(data.isDay, data.current.condition.text)
    }, [data])

    return (
        <>
            <SearchBar />

            {data && (
                <div style={{ backgroundColor: style.background, color: style.accent }}>
                    <Location />
                    <MeteoData />

                </div>
            )}
        </>
    )
}