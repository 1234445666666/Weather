import React from "react";
import "./Form.scss";
import Weather from "../Weather/Weather.tsx";

export default function Form() {
  const [data, setData] = React.useState(null);

  const cityRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!cityRef.current?.value) {
      alert("Введите город");
      return;
    }

    const city = cityRef.current.value;
    console.log(city);

    getWeather(city);
  };

  async function getWeather(city: string) {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch {
      console.error("Error");
      setData(null);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Сайт для показа погоды</h1>
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="input">Введите город</label>
          <input
            id="input"
            type="text"
            placeholder="Введите город"
            ref={cityRef}
          />
          <button type="submit" id="button">
            Показать
          </button>
        </form>
      </div>

      {data && <Weather data={data} />}
    </>
  );
}
