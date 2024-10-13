import { useContext, useState } from "react"
import { Container, Form, Row, Button, Dropdown } from "react-bootstrap"
import { DataContext } from "../../context/DataContext"
import { useTranslation } from "react-i18next"

export const SearchBar = () => {
    const [cityInput, setCityInput] = useState('')
    const { searchCity, queriedCities, setQueriedCities, fetchData } = useContext(DataContext)
    const [debounceTimer, setDebounceTimer] = useState(null)
    const { t, i18n } = useTranslation()

    const debounceSearch = (inputValue) => {
        if (debounceTimer) {
            clearTimeout(debounceTimer)
        }

        const newTimer = setTimeout(() => {
            if (inputValue) {
                searchCity(inputValue)
            }
        }, 500)

        setDebounceTimer(newTimer)
    }


    const handleCityInput = (e) => {
        const value = e.target.value
        setCityInput(value)
        debounceSearch(value)
    }

    const showData = (value) => {
        setQueriedCities([])
        setCityInput('')
        fetchData(value)
    }

    return (
        <div className="order-3 order-md-2 col-12 col-md-auto flex-grow-1 position-relative">
            <Form.Control
                className="w-100"
                type="text"
                placeholder={t('top.searchCity')}
                value={cityInput}
                onChange={(e) => handleCityInput(e)}
            />

            {queriedCities.length !== 0 && (
                <Dropdown.Menu show className='position-absolute top-100 w-100 overflow-x-hidden overflow-y-scroll'>
                    {queriedCities.map((city, i) => (
                        <Dropdown.Item
                            key={i}
                            onClick={() => showData(city.url)}
                        >
                            <ul className="city-results d-flex gap-2 list-unstyled m-0 py-1">
                                <li>{city.name}</li>
                                {city.region && (
                                    <>
                                        <li>-</li>
                                        <li>{city.region}</li>
                                    </>
                                )}
                                <li>-</li>
                                <li>{city.country}</li>
                            </ul>

                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            )}
        </div>
    )
}