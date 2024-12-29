import { Row, Col } from "react-bootstrap"
import airQualityLevels from '../../../../utilities/air-quality-levels.json'
import { useTranslation } from "react-i18next"

export const AirQualityComponent = ({ data }) => {
    const { t, i18n } = useTranslation()

    const getAirQualityLevel = (value, type) => {
        const levels = airQualityLevels[type]
        if (!levels) return "N/A"

        for (let i = 0; i < levels.length; i++) {
            if (value <= levels[i].maxValue) {
                return t(`airQuality.${levels[i].level}`)
            }
        }

        return "N/A"
    }

    const getEPAIndexLevel = (value) => {
        return t(`airQuality.${airQualityLevels.epa[value]}`) || 'N/A'
    }

    return (
        <Row className="py-3">
            <Col xs={12}>
                <div className="card-component rounded-4 p-4 d-flex flex-column gap-1">
                    <div className="d-flex gap-3 align-items-baseline">
                        <i className="bi bi-lungs fs-3"></i>
                        <h4>{t('airQuality.airQuality')}</h4>
                    </div>

                    <Row xs={1} md={2}>
                        <Col>
                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                                <div>{t('airQuality.co')}</div>
                                <div className="d-flex justify-content-end gap-3">
                                    <div>{data.co} μg/m3</div>
                                    <div>{getAirQualityLevel(data.co, 'co')}</div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                                <div>{t('airQuality.o3')}</div>
                                <div className="d-flex justify-content-end gap-3">
                                    <div>{data.no2} μg/m3</div>
                                    <div>{getAirQualityLevel(data.no2, 'no2')}</div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                                <div>{t('airQuality.no2')}</div>
                                <div className="d-flex justify-content-end gap-3">
                                    <div>{data.o3} μg/m3</div>
                                    <div>{getAirQualityLevel(data.o3, 'o3')}</div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                                <div>{t('airQuality.so2')}</div>
                                <div className="d-flex justify-content-end gap-3">
                                    <div>{data.so2} μg/m3</div>
                                    <div>{getAirQualityLevel(data.so2, 'so2')}</div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                                <div>PM2.5</div>
                                <div className="d-flex justify-content-end gap-3">
                                    <div>{data.pm2_5} μg/m3</div>
                                    <div>{getAirQualityLevel(data.pm2_5, 'pm2_5')}</div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                                <div>PM10</div>
                                <div className="d-flex justify-content-end gap-3">
                                    <div>{data.pm10} μg/m3</div>
                                    <div>{getAirQualityLevel(data.pm10, 'pm10')}</div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row xs={2}>
                        <Col>
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
                                <div>{t('airQuality.epaIndex')}</div>
                                <div className="fw-bold">{getEPAIndexLevel(data['us-epa-index'])}</div>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
                                <div>{t('airQuality.defraIndex')}</div>
                                <div className="fw-bold">{getAirQualityLevel(data['gb-defra-index'], 'defra')}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}