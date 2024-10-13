import lunarPhasesIt from '../../../utilities/moon-phases-IT.json'
import lunarEmojis from '../../../utilities/moon-emojis.json'
import { useTranslation } from 'react-i18next'

export const LunarPhaseComponent = ({ data }) => {
    const { t, i18n } = useTranslation()

    const phaseToEmoji = (latitude, phase) => {
        const northernEmisphere = lunarEmojis.northern_emisphere
        const southernEmisphere = lunarEmojis.southern_emisphere

        return latitude >= 0
            ? northernEmisphere[phase]
            : southernEmisphere[phase]
    }

    return (
        <div className="card-component h-100 d-flex flex-column gap-5 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-arrow-repeat fs-3"></i>
                <h4>{t('astronomy.moonphase')}</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <div className="fs-3 ps-3">
                    {i18n.language === 'en' ? data.astronomy.moon_phase : t(`moonphases.${data.astronomy.moon_phase}`)}
                </div>
                <div className="fs-1">{phaseToEmoji(data.location.lat, data.astronomy.moon_phase)}</div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3 ">
                <div>{t('astronomy.illumination')}</div>
                <div>{data.astronomy.moon_illumination} %</div>
            </div>

        </div>
    )
}