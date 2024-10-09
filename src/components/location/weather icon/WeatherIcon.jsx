export const WeatherIcon = ({ isNight, conditionData }) => {
    return (
        <div className='h-100 d-flex flex-column gap-3'>
            <div className='h-100'>
            <img
                src={conditionData.icon}
                alt={conditionData.text}
                className='h-100 object-fit-cover'
            />
            </div>
            <h3>{conditionData.text}</h3>
        </div>
    )
}