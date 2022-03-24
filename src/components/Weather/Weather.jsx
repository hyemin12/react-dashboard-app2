import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherWindyCloudy,
  TiWeatherCloudy,
} from "react-icons/ti";
import "./weather.css";

const KEY2 = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const [weathers, setWeathers] = useState();
  const icon = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();
  const handleSuccess = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY2}&units=metric`
    );
    setWeathers(response.data);
    const iconId = (parseInt(response.data.weather[0].id) / 100).toFixed(0);
    dispatch({ type: iconId });
  };
  function handleError() {
    alert("위치를 찾을 수 없습니다.");
  }
  useEffect(() => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
  return (
    <div className="weather">
      {weathers && weathers ? (
        <div className="weather-wrapper">
          <div className="info">
            <div className="icon">{icon}</div>
            <span className="temp">{weathers.main.temp}˚</span>
          </div>

          <span className="city">{weathers.name}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
