import Details from "./details";
import Text from "./text";
import { details } from "../utils/lists";

export default function ListDetails() {
  return (
    <div className="flex justify-center flex-col 
      md:flex-row md:gap-3 items-center border-2 h-full 
      border-white rounded-xl bg-white p-1.5"
    >
      <Text as="h1" className="text-center uppercase text-1xl md:text-2xl md:border-r-2 md: border-r-purple-bold pr-2 text-purple-bold">Detalhes</Text>
      <div>
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
    </div>
  );
}
