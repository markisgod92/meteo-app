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
                md={6}
                lg={4}
            >
                <CelestialComponent
                    title={'Sole'}
                    icon={'sun'}
                    riseTime={data.astronomy.sunrise}
                    setTime={data.astronomy.sunset}
                    isUp={data.astronomy.is_sun_up}
                    currentTime={data.localtime}
                />
            </Col>
            <Col
                xs={12}
                md={6}
                lg={4}
            >
                <CelestialComponent
                    title={'Luna'}
                    icon={'moon'}
                    riseTime={data.astronomy.moonrise}
                    setTime={data.astronomy.moonset}
                    isUp={data.astronomy.is_moon_up}
                    currentTime={data.localtime}
                />
            </Col>
            <Col
                xs
                md={4}
            >
                <LunarPhaseComponent
                    data={data.astronomy}
                />
            </Col>
        </Row>
    )
}