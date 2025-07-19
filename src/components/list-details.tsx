import Details from "./details";
import { details } from "../utils/lists";

const classNameProps = "fill-purple-hover min-h-4";


export default function ListDetails() {
  return (
    <span className="grid grid-cols-2 gap-4 max-w-4xl min-h-2.5 h-56 px-2 justify-items-center">
      {details.map((detail) => (
        <Details
          key={detail.title + detail.description}
          className={classNameProps}
          svg={detail.svg}
          title={detail.title}
          description={detail.description}
        />
      ))}
    </span>
  );
}
