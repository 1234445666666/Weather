import './Weather.scss';

export default function Weather({data} : any) {
    if(!data) {
        return <div>города нету</div>;
    }
    return (
        <div id="weather-result">
        <h3>Погода в <span id="city-name">{data.name}</span></h3>
        <p>Температура: <span id="temp">{Math.round(data.main.temp - 273.15)}</span>°C</p>
        <p>Ощущается как: <span id="feels-like">{Math.round(data.main.feels_like - 273.15)}</span>°C</p>
        <p>Погода: <span id="weather-desc">{data.weather[0].description}</span></p>
        <p>Влажность: <span id="humidity">{data.main.humidity}</span>%</p>
        <p>Ветер: <span id="wind-speed">{data.wind.speed}</span> м/с</p>
    </div>
    )
}