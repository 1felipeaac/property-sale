import Details from "./details";

import Garage from "../assets/icons/garage.svg?react";
import House from "../assets/icons/house.svg?react";
import Room from "../assets/icons/room.svg?react";
import Size from "../assets/icons/size.svg?react";

const classNameProps = "fill-purple-hover min-h-4";

const details = [
  {
    clasName: classNameProps,
    svg: Size,
    title: "Terreno",
    description: "360m²",
  },
  {
    clasName: classNameProps,
    svg: House,
    title: "Construção",
    description: "160m²",
  },
  {
    clasName: classNameProps,
    svg: Room,
    title: "Quartos",
    description: "2",
  },
  {
    clasName: classNameProps,
    svg: Garage,
    title: "Garagem",
    description: "1",
  },
];

export default function ListDetails() {
  return (
    <span className="grid grid-cols-2 gap-4 max-w-4xl min-h-2.5 h-56 px-2 justify-items-center">
      {details.map((detail) => (
        <Details
          key={detail.title + detail.description}
          className={detail.clasName}
          svg={detail.svg}
          title={detail.title}
          description={detail.description}
        />
      ))}
    </span>
  );
}
