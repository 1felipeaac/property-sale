import ReferencePointDetails from "./reference-point-details";

import Neighborhood from "../assets/icons/map-pin.svg?react";
import Bridge from "../assets/icons/bridge.svg?react";
import Ruler from "../assets/icons/ruler.svg?react";
import Market from "../assets/icons/shopping-cart.svg?react";
import City from "../assets/icons/city.svg?react";

const location = [
  {
    icon_refer: Bridge,
    refer: "Ponte da Amizade",
    icon_distance: Ruler,
    distance: "~600m",
  },
  {
    icon_refer: Market,
    refer: "Shopping/Supermercado",
    icon_distance: Ruler,
    distance: "~1300m",
  },
  {
    icon_refer: Bridge,
    refer: "Ponte Metálica",
    icon_distance: Ruler,
    distance: "~1800m",
  },
  {
    icon_refer: City,
    refer: "Centro de Teresina",
    icon_distance: Ruler,
    distance: "~2500m",
  },
  {
    icon_refer: Bridge,
    refer: "Ponte Nova (Tabuleta)",
    icon_distance: Ruler,
    distance: "~4300m",
  },
];

const classNameRefer = "flex items-center gap-2"

export default function LocationDetails() {
  return (
    <div className="m-0">
      <ReferencePointDetails
        className="flex items-center"
        as="h1"
        svg={Neighborhood}
      >
        Travessa Aquiles Lisboa, 501 - Bairro Mangueira
      </ReferencePointDetails>
      <span className="flex flex-col gap-0.5">
        <p className="text-center uppercase">Pontos de Referência</p>
        {location.map((local) => (
          <span className="grid grid-cols-2 justify-items-center" key={local.refer + local.icon_distance}>
            <div>
              <ReferencePointDetails className={classNameRefer} svg={local.icon_refer}>
                {local.refer}
              </ReferencePointDetails>
            </div>
            <div>
              <ReferencePointDetails className={classNameRefer} svg={local.icon_distance}>
                {local.distance}
              </ReferencePointDetails>
            </div>
          </span>
        ))}
      </span>
    </div>
  );
}
