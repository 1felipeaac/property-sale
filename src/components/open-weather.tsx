import { useEffect, useState } from "react";
import type { GetWeatherByCityResponseProps } from "../models";
import { getWeatherByCity } from "../services/get-weather-by-city";
import { Today } from "./today";
import Spinner from "../assets/icons/spinner.svg?react";
import Icon from "./icon";

export function OpenWeather() {
  const [data, setData] = useState<GetWeatherByCityResponseProps>(
    {} as GetWeatherByCityResponseProps
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getWeatherByCity()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.error("Erro ao buscar clima:", err);
        setError("⚠️ Erro ao carregar os dados do clima. Atualize a página!");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-2 mb-2">
        <Icon className="animate-spin" svg={Spinner} />
      </div>
    );
  }

  if (error) {
    return <div className="flex justify-center text-red-error mt-2 mb-2">{error}</div>;
  }

  return (
    <div>
      <Today city="Timon" weather={data.today.weather} />
    </div>
  );
}
