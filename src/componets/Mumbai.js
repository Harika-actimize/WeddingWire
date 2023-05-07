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
import { Grid, Typography,Box,Button } from "@mui/material";
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarIcon from '@mui/icons-material/Star';
import '../App.css'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInnerPageInitiate } from '../redux/actions/innerpageActions';


export default function Mumbai() {
 const innerpagedata = useSelector((state) => state.innerpagedata.data?.data);
 console.log("ppppppppppppp",innerpagedata)
 const dispatch = useDispatch();

 useEffect(() => {
  // alert("homepage ui");
  dispatch(getInnerPageInitiate());
}, []);
console.log(">>>>>>>>>>>>>>>>>>>>>>>",innerpagedata)
const getData = [];
	for (let key in innerpagedata) {

		getData.push({ id: key, ...innerpagedata[key] });
	}
	console.log('getData', getData);
  
  return (
    <>
      <Grid sx={{ display: 'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap' }}>
        {getData.map((item) => {
return(
          <Card style={{ maxWidth: 300,margin:'15px 15px 15px 0' }} className="rescard" key={item.id}>
            <Swiper
              spaceBetween={1}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
              style={{margin:0}}
            >
              {item.images.map((img) => (
                <SwiperSlide key={img}>
                  <img height='100%' width='100%' style={{objectFit:'cover',display:'block'}}  src={img}></img>
<Icon style={{position: 'absolute',
													color: 'white',
													top: 12,
													right: '5%',
													padding:'0px 8px',
                          cursor:'pointer',
													transform: 'translateX(-50%)'}} height='22' width='22' icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Typography sx={{ fontSize: '15px', lineHeight: '27px', marginLeft: '15px', marginBottom: '5px' }}>{item.name}</Typography>
           <Typography></Typography>
            <Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '5px' }}>
              <StarIcon sx={{ color: '#fabb00', fontSize: '18px' }}></StarIcon><Typography variant='caption' >{item.rateing}</Typography>
              <Typography variant='caption'>{item.address}</Typography>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '15px' }}>
              <BrunchDiningOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }}></BrunchDiningOutlinedIcon><Typography variant='caption' >from ₹ {item.price}</Typography>
              <PeopleAltOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }}></PeopleAltOutlinedIcon>
              <Typography variant='caption'  >{item.number_of_guests}</Typography>
            </Box>
            <Button sx={{
              ":hover": {
                color: '#fff',
                backgroundColor: "#ff0000",
            },
              transition: 'border-color .15s',
    borderRadius:' .5rem',
    border: '1px solid #ff0000',
    backgroundColor:' #fff',
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    padding: '0 2rem',
    cursor: 'pointer',
    lineHeight: 'normal',
    borderColor: '#ff0000',
    color:'#ff0000',
    textTransform:'none',
    width:'90%',
    margin:'5%',
    
    }}>
        Request pricing
        </Button>
          </Card>

        )}
        )}
      </Grid>
    </>
  );
}

