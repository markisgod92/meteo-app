import { useState } from "react"
import { UnitsSwitch } from "../units switch/UnitsSwitch"
import { Container, Row, Col } from "react-bootstrap"
import { TemperatureComponent } from './temperature component/TemperatureComponent'
import { WindComponent } from "./wind component/WindComponents"
import { PrecipitationsComponent } from './precipitations component/PrecipitationsComponent'
import { PressureComponent } from "./pressure component/PressureComponent"
import { HumidityComponent } from "./humidity component/HumidityComponent"

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

            <Row className="g-3">
                <Col xs md={4} lg={3}>
                    <TemperatureComponent
                        metricUnits={metricUnits}
                        data={data}
                    />
                </Col>
                <Col xs md={4} lg={3}>
                    <WindComponent
                        metricUnits={metricUnits}
                        data={data}
                    />
                </Col>
                <Col xs md={4} lg={3}>
                    <PrecipitationsComponent
                        metricUnits={metricUnits}
                        data={data}
                    />
                </Col>
                <Col xs md={4} lg={3}>
                    <PressureComponent
                        metricUnits={metricUnits}
                        data={data}
                    />
                </Col>
                <Col xs md={4} lg={3}>
                    <HumidityComponent
                        metricUnits={metricUnits}
                        data={data}
                    />
                </Col>
            </Row>
        </Container>
    )
}