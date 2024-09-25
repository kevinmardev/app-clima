import { Grid, Grid2, Typography } from "@mui/material";
import { IForecast } from "../interfaces/IClima.interface";

export const PronosticoItemCard: React.FC<{
  forecastData: IForecast["list"];
}> = ({ forecastData }) => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ padding: 2, backgroundColor: "#e3f2fd", borderRadius: 2 }}
    >
      {forecastData.map((item, index) => (
        <Grid
          item
          sx={{
            padding: 2,
            backgroundColor: "#e3f2fd",
            borderRadius: 2,
            color: "black",
            background: "green",
          }}
          key={index}
        >
          {" "}
          {/* item debe ser utilizado aquí */}
          <Typography variant="h6">
            {new Date(item.dt_txt).toLocaleDateString()}
          </Typography>
          <Typography variant="h6">Temperatura: {item.main.temp}°C</Typography>
          <Typography variant="h6">
            Clima: {item.weather[0].description}
          </Typography>
          <Typography variant="h6">Viento: {item.wind.speed} m/s</Typography>
          <Typography variant="h6">Humedad: {item.main.humidity}%</Typography>
        </Grid>
      ))}
    </Grid2>
  );
};
