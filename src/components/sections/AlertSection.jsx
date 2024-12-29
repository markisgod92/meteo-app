import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { Row, Col } from "react-bootstrap"
import { convertToItaDate } from "../../utilities/functions"
import { useTranslation } from "react-i18next"

export const AlertSection = () => {
    const { data } = useContext(DataContext)
    const { t } = useTranslation()

    return (
        <Row className="pt-3">
            <Col xs={12}>
                <div className="card-component rounded-4 p-4 d-flex flex-column gap-1">
                    <div className="d-flex gap-3 align-items-baseline">
                        <i className="bi bi-exclamation-diamond fs-3"></i>
                        <h4>{t('singleValueCards.meteoAlerts')}</h4>
                    </div>

                    <ul>
                        {data.alerts.map((alert, i) => (
                            <li key={i} className="pt-3">
                                <div className="d-flex flex-column gap-1">
                                    <div className="d-flex justify-content-between">
                                        <h6>{alert.headline}</h6>
                                        <div>{alert.severity}</div>
                                    </div>
                                    <div>From {convertToItaDate(alert.effective)} to {convertToItaDate(alert.expires)}</div>
                                    {alert.description && <p>{alert.description}</p>}
                                    {alert.instruction && <p>{alert.instruction}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Col>
        </Row>
    )
}