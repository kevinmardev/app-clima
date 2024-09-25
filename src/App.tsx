import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ResultadoClima from "./components/ResultadoClima";
import useWeatherData from "./hooks/useFetchData";

console.log(import.meta.env.VITE_API_KEY);

function App() {
  const [ciudad, setCiudad] = useState("");

  //hook personalizado para traer los datos el pronostico del clima actual y pronostico de 5 dias
  const { weatherData, forecastData, loading, error, fetchData } =
    useWeatherData();

  // Función para buscar el clima
  const handleBuscarClima = () => {
    fetchData({ city: ciudad });
  };

  return (
    <div className="container">
      <h1>Mi APP</h1>

      {/* Componente Formulario */}
      <Form
        ciudad={ciudad}
        setCiudad={setCiudad}
        buscarClima={handleBuscarClima}
        error={error}
        loading={loading}
      />
      {/* Componente que muestra los datos obtenidos de la API */}
      <ResultadoClima
        weatherData={weatherData}
        forecastData={forecastData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
