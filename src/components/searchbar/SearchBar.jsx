import { useContext, useState } from "react"
import { Container, Form, Row, Button } from "react-bootstrap"
import { DataContext } from "../../context/DataContext"

export const SearchBar = () => {
    const [cityInput, setCityInput] = useState('')
    const { searchCity } = useContext(DataContext)

    const handleCityInput = (e) => {
        setCityInput(e.target.value)
    }

    return (
        <nav className="py-4">
            <Container>
                <Row>
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <Form.Control
                            type="text"
                            placeholder="Cerca una città..."
                            value={cityInput}
                            onChange={(e) => handleCityInput(e)}
                        />
                        <Button
                            variant='primary'
                            onClick={() => searchCity(cityInput)}
                        >
                            Cerca
                        </Button>
                    </div>
                </Row>
            </Container>
        </nav>
    )
}