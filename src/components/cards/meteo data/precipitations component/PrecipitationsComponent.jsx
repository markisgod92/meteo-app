import { useTranslation } from "react-i18next"

export const PrecipitationsComponent = ({ metricUnits, data }) => {
    const {t} = useTranslation()

    return (
        <div className="card-component h-100 d-flex flex-column gap-5 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-cloud-rain fs-3"></i>
                <h4>{t('singleValueCards.rain')}</h4>
            </div>

            <div className="fs-3 ps-3">{metricUnits ? `${data.precip_mm} mm` : `${data.precip_in} in`}</div>
        </div>

    )
}