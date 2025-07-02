import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 35.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return (
        <div className="WeatherApp" style={{textAlign:'center'}}>
            <h1>Weather Application</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}