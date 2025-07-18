import type { WeatherIconsKeyProps, weatherIcons } from "../utils/weatherIcons"

export interface Data{
    location: Location
    current: Current
}

export interface Location{
    name: string
    country: string
    region: string
    localtime: string
}

export interface Current{
    temperature: number
    weather_icons: string[]
    weather_descriptions: string[]
}

export interface WeatherAPIResponseProps{
    list:{
      pop: number;
      dt_txt: string;
      main: dataMain;
      weather:{
        main: WeatherIconsKeyProps;
        description: string;
      }[];
      wind:{
        speed: number;
      };
    }[]
  }
  
  export interface dataMain{
    probability: number;
    wind_speed: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    temp_kf: number;
    feels_like: number;
  }
  
  export interface WeatherResponseProps{
    temp: number,
    temp_min: number,
    temp_max: number,
    description: string,
    details: typeof weatherIcons['Clear'],
  }
  
  export interface DetailsResponseProps {
    feels_like: number,
    probability: number,
    wind_speed: number,
    humidity: number,
    temp_kf: number
  }
  
  export interface TodayProps{
    weather: WeatherResponseProps;
    details: DetailsResponseProps;
  }
  
  export interface GetWeatherByCityResponseProps{
    city?:CityProps
    today: TodayProps;
    nextDays: NextDaysItemProps[];
  
  }

  export type NextDaysItemProps ={
    day: string
    icon: string
    weather: string
    min: number
    max: number
}

export interface CityProps{
    id: string;
    name: string;
    latitude: number;
    longitude: number;
  }
  
  export interface CityAPIResponse{
    id: string;
    name: string;
    sys:{
      country?: string;
    };
    coord:{
      lat: number;
      lon: number;
    }
  }