import { Col, Container, Row } from "react-bootstrap"
import { WeatherIcon } from "./weather icon/WeatherIcon"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { convertToItaDate, formatLat, formatLon } from "../../utilities/functions"

export const Location = () => {
    const { data } = useContext(DataContext)

    return (
        <section className={!data.isDay ? 'bg-dark text-white' : ''}>
            <Container>
                <Row className="py-3">
                    <Col xs={3}>
                        <WeatherIcon
                            isNight={!data.isDay}
                            conditionData={data.current.condition}
                        />
                    </Col>
                    <Col xs={9}>
                        <div className="text-end d-flex flex-column gap-3">
                            <h2>{data.location.name}</h2>
                            <h4>{data.location.region} - {data.location.country}</h4>
                            <p className="m-0">{formatLat(data.location.lat)} - {formatLon(data.location.lon)}</p>
                            <p className="m-0">Data e ora locali: {convertToItaDate(data.localtime)}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}