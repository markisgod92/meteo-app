import { Container, Row } from "react-bootstrap"

export const Footer = () => {
    return (
        <footer className="p-3 bg-secondary-subtle">
            <Container>
                <Row>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div>
                            Created by Marco Gusso © 2024
                        </div>
                        <div>
                            Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
                        </div>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}