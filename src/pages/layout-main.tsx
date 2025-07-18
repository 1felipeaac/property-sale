import ListDetails from "../components/list-details";
import LocationDetails from "../components/location-details";
import MapLeaflet from "../components/maps-leaflet";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";


export default function LayoutMain() {
  return (
    <div className="h-screen m-5 w-6xl">
      <Header />
      <MainContent>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2>Localização</h2>
          <div className="flex justify-evenly items-center">
            <LocationDetails/>
            <MapLeaflet />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2>Detalhes</h2>
          <ListDetails/>
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}
