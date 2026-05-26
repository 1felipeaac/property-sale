import Details from "./details";
import Text from "./text";
import { details } from "../utils/lists";

export default function ListDetails() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Text as="h2" className="text-2xl md:text-3xl font-heading font-bold text-slate-900 border-b border-slate-200 pb-3">
        Visão Geral do Imóvel
      </Text>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-2">
        {details.map((detail) => (
          <Details
            key={detail.title + detail.description}
            svg={detail.svg}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </div>
    </div>
  );
}