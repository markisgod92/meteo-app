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