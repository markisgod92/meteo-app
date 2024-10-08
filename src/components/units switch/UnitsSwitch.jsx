import './unitsswitch.css'

export const UnitsSwitch = ({ metricUnits, switchUnitsFc }) => {
    return (
        <div
            className="switch-container d-flex bg-dark align-items-center rounded-3 w-auto h-auto"
            onClick={switchUnitsFc}
        >
            <div 
                className={`p-3 rounded-3 d-flex justify-content-center align-items-center ${
                    metricUnits ? "bg-secondary-subtle text-dark border border-3 border-dark" : "text-white"
                }`}
            >
                <div>metric</div>
            </div>
            <div 
                className={`p-3 rounded-3 d-flex justify-content-center align-items-center ${
                    metricUnits ? "text-white" : "bg-secondary-subtle text-dark border border-3 border-dark"
                }`}
            >
                <div>cheeseburgers</div>
            </div>
        </div>
    )
}