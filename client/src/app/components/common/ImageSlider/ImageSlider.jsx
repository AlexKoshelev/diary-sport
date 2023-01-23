import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/keyboard";
import "swiper/css/effect-cube";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
  EffectCube,
} from "swiper";

SwiperCore.use([Keyboard, Mousewheel]);
const ImageSlider = ({ className, slides, ...rest }) => {
  return (
    <div className="imageSlider__container">
      {slides ? (
        <Swiper
          modules={[Autoplay, Pagination, Navigation, Keyboard, EffectCube]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          className="mySwiper"
          effect={"cube"}
          cubeEffect={
            {
              /*  slideShadows: true, */
              /*  shadow: true, */
              /*  shadowOffset: true, */
              /*   shadowScale: true, */
            }
          }
          mousewheel={true}
          loop={true}
          {...rest}
        >
          {slides.map((slide) => (
            <SwiperSlide>
              <img
                key={`${slide}`}
                style={{ width: "350px", height: "400px" }}
                src={slide}
                alt="картинка тренируется"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        "Загрузка"
      )}
    </div>
  );
};

ImageSlider.defaultProps = {
  pagination: true,
};

ImageSlider.propTypes = {
  /*  items: PropTypes.array.isRequired, */
  className: PropTypes.string,
  pagination: PropTypes.bool.isRequired,
};

export default ImageSlider;
