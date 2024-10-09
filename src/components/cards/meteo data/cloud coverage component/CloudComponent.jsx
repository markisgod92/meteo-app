export const CloudComponent = ({ data }) => {
    return (
        <div className="h-100 d-flex flex-column gap-5 border border-1 border-dark rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-clouds fs-3"></i>
                <h4>Nuvolosità</h4>
            </div>

            <div className="fs-3 ps-3">{data.cloud} %</div>
        </div>
    )
}