import { IClima, IForecast } from "./IClima.interface";

export interface ResultadoClimaProps {
  weatherData: IClima | null;
  forecastData: IForecast["list"];
  loading: boolean;
  error: string | null;
}
