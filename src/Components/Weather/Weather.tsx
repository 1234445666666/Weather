import type { IWeaterData } from "../../types/weather.types";
import "./Weather.scss";

interface WeatherProps {
  data: IWeaterData | null;
}

export default function Weather({ data }: WeatherProps) {
  const CelsiustoKelvin = (temp: number) => {
    return Math.round(temp - 273.15);
  };
  if (!data) {
    return (
      <div className="weather-result">
        <p className="weather-message">Введите город для отображения погоды</p>
      </div>
    );
  }
  return (
    <div className="weather-result">
      <h3>
        Погода в <span>{data.name}</span>
      </h3>

      <div className="weather-grid">
        <div className="weather-item">
          <span className="weather-label">Температура</span>
          <span className="weather-value temperature">
            {CelsiustoKelvin(data.main.temp)}°C
          </span>
        </div>

        <div className="weather-item">
          <span className="weather-label">Ощущается</span>
          <span className="weather-value feels-like">
            {CelsiustoKelvin(data.main.feels_like)}°C
          </span>
        </div>

        <div className="weather-item">
          <span className="weather-label">Погода</span>
          <span className="weather-value weather-desc">
            {data.weather[0].description}
          </span>
        </div>

        <div className="weather-item">
          <span className="weather-label">Влажность</span>
          <span className="weather-value humidity">{data.main.humidity}%</span>
        </div>

        <div className="weather-item">
          <span className="weather-label">Ветер</span>
          <span className="weather-value wind">{data.wind.speed} м/с</span>
        </div>
        <div className="weather-item">
          <span className="weather-label">Страна</span>
          <span className="weather-value country">{data.sys.country}</span>
        </div>
      </div>
    </div>
  );
}
