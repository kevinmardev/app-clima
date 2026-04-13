import { Card, CardContent, Grid, Typography } from "@mui/material";
import { WbSunny, Cloud, Air, Water } from "@mui/icons-material";
import { Thermostat, AcUnit } from "@mui/icons-material";
import { IClima } from "../interfaces/IClima.interface";

// Desestructuramos el prop `weatherData` que es de tipo `IClima | null`
const ClimaCard: React.FC<{ weatherData: IClima | null }> = ({
  weatherData,
}) => {
  if (!weatherData) {
    // Si no hay datos, retornamos null o un mensaje opcional

    return (
      <Typography variant="h6" color="error">
        No hay datos de clima disponibles.
      </Typography>
    );
  }
  let icon;

  // Determina qué ícono usar basado en la temperatura
  if (weatherData.main.temp > 30) {
    icon = <WbSunny fontSize="large" color="warning" />; // Sol para temperaturas altas
  } else if (weatherData.main.temp < 0) {
    icon = <AcUnit fontSize="large" color="info" />; // Copo de nieve para temperaturas bajas
  } else {
    icon = <Thermostat fontSize="large" />; // Termómetro para temperaturas moderadas
  }

  return (
    <Card
      sx={{
        margin: 2,
      }}
    >
      <CardContent sx={{ justifyContent: "center" }}>
        <Typography variant="h4" component="div">
          <div className="row">Ciudad: {weatherData.name}</div>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">
              <div className="row">
                <span>{icon}</span>
                Temperatura: {weatherData.main.temp}°C
              </div>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              <div className="row">País: {weatherData.sys.country}</div>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              <div className="row">
                <Cloud fontSize="medium" />
                Clima: {weatherData.weather[0]?.description}
              </div>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              <div className="row">
                <Air fontSize="large" />
                Viento: {weatherData.wind.speed} m/s
              </div>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              <div className="row">
                <Water fontSize="large" />
                Humedad: {weatherData.main.humidity}%
              </div>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ClimaCard;
