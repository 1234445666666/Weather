import "./Weather.scss";

export default function Weather({ data }: any) {

  if (!data) {
    return (   
    <div id="weather-result">
    <p className="weather-message">Введите город для отображения погоды</p>
  </div>
    );
  }
  return (
    <div id="weather-result">
      <h3>
        Погода в <span>{data.name}</span>
      </h3>

      <div className="weather-grid">
        <div className="weather-item">
          <span className="weather-label">Температура</span>
          <span className="weather-value temperature">
            {Math.round(data.main.temp - 273.15)}°C
          </span>
        </div>

        <div className="weather-item">
          <span className="weather-label">Ощущается</span>
          <span className="weather-value feels-like">
            {Math.round(data.main.feels_like - 273.15)}°C
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
