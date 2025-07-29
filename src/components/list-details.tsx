import Details from "./details";
import Text from "./text";
import { details } from "../utils/lists";

export default function ListDetails() {
  return (
    <div className="">
      <Text as="h1" className="text-center uppercase text-1xl md:text-2xl">Detalhes</Text>
      <span className="grid grid-cols-3 md:grid-cols-2 gap-1 md:gap-3 justify-items-center">
        {details.map((detail) => (
          <Details
            key={detail.title + detail.description}
            className={"fill-purple-bold min-h-4 border-2 rounded-md border-purple-bold"}
            svg={detail.svg}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </span>
    </div>
  );
}
