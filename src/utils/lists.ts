import Bridge from "../assets/icons/bridge.svg?react";
import Ruler from "../assets/icons/ruler.svg?react";
import Market from "../assets/icons/shopping-cart.svg?react";
import City from "../assets/icons/city.svg?react";

import Garage from "../assets/icons/garage.svg?react";
// import House from "../assets/icons/house.svg?react";
// import Size from "../assets/icons/size.svg?react";
import Room from "../assets/icons/room.svg?react";
import Bath from "../assets/icons/toilet.svg?react";
import Hall from "../assets/icons/television-simple.svg?react";
import kitchen from "../assets/icons/cooking-pot.svg?react";

export const location = [
  {
    icon_refer: Bridge,
    refer: "Ponte da Amizade",
    icon_distance: Ruler,
    distance: "~0,6km",
  },
  {
    icon_refer: Market,
    refer: "Shopping/Supermercado",
    icon_distance: Ruler,
    distance: "~1,3km",
  },
  {
    icon_refer: Bridge,
    refer: "Ponte Metálica",
    icon_distance: Ruler,
    distance: "~1,8km",
  },
  {
    icon_refer: City,
    refer: "Centro de Teresina",
    icon_distance: Ruler,
    distance: "~2,5km",
  },
  {
    icon_refer: Bridge,
    refer: "Ponte Nova (Tabuleta)",
    icon_distance: Ruler,
    distance: "~4,3km",
  },
];

export const details = [
  // {
  //   svg: Size,
  //   title: "Terreno",
  //   description: "~600m²",
  // },
  // {
  //   svg: House,
  //   title: "Construção",
  //   description: "~308m²",
  // },
  {
    svg: Room,
    title: "Suite",
    description: "3",
  },
  {
    svg: Hall,
    title: "Sala",
    description: "2",
  },
  {
    svg: kitchen,
    title: "Cozinha",
    description: "1",
  },
  {
    svg: Bath,
    title: "Banheiro",
    description: "1",
  },
  {
    svg: Garage,
    title: "Garagem",
    description: "2",
  },
];
