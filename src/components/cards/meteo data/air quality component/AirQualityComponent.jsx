import { Row, Col } from "react-bootstrap"
import airQualityLevels from '../../../../utilities/air-quality-levels.json'

export const AirQualityComponent = ({ data }) => {

    const getAirQualityLevel = (value, type) => {
        const levels = airQualityLevels[type]
        if (!levels) return "N/A"

        for (let i = 0; i < levels.length; i++) {
            if (value <= levels[i].maxValue) {
                return levels[i].level
            }
        }

        return "N/A"
    }

    const getEPAIndexLevel = (value) => {
        return airQualityLevels.epa[value] || 'N/A'
    }

    return (
        <Row className="card-component h-100 rounded-4 p-4 mt-3">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-lungs fs-3"></i>
                <h4>Qualità dell'aria</h4>
            </div>

            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Monossido di Carbonio</div>
                    <div className="d-flex justify-content-end gap-3">
                        <div>{data.co} μg/m3</div>
                        <div>{getAirQualityLevel(data.co, 'co')}</div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Ozono</div>
                    <div className="d-flex justify-content-end gap-3">
                        <div>{data.no2} μg/m3</div>
                        <div>{getAirQualityLevel(data.no2, 'no2')}</div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Diossido di Azoto</div>
                    <div className="d-flex justify-content-end gap-3">
                        <div>{data.o3} μg/m3</div>
                        <div>{getAirQualityLevel(data.o3, 'o3')}</div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Diossido di Zolfo</div>
                    <div className="d-flex justify-content-end gap-3">
                        <div>{data.so2} μg/m3</div>
                        <div>{getAirQualityLevel(data.so2, 'so2')}</div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>PM2.5</div>
                    <div className="d-flex justify-content-end gap-3">
                        <div>{data.pm2_5} μg/m3</div>
                        <div>{getAirQualityLevel(data.pm2_5, 'pm2_5')}</div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>PM10</div>
                    <div className="d-flex justify-content-end gap-3">
                        <div>{data.pm10} μg/m3</div>
                        <div>{getAirQualityLevel(data.pm10, 'pm10')}</div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div>Indice EPA (US)</div>
                    <div>{getEPAIndexLevel(data['us-epa-index'])}</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div>Indice DEFRA (UK)</div>
                    <div>{getAirQualityLevel(data['gb-defra-index'], 'defra')}</div>
                </div>
            </Col>
        </Row>
    )
}