import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";

const data = [
  {location:"Before the wedding",venue_count:388,image:'../avatar.jpg'},
  {location:"The wedding ceremony",venue_count:703,image:'../avatar1.jpg'},
  {location:"The wedding banquet",venue_count:849,image:'../avatar2.jpg'},
  {location:"The services for your wedding",venue_count:308,image:'../avatar3.jpg'},
  {location:"Wedding fashion",venue_count:1773,image:'../avatar4.jpg'},
  {location:"Health and beauty",venue_count:418,image:'../avatar5.jpg'},
]

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
            {data.map((item,index) =>(
              <SwiperSlide>
                  <Avatar
         className="avatarimage"
        src={item.image}
        sx={{ width: 100, height: 100,":hover":{
          transform: 'scale(1.0)',
      }}}
      />
      <Typography>{item.location}</Typography> 
      </SwiperSlide>       
              ))}
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
