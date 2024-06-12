import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

// Slide Images
import slideImg1 from "assets/images/carousel/slide1.png";
import slideImg2 from "assets/images/carousel/slide2.png";
import slideImg3 from "assets/images/carousel/slide3.png";
import slideImg4 from "assets/images/carousel/slide4.png";
import slideImg5 from "assets/images/carousel/slide5.png";
import slideImg6 from "assets/images/carousel/slide6.png";
import slideImg7 from "assets/images/carousel/slide7b.png";
import slideImg8 from "assets/images/carousel/slide8b.png";
import slideImg9 from "assets/images/carousel/slide9.png";
import slideImg10 from "assets/images/carousel/slide10.png";
import slideImg11 from "assets/images/carousel/slide11.png";
import slideImg12 from "assets/images/carousel/slide12.png";

const Carousel = (props) => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      autoplay={true}
      speed={800}
      effect={"coverflow"}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
    >
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg1} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg2} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg3} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg4} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg5} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg6} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg7} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg8} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg9} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg10} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg11} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <img src={slideImg12} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
