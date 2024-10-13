import { useTranslation } from "react-i18next"

export const PressureComponent = ({ metricUnits, data }) => {
    const {t} = useTranslation()

    return (
        <div className="card-component h-100 d-flex flex-column gap-5 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-speedometer2 fs-3"></i>
                <h4>{t('pressureCard.pressure')}</h4>
            </div>

            <div className="fs-3 ps-3">
                {metricUnits ? `${data.pressure_mb} mb` : `${data.pressure_in} in`}
            </div>

            <div>
                {data.pressure_mb >= 1013 ? t('pressureCard.highPressure') : t('pressureCard.lowPressure')}
            </div>
        </div>
    )
}