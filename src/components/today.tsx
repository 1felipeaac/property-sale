import dayjs from "dayjs";
import type { WeatherResponseProps } from "../models";
import { isDayTime } from "../utils/is-day-time";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

interface TodayProps {
  city: string;
  weather: WeatherResponseProps;
}

export function Today({ city, weather }: TodayProps) {
  const today = dayjs(new Date()).format("dddd, DD [de] MMMM [de] YYYY");
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;

  return (
      <div
        className={`flex items-center p-1 justify-around h-10 md:h-20 opacity-75 ${
          !isDay ? "text-yellow" : "text-black"
        }`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <header className="flex flex-col items-start">
          <h3>{city}</h3>
          <p className="capitalize hidden md:block">{today}</p>
        </header>

        <main className="flex items-center justify-center">
          <h1>{weather?.temp}ºc</h1>
          <img className="w-20 md:w-full" src={icon} alt="Tempo" />
        </main>

        <footer>
          <h3 className="capitalize hidden md:block">{weather?.temp_min}ºc / {weather?.temp_max}ºc</h3>
          <p className="capitalize">{weather.description}</p>
        </footer>
      </div>
  );
}
