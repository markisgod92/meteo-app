import { useContext } from "react"
import { DataContext } from "../../../context/DataContext"
import { useTranslation } from "react-i18next"
import multilingualConditions from '../../../utilities/multilingualConditions.json'

export const WeatherIcon = () => {
    const { data, metricUnits } = useContext(DataContext)
    const { i18n } = useTranslation()

    const getConditionText = (code) => {
        const currentLang = i18n.language

        for (const condition of multilingualConditions) {
            if (condition.code === code) {
                if (currentLang === 'en') {
                    return data.isDay ? condition.day : condition.night
                } else {
                    for (const lang of condition.languages) {
                        if (lang.lang_iso === currentLang) {
                            return data.isDay ? lang.day_text : lang.night_text
                        }
                    }
                }
            }
        }
    }

    return (
        <div className='h-100 d-flex flex-column gap-3'>
            <div className='h-100'>
                <img
                    src={data.current.condition.icon}
                    alt={getConditionText(data.current.condition.code)}
                    className='h-100 object-fit-cover'
                />
            </div>

            <div className="d-flex flex-wrap align-items-baseline gap-4">
                <div className="fs-3">{metricUnits ? `${data.current.temp_c}°C` : `${data.current.temp_f}°F`}</div>
                <h3>{getConditionText(data.current.condition.code)}</h3>
            </div>
        </div>
    )
}