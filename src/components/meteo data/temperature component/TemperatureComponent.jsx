export const TemperatureComponent = ({ metricUnits, data }) => {
    return (
        <div className="h-100 d-flex flex-column gap-2 border border-1 border-dark rounded-4 p-4">
            <h4>Temperatura</h4>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                <div>Temperatura</div>
                <div>{metricUnits ? `${data.temp_c}°C` : `${data.temp_f}°F`}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                <div>Percepita</div>
                <div>{metricUnits ? `${data.feelslike_c}°C` : `${data.feelslike_f}°F`}</div>
            </div>   
            <div className="d-flex justify-content-between align-items-center py-3 ">
                <div>Windchill</div>
                <div>{metricUnits ? `${data.windchill_c}°C` : `${data.windchill_f}°F`}</div>
            </div>
        </div>
    )
}