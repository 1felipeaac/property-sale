import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";

import Terreno from "../assets/contorno-terreno.png";
import Area_Construida from "../assets/areas-construidas.png";
import Arrow_Left from "../assets/icons/arrow-left.svg?react";
import Arrow_Right from "../assets/icons/arrow-right.svg?react";
import Icon from "./icon";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slides: {
      perView: 1,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="flex flex-col relative w-full mx-auto justify-center">
      <div ref={slideRef} className="keen-slider pt-2">
        <div className="keen-slider__slide number-slide1 flex justify-center flex-col items-center">
          <img
            className="h-auto max-w-[540px] w-full object-cover mx-auto"
            src={Terreno}
            alt="Terreno"
          />
          <p className="text-center">🟨: ~600m² (20mx30m)</p>
        </div>
        <div className="keen-slider__slide number-slide2">
          <img
            className="h-auto max-w-[500px] w-full object-cover mx-auto"
            src={Area_Construida}
            alt="Area Construida"
          />
          <p className="text-center">🟩: ~198m² | 🟦: ~43m² | 🟥: ~67m²</p>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`
          absolute top-1/2 transform -translate-y-1/2 
          z-10 cursor-pointer w-8 h-8 bg-purple-bold/60 
          rounded-sm ${
        props.left ? "left-2 md:left-25" : "right-2 md:right-25"
      } ${disabled}`}
    >
      {props.left && <Icon className="fill-white" svg={Arrow_Left} />}
      {!props.left && <Icon className="fill-white" svg={Arrow_Right} />}
    </svg>
  );
}
