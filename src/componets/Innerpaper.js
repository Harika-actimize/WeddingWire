import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Grid ,Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "../App.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Innerpaper() {
    return (
        <div>
         <Grid item xs={16}>
         <Typography variant='h5'sx={{mb:'1.5rem',fontWeight:'700',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif'}}>We've got every type of venue to make your unique wedding a reality
</Typography>
          <Swiper
          id="sample"
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 0,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 0,
              }

            }}
          >
<Stack direction="row" spacing={2} >
<SwiperSlide><Button className='innerbtn' sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Banquet Halls</Button></SwiperSlide>
<SwiperSlide><Button className='innerbtn' sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Hotels</Button></SwiperSlide>
<SwiperSlide><Button sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Marriage Garden</Button></SwiperSlide>
<SwiperSlide><Button sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Kalyana Mandapams
</Button></SwiperSlide>
<SwiperSlide><Button sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Resorts
</Button></SwiperSlide>
<SwiperSlide><Button sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Lawns and Farmhouses</Button></SwiperSlide>
</Stack>


                     </Swiper>
        </Grid>
        </div>
    )
}

export default Innerpaper
