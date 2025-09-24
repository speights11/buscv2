import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
// import Image from "mui-image";
import Box from "@mui/material/Box";
import ActionAreaCard from "./ActionAreaCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/navigation";
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
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
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
      modules={[EffectCoverflow, Navigation]}
    >
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Wall Mural"
            desc="Our wall murals are produced on printers with Outstanding photographic print quality & durability Extreme image resolution : photographic image quality with the largest color gamut in its class."
            imageUrl={mural}
            salesUrl="https://www.pictorem.com/2457392/echoes-of-tradition/?iframe=1"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Giclée Roll Print  "
            desc="Printed on Fine Art Matte Canvas Paper, Photo Satin Paper - ( Poster ) or Premium Archival Matte Paper with a smooth texture & neutral-white - Provided inside a Strong mailing tube."
            imageUrl={rollPrint}
            salesUrl="https://www.pictorem.com/2281469/her-highness/?iframe=1"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Framed Print"
            desc="Fully customizable - at the exact size you want. Select paper type, glass, matte and decorating frame."
            imageUrl={framed}
            salesUrl="https://www.pictorem.com/1936515/rapids/?iframe=1"
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
            salesUrl="https://www.pictorem.com/1936460/bark/?iframe=1"
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
            salesUrl="https://www.pictorem.com/912466/sisters-garden/?iframe=1"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Triptych Split Canvas"
            desc="Also available in Acrylic, Brushed Metal, GH Metal and wood."
            imageUrl={triSplitCanvas}
            salesUrl="https://www.pictorem.com/1937191/majestic-2/?iframe=1"
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
            salesUrl="https://www.pictorem.com/1983567/joined/?iframe=1"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Wood Print with Black Frame Mount"
            desc="Printed with UV cured inks providing an incredible high quality printed image which is scratch resistant with colors that will not fade over time."
            imageUrl={woodPrint}
            salesUrl="https://www.pictorem.com/912451/ticking-time/?iframe=1"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <ActionAreaCard
            title="Acrylic Print with Standoff"
            desc="Get a Modern piece of art with this vibrant Acrylic Print. Fine Art made from a Premium polished, best-in-class, 99.9% optically pure acrylic and the latest Flatbed printing craftmanship. "
            imageUrl={acrylic}
            salesUrl="https://www.pictorem.com/912487/scanners/?iframe=1"
          />
        </Box>
      </SwiperSlide>
      {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}
    </Swiper>
  );
};

export default Carousel;
