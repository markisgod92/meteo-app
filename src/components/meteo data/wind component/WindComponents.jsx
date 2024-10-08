export const WindComponent = ({ metricUnits, data }) => {
    return (
        <div className="h-100 d-flex flex-column gap-2 border border-1 border-dark rounded-4 p-4">
            <h4>Vento</h4>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                <div>Velocità</div>
                <div>{metricUnits ? `${data.wind_kph} km/h` : `${data.wind_mph} mph`}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                <div>Folate</div>
                <div>{metricUnits ? `${data.gust_kph} km/h` : `${data.gust_mph} mph`}</div>
            </div>   
            <div className="d-flex justify-content-between align-items-center py-3 ">
                <div>Direzione</div>
                <div>{data.wind_degree}° {data.wind_dir}</div>
            </div>
        </div>
    )
}