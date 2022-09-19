
export default function WeatherMainInfo({weather}) {
  return (
    <div className="main-container">
        <h2>{weather?.location.name}</h2>
        <h4>{weather?.location.country}</h4>
        <div>
            <div>
                <img 
                src={`http:${weather?.current.condition.icon}`} 
                alt={weather?.current.condition.text}
                width="150px" />
            </div>
        </div>
        <div>
            <div>
                {weather?.current.condition.text}
            </div>
            <p>
            {weather?.current.temp_c}º
            </p>
        </div>
        <iframe 
            title="map"
            src={`https://www.google.com/maps/embed?pb=${weather?.location.lon}${weather?.location.lat}`} 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

        </iframe>
    </div>
  )
}
