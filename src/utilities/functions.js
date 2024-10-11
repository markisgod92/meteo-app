export const convertToItaDate = (isoString) => {
    const date = new Date(isoString)

    const options = {
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false,
    }

    return new Intl.DateTimeFormat('it-IT', options).format(date);
}

export const formatLat = (lat) => {
    return lat > 0 ? `${lat} N` : `${Math.abs(lat)} S`
}

export const formatLon = (lon) => {
    return lon > 0 ? `${lon} E` : `${Math.abs(lon)} W`
}

export const pressureToText = (metricUnits, value) => {
    return value >= (metricUnits ? 1013 : 2992) ? 'Alta pressione' : 'Bassa pressione';
}

export const parseTimeString = (timeString) => {
    if (!timeString || typeof timeString !== 'string') return null;

    const [time, modifier] = timeString.trim().split(' ');
    if (!time || !modifier || (modifier !== 'AM' && modifier !== 'PM')) return null;

    let [hours, minutes] = time.split(':');
    if (!hours || !minutes || isNaN(hours) || isNaN(minutes)) return null;

    return { hours: parseInt(hours, 10), minutes: parseInt(minutes, 10), modifier };
}

export const convertToDate = (timeString) => {
    const parsedTime = parseTimeString(timeString);
    if (!parsedTime) return NaN;

    let { hours, minutes, modifier } = parsedTime;

    if (modifier === 'PM' && hours !== 12) {
        hours = hours + 12;
    } else if (modifier === 'AM' && hours === 12) {
        hours = 0;
    }

    const today = new Date().toISOString().split('T')[0];
    return new Date(`${today}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`).getTime();
}

export const formatTime24 = (timeString) => {
    const parsedTime = parseTimeString(timeString);
    if (!parsedTime) return '--:--';

    let { hours, minutes, modifier } = parsedTime;

    if (modifier === 'PM' && hours !== 12) {
        hours = hours + 12;
    } else if (modifier === 'AM' && hours === 12) {
        hours = 0;
    }

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};