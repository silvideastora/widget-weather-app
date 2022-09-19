import  {useState, useEffect} from 'react'
import WeatherMainInfo from './WeatherMainInfo'
import WeatherForm from './WeatherForm'


export default function WeatherApp() {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
    loadInfo()
    }, [])

    useEffect(() => {
document.title=`Weather | ${weather?.location.name ?? ""}`;
    },[weather])
    
    async function loadInfo(city = 'London') {
      try {
        const request = await fetch(
          `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
          );
          const json = await request.json()
          setWeather(json)
          console.log(json)
      } catch(error) {}
    }
    function handleChangeCity(city) {
      setWeather(null);
      loadInfo(city)
    }
  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <WeatherMainInfo weather={weather}/>
    </div>

  )
}
