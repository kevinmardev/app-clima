import { useState } from "react";
import axios from "axios";
import { IClima, IForecast } from "../interfaces/IClima.interface"; // Asegúrate de importar la interfaz de previsión si la usas

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<IClima | null>(null);
  const [forecastData, setForecastData] = useState<IForecast["list"]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async ({
    city,
    codigoPostal,
  }: {
    city?: string;
    codigoPostal?: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const query = codigoPostal ? `${codigoPostal}` : `${city}`;

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric&lang=es`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric&lang=es`
        ),
      ]);

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setWeatherData(weatherResponse.data);

      // Filtrar los datos para obtener una predicción diaria a las 12:00 pm
      const filteredForecast = forecastResponse.data.list.filter(
        (item: IForecast["list"][0]) => item.dt_txt.includes("12:00:00")
      );
      setForecastData(filteredForecast);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, forecastData, loading, error, fetchData };
};

export default useWeatherData;
