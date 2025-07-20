import Details from "./details";
import Text from "./text";
import { details } from "../utils/lists";

export default function ListDetails() {
  return (
    <div>
      <Text as="h1" className="text-center text-2xl">Detalhes</Text>
      <span className="grid grid-cols-2 gap-3 p-2 justify-items-center">
        {details.map((detail) => (
          <Details
            key={detail.title + detail.description}
            className={"fill-purple-bold min-h-4"}
            svg={detail.svg}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </span>
    </div>
  );
}
