import { useContext } from "react"
import { UnitsSwitch } from "../units switch/UnitsSwitch"
import { Container, Row, Col } from "react-bootstrap"
import { CurrentSection } from "../sections/CurrentSection"
import { DataContext } from "../../context/DataContext"
import { ForecastData } from "../sections/ForecastData"
import { AstronomySection } from "../sections/AstronomySection"
import { AirQualityComponent } from "../cards/meteo data/air quality component/AirQualityComponent"
import { AlertSection } from "../sections/AlertSection"
import { useTranslation } from "react-i18next"

export const MeteoData = () => {
    const { data, metricUnits } = useContext(DataContext)
    const {t} = useTranslation()

    return (
        <Container>
            <Row className="py-3">
                <Col
                    xs
                    md={6}
                >
                    <div className="d-flex flex-wrap gap-2">
                        <div>{t('top.lastUpdate')}:</div>
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
                        />
                    </div>
                </Col>
            </Row>

            {data.alerts.length > 0 && (
                <AlertSection />
            )}
            
            <CurrentSection metricUnits={metricUnits} />

            <ForecastData metricUnits={metricUnits} />

            <AstronomySection />

            <AirQualityComponent data={data.current.air_quality}/>
            
        </Container>
    )
}