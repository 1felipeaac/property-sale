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
  const today = dayjs(new Date()).format("dddd, DD/MM/YYYY");
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;

  return (
    <div
      className={`flex items-center justify-around h-10 md:h-15 transition-colors duration-300 ${
        !isDay
          ? "text-amber-400 opacity-90 drop-shadow-md"
          : "text-slate-900 opacity-80"
      } p-2 rounded-lg shadow-sm bg-cover bg-center w-full max-w-30 md:max-w-sm`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <header className="flex w-full justify-center items-center md:w-3xs md:flex-col md:gap-1">
        <span className="flex items-center gap-2">
          <h1 className="font-heading font-bold text-sm md:text-lg text-center flex-1">
            {city}
          </h1>
          <h3 className="font-heading font-bold text-sm hidden md:block">
            {weather?.temp}ºc
          </h3>
        </span>
        <p className="capitalize hidden md:block text-xs">{today}</p>
      </header>

      <main className="flex items-center justify-center">
        <img className="w-15 md:w-20" src={icon} alt="Tempo" />
      </main>

      <footer className="md:flex md:items-center md:gap-4">
        <div className="capitalize text-xs flex flex-col justify-center">
          <span className="text-indigo-500">{weather?.temp_min}ºc</span>
          <span className="text-rose-600">{weather?.temp_max}ºc</span>
        </div>
        <p className="capitalize text-xs hidden md:block">
          {weather.description}
        </p>
      </footer>
    </div>
  );
}
