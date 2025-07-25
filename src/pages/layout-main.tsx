import ListDetails from "../components/list-details";
import LocationList from "../components/location-list";
import MapLeaflet from "../components/maps-leaflet";
import Slider from "../components/slider";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";
import DropdownContatos from "../components/dropdown";
import { env } from "../env";
import type { ContactUsProps } from "../components/contact";

export default function LayoutMain() {
  const { VITE_CONTATO_1, VITE_CONTATO_2 } = env;

  const contato1:ContactUsProps = { phone: VITE_CONTATO_1, msg: "Proprietário"}
  const contato2:ContactUsProps = { phone: VITE_CONTATO_2, msg: "Contato Local"}

  return (
    <div className="h-full m-1 md:m-5 flex flex-col">
      <Header />
      <MainContent className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-around gap-1 md:gap-4">
          <MapLeaflet />
          <LocationList />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-5 gap-1 md:gap-4">
          <Slider />
          <ListDetails />
        </div>

        <div
          className="flex md:flex-row
            justify-end gap-1 md:gap-4 w-full
            "
        >
          <DropdownContatos contatos={[contato1, contato2]}/>
        </div>
      </MainContent>
      <Footer/>
    </div>
  );
}
