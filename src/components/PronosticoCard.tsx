import { IForecast } from "../interfaces/IClima.interface";
import { PronosticoItemCard } from "./PronosticoItemCard";

const PronosticoCard: React.FC<{ forecastData: IForecast["list"] }> = ({
  forecastData,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h4> Pronóstico para los próximos 5 días</h4>
        <div className="row">
          <PronosticoItemCard forecastData={forecastData} />
        </div>
      </div>
    </div>
  );
};

export default PronosticoCard;
