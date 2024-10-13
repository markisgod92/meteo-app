import { formatTime24 } from "../../../utilities/functions";

export const CelestialComponent = ({ title, icon, riseTime, setTime }) => {
    return (
        <div className="card-component h-100 d-flex flex-column gap-2 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className={`bi bi-${icon} fs-3`}></i>
                <h4>{title}</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                <div>Sorge</div>
                <div>{formatTime24(riseTime)}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1">
                <div>Tramonta</div>
                <div>{formatTime24(setTime)}</div>
            </div>
        </div>
    );
};
