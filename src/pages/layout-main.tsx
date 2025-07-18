import Garage from "../assets/icons/garage.svg?react";
import House from "../assets/icons/house.svg?react";
import Room from "../assets/icons/room.svg?react";
import Size from "../assets/icons/size.svg?react";
import Details from "../components/details";
import Map from "../components/map";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

export default function LayoutMain() {
  return (
    <div className="h-screen m-5 w-6xl">
      <Header />
      <MainContent>
        <div className="flex items-center justify-center gap-4">
          Detalhes do Imóvel
        </div>
        <div className="flex justify-center gap-7">
          <span className="grid grid-cols-2 gap-2 max-w-4xl px-2 justify-items-center">
            <Details
              className="fill-purple-hover min-h-4"
              svg={Size}
              title="Terreno"
              description="360m²"
            />
            <Details
              className="fill-purple-hover min-h-4"
              svg={House}
              title="Construção"
              description="150m²"
            />
            <Details
              className="fill-purple-hover min-h-4"
              svg={Room}
              title="Quartos"
              description="3"
            />
            <Details
              className="fill-purple-hover min-h-4"
              svg={Garage}
              title="Garagem"
              description="1"
            />
          </span>
          <Map />
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}
