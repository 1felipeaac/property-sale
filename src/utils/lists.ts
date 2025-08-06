import Bridge from "../assets/icons/bridge.svg?react";
import Ruler from "../assets/icons/ruler.svg?react";
import Market from "../assets/icons/shopping-cart.svg?react";
import City from "../assets/icons/city.svg?react";

import Garage from "../assets/icons/garage.svg?react";
import Room from "../assets/icons/room.svg?react";
import Bath from "../assets/icons/toilet.svg?react";
import Hall from "../assets/icons/television-simple.svg?react";
import kitchen from "../assets/icons/cooking-pot.svg?react";

import Terreno from "../assets/contorno-terreno.png";
import Area_Construida from "../assets/areas-construidas.png";
import { env } from "../env";

const { VITE_CONTATO_1, VITE_CONTATO_2 } = env;

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

export const contatosList = [
  { phone: VITE_CONTATO_1, msg: "Proprietário"},
  { phone: VITE_CONTATO_2, msg: "Contato Local"}
]

export const carouselList =[
  {
    svg: Terreno,
    alt: "Terreno",
    desc: "🟨: Terreno",
  },
  {
    svg: Area_Construida,
    alt: "Área Construída",
    desc: "🟩: Casa | 🟦: Loja | 🟥: Área de Serviço",
  },

]