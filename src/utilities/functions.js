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