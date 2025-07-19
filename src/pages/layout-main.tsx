import ListDetails from "../components/list-details";
import LocationList from "../components/location-list";
import MapLeaflet from "../components/maps-leaflet";
import Text from "../components/text";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

export default function LayoutMain() {
  return (
    <div className="h-screen m-5 w-6xl">
      <Header />
      <MainContent>
        <Text as="h2" className={"flex justify-center bg-green-100"}>Localização</Text>
        <div className="flex items-center justify-around gap-4">
          <MapLeaflet />
          <LocationList />
        </div>
        <Text as="h2" className="text-center">Detalhes</Text>
        <div className="flex flex-col items-center justify-center gap-4">
          <ListDetails />
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}
