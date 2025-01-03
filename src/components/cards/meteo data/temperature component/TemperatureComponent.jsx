import { useTranslation } from "react-i18next"

export const TemperatureComponent = ({ metricUnits, data }) => {
    const {t} = useTranslation()

    return (
        <div className="card-component h-100 d-flex flex-column gap-2 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-thermometer-half fs-3"></i>
                <h4>{t('temperatureCard.temperature')}</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                <div>{t('temperatureCard.temperature')}</div>
                <div>{metricUnits ? `${data.temp_c}°C` : `${data.temp_f}°F`}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                <div>{t('temperatureCard.feelslike')}</div>
                <div>{metricUnits ? `${data.feelslike_c}°C` : `${data.feelslike_f}°F`}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 ">
                <div>{t('temperatureCard.windchill')}</div>
                <div>{metricUnits ? `${data.windchill_c}°C` : `${data.windchill_f}°F`}</div>
            </div>
        </div>
    )
}