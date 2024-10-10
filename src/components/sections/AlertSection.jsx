import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { Row, Col } from "react-bootstrap"
import { convertToItaDate } from "../../utilities/functions"

export const AlertSection = () => {
    const { data } = useContext(DataContext)

    return (
        <Row className="h-100 border border-1 border-dark rounded-4 p-4 mt-3">
            <Col xs={12}>
                <div className="d-flex gap-3 align-items-baseline">
                    <i className="bi bi-exclamation-diamond fs-3"></i>
                    <h4>Allerte meteo</h4>
                </div>
            </Col>
            <Row className="px-3 pt-3">
                {data.alerts.map((alert, i) => (
                    <Col xs={12} key={i}>
                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex justify-content-between">
                                <h6>{alert.headline}</h6>
                                <div>{alert.severity}</div>
                            </div>
                            <div>From {convertToItaDate(alert.effective)} to {convertToItaDate(alert.expires)}</div>
                            {alert.description && <p>{alert.description}</p>}
                            {alert.instruction && <p>{alert.instruction}</p>}
                        </div>
                    </Col>
                ))}
            </Row>
        </Row>
    )
}