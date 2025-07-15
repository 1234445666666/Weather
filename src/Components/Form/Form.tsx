import React from "react";
import "./Form.scss";
import Weather from "../Weather/Weather.tsx";

export default function Form() {
  const [data, setData] = React.useState(null);

  const cityRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const city = cityRef.current!.value.trim();

    if (!cityRef.current?.value) {
      alert("Введите город");
      return;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/i.test(city)) {
      alert("Город должен состоять только из букв");
      return;
    }

    getWeather(city);
  };

  async function getWeather(city: string) {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }

      const data = await response.json();
      setData(data);
    } catch {
      console.error("Error");
      alert("Ошибка сервера, попробуйте еще раз");
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

      {data ? <Weather data={data} /> : null}
    </>
  );
}
