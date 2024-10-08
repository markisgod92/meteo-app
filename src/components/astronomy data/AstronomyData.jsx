import { Container, Row, Col } from "react-bootstrap"
import { CelestialComponent } from "./celestial component/CelestialComponent"
import { LunarPhaseComponent } from "./lunar phase component/LunarPhaseComponent"

export const AstronomyData = ({ time, data }) => {
    return (
        <Container>
            <Row className="mt-3 g-3">
                <Col
                    xs={12}
                    md={6}
                    lg={4}
                >
                    <CelestialComponent
                        title={'Sole'}
                        icon={'sun'}
                        riseTime={data.sunrise}
                        setTime={data.sunset}
                        isUp={data.is_sun_up}
                        currentTime={time}
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
                        riseTime={data.moonrise}
                        setTime={data.moonset}
                        isUp={data.is_moon_up}
                        currentTime={time}
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
        </Container>
    )
}