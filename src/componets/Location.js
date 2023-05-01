import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";


const data = [
    {location:"Hyderabad",venue_count:388,image:'https://www.weddingwire.in/assets/img/listing-city/in-hyderabad-10011133.jpg'},
    {location:"Bangalore",venue_count:703,image:'https://www.weddingwire.in/assets/img/listing-city/in-bangalore-10010527.jpg'},
    {location:"Mumbai",venue_count:849,image:'https://www.weddingwire.in/assets/img/listing-city/in-mumbai-10010749.jpg'},
    {location:"Chennai",venue_count:308,image:'https://www.weddingwire.in/assets/img/listing-city/in-chennai-10011065.jpg'},
    {location:"Delhi NCR",venue_count:1773,image:'https://www.weddingwire.in/assets/img/listing-city/in-delhi-ncr-9635.jpg'},
    {location:"Lucknow",venue_count:418,image:'https://www.weddingwire.in/assets/img/listing-city/in-lucknow-10011289.jpg'},
    {location:"Kolkata",venue_count:239,image:'https://www.weddingwire.in/assets/img/listing-city/in-kolkata-10011387.jpg'},
    {location:"Ahmedabad",venue_count:253,image:'https://www.weddingwire.in/assets/img/listing-city/in-ahmedabad-10010307.jpg'},
    {location:"Indore",venue_count:54,image:'https://www.weddingwire.in/assets/img/listing-city/in-indore-10010657.jpg'},
    {location:"Patna",venue_count:112,image:'https://www.weddingwire.in/assets/img/listing-city/in-patna-10010185.jpg'},
    {location:"Gurgaon",venue_count:305,image:'https://www.weddingwire.in/assets/img/listing-city/in-gurgaon-10010293.jpg'},
    {location:"Agra",venue_count:119,image:'https://www.weddingwire.in/assets/img/listing-city/in-agra-10011197.jpg'},
]  
function Location() {
    return (
        <div style={{paddingBottom:'3rem'}}>
            <Grid sx={{marginTop:'5%'}}>
              <Typography variant='h5'sx={{mb:'1.5rem',fontWeight:'700',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif'}}>Venues by region</Typography>

        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                425: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }

            }}
          >
            <Stack direction="row" spacing={2}>
                {data.map((item,index) =>(

              <SwiperSlide className="avararalign">
                  <Avatar
        // alt="Remy Sharp"
        src={item.image}
        sx={{ width:'145px', height: '145px',}}
      />
      <Typography  sx={{textAlign:'center',fontSize:'1.125rem',objectFit:'cover',":hover":{
          color:'red',
          transition:'transform .3s',
          backfaceVisibility:'visible'
      }}}>{item.location}</Typography>
      <Typography sx={{textAlign:'center',color:'grey'}} variant='caption'>{item.venue_count}venues</Typography>
      </SwiperSlide>
                ))}

            </Stack>
          </Swiper>
          </Grid> 
        </div>
    )
}

export default Location
