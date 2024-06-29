import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SiwperSlideBtn.css";
import { useSwiper } from "swiper/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SiwperSlideBtn = () => {
  const swiperslide = useSwiper();

  return (
    <div className="SiwperSlideBtn">
      <button
        className="SiwperSlideBtn-prev"
        onClick={() => swiperslide.slidePrev()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className="SiwperSlideBtn-next"
        onClick={() => swiperslide.slideNext()}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default SiwperSlideBtn;
