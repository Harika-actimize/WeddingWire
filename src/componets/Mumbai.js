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
import { useNavigate,useLocation, useParams } from 'react-router-dom';
import { BridalMakeupArtists, WeddingCatering, WeddingInvitations, WeddingPhotography, WeddingPlanners, WeddingVenues, WeddingDecorator } from "./modalData";


export default function Mumbai() {
  const navigate = useNavigate()
  const param = useParams()
  const token = useSelector((state) => state.userData.activeuser) 
  const innerpagedata = useSelector((state) => state.homepagedata.data);
  const [data, setData] = useState([])
  const goTonavigate = (id) => {
    if(token){
      document.getElementById("white_icons-"+id).style.display = "none";
      document.getElementById("red_icon-"+id).style.display = "block";
    }
    else{
      navigate("/login")
    }
  }
  const goToWhiteHeart =(id) =>{
    document.getElementById("white_icons-"+id).style.display = "block";
    document.getElementById("red_icon-"+id).style.display = "none";
  }

  useEffect(()=>{
    let data = innerpagedata.filter(item=>item.sub_category_name.toLowerCase() === param.sub_category_name.toLowerCase())
    if(param.location){
      data = data.filter(item=>item.cityname.toLowerCase() === param.location.toLowerCase())
    }
    setData(data)
  },[innerpagedata])
  
  return (
    <>
      <Grid sx={{ display: 'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap' }}>
        {data.map((item) => {
return(
          <Card style={{ maxWidth: 250,margin:'15px 15px 15px 0'}} className="rescard" key={item.id}>
            <Swiper
              spaceBetween={1}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
              style={{margin:0,}}
            >
              {item.images.map((img) => (
                <SwiperSlide key={img}>
                  <img height='100%' width='100%' style={{objectFit:'cover',display:'block'}}  src={img}></img>
                  <Icon id={"white_icons-"+item.id} onClick={()=>goTonavigate(item.id)} style={{position: 'absolute',
													color: 'white',
													top: 12,
													right: '5%',
													padding:'0px 8px',
                          							cursor:'pointer',
													transform: 'translateX(-50%)'}} height='22' width='22' icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
												<Icon id={"red_icon-"+item.id}
												onClick={()=>goToWhiteHeart(item.id)}
												style={{position: 'absolute',
												// color: 'red',
												top: 12,
												right: '5%',
												padding:'0px 8px',
												display:'none',
												  cursor:'pointer',
												transform: 'translateX(-50%)'}}
												 height='22' width='22'  icon="noto:red-heart"/>                </SwiperSlide>
              ))}
            </Swiper>
            <Typography sx={{ fontSize: '15px', lineHeight: '27px', marginLeft: '15px', marginBottom: '5px' }}>{item.name}</Typography>
           <Typography></Typography>
            <Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '5px' }}>
              <StarIcon sx={{ color: '#fabb00', fontSize: '18px' }}></StarIcon><Typography variant='caption' >{item.star_rating}</Typography>
              <Typography variant='caption' noWrap>{item.area},{item.cityname}</Typography>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '15px' }}>
              {/* <BrunchDiningOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }}></BrunchDiningOutlinedIcon> */}
              {/* <Icon icon="streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking" /> */}
              {/* <Typography variant='caption' >from ₹ {item.food}</Typography> */}
              {/* <PeopleAltOutlinedIcon sx={{ fontSize: '18px', marginRight: '5px' }}></PeopleAltOutlinedIcon> */}
              {(item.sub_category_name.toLowerCase() === WeddingDecorator.toLowerCase()||item.sub_category_name.toLowerCase() === WeddingInvitations.toLowerCase()||item.sub_category_name.toLowerCase() === BridalMakeupArtists.toLowerCase()||item.sub_category_name.toLowerCase() === WeddingPlanners.toLowerCase()||item.sub_category_name.toLowerCase() === WeddingPhotography.toLowerCase())&&
												<Box>
                        <Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}><Icon icon="bi:database-fill" /> from ₹{item.features.package_amount}</Typography></Box>}
												{(item.sub_category_name.toLowerCase() === WeddingVenues.toLowerCase()||item.sub_category_name.toLowerCase() === WeddingCatering.toLowerCase())&&
												 
                          
                        <Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}><Icon icon="streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking" />
                        from ₹{item.features.plate_price}  <Icon icon="majesticons:users-line" />  {item.features.number_of_guests}</Typography>}           
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

