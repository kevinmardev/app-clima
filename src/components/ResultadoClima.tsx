import { ResultadoClimaProps } from "../interfaces/IResultadoClimaProps";
import ClimaCard from "./ClimaCard";
import PronosticoCard from "./PronosticoCard";

export default function ResultadoClima({
  weatherData,
  forecastData,
  loading,
  error,
}: ResultadoClimaProps) {
  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData || !forecastData.length) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <div>
      <ClimaCard weatherData={weatherData}></ClimaCard>
      <PronosticoCard forecastData={forecastData}></PronosticoCard>
    </div>
  );
}
