import { useContext, useState } from "react"
import { DataContext } from "../../context/DataContext"
import { Row, Col, Button } from "react-bootstrap"
import { convertToItaDate } from "../../utilities/functions"
import { useTranslation } from "react-i18next"

export const AlertSection = () => {
    const { data } = useContext(DataContext)
    const { t } = useTranslation()
    const [isExpanded, setExpanded] = useState(false)

    const toggleExpanded = () => setExpanded(prev => !prev)

    const alertsList = isExpanded ? data.alerts : data.alerts.slice(0, 2)

    return (
        <Row className="pt-3">
            <Col xs={12}>
                <div className="card-component rounded-4 p-4 d-flex flex-column gap-1">
                    <div className="d-flex gap-3 align-items-baseline">
                        <i className="bi bi-exclamation-diamond fs-3"></i>
                        <h4>{t('singleValueCards.meteoAlerts')}</h4>
                    </div>

                    <ul>
                        {alertsList.map((alert, i) => (
                            <li key={i} className="pt-3">
                                <div className="d-flex flex-column gap-1">
                                    <div className="d-flex justify-content-between flex-wrap">
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

                    {data.alerts.length > 2 && (
                        <div className="text-end">
                        <Button variant="link" className="text-light" onClick={toggleExpanded}>
                            {isExpanded ? t('utils.showLess') : `${t('utils.showMore')} (${data.alerts.length - 2})`}
                        </Button>
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    )
}