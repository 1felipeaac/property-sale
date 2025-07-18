import dayjs from "dayjs";
import type { WeatherResponseProps } from "../models";
import { isDayTime } from "../utils/is-day-time";
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

interface TodayProps{
    city: string;
    weather: WeatherResponseProps;
  }
  
  export function Today({ city, weather }: TodayProps) {
    const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY');
    const capitalized = today.charAt(0).toUpperCase() + today.slice(1);
    const isDay = isDayTime();
  
    const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
    const icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;
  
    return (
      <section className="">
  
        <div className="flex items-center p-1 justify-around max-h-18 opacity-75" style={{ backgroundImage: `url(${bgImg})` }}>
          <header className="flex flex-col items-center">
            <h3>{city}</h3>
            <p>{capitalized}</p>
          </header>
  
          <footer className="flex items-center">
            <h1>{weather?.temp}ºc</h1>
            <img src={icon} alt="Tempo" />
          </footer>
  
          <p>
            {weather?.temp_min}ºc / {weather?.temp_max}ºc <span>&#8226;</span> {weather.description}
          </p>
        </div>
      </section>
    )
  }