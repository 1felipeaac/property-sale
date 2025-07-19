import Neighborhood from "../assets/icons/map-pin.svg?react";
import LocationDetails from "./location-details";
import { location } from "../utils/lists";


export default function LocationList() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <LocationDetails
        svg={Neighborhood}
        text="Travessa Aquiles Lisboa, 501 - Bairro Mangueira"
        className="flex items-center justify-center"
        iconClassName="fill-blue"
      />
      <p className="text-center uppercase">Pontos de Referência</p>

      {location.map((local) => (
        <span
          className="flex w-full justify-center items-center gap-2"
          key={local.refer + local.icon_distance}
        >
          <LocationDetails
            className={"flex flex-1 items-center justify-items-end gap-2"}
            iconClassName="fill-blue"
            svg={local.icon_refer}
            text={local.refer}
          />
          <LocationDetails
            className={"flex items-center justify-items-end gap-2"}
            iconClassName="fill-blue"
            svg={local.icon_distance}
            text={local.distance}
          />
        </span>
      ))}
    </div>
  );
}
