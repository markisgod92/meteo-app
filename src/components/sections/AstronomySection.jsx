import { useContext } from "react"
import { CelestialComponent } from "../cards/celestial component/CelestialComponent"
import { LunarPhaseComponent } from "../cards/lunar phase component/LunarPhaseComponent"
import { DataContext } from "../../context/DataContext"
import { Row, Col } from "react-bootstrap"

export const AstronomySection = () => {
    const { data } = useContext(DataContext)

    return (
        <Row className="pt-3 g-3">
            <Col
                xs={12}
                md={4}
                lg={4}
            >
                <CelestialComponent
                    title={'Sole'}
                    icon={'sun'}
                    riseTime={data.astronomy.sunrise}
                    setTime={data.astronomy.sunset}
                />
            </Col>
            <Col
                xs={12}
                md={4}
                lg={4}
            >
                <CelestialComponent
                    title={'Luna'}
                    icon={'moon'}
                    riseTime={data.astronomy.moonrise}
                    setTime={data.astronomy.moonset}
                />
            </Col>
            <Col
                xs
                md={4}
            >
                <LunarPhaseComponent
                    data={data}
                />
            </Col>
        </Row>
    )
}