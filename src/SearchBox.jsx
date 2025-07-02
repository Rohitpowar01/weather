import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState('');
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="cd41ce878938af9f47601e5141c40b22";

    let getWeatherInfo=async()=>{
        try{let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse)
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }catch(err){
            console.log(err);
            setError("No such place inn our API");
            return {
                city:city,
                temp:0,
                tempMin:0,
                tempMax:0,
                humidity:0,
                feelsLike:0,
                weather:""
            }
        }
    }

    

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit =async (event) => {
        try{
            event.preventDefault();
            setCity('');
            let newinfo=await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
        
    };
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                required
                value={city}
                onChange={handleChange}
                />
                <br></br><br></br>
                <Button 
                    variant='contained' 
                    type='submit'
                >
                Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exist</p>}
            </form>
        </div>
    )
}