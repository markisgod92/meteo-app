import { useContext } from 'react'
import './unitsswitch.css'
import { DataContext } from '../../context/DataContext'

export const UnitsSwitch = () => {
    const { metricUnits, switchUnits } = useContext(DataContext)

    return (
        <div
            className="switch-container d-flex bg-dark align-items-center rounded-3 w-auto h-auto"
            onClick={switchUnits}
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