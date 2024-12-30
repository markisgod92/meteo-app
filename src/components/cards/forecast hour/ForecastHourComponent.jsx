export const ForecastHourComponent = ({ metricUnits, data }) => {
    return (
        <div className="mt-0 d-flex flex-column gap-3 align-items-center">
            <div className="fw-bold">{data.time.slice(11, 13)}</div>
            <img src={data.condition.icon} alt={data.condition.text} />
            <div className="d-flex justify-content-center gap-2">
                <i className="bi bi-umbrella"></i>
                <div>{data.chance_of_rain} %</div>
            </div>
            <div className="d-flex justify-content-center gap-2">
                <i className="bi bi-thermometer-half"></i>
                <div>{metricUnits ? `${data.temp_c}°C` : `${data.temp_f}°F`}</div>
            </div>
        </div>
    )
}