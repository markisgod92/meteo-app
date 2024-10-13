import { useTranslation } from "react-i18next"

export const VisibilityComponent = ({ metricUnits, data }) => {
    const {t} = useTranslation()

    return (
        <div className="card-component h-100 d-flex flex-column gap-5 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-eye fs-3"></i>
                <h4>{t('singleValueCards.visibility')}</h4>
            </div>

            <div className="fs-3 ps-3">{metricUnits ? `${data.vis_km} km` : `${data.vis_miles} m`}</div>
        </div>
    )
}