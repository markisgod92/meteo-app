import { useEffect, useState } from "react"
import { UvBar } from "./uv bar/UvBar"

export const UvIndexComponent = ({ data }) => {
    const [uvText, setUvText] = useState('')
    const [uvPosition, setUvPosition] = useState(0)

    const makeUvText = (i) => {
        if (i <= 2) {
            setUvText('Basso')
        } else if (i >= 3 && i <= 5) {
            setUvText('Medio')
        } else if (i === 6 || i === 7) {
            setUvText('Alto')
        } else if (i >= 8 && i <= 10) {
            setUvText('Molto Alto')
        } else if (i >= 11) {
            setUvText('Estremamente Alto')
        } else {
            setUvText('')
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
        <div className="h-100 d-flex flex-column gap-5 border border-1 border-dark rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-brightness-high fs-3"></i>
                <h4>Indice UV</h4>
            </div>

            <div className="d-flex flex-column gap-2 ps-3">
                <div className="fs-3">{data.uv}</div>
                <div>{uvText}</div>
            </div>

            <UvBar uvPosition={uvPosition}/>
        </div>
    )
}