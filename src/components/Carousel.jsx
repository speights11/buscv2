/* eslint-disable */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "mui-image";
import Box from "@mui/material/Box";

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
      spaceBetween={50}
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
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1, // small screens
          spaceBetween: 0,
        },
        // when window width is >= 1500px
        1500: {
          slidesPerView: 3, //  large screens
          spaceBetween: 40,
        },
      }}
      modules={[EffectCoverflow]}
    >
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg1} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg2} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg3} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg4} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg5} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg6} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg7} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg8} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg9} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg10} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg11} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ width: "90%", height: "70vmin" }}
        >
          <Image fit="contain" src={slideImg12} />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
