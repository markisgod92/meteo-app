import { useContext } from 'react'
import './unitsswitch.css'
import { DataContext } from '../../context/DataContext'

export const UnitsSwitch = () => {
    const { metricUnits, switchUnits } = useContext(DataContext)

    return (
        <div
            className="switch-container d-flex bg-dark-subtle align-items-center rounded-3 w-auto h-auto"
            onClick={switchUnits}
        >
            <div 
                className={`px-3 py-1 rounded-3 d-flex justify-content-center align-items-center ${
                    metricUnits ? "bg-secondary-subtle text-dark border border-3 border-dark" : "text-white"
                }`}
            >
                <div>SI</div>
            </div>
            <div 
                className={`px-3 py-1 rounded-3 d-flex justify-content-center align-items-center ${
                    metricUnits ? "text-white" : "bg-secondary-subtle text-dark border border-3 border-dark"
                }`}
            >
                <div>US</div>
            </div>
        </div>
    )
}