import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
// import Image from "mui-image";
import Box from "@mui/material/Box";
import ActionAreaCard from "./ActionAreaCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";

// Slide Images
import mural from "assets/images/carousel/mural.png";
import rollPrint from "assets/images/carousel/rollPrint.png";
import framed from "assets/images/carousel/framed.png";
import crossTriSplitCanvas from "assets/images/carousel/crossTriSplitCanvas.png";
import splitCanvas from "assets/images/carousel/splitCanvas.png";
import triSplitCanvas from "assets/images/carousel/triSplitCanvas.png";
import stretchedCanvas from "assets/images/carousel/stretchedCanvas.png";
import woodPrint from "assets/images/carousel/woodPrint.png";
import acrylic from "assets/images/carousel/acrylic.png";

const Carousel = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      autoplay={true}
      speed={4000}
      loop={true}
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
          // slidesPerView: 1, // small screens
          centeredSlides: true,
          // spaceBetween: 10,
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
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Wall Mural"
            desc="Our wall murals are produced on printers with Outstanding photographic print quality & durability Extreme image resolution : photographic image quality with the largest color gamut in its class."
            imageUrl={mural}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Giclée Roll Print  "
            desc="Printed on Fine Art Matte Canvas Paper, Photo Satin Paper - ( Poster ) or Premium Archival Matte Paper with a smooth texture & neutral-white - Provided inside a Strong mailing tube."
            imageUrl={rollPrint}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Framed Print"
            desc="Fully customizable - at the exact size you want. Select paper type, glass, matte and decorating frame."
            imageUrl={framed}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Cross Triptych Split Canvas"
            desc="All our stretched Canvas are custom made on a Premium Fine Art Matte Canvas 410g/m2 1.5 Inch Thick wood for a real gallery look       
Giclee printing with Pigment ink designed to meet galleries and museum longevity requirements and ensure consistency of shades 200 years old."
            imageUrl={crossTriSplitCanvas}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Split Canvas"
            desc="All our stretched Canvas are custom made on a Premium Fine Art Matte Canvas 410g/m2 1.5 Inch Thick wood for a real gallery look       
Giclee printing with Pigment ink designed to meet galleries and museum longevity requirements and ensure consistency of shades 200 years old."
            imageUrl={splitCanvas}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Triptych Split Canvas"
            desc="Also available in Acrylic, Brushed Metal, GH Metal and wood."
            imageUrl={triSplitCanvas}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Stretched Canvas"
            desc="All our stretched Canvas are custom made on a Premium Fine Art Matte Canvas 410g/m2 1.5 Inch Thick wood for a real gallery look       
Giclee printing with Pigment ink designed to meet galleries and museum longevity requirements and ensure consistency of shades 200 years old."
            imageUrl={stretchedCanvas}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Wood Print with Black Frame Mount"
            desc="Printed with UV cured inks providing an incredible high quality printed image which is scratch resistant with colors that will not fade over time."
            imageUrl={woodPrint}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Acrylic Print with Standoff"
            desc="Get a Modern piece of art with this vibrant Acrylic Print. Fine Art made from a Premium polished, best-in-class, 99.9% optically pure acrylic and the latest Flatbed printing craftmanship. "
            imageUrl={acrylic}
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
