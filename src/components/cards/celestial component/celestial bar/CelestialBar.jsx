import './celestialbar.css'

export const CelestialBar = ({ position, isUp, icon }) => {
    return (
        <div className="sun-bar-container mt-3">
            <div className="sun-bar"></div>
            <div className="sun-indicator" style={{ left: `${position}%` }}>
            <i className={`bi bi-${icon}`}></i>
            </div>
            {isUp === 1 && (
                <div className="peak-indicator" style={{ left: '50%' }}>
                    <i className={`bi bi-${icon}-fill`}></i>
                </div>
            )}
        </div>
    )
}