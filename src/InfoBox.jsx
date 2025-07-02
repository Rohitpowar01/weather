import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default  function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1662377824580-a540e7728635?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL="https://images.unsplash.com/photo-1547899818-c3159263dd1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNVTk5ZJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1622987857832-a31ceda6ad0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJhaW4lMjBhbmQlMjB0aHVuZGVyfGVufDB8fDB8fHww";

     const getWeatherIcon = () => {
    if (info?.humidity > 80) return <ThunderstormIcon />;
    if (info?.temp > 15) return <WbSunnyIcon />;
    return <AcUnitIcon />;
  };
    return(
        <div className="InfoBox"> 
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity>80 
                    ? RAIN_URL 
                    :info.temp >15 
                    ? HOT_URL 
                    :COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {getWeatherIcon()}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature={info.temp}&deg;C</p>
                <p>Humidity={info.humidity}</p>
                <p>Min Temp={info.tempMin}&deg;C</p>
                <p>Max Temp={info.tempMax}&deg;C</p>
                <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>

                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
    )
}