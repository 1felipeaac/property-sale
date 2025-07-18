import {
    Marker,
    Popup,
    MapContainer,
    TileLayer,
  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import pin from '../assets/icons/pin.svg'
import { useState } from 'react';
import L from 'leaflet';
import Button from './button';
import Map from '../assets/icons/map.svg?react'
import Globe from '../assets/icons/globe.svg?react'


  const center = { lat: -5.102512, lng: -42.819861 };

  const customIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [50, 40],
    iconAnchor: [23, 40]
  })
  
  export default function MapaLeaflet() {

    const [satellite, setSatellite] = useState(false);

    const icon = satellite ? Map : Globe

    const mapLayers = {
        osm: {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
        esri: {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          attribution:
            'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics',
        },
      };
    
      const currentLayer = satellite ? mapLayers.esri : mapLayers.osm;

    return (
        <div className="flex flex-col gap-2 mt-1 md:mt-1 items-center">
        <MapContainer
            className="h-60 w-80"
            center={center}
            zoom={17}
            scrollWheelZoom={true}
            // style={{ width: '20rem', height: '15rem' }}
            maxZoom={19}
        >
            <TileLayer
                attribution={currentLayer.attribution}
                url={currentLayer.url}
            maxZoom={19}
            />
            <Marker 
                position={center} 
                icon={customIcon}
            >
            <Popup>
                Terreno localizado aqui! <br /> Rua tranquila. A Poucos metros da Av. Piauí
            </Popup>
            </Marker>
        </MapContainer>
        <Button 
          icon={icon} 
          onClick={() => setSatellite((prev) => !prev)}
          className={`
            bg-gray-200
            text-gray-100
            cursor-pointer 
            flex items-center justify-center
            max-w-fit
            p-1 rounded-xl
          `}
        >
          {satellite ? 'Mapa' : 'Satélite'}
        </Button>
        </div>
    );
  }
  