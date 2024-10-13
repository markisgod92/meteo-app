import { useEffect, useState } from "react"
import { UvBar } from "./uv bar/UvBar"
import { useTranslation } from "react-i18next"

export const UvIndexComponent = ({ data }) => {
    const {t} = useTranslation()
    const [uvText, setUvText] = useState('')
    const [uvPosition, setUvPosition] = useState(0)

    const makeUvText = (i) => {
        if (i <= 2) {
            setUvText(t('uvCard.low'))
        } else if (i >= 3 && i <= 5) {
            setUvText(t('uvCard.medium'))
        } else if (i === 6 || i === 7) {
            setUvText(t('uvCard.high'))
        } else if (i >= 8 && i <= 10) {
            setUvText(t('uvCard.veryHigh'))
        } else if (i >= 11) {
            setUvText(t('uvCard.extreme'))
        } else {
            setUvText('N/A')
        }
    }

    const makeUvPosition = (i) => {
        setUvPosition((i/11) * 100)
    }

    useEffect(() => {
        makeUvText(data.uv)
        makeUvPosition(data.uv)
    }, [data.uv])


    return (
        <div className="card-component h-100 d-flex flex-column gap-5 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-brightness-high fs-3"></i>
                <h4>{t('uvCard.uvIndex')}</h4>
            </div>

            <div className="d-flex flex-column gap-2 ps-3">
                <div className="fs-3">{data.uv}</div>
                <div>{uvText}</div>
            </div>

            <UvBar uvPosition={uvPosition}/>
        </div>
    )
}