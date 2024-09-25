import { Typography } from "@mui/material";
import { IForecast } from "../interfaces/IClima.interface";

export const PronosticoItemCard: React.FC<{
  forecastData: IForecast["list"];
}> = ({ forecastData }) => {
  return (
    <div className="container-clima">
      {forecastData.map((item, index) => {
        // Acceder al código del ícono
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        return (
          <div className="clima-item"
            key={index}
          >
            <Typography variant="h6">
              {new Date(item.dt_txt).toLocaleDateString()}
            </Typography>
            {/* Mostrar el ícono del clima */}
            <img src={iconUrl} alt={item.weather[0].description} />
            <Typography variant="h6">Temperatura: {item.main.temp}°C</Typography>
            <Typography variant="h6">
              Clima: {item.weather[0].description}
            </Typography>
            <Typography variant="h6">Viento: {item.wind.speed} m/s</Typography>
            <Typography variant="h6">Humedad: {item.main.humidity}%</Typography>
          </div>
        );
      })}
    </div>
  );
};
