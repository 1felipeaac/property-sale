import dayjs from "dayjs";
import type {
  GetWeatherByCityResponseProps,
  NextDaysItemProps,
  TodayProps,
  WeatherAPIResponseProps,
} from "../models";
import { getNextDays } from "../utils/get-next-days";
import { weatherIcons } from "../utils/weatherIcons";
import { api } from "./open-weathermap";

export async function getWeatherByCity(): Promise<GetWeatherByCityResponseProps> {
  const { VITE_LOCATION_LATITUDE, VITE_LOCATION_LONGITUDE } = import.meta.env;

  const latitude = VITE_LOCATION_LATITUDE;
  const longitude = VITE_LOCATION_LONGITUDE;

  const { data } = await api.get<WeatherAPIResponseProps>(
    `/forecast?lat=${latitude}&lon=${longitude}`
  );
  const { main, weather, wind, pop } = data.list[0];

  const today: TodayProps = {
    weather: {
      temp: Math.ceil(main.temp),
      temp_min: Math.floor(main.temp_min),
      temp_max: Math.ceil(main.temp_max),
      description: weather[0].description,
      details: weatherIcons[weather[0].main],
    },
    details: {
      feels_like: Math.floor(main.feels_like),
      probability: pop * 100,
      wind_speed: wind.speed,
      humidity: main.humidity,
      temp_kf: Math.floor(main.temp_kf),
    },
  };

  const days = getNextDays();
  const daysAdded: string[] = [];
  const nextDays: NextDaysItemProps[] = [];

  data.list.forEach((item) => {
    const day = dayjs(new Date(item.dt_txt)).format("DD/MM");

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day);

      const status = item.weather[0].main;

      const details = weatherIcons[status ?? "Clouds"];

      nextDays.push({
        day: dayjs(new Date(item.dt_txt)).format("ddd"),
        min: Math.floor(item.main.temp_min),
        max: Math.ceil(item.main.temp_max),
        weather: item.weather[0].description,
        icon: details.icon_day,
      });
    }
  });

  return { today, nextDays };
}
