import ListDetails from "../components/list-details";
import LocationList from "../components/location-list";
import MapLeaflet from "../components/maps-leaflet";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";
import DropdownContatos from "../components/dropdown";
import Carousel from "../components/carousel";
import { contatosList } from "../utils/lists";

export default function LayoutMain() {

  return (
    <div className="h-full m-1 md:m-5 flex flex-col">
      <Header />
      <MainContent className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4">
          <MapLeaflet />
          <LocationList />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-5 gap-1 md:gap-4">
          <Carousel />
          <ListDetails />
        </div>

        <div
          className="fixed bottom-10 right-6 z-50"
        >
          <DropdownContatos contatos={contatosList}/>
        </div>
      </MainContent>
      <Footer/>
    </div>
  );
}
