import { useState } from "react";
import axios from "axios";
import { IClima, IForecast } from "../interfaces/IClima.interface";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<IClima | null>(null);
  const [forecastData, setForecastData] = useState<IForecast["list"]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async ({
    city,
    codigoPostal,
    lat,
    lon,
  }: {
    city?: string;
    codigoPostal?: string;
    lat?: number;
    lon?: number;
  }) => {
    setLoading(true);
    setError(null);

    try {
      let query = "";
      if (lat && lon) {
        query = `lat=${lat}&lon=${lon}`;
      } else if (codigoPostal) {
        query = `q=${codigoPostal}`;
      } else if (city) {
        query = `q=${city}`;
      }

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric&lang=es`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?${query}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric&lang=es`
        ),
      ]);

      setWeatherData(weatherResponse.data);
      setForecastData(
        forecastResponse.data.list.filter((item: IForecast["list"][0]) =>
          item.dt_txt.includes("12:00:00")
        )
      );
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
