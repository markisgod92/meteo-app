import { useContext, useEffect, useState } from "react"
import { Location } from "../location/Location"
import { MeteoData } from "./MeteoData"
import { DataContext } from "../../context/DataContext"
import styles from '../../utilities/styles.json'
import { NavBar } from "../navbar/NavBar"

export const MeteoApp = () => {
    const { data, isLoading } = useContext(DataContext)

    const makeStyle = (timeOfDay, code) => {
        for (let condition of Object.keys(styles[timeOfDay])) {
            if (styles[timeOfDay][condition].includes(code)) {
                console.log(`${timeOfDay}-${condition}`)
                return `${timeOfDay}-${condition}`
            }
        }

        return 'n-a'
    }

    return (
        <>
            <NavBar />

            {data && (
                <div className={makeStyle(data.isDay ? 'day' : 'night', data.current.condition.code)}>
                    <Location />
                    <MeteoData />
                </div>
            )}
        </>
    )
}