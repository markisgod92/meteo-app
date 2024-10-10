import { useContext } from "react"
import { DataContext } from "../../../context/DataContext"

export const WeatherIcon = ({ isNight, conditionData }) => {
    const { data, metricUnits } = useContext(DataContext)

    return (
        <div className='h-100 d-flex flex-column gap-3'>
            <div className='h-100'>
                <img
                    src={data.current.condition.icon}
                    alt={data.current.condition.text}
                    className='h-100 object-fit-cover'
                />
            </div>
            <div className="d-flex align-items-baseline gap-4">
                <div className="fs-3">{metricUnits ? `${data.current.temp_c}°C` : `${data.current.temp_f}°F`}</div>
                <h3>{data.current.condition.text}</h3>
            </div>

        </div>
    )
}