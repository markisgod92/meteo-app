import { Col, Container, Row } from "react-bootstrap"
import { WeatherIcon } from "../weather icon/WeatherIcon"

export const Location = ({ isDarkMode, locationData, conditionData }) => {
    const formatLat = (lat) => {
        return lat > 0 ? `${lat} N` : `${lat.slice(1)} S`
    }

    const formatLon = (lon) => {
        return lon > 0 ? `${lon} E` : `${lon.slice(1)} W`
    }

    return (
        <section className={isDarkMode ? 'bg-dark text-white' : ''}>
            <Container>
                <Row className="py-3">
                    <Col xs={3}>
                        <WeatherIcon
                            isNight={isDarkMode}
                            conditionData={conditionData}
                        />
                    </Col>
                    <Col xs={9}>
                        <div className="text-end d-flex flex-column gap-3">
                            <h2>{locationData.name}</h2>
                            <h4>{locationData.region} - {locationData.country}</h4>
                            <p className="m-0">{formatLat(locationData.lat)} - {formatLon(locationData.lon)}</p>
                            <p className="m-0">Local Time: {locationData.localtime} - TZ: {locationData.tz_id}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}