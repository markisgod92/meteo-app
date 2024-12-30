import { useContext, useRef, useState } from "react"
import { Container, Form, Row, Button, Dropdown, Spinner } from "react-bootstrap"
import { DataContext } from "../../context/DataContext"
import { useTranslation } from "react-i18next"

export const SearchBar = () => {
    const [cityInput, setCityInput] = useState('')
    const [isExpanded, setExpanded] = useState(false)
    const { searchCity, queriedCities, setQueriedCities, isLoadingCities, isSearchFailed, fetchData } = useContext(DataContext)
    const blurTimer = useRef(null)
    const [debounceTimer, setDebounceTimer] = useState(null)
    const { t } = useTranslation()

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

    const handleFocus = () => setExpanded(true)

    const handleBlur = () => {
        if(blurTimer.current) {
            clearTimeout(blurTimer.current)
        }

        blurTimer.current = setTimeout(() => {
            setQueriedCities([])
            setExpanded(false)
        }, 100)
    }

    const handleCityInput = (e) => {
        const value = e.target.value
        setCityInput(value)
        debounceSearch(value)
    }

    const showData = (value) => {
        fetchData(value)
        setQueriedCities([])
        setCityInput('')
    }

    return (
        <div className="w-100 position-relative">
            <Form.Control
                className="w-100"
                type="text"
                placeholder={t('top.searchCity')}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={cityInput}
                onChange={(e) => handleCityInput(e)}
                autoComplete='off'
            />

            {isExpanded && (
                <>
                    <Dropdown.Menu show className='position-absolute top-100 w-100 overflow-x-hidden overflow-y-scroll'>
                        {isLoadingCities && !isSearchFailed &&(
                            <Spinner animation="border" size="sm" role="status" className='ms-3' variant="primary"/>
                        )}

                        {!isLoadingCities && isSearchFailed && (
                            <span className="p-3">{t('utils.error')}</span>
                        )}

                        {!isLoadingCities && !isSearchFailed && queriedCities && queriedCities.map((city, i) => (
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
                </>
            )}
        </div>
    )
}