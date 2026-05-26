import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { carouselList } from "../utils/lists";
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
    <div className="relative w-full overflow-hidden group">
      <div ref={slideRef} className="keen-slider w-full">
        <DetailListCarousel details={carouselList} />
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
  const disabled = props.disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:scale-105 hover:bg-slate-200 active:scale-95 transition-transform duration-200";
  return (
    <button
      onClick={props.onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 bg-white text-zinc-800 rounded-full shadow-lg transition-all ${
        props.left ? "left-4" : "right-4"
      } ${disabled}`}
    >
      <Icon
        className="w-6 h-6 fill-current"
        svg={props.left ? Arrow_Left : Arrow_Right}
      />
    </button>
  );
}

function DetailListCarousel({
  details,
}: {
  details: { svg: string; alt: string; desc: string }[];
}) {
  return (
    <>
      {details.map((detail, index) => (
        <div
          key={index}
          className="keen-slider__slide relative flex flex-col items-center bg-slate-50 rounded-xl overflow-hidden border border-slate-50"
        >
          <img
            className="w-full h-[300px] md:h-[450px] object-contain p-2.5 md:p-4 mb-2"
            src={detail.svg}
            alt={detail.alt}
          />
         
          <div className="absolute bottom-0 w-full p-1 md:p-6 text-indigo-600 md:text-white">
            <p className="text-center text-base md:text-lg font-medium tracking-wide drop-shadow-md">
              {detail.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
