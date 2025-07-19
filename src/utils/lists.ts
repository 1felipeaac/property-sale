import Bridge from "../assets/icons/bridge.svg?react";
import Ruler from "../assets/icons/ruler.svg?react";
import Market from "../assets/icons/shopping-cart.svg?react";
import City from "../assets/icons/city.svg?react";

import Garage from "../assets/icons/garage.svg?react";
import House from "../assets/icons/house.svg?react";
import Room from "../assets/icons/room.svg?react";
import Size from "../assets/icons/size.svg?react";

export const location = [
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

export const details = [
  {
    svg: Size,
    title: "Terreno",
    description: "360m²",
  },
  {
    svg: House,
    title: "Construção",
    description: "160m²",
  },
  {
    svg: Room,
    title: "Quartos",
    description: "2",
  },
  {
    svg: Garage,
    title: "Garagem",
    description: "1",
  },
];
