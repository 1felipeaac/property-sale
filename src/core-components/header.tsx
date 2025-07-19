import faxada from "../assets/faxada.png";
import { OpenWeather } from "../components/open-weather";

export default function Header() {
  return (
    <>
      <header
        className="relative h-40 md:h-80 mt-5 md:mt-5 bg-center bg-cover"
        style={{ backgroundImage: `url(${faxada})` }}
      >
        <OpenWeather />
          <div className="h-40 ml-2 flex flex-col items-end justify-start p-5 gap-4">
            <h1 className="text-black text-3xl bg-gray-100/60 p-1.5">
              Imóvel à venda direto com o proprietário
            </h1>
          </div>
      </header>
    </>
  );
}
