import { useContext} from "react"
import { Location } from "../location/Location"
import { MeteoData } from "./MeteoData"
import { DataContext, DataContextProvider } from "../../context/DataContext"
import { SearchBar } from "../searchbar/SearchBar"

export const MeteoApp = () => {

    const { data, fetchData, isLoading } = useContext(DataContext)

    return (
        <>
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