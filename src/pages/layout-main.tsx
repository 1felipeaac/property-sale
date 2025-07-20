import ListDetails from "../components/list-details";
import LocationList from "../components/location-list";
import MapLeaflet from "../components/maps-leaflet";
import Slider from "../components/slider";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

import ContactUs from "../components/contact";

export default function LayoutMain() {
  const { VITE_CONTATO_1, VITE_CONTATO_2 } = import.meta.env;
  return (
    <div className="h-screen m-5">
      <Header />
      <MainContent className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row items-center justify-around gap-4">
          <MapLeaflet />
          <LocationList />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          <Slider />
          <ListDetails />
        </div>
        <div 
          className="flex flex-col 
            md:flex-row items-center 
            justify-evenly gap-4 w-full 
            border-2 border-green-light mt-5"
        >
          <ContactUs phone={VITE_CONTATO_1} msg="Falar com o Proprietário" />
          <ContactUs phone={VITE_CONTATO_2} msg="Contato Local" />
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}
