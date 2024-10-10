import { useContext, useState } from "react"
import { Container, Form, Row, Button, Dropdown } from "react-bootstrap"
import { DataContext } from "../../context/DataContext"

export const SearchBar = () => {
    const [cityInput, setCityInput] = useState('')
    const { searchCity, queriedCities, setQueriedCities, fetchData } = useContext(DataContext)
    const [debounceTimer, setDebounceTimer] = useState(null)

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
        <nav className="py-4 px-2">
            <Container>
                <Row className="position-relative">
                        <Form.Control
                        className="w-100"
                            type="text"
                            placeholder="Cerca una città..."
                            value={cityInput}
                            onChange={(e) => handleCityInput(e)}
                        />

                        {queriedCities.length !== 0 && (
                            <Dropdown.Menu show className='position-absolute top-100 w-100'>
                                {queriedCities.map((city, i) => (
                                    <Dropdown.Item
                                        key={i}
                                        onClick={() => showData(city.url)}
                                    >
                                        <ul className="city-results d-flex gap-2 list-unstyled m-0 py-1">
                                            <li>{city.name}</li>
                                            <li>-</li>
                                            <li>{city.region}</li>
                                            <li>-</li>
                                            <li>{city.country}</li>
                                        </ul>
                                        
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        )}
                </Row>
            </Container>
        </nav>
    )
}