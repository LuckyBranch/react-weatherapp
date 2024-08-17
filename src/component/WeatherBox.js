import React from 'react'

const WeatherBox = ({weather}) => { //props라는 object에서 weather을 가지고 온다는 의미이다.
    console.log("weather?",weather);
  return (
    <div className="weather-box"> 
      {/* <div>{weather && weather.name}</div> */}
      <div>{weather?.name}</div> 
      <h2>{weather?.main.temp}/{weather?.main.temp*9/5+32}</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
