import { useState, useEffect } from "react";
import { CelestialBar } from "./celestial bar/CelestialBar";

export const CelestialComponent = ({ title, icon, riseTime, setTime, isUp, currentTime }) => {
    const [position, setPosition] = useState(0);

    const convertToDate = (timeString) => {
        if (!timeString) return NaN;

        const [time, modifier] = timeString.trim().split(' ');
        let [hours, minutes] = time.split(':');

        hours = (modifier === 'PM' && hours !== '12') 
            ? String(parseInt(hours, 10) + 12).padStart(2, '0') 
            : (modifier === 'AM' && hours === '12') 
            ? '00' 
            : String(hours).padStart(2, '0');

        minutes = String(minutes).padStart(2, '0');

        return new Date(`${new Date().toISOString().split('T')[0]}T${hours}:${minutes}:00`).getTime();
    };

    const formatTime24 = (timeString) => {
        if (!timeString) return '';

        const [time, modifier] = timeString.split(' ');
        let [hours, minutes] = time.split(':');

        hours = (modifier === 'PM' && hours !== '12') 
            ? String(parseInt(hours, 10) + 12).padStart(2, '0') 
            : (modifier === 'AM' && hours === '12') 
            ? '00' 
            : String(hours).padStart(2, '0');

        return `${hours}:${minutes}`;
    };

    const calculatePosition = () => {
        const riseTimeInMs = convertToDate(riseTime);
        const setTimeInMs = convertToDate(setTime);
        const now = new Date(currentTime).getTime();

        if (riseTimeInMs >= setTimeInMs) {
            setPosition(0);
            return;
        }

        const dayDuration = setTimeInMs - riseTimeInMs;
        const timeSinceRise = now - riseTimeInMs;
        const pos = Math.max(0, Math.min(100, (timeSinceRise / dayDuration) * 100));
        setPosition(pos);
    };

    useEffect(() => {
        calculatePosition(); 
    }, [riseTime, setTime, currentTime]);

    return (
        <div className="h-100 d-flex flex-column gap-2 border border-1 border-dark rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className={`bi bi-${icon} fs-3`}></i>
                <h4>{title}</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                <div>Sorge</div>
                <div>{formatTime24(riseTime)}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                <div>Tramonta</div>
                <div>{formatTime24(setTime)}</div>
            </div>

            <CelestialBar position={position} isUp={isUp} icon={icon}/>
        </div>
    );
};
