import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    // 상태 변수 정의
    constructor(props) {
        super(props);
        this.state = { temp: 0, desc: '', icon: '', loading: true }
    }
    // 컴포넌트 생성 후 날씨 정보 조회
    componentDidMount() {
        const cityName = ['Seoul', 'Newyork', 'Tokyo', 'London', 'Paris'];
        const apiKey = '75fb31dee1b87fffa83866410c58b441';
        const url =  
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName[0]}&appid=${apiKey}`;
        
        const url2 =  
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName[1]}&appid=${apiKey}`;

        // axios 라이브러리 이용
        axios.get(url)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;
                this.setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
            })
            .catch(error => console.log(error));

    }
    // 날씨 정보 출력
    render() {
        const imgSrc = `https://openweathermap.com/img/w/${this.state.icon}.png`;
        if (this.state.loading) {
            return <p>Loading</p>;
        } else {
            return (
                <div className="homeWeather">
                  <img src={imgSrc}/>
                  <p className="temperature">
                  온도 {Math.round((this.state.temp - 273.15) * 10) / 10} ºC
                  </p>
                  <p>{this.state.desc}</p>
                </div>
            );
        }
    }
}

export default Weather;