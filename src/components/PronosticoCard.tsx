import { IForecast } from "../interfaces/IClima.interface";
import { PronosticoItemCard } from "./PronosticoItemCard";

const PronosticoCard: React.FC<{ forecastData: IForecast["list"] }> = ({
  forecastData,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h4> Pronóstico de 5 días</h4>
        <PronosticoItemCard forecastData={forecastData} />
      </div>
    </div>
  );
};

export default PronosticoCard;
