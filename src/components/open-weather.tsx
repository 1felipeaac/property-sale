import { useEffect, useState } from "react";
import type { GetWeatherByCityResponseProps } from "../models";
import { getWeatherByCity } from "../services/get-weather-by-city";
import { Today } from "./today";

export function OpenWeather(){

    const [data, setData] = useState<GetWeatherByCityResponseProps>({} as GetWeatherByCityResponseProps);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
       

        getWeatherByCity()
          .then((response) => {
            setData(response)
            })
          .finally(() => setIsLoading(false));

      }, []);

      if (isLoading) {
        return <div>Carregando...</div>
      }

      return (


      <div>
        <Today city="Timon" weather={data.today.weather} />
        {/* <Details data={data.today.details} /> */}
      </div>)
}