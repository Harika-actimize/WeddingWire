
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Grid ,useMediaQuery} from "@mui/material";
import { useNavigate,useParams} from 'react-router-dom'
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "../App.css"
import { BridalMakeupArtists, WeddingCatering, WeddingDecorator, WeddingInvitations, WeddingPhotography, WeddingPlanners, WeddingVenues } from './modalData';
import { useTheme } from "@mui/system";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DirectionStack() {
  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const CustomButton = styled(Button)({
  textTransform:'none', paddingLeft:'12px',paddingRight:'12px',color:'black',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9',width:'100%',margin:'5px 10px'

  //   '&:hover': { backgroundColor: 'pink' },
  //  height: '35px',
  //  color: '#fff',
  //  borderRadius: '8px',
  //  fontSize: '14px',
  //  fontWeight: 600,
  //  lineHeight: '20px',
  //  padding: '10px', 
  //  textTransform: 'none',
  //  backgroundColor: '#ea4c89',
});
const navigate = useNavigate()
const param = useParams()
const goToVenues = (val) => {
  navigate(`venues/${val}`);

};
const goTo = (category) =>{
  navigate(`/${category}`)
}
  return (
    <div>
      <Grid container spacing={5} columns={20} sx={{ mt: '5px' }}>
        <Grid item xs={2}>

        </Grid>
        { matches ?
          <Grid item xs={20}>
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
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 0,
              }

            }}
          >
<Stack direction="row" spacing={2} >
<SwiperSlide><Button onClick={()=>goToVenues(WeddingVenues)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Venues</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingPhotography)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Photographers</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingPlanners)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Planners</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(BridalMakeupArtists)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Bridal Makeup Artists</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingDecorator)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Decorators</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingCatering)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Caterers</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingInvitations)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Invitations</Button></SwiperSlide>
</Stack>
</Swiper>
        </Grid>:
        <Grid item xs={16}>
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
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 0,
            }

          }}
        >
<Stack direction="row" spacing={2} >
<SwiperSlide><Button onClick={()=>goToVenues(WeddingVenues)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Venues</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingPhotography)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Photographers</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingPlanners)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Planners</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(BridalMakeupArtists)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Bridal Makeup Artists</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingDecorator)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Decorators</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingCatering)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Caterers</Button></SwiperSlide>
<SwiperSlide><Button onClick={()=>goTo(WeddingInvitations)} sx={{textTransform:'none', paddingLeft:'12px',paddingRight:'12px',width:'auto',color:'black',borderColor:'grey',transition:'all .15s',cursor:'pointer',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',padding:'.69rem 1rem',borderRadius:'.5rem',backgroundColor:'transparent',border:'1px solid #d9d9d9'}}>Wedding Invitations</Button></SwiperSlide>
</Stack>
</Swiper>
      </Grid>}
        <Grid item xs={2}>
        </Grid>
      </Grid>
          </div>
  );
}