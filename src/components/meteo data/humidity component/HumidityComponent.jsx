export const HumidityComponent = ({ metricUnits, data }) => {
    return (
        <div className="h-100 d-flex flex-column gap-5 border border-1 border-dark rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-droplet fs-3"></i>
                <h4>Umidità</h4>
            </div>

            <div className="fs-3 ps-3">{data.humidity} %</div>

            <div className="d-flex justify-content-between align-items-center py-3 ">
                <div>Punto di rugiada</div>
                <div>{metricUnits ? `${data.dewpoint_c} °C` : `${data.dewpoint_f} °F`}</div>
            </div>
        </div>
    )
}