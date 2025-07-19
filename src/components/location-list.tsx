import Neighborhood from "../assets/icons/map-pin.svg?react";
import LocationDetails from "./location-details";
import {location} from '../utils/lists'


const className =
  "flex min-w-3xs items-center justify-items-end gap-2 border-2 border-green-100";

export default function LocationList() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 max-w-2xl">
      <LocationDetails
        svg={Neighborhood}
        text="Travessa Aquiles Lisboa, 501 - Bairro Mangueira"
        className="flex items-center justify-center"
        iconClassName="fill-green-100"
      />
      <p className="text-center uppercase">Pontos de Referência</p>
      <>
        {location.map((local) => (
          <span
            className="flex justify-center items-center gap-2"
            key={local.refer + local.icon_distance}
          >
            <LocationDetails
              className={className}
              iconClassName="fill-green-100"
              svg={local.icon_refer}
              text={local.refer}
            />
            <LocationDetails
              className={className}
              iconClassName="fill-green-100"
              svg={local.icon_distance}
              text={local.distance}
            />
          </span>
        ))}
      </>
    </div>
  );
}
