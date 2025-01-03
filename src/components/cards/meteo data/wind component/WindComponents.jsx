import { useTranslation } from "react-i18next"

export const WindComponent = ({ metricUnits, data }) => {
    const {t} = useTranslation()

    return (
        <div className="card-component h-100 d-flex flex-column gap-2 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-wind fs-3"></i>
                <h4>{t('windCard.wind')}</h4>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                <div>{t('windCard.speed')}</div>
                <div>{metricUnits ? `${data.wind_kph} km/h` : `${data.wind_mph} mph`}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                <div>{t('windCard.gust')}</div>
                <div>{metricUnits ? `${data.gust_kph} km/h` : `${data.gust_mph} mph`}</div>
            </div>   
            <div className="d-flex justify-content-between align-items-center py-3 ">
                <div>{t('windCard.direction')}</div>
                <div>{data.wind_degree}° {data.wind_dir}</div>
            </div>
        </div>
    )
}