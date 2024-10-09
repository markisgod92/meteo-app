export const LunarPhaseComponent = ({ data }) => {

    const phaseToIta = (phase) => {
        const phaseITA = {
            "New Moon": "Luna Nuova",
            "Waxing Crescent": "Crescente",
            "First Quarter": "Primo Quarto",
            "Waxing Gibbous": "Gibbosa Crescente",
            "Full Moon": "Luna Piena",
            "Waning Gibbous": "Gibbosa Calante",
            "Last Quarter": "Ultimo Quarto",
            "Waning Crescent": "Crescente Calante"
        };

        return phaseITA[phase]
    }

    const phaseToEmoji = (latitude, phase) => {
        const northernEmisphere = {
            "New Moon": "🌑",
            "Waxing Crescent": "🌒",
            "First Quarter": "🌓",
            "Waxing Gibbous": "🌔",
            "Full Moon": "🌕",
            "Waning Gibbous": "🌖",
            "Last Quarter": "🌗",
            "Waning Crescent": "🌘"
        }

        const southernEmisphere = {
            "New Moon": "🌑",
            "Waxing Crescent": "🌘",
            "First Quarter": "🌗",
            "Waxing Gibbous": "🌖",
            "Full Moon": "🌕",
            "Waning Gibbous": "🌔",
            "Last Quarter": "🌓",
            "Waning Crescent": "🌒"
        }

        if (latitude >= 0) {
            return northernEmisphere[phase]
        } else {
            return southernEmisphere[phase]
        }
    }

    return (
        <div className="h-100 d-flex flex-column gap-5 border border-1 border-dark rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-arrow-repeat fs-3"></i>
                <h4>Fase Lunare</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <div className="fs-3 ps-3">{phaseToIta(data.astronomy.moon_phase)}</div>
                <div className="fs-1">{phaseToEmoji(data.location.lat, data.astronomy.moon_phase)}</div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3 ">
                <div>Illuminazione</div>
                <div>{data.astronomy.moon_illumination} %</div>
            </div>

        </div>
    )
}