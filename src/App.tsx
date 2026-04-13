import { useState } from "react";
import "./App.css";
import ResultadoClima from "./components/ResultadoClima";
import useWeatherData from "./hooks/useFetchData";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";

function App() {
  const [isShowInputs, setIsShowInputs] = useState(true);
  const [placeSearch, setPlaceSearch] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  // Hook personalizado para traer los datos del pronóstico del clima actual y pronóstico de 5 días
  const { weatherData, forecastData, loading, error, fetchData } =
    useWeatherData();

  // Función para buscar el clima
  const handleBuscarClima = (e: any) => {
    e.preventDefault();
    // Priorizar la búsqueda por coordenadas si se han proporcionado
    if (lat && lon) {
      fetchData({ lat: parseFloat(lat), lon: parseFloat(lon) });
    } else {
      fetchData({ placeSearch });
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="container">
        <div className="row margin-1rem">
          <h1>Indague sobre la situacion climática</h1>
        </div>

        <div className="glass">
          <div className="row">
            <h3>Consulte el clima mediante</h3>

            <LoadingButton
              type="button"
              variant="text"
              size="large"
              onClick={() => setIsShowInputs(true)}
            >
              Ciuadad/Codigo postal
            </LoadingButton>

            <LoadingButton
              type="button"
              size="large"
              variant="text"
              onClick={() => setIsShowInputs(false)}
            >
              Coordenadas
            </LoadingButton>
          </div>

          <form className="max-width" onSubmit={handleBuscarClima}>
            <div className="row ">
              {isShowInputs ? (
                <TextField
                  name="placeSearch"
                  placeholder="Ej: Madrid o 15022"
                  variant="standard"
                  fullWidth
                  size="medium"
                  value={placeSearch}
                  onChange={(e) => setPlaceSearch(e.target.value)}
                />
              ) : (
                <>
                  {" "}
                  <TextField
                    id="latitud"
                    placeholder="latitud"
                    variant="standard"
                    size="medium"
                    fullWidth
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                  />
                  <TextField
                    id="longitud"
                    placeholder="longitud"
                    variant="standard"
                    size="medium"
                    fullWidth
                    value={lon}
                    onChange={(e) => setLon(e.target.value)}
                  />
                </>
              )}
              <div>
                <LoadingButton type="submit" size="small" variant="outlined">
                  Buscar
                </LoadingButton>
              </div>
            </div>
          </form>
        </div>

        {/* Componente que muestra los datos obtenidos de la API */}
        <ResultadoClima
          weatherData={weatherData}
          forecastData={forecastData}
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
}

export default App;
