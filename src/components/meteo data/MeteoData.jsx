import { useState } from "react"
import { UnitsSwitch } from "../units switch/UnitsSwitch"
import { Container, Row, Col } from "react-bootstrap"

export const MeteoData = ({ data }) => {
    const [metricUnits, setMetricUnits] = useState(true)

    const switchUnits = () => {
        setMetricUnits(prev => !prev)
    }

    return (
        <Container>
            <Row className="py-3">
                <div className="d-flex justify-content-end">
                    <UnitsSwitch
                        metricUnits={metricUnits}
                        switchUnitsFc={switchUnits}
                    />
                </div>
            </Row>

            <Row>
                <Col>
                    <Row>
                        <h4>Wind</h4>
                    </Row>
                    <Row>
                        <div className="d-flex flex-column gap-2">
                            <div>Speed: {metricUnits ? `${data.wind_kph} km/h` : `${data.wind_mph} mph`}</div>
                            <div>Direction: {data.wind_dir} {`(${data.wind_degree}°)`}</div>
                            <div>Gusts: {metricUnits ? `${data.gust_kph} km/h` : `${data.gust_mph} mph`}</div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}