import type { CityProps, CityAPIResponse } from "../models";
import { api } from "./open-weathermap";

export async function getCityByNameService(cityName:string): Promise<CityProps[]> {
    try {
      const { data } = await api.get<CityAPIResponse>(`/weather?q=${cityName}`);
  
      const city:CityProps = {
        id: data.id,
        name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
        longitude: data.coord.lon,
        latitude: data.coord.lat,
      };


      return [city];
    } catch (error) {
      return [];
    }
  }