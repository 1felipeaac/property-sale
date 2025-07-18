import Garage from "../assets/icons/garage.svg?react";
import House from "../assets/icons/house.svg?react";
import Room from "../assets/icons/room.svg?react";
import Size from "../assets/icons/size.svg?react";
import Details from "../components/details";
import MapaLeaflet from "../components/maps-leaflet";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

const classNameProps = "fill-purple-hover min-h-4"

const details = [
  {
    clasName: classNameProps,
    svg: Size,
    title: "Terreno",
    description: "360m²"
  },
  {
    clasName: classNameProps,
    svg: House,
    title: "Construção",
    description: "160m²"
  },
  {
    clasName: classNameProps,
    svg: Room,
    title: "Quartos",
    description: "2"
  },
  {
    clasName: classNameProps,
    svg: Garage,
    title: "Garagem",
    description: "1"
  },
]

export default function LayoutMain() {
  return (
    <div className="h-screen m-5 w-6xl">
      <Header />
      <MainContent>
        <div className="flex items-center justify-center gap-4">
          Detalhes do Imóvel
        </div>
        <div className="flex justify-evenly items-center">
          <span className="grid grid-cols-2 gap-4 max-w-4xl min-h-2.5 h-56 px-2 justify-items-center">
            {details.map(detail => 
              <Details 
                key={detail.title + detail.description} 
                className={detail.clasName} 
                svg={detail.svg}
                title={detail.title}
                description={detail.description}
              />
              )}
          </span>
          <MapaLeaflet />
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}
