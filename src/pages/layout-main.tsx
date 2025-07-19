import ListDetails from "../components/list-details";
import LocationList from "../components/location-list";
import MapLeaflet from "../components/maps-leaflet";
import Slider from "../components/slider";
import Text from "../components/text";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

import ContactUs from "../components/contact";

export default function LayoutMain() {
  return (
    <div className="h-screen m-5 w-6xl">
      <Header />
      <MainContent>
        <Text as="h2" className={"flex justify-center bg-blue"}>
          Localização
        </Text>
        <div className="flex items-center justify-around gap-4">
          <MapLeaflet />
          <LocationList />
        </div>
        <Text as="h2" className={"flex justify-center bg-purple-bold mt-1.5"}>
          Detalhes
        </Text>
        <div className="grid grid-cols-2 mt-3">
          <Slider />
          <ListDetails />
        </div>
        <Text as="h2" className={"flex justify-center bg-green-light mt-1.5"}>
          Entre em Contato
        </Text>
        <ContactUs />
      </MainContent>
      <Footer />
    </div>
  );
}
