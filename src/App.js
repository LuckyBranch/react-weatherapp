
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {

  const [weather,setWeather] = useState(null);
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      //showPosition만들기 또 귀찮으니 익명함수에 냅다 코딩하기
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon);

      console.log("현재위치",lat,lon);
    }); //현재위치 가지고 오기
    //console.log("getCurrentLocation");
  };

  const getWeatherByCurrentLocation = async(lat,lon) =>{
    let url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={196baf1f9fc9fa13cb4a7168ce52e224}&units=metric";
    let response = await fetch(url); //비동기니까 async처리해야한다.(자바스크립트 기본)
    let data = await response.json();
    setWeather(data);
  };

  useEffect(()=>{
    getCurrentLocation();
  },[]);
  return (
    <div>
      <div class="container">
      <WeatherBox weather={weather}/>
      <WeatherButton/>
    </div>
    </div>
  );
}

export default App;
