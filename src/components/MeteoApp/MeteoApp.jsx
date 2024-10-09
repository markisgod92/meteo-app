import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { Location } from "../location/Location"
import { MeteoData } from "./MeteoData"
import { DataContext, DataContextProvider } from "../../context/DataContext"
import { SearchBar } from "../searchbar/SearchBar"

export const MeteoApp = () => {

    const { data, fetchData, isLoading } = useContext(DataContext)

    return (
        <>
            <Button onClick={() => fetchData('jesolo')}>
                fetch
            </Button>

            <SearchBar />

            {data && (
                <>
                    <Location />
                    <MeteoData />

                </>
            )}
        </>
    )
}