import styled from 'styled-components';
import { React, useState, Fragment } from 'react';
import axios from 'axios';
import { BackBtn } from '../../Home';

export default function WeatherApi() {
  const API_KEY = '75fb31dee1b87fffa83866410c58b441';
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${API_KEY}`;
  // url data 조회

  const searchWeather = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        });
        console.log(data);
        setResult(data);
      } catch {
        alert('error');
      }
    }
  };
  // css
  const WeatherStyle = styled.div`
    border: 1px solid;
    border-radius: 6px;
    width: 50%;
    margin: 0 auto;
  `;
  // 셀렉트박스

  return (
    <>
      <div className="appContentWrap">
        <label>도시 이름을 영문으로 입력후 Enter키 입력해주세요. (ex. london)</label>
        <input
          placeholder="seoul"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
      </div>
      {Object.keys(result).length !== 0 && (
        <>
            <WeatherStyle>
              <p className="city">{result.data.name}</p>
              <p className="temperature">
                온도는 {Math.round((result.data.main.temp - 273.15) * 10) / 10} ºC
                입니다.
              </p>
              <p className="sky">{result.data.weather[0].main}</p>
            </WeatherStyle>
              <BackBtn />
        </>
      )}
    </>
  );
}


