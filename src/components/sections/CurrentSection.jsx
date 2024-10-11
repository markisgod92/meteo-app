import { useContext } from "react"
import { Row, Col } from "react-bootstrap"
import { DataContext } from "../../context/DataContext"
import { TemperatureComponent } from '../cards/meteo data/temperature component/TemperatureComponent'
import { WindComponent } from "../cards/meteo data/wind component/WindComponents"
import { PrecipitationsComponent } from '../cards/meteo data/precipitations component/PrecipitationsComponent'
import { PressureComponent } from "../cards/meteo data/pressure component/PressureComponent"
import { HumidityComponent } from "../cards/meteo data/humidity component/HumidityComponent"
import { UvIndexComponent } from "../cards/meteo data/uvindex component/UvIndexComponent"
import { CloudComponent } from "../cards/meteo data/cloud coverage component/CloudComponent"
import { VisibilityComponent } from "../cards/meteo data/visibility component/VisibilityComponent"

export const CurrentSection = ({ metricUnits }) => {
    const { data } = useContext(DataContext)

    return (
        <Row className="pt-3 g-3">
            <Col xs={12} md={6} lg={3}>
                <TemperatureComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>
            <Col xs={12} md={6} lg={3}>
                <WindComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>
            <Col xs={6} md={4} lg={3}>
                <PrecipitationsComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>
            <Col xs={6} md={4} lg={3}>
                <PressureComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>
            <Col xs={12} md={4} lg={3}>
                <HumidityComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>
            <Col xs={12} md={4} lg={3}>
                <UvIndexComponent
                    data={data.current}
                />
            </Col>
            <Col xs={6} md={4} lg={3}>
                <CloudComponent
                    data={data.current}
                />
            </Col>
            <Col xs={6} md={4} lg={3}>
                <VisibilityComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>
        </Row>
    )
} 