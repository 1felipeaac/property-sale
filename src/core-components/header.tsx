import faxada from "../assets/faxada.png";
import { OpenWeather } from "../components/open-weather";
import Text from "../components/text";

export default function Header() {
  return (
    <>
      <OpenWeather />
      <header
        className="relative h-20 md:h-80 bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${faxada})` }}
      >
        <Text as="h1" className="text-black text-1xl md:text-5xl bg-white/40 p-1.5 rounded-sm">
          Terreno à venda direto com o proprietário
        </Text>
      </header>
    </>
  );
}
