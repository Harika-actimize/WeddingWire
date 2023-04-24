import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";


function WeddingAvatar() {
    return (
        <div>
      <Grid container spacing={2} columns={20} sx={{ mt: '5px' }}>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={16} sx={{ marginLeft: '10px',textAlign:'-webkit-center' }}>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 10,
              }

            }}
          >

            <Stack direction="row" spacing={2} sx={{}}>
              <SwiperSlide>
                  <Avatar
        // alt="Remy Sharp"
        src="../avatar.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography>Before the wedding</Typography>
      </SwiperSlide>
              <SwiperSlide><Avatar
        // alt="Remy Sharp"
        src="../avatar1.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography>The wedding ceremony</Typography>
      </SwiperSlide>
              <SwiperSlide><Avatar
        // alt="Remy Sharp"
        src="../avatar2.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography>The wedding banquet</Typography>
      </SwiperSlide>
              <SwiperSlide><Avatar
        // alt="Remy Sharp"
        src="../avatar3.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography>The services for your wedding</Typography>
      </SwiperSlide>
              <SwiperSlide><Avatar
        // alt="Remy Sharp"
        src="../avatar4.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography>Wedding fashion</Typography>
      </SwiperSlide>
              <SwiperSlide><Avatar
        // alt="Remy Sharp"
        src="../avatar5.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography>Health and beauty</Typography>
      </SwiperSlide>
              

            </Stack>
          </Swiper>
        </Grid>
        <Grid item xs={2}>

        </Grid>
      </Grid>

        </div>
    )
}

export default WeddingAvatar
