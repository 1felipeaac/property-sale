import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Terreno from "../assets/contorno-terreno.png";
import Area_Construida from "../assets/areas-construidas.png";

export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slides: {
        perView: 1,
    }
  });
  return (
    <div ref={ref} className="keen-slider w-full max-w-80 mx-auto">
      <div className="keen-slider__slide number-slide1">
        <img
          className="max-h-60 w-full object-cover"
          src={Terreno}
          alt="Terreno"
        />
        <p className="text-center">🟨: ~600m²</p>
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          className="max-h-60 w-full object-cover"
          src={Area_Construida}
          alt="Area Construida"
        />
        <p className="text-center">🟩: ~198m² | 🟦: ~43m² | 🟥: ~67m²</p>
      </div>
    </div>
  );
}
