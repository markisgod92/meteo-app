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
        <Row xs={2} lg={4} className="pt-3 g-3">
            <Col>
                <TemperatureComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>

            <Col>
                <WindComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>

            <Col>
                <PrecipitationsComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>

            <Col>
                <PressureComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>

            <Col>
                <HumidityComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>

            <Col>
                <UvIndexComponent
                    data={data.current}
                />
            </Col>

            <Col>
                <CloudComponent
                    data={data.current}
                />
            </Col>

            <Col>
                <VisibilityComponent
                    metricUnits={metricUnits}
                    data={data.current}
                />
            </Col>
        </Row>
    )
} 