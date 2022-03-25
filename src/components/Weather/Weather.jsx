import { useEffect, useState } from "react";
import { data } from "../../store/data";
import axios from "axios";
import {
  WiDaySunny,
  WiStormShowers,
  WiShowers,
  WiHail,
  WiSnow,
  WiFog,
  WiCloudy,
} from "react-icons/wi";
import "./weather.css";

const KEY2 = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const state = data.weather;
  const [weathers, setWeathers] = useState();
  const [dataImg, setDataImg] = useState();
  const handleSuccess = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY2}&units=metric`
    );
    setWeathers(response.data);
    const i = (parseInt(response.data.weather[0].id) / 100).toFixed(0);
    const weatherId = state.filter((weather) => weather.id == i);
    setDataImg(weatherId[0]);
  };
  console.log(dataImg);
  function handleError() {
    alert("위치를 찾을 수 없습니다.");
  }
  useEffect(() => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
  return (
    <>
      {weathers && dataImg ? (
        <div
          className="weather"
          style={{ backgroundImage: `url(${dataImg.bgImg})` }}
        >
          <div className="weather-wrapper">
            <div className="info">
              <div className="icon">{dataImg.icon}</div>
              <span className="temp">{weathers.main.temp}˚</span>
            </div>

            <span className="city">{weathers.name}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Weather;
