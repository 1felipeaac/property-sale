import Neighborhood from "../assets/icons/map-pin.svg?react";
import LocationDetails from "./location-details";
import { location } from "../utils/lists";


export default function LocationList() {
  return (
    <div className="flex flex-col gap-1.5 md:gap-3 md:w-200 m-1 md:m-4">
      <LocationDetails
        svg={Neighborhood}
        text="Travessa Aquiles Lisboa, 501 - Bairro Mangueira"
        className="flex items-center justify-center"
        iconClassName="fill-blue"
      />
      <p className="text-center uppercase text-1xl md:text-2xl">Pontos de Referência</p>

      {location.map((local) => (
        <span
          className="flex w-full gap-2"
          key={local.refer + local.icon_distance}
        >
          <LocationDetails
            className={"flex md:flex-1 items-center justify-start gap-2 min-w-60 "}
            iconClassName="fill-blue"
            svg={local.icon_refer}
            text={local.refer}
          />
          <LocationDetails
            className={"flex items-center justify-end gap-2 min-w-25"}
            iconClassName="fill-blue"
            svg={local.icon_distance}
            text={local.distance}
          />
        </span>
      ))}
    </div>
  );
}
