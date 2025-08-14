import React from "react";
import "./Form.scss";
import Weather from "../Weather/Weather.tsx";
import { ToastContainer, toast } from "react-toastify";

export default function Form() {
  const [data, setData] = React.useState(null);

  const cityRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const city = cityRef.current!.value.trim();

    if (!cityRef.current?.value) return toast.error("Введите город");

    if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/i.test(city))
      return toast.error("Город должен состоять только из букв");

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
      toast.warning("Ошибка сервера, попробуйте еще раз");
      setData(null);
    }
  }

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="title">Сайт для показа погоды</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="input">Введите город</label>
        <input
          className="input"
          type="text"
          placeholder="Введите город"
          ref={cityRef}
        />
        <button type="submit" className="button">
          Показать
        </button>
      </form>

      {data ? <Weather data={data} /> : null}
    </div>
  );
}
