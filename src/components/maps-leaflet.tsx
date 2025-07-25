import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pin from "../assets/icons/pin.svg";
import { useState } from "react";
import L from "leaflet";
import Button from "./button";
import Map from "../assets/icons/map.svg?react";
import Globe from "../assets/icons/globe.svg?react";
import Text from "./text";

const { VITE_LOCATION_LATITUDE, VITE_LOCATION_LONGITUDE } = import.meta.env;

const center = { lat: VITE_LOCATION_LATITUDE, lng: VITE_LOCATION_LONGITUDE };

const customIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [50, 40],
  iconAnchor: [23, 40],
});

export default function MapLeaflet() {
  const [satellite, setSatellite] = useState(false);

  const icon = satellite ? Map : Globe;

  const mapLayers = {
    osm: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    esri: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics",
    },
  };

  const currentLayer = satellite ? mapLayers.esri : mapLayers.osm;

  return (
    <div className="flex w-full flex-col gap-2 mt-1 md:mt-1 items-center relative">
      <MapContainer
        className="w-full h-50 md:h-90 relative z-0 m-1 md:m-4"
        center={center}
        zoom={17}
        scrollWheelZoom={true}
        maxZoom={19}
      >
        <TileLayer
          attribution={currentLayer.attribution}
          url={currentLayer.url}
          maxZoom={19}
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            Imóvel localizado aqui! <br /> Rua tranquila. A Poucos metros da Av.
            Piauí
          </Popup>
        </Marker>
        <div className="leaflet-top leaflet-left mt-20 ml-2 z-[1000] absolute">
          <Button
            icon={icon}
            iconClassName="fill-black w-6"
            onClick={() => setSatellite((prev) => !prev)}
            className={`
              pointer-events-auto
              cursor-pointer
              bg-white text-sm text-black
              rounded-sm
              flex items-center justify-center pl-1 pr-1
              border-1 border-gray-shadow shadow
              hover:bg-gray-100
              ml-0.5
            `}
          >
            <Text>{satellite}</Text>
          </Button>
        </div>
      </MapContainer>
    </div>
  );
}
