import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ResultadoClima from "./components/ResultadoClima";
import useWeatherData from "./hooks/useFetchData";

function App() {
  const [ciudad, setCiudad] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");

  // Hook personalizado para traer los datos del pronóstico del clima actual y pronóstico de 5 días
  const { weatherData, forecastData, loading, error, fetchData } =
    useWeatherData();

  // Función para buscar el clima
  const handleBuscarClima = () => {
    // Priorizar la búsqueda por coordenadas si se han proporcionado
    if (lat && lon) {
      fetchData({ lat: parseFloat(lat), lon: parseFloat(lon) });
    } else if (codigoPostal) {
      fetchData({ codigoPostal });
    } else {
      fetchData({ city: ciudad });
    }
  };

  return (
    <div className="container">
      <h1>Mi APP</h1>

      {/* Componente Formulario */}
      <Form
        ciudad={ciudad}
        setCiudad={setCiudad}
        lat={lat}
        setLat={setLat}
        lon={lon}
        setLon={setLon}
        codigoPostal={codigoPostal}
        setCodigoPostal={setCodigoPostal}
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
