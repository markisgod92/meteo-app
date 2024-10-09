import { useState, useContext } from "react"
import { UnitsSwitch } from "../units switch/UnitsSwitch"
import { Container, Row, Col } from "react-bootstrap"

import { CurrentSection } from "../sections/CurrentSection"
import { DataContext } from "../../context/DataContext"
import { ForecastData } from "../sections/ForecastData"
import { AstronomySection } from "../sections/AstronomySection"

export const MeteoData = () => {
    const [metricUnits, setMetricUnits] = useState(true)
    const { data } = useContext(DataContext)

    const switchUnits = () => {
        setMetricUnits(prev => !prev)
    }

    return (
        <Container>
            <Row className="py-3">
                <Col
                    xs
                    md={6}
                >
                    <div className="d-flex flex-wrap gap-2">
                        <div>Ultimo aggiornamento:</div>
                        <div>{data.current.last_updated}</div>
                    </div>
                </Col>
                <Col
                    xs
                    md={6}
                >
                    <div className="d-flex justify-content-end">
                        <UnitsSwitch
                            metricUnits={metricUnits}
                            switchUnitsFc={switchUnits}
                        />
                    </div>
                </Col>
            </Row>

            <CurrentSection metricUnits={metricUnits} />

            <ForecastData metricUnits={metricUnits} />

            <AstronomySection />
            
        </Container>
    )
}