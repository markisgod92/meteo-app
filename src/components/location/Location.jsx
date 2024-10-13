import { Col, Container, Row } from "react-bootstrap"
import { WeatherIcon } from "./weather icon/WeatherIcon"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { convertToItaDate, formatLat, formatLon } from "../../utilities/functions"
import { useTranslation } from "react-i18next"

export const Location = () => {
    const { data } = useContext(DataContext)
    const {t} = useTranslation()

    return (
        <section>
            <Container>
                <Row className="py-3 flex-column-reverse flex-md-row">
                    <Col xs={12} md={8}>
                        <WeatherIcon
                            isNight={!data.isDay}
                            conditionData={data.current.condition}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="text-end d-flex flex-column gap-1">
                            <h2>{data.location.name}</h2>
                            <h4>{data.location.region ? `${data.location.region} - `: ''}{data.location.country}</h4>
                            <p className="m-0">{formatLat(data.location.lat)} - {formatLon(data.location.lon)}</p>
                            <p className="m-0">{t('top.localDateTime')}: {convertToItaDate(data.localtime)}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}