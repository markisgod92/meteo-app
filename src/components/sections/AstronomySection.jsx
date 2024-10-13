import { useContext } from "react"
import { CelestialComponent } from "../cards/celestial component/CelestialComponent"
import { LunarPhaseComponent } from "../cards/lunar phase component/LunarPhaseComponent"
import { DataContext } from "../../context/DataContext"
import { Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"

export const AstronomySection = () => {
    const { data } = useContext(DataContext)
    const {t} = useTranslation()

    return (
        <Row className="pt-3 g-3">
            <Col
                xs={12}
                md={4}
                lg={4}
            >
                <CelestialComponent
                    title={t('astronomy.sun')}
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
                    title={t('astronomy.moon')}
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