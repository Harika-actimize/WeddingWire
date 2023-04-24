import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { Card } from "@material-ui/core";
import { Grid } from "@mui/material";

export default function Mumbai() {
  return (
    <>
    <Grid sx={{display:'flex'}}>
   <Card style={{ maxWidth: 345 }}>
      <Swiper
        spaceBetween={1}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn0.weddingwire.in/vendor/6578/3_2/320/jpg/solitaire_15_6578-163480366317861.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn0.weddingwire.in/vendor/6578/3_2/320/jpg/venue-img-copy_15_6578-163515944374863.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn0.weddingwire.in/vendor/6578/3_2/320/jpg/swimming-2_15_6578-163480627145453.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn0.weddingwire.in/vendor/6578/3_2/320/jpg/2_15_6578-163480325359852.webp" />
        </SwiperSlide>
      </Swiper>
      </Card>
            </Grid>
    </>
  );
}
