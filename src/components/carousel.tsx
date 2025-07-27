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
    <div className="relative w-full max-w-full flex flex-col items-center justify-center">
      <div ref={slideRef} className="keen-slider w-full max-w-full">
        <DetailListCarousel details={carouselList}/>
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
        props.left ? "left-2" : "right-2"
      } ${disabled}`}
    >
      {props.left && <Icon className="fill-white" svg={Arrow_Left} />}
      {!props.left && <Icon className="fill-white" svg={Arrow_Right} />}
    </svg>
  );
}
interface DetailCarousel {
  svg: string
  alt: string
  desc: string
}

interface DetailCarouselProps{
  details: DetailCarousel[]
}
function DetailListCarousel({
  details
}:DetailCarouselProps){

  return(
    <>{details.map((detail, index) => (
    <div key={index} className="keen-slider__slide number-slide1 flex flex-col items-center">
      <img
        className="h-auto object-cover mx-auto w-full md:min-w-[450px]"
        src={detail.svg}
        alt={detail.alt}
      />
      <p className="text-center">{detail.desc}</p>
    </div>))}</>
  )
}
